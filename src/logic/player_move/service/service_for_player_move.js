function remove_dead_enemies(field) {
  for (let i = 0; i < field.length; i++) {
    if (field[i].hp <= 0) {
      field[i] = ''
    }
  }
}


function remove_dead_card(card, grave, hand, deck) {
  if (card.charges === 0) {
    grave.push(card)  // поместили карту в кладбище

    // если такая карта есть в руке, удаляем её из руки, если есть в колоде - удаляем из колоды
    if (hand.indexOf(card) !== -1) {
      hand.splice(hand.indexOf(card), 1)
      // alert('удалили карту из руки')
    }
    else if (deck.indexOf(card) !== -1) {
      deck.splice(deck.indexOf(card), 1)
      // alert('удалили карту из колоды')
    }
  }
}


// собирает всех врагов на поле в один список + лидера врагов
function get_all_enemies(field, enemy_leader) {
  let enemy_list = []
  field.forEach(enemy => {
    if (enemy) {
      enemy_list.push(enemy)
    }
  })
  if (enemy_leader.hp > 0) enemy_list.push(enemy_leader)
  return enemy_list
}


// взять рандомного врага из всех врагов
function get_random_enemy(field, enemy_leader) {
  let enemies_list = get_all_enemies(field, enemy_leader)
  let random = Math.floor(Math.random() * enemies_list.length)
  return enemies_list[random]
}


export {
  remove_dead_enemies,
  remove_dead_card,
  get_all_enemies,
  get_random_enemy,
}