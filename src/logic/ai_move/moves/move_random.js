import store from "@/store"
import { useToast } from 'vue-toastification'
import {check_lose} from "@/logic/ai_move/service/check_lose"

const toast = useToast()


function random_move(field, i) {
  let random = Math.floor(Math.random() * field.length)
  if (field[random]) {
    store.commit('change_health', -field[i].damage)
    toast.error(`враг c ${i} хотел прыгнуть на ${random} и нанёс урон ${field[i].damage}`)
    // console.log(`враг c ${i}, хотел на ${random}, а там враг`)
    check_lose(store.state.health)
  }
  else {
    console.log(`враг c ${i}, хотел на ${random}, и прыгнул`)
    field[i]['already_jumped'] = true  // он уже прыгнул, чтобы потом не прыгать ещё раз
    field[random] = field[i]  // враг прыгнул рандом клетку
    field[i] = ''
    toast.info(`враг прыгнул на клетку ${random}`)
  }
}


export { random_move }