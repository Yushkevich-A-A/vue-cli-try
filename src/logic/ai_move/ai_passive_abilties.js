import {passive_end_turn_increase_damage} from "@/logic/ai_move/passive_abilities/increase_damage"
import {passive_end_turn_heal} from "@/logic/ai_move/passive_abilities/heal"
import {passive_end_turn_heal_leader} from "@/logic/ai_move/passive_abilities/heal_leader"


function enemy_passive_abilities_end_turn(field, enemy_leader) {
  console.log(field.filter(e => e && e.passive))
  field.filter(e => e && e.passive).forEach(enemy => {

    if (enemy.passive_ability.name === 'increase-damage') {
      passive_end_turn_increase_damage(enemy)
    }

    else if (enemy.passive_ability.name === 'heal') {
      passive_end_turn_heal(enemy)
    }

    else if (enemy.passive_ability.name === 'heal-leader') {
      passive_end_turn_heal_leader(enemy, enemy_leader)
    }

  })
}


export {enemy_passive_abilities_end_turn}