import { useToast } from 'vue-toastification'

const toast = useToast()


function if_in_grave_increase_self_damage(card) {
    card.damage += 1
    toast.info(`Карта ${card.name} увеличила урон, находясь в сбросе`)
}


export {if_in_grave_increase_self_damage}