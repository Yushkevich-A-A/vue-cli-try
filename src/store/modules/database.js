import axios from "axios"
import { useToast } from 'vue-toastification'
import {all_enemies, all_enemy_leaders, user_database, user_resource} from "@/store/const/api_urls"

const toast = useToast()

const state = {
  factions: [{"name": "Neutral"}, {"name": "Soldiers"}, {"name": "Animals"}, {"name": "Monsters"}],
  leaders: [],
  cards: [],
  decks: [],
  levels: [],  // все уровни, из запроса
  resource: {},
  databaseLoaded: false,
  errorLoading: '',

  enemies: [],
  enemy_leaders: [],
}

const getters = {
  all_factions: state => state.factions,
  all_leaders: state => state.leaders,
  all_cards: state => state.cards,
  all_decks: state => state.decks,
  all_levels: state => state.levels,
  resource: state => state.resource,

  filtered_cards: state => (query, count) => {
    const applyFilter = (data, query) => data.filter(obj =>
      Object.entries(query).every(([prop, find]) => find.includes(obj.card[prop]))
    )
    if (count === undefined) return applyFilter(state.cards, query)
    else {
      if (count === 0) return applyFilter(state.cards.filter(card=>card.count === 0), query)
      else return applyFilter(state.cards.filter(card=>card.count >= count), query)
    }
  },
  filtered_leaders: (state) => (fac) => {
    return state.leaders.filter(f => f.card.faction===fac)
  },

  all_enemies: state => state.enemies,
  bronze_enemies: state => state.enemies.filter(e => e.color === "Bronze"),
  silver_enemies: state => state.enemies.filter(e => e.color === "Silver"),
  gold_enemies: state => state.enemies.filter(e => e.color === "Gold"),
  all_enemy_leaders: state => state.enemy_leaders,
}

const mutations = {
  set_leaders(state, result) {  // гет запрос на лидеров
    state.leaders = result
  },
  set_cards(state, result) {  // гет запрос на базу карт
    state.cards = result
  },
  set_decks(state, result) {  // гет запрос на сохранённые колоды
    state.decks = result
  },
  set_levels(state, result) {  // гет запрос уровни (а в них враги)
    state.levels = result
  },
  set_resource(state, result) {
    // {scraps, wood, kegs, big_kegs, chests}
    state.resource = result
  },

  set_databaseLoaded(state, payload) {
    state.databaseLoaded = payload
  },
  set_errorLoading(state, payload) {
    state.errorLoading = payload
  },

  set_enemies(state, payload) {
    state.enemies = payload
  },
  set_enemy_leaders(state, payload) {
    state.enemy_leaders = payload
  },
}

const actions = {
  async get_user_database({ commit, getters, dispatch }) {
    let user_id = getters["getUser"].user_id
    let header = getters['getHeader']
    const url = `${user_database}${user_id}`

    try {
      let response = await axios.get(url, header)
      commit('set_leaders', response.data.leaders)
      commit('set_cards', response.data.cards)

      commit('set_decks', response.data.u_d)
      dispatch('set_deck_in_play', response.data.u_d[0])

      commit('set_levels', response.data.levels)
      dispatch('set_level_in_play', response.data.levels[0])

      await dispatch("get_resource")
      await dispatch("get_enemies_for_random_level")

      commit('set_databaseLoaded', true)
      toast.success("Успешно загрузили всю вашу базу данных")
    } catch (err) {
      dispatch("error_action")
      throw new Error("Ошибка загрузки базы данных!")
    }
  },

  async get_resource({ commit, getters, dispatch }) {
    let header = getters['getHeader']
    let user_id = getters["getUser"].user_id
    const url = `${user_resource}${user_id}/`
    try {
      let response = await axios.get(url, header)
      commit('set_resource', response.data)
      toast.success("Успешно загрузили ресурсы")
      return true
    } catch (err) {
      dispatch("error_action", err)
      throw new Error("Ошибка при загрузке ресурсов")
    }
  },

  async get_enemies_for_random_level({ commit, getters, dispatch }) {
    let header = getters['getHeader']

    try {
      let response_e = await axios.get(all_enemies, header)
      let response_e_l = await axios.get(all_enemy_leaders, header)
      commit("set_enemies", response_e.data)
      commit("set_enemy_leaders", response_e_l.data)
      toast.success("Успешно загрузились враги для рандомных уровней")
    } catch (err) {
      dispatch("error_action", err)
      throw new Error("Ошибка при загрузке рандомных уровней")
    }
  },

  async get_cards() {
    let header = getters['getHeader']
  },
  async get_leaders() {
    let header = getters['getHeader']
  },
  async get_decks() {
    let header = getters['getHeader']
  },
  async get_levels() {
    let header = getters['getHeader']
  },

  error_action({ commit }, err) {
    commit("set_errorLoading", err.message)
    commit('set_databaseLoaded', false)
    toast.error("Произошла какая-то ошибка при загрузке вашей базы данных")
  },

  async render_all_images({ getters, commit }) {
    commit('set_images_rendered', false)
    const cards = getters['all_cards']
    const leaders = getters['all_leaders']
    const enemies = getters['all_enemies']
    const enemy_leaders = getters['all_enemy_leaders']

    const all_cards = cards.concat(leaders).concat(enemies).concat(enemy_leaders)
    if (all_cards.length === 0) {
      commit('set_images_rendered', true)
      return
    }

    toast.info("мы вообще тут")
    const images = all_cards.map(imageSrc => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = imageSrc.card ? imageSrc.card.image : imageSrc.image
        img.onload = resolve
        img.onerror = reject
      })
    })

    Promise.all(images).then(() => {
      console.log("Images loaded!")
      toast.success("Успешно отрендерили картинки")
      commit('set_images_rendered', true)
    }).catch(error => {
      console.error("Some image(s) failed loading!")
      console.error(error.message)
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}