// CURRENTLY NOT USED, использовалась в HAND-COMP
function border_for_hand(card, index) {
    if (card.color === 'Bronze') return {'border': 'solid 1px lightsalmon', 'z-index': 6 - index}
    else if (card.color === 'Silver') return {'border': 'solid 3px silver', 'z-index': 6 - index}
    else if (card.color === 'Gold') return {'border': 'solid 3px gold', 'z-index': 6 - index}
    else return {}
}


function border_for_hand_2(hand, card) {
    if (hand.length === 6) {
        if (!card.damages_enemy) {
            if (card.color === 'Bronze') return {'border': 'solid 1px lightsalmon',
                'float': 'right', 'margin-left': '-12%', 'margin-right': '0.2%'}
            else if (card.color === 'Silver') return {'border': 'solid 3px silver',
                'float': 'right', 'margin-left': '-12%', 'margin-right': '0.2%'}
            else if (card.color === 'Gold') return {'border': 'solid 3px gold',
                'float': 'right', 'margin-left': '-12%', 'margin-right': '0.2%'}
            else return {}
        }
        else return {'border': 'solid 3px lime', 'float': 'right', 'margin-left': '-12%', 'margin-right': '0.2%'}
    }
    if (hand.length === 5) {
        if (!card.damages_enemy) {
            if (card.color === 'Bronze') return {'border': 'solid 1px lightsalmon',
                'float': 'right', 'margin-left': '-9%', 'margin-right': '0.8%'}
            else if (card.color === 'Silver') return {'border': 'solid 3px silver',
                'float': 'right', 'margin-left': '-9%', 'margin-right': '0.8%'}
            else if (card.color === 'Gold') return {'border': 'solid 3px gold',
                'float': 'right', 'margin-left': '-9%', 'margin-right': '0.8%' }
            else return {}
        }
        else return {'border': 'solid 3px lime', 'float': 'right', 'margin-left': '-9%', 'margin-right': '0.8%'}
    }

    if (hand.length === 4) {
        if (!card.damages_enemy) {
            if (card.color === 'Bronze') return {'border': 'solid 1px lightsalmon',
                'float': 'right', 'margin-left': '-2%'}
            else if (card.color === 'Silver') return {'border': 'solid 3px silver',
                'float': 'right', 'margin-left': '-2%'}
            else if (card.color === 'Gold') return {'border': 'solid 3px gold',
                'float': 'right', 'margin-left': '-2%' }
            else return {}
        }
        else return {'border': 'solid 3px lime', 'float': 'right', 'margin-left': '-2%'}
    }

    else if (hand.length === 3) {
        if (!card.damages_enemy) {
            if (card.color === 'Bronze') return {'border': 'solid 1px lightsalmon',
                'float': 'right', 'margin-right': '5%'}
            else if (card.color === 'Silver') return {'border': 'solid 3px silver',
                'float': 'right', 'margin-right': '5%'}
            else if (card.color === 'Gold') return {'border': 'solid 3px gold',
                'float': 'right', 'margin-right': '5%' }
            else return {}
        }
        else return {'border': 'solid 3px lime', 'float': 'right', 'margin-right': '5%'}
    }

    else if (hand.length === 2) {
        if (!card.damages_enemy) {
            if (card.color === 'Bronze') return {'border': 'solid 1px lightsalmon',
                'float': 'right', 'margin-right': '15%'}
            else if (card.color === 'Silver') return {'border': 'solid 3px silver',
                'float': 'right', 'margin-right': '15%'}
            else if (card.color === 'Gold') return {'border': 'solid 3px gold',
                'float': 'right', 'margin-right': '15%' }
            else return {}
        }
        else return {'border': 'solid 3px lime', 'float': 'right', 'margin-right': '15%'}
    }

    else if (hand.length === 1) {
        if (!card.damages_enemy) {
            if (card.color === 'Bronze') return {'border': 'solid 1px lightsalmon',
                'float': 'right', 'margin-right': '35%'}
            else if (card.color === 'Silver') return {'border': 'solid 3px silver',
                'float': 'right', 'margin-right': '35%'}
            else if (card.color === 'Gold') return {'border': 'solid 3px gold',
                'float': 'right', 'margin-right': '35%' }
            else return {}
        }
        else return {'border': 'solid 3px lime', 'float': 'right', 'margin-right': '35%'}
    }
}


function border_for_card(card) {
    if (card.damages_player) return {'border': 'outset 4px red'}
    else {
        if (card.color === 'Bronze') return {'border': 'solid 1px lightsalmon'}
        else if (card.color === 'Silver') return {'border': 'solid 3px silver'}
        else if (card.color === 'Gold') return {'border': 'solid 3px gold'}
        else return {}
    }
}


function border_leader(leader) {
    if (leader.faction === 'Soldiers') return {'border': 'solid 3px blue'}
    else if (leader.faction === 'Monsters') return {'border': 'solid 3px red'}
    else if (leader.faction === 'Animals') return {'border': 'solid 3px green'}
    else return {}
}


// задний фон значка урона для всех карт и значка пассивок
function background_color(card) {
    if (card.faction === 'Soldiers') {
        if (card.color === 'Bronze') return {'backgroundColor': 'blue'}
        else if (card.color === 'Silver') {
            return {'backgroundColor': 'blue', 'border': 'solid 2px silver'}
        }
        else if (card.color === 'Gold') {
            return {'backgroundColor': 'blue', 'border': 'solid 2px gold'}
        }
        else return {'backgroundColor': 'blue'}  
    } 
          
    else if (card.faction === 'Monsters') {
        if (card.color === 'Bronze') return {'backgroundColor': 'red'}
        else if (card.color === 'Silver') {
            return {'backgroundColor': 'red', 'border': 'solid 2px silver'}
        }
        else if (card.color === 'Gold') {
            return {'backgroundColor': 'red', 'border': 'solid 2px gold'}
        }
        else return {'backgroundColor': 'red'}  
    }
    else if (card.faction === 'Animals') {
        if (card.color === 'Bronze') return {'backgroundColor': 'green'}
        else if (card.color === 'Silver') {
            return {'backgroundColor': 'green', 'border': 'solid 2px silver'}
        }
        else if (card.color === 'Gold') {
            return {'backgroundColor': 'green', 'border': 'solid 2px gold'}
        }
        else return {'backgroundColor': 'green'}  
    }

    else if (card.faction === 'Neutral') {
        if (card.color === 'Bronze') return {'backgroundColor': 'brown'}
        else if (card.color === 'Silver') {
            return {'backgroundColor': 'brown', 'border': 'solid 2px silver'}
        }
        else if (card.color === 'Gold') {
            return {'backgroundColor': 'brown', 'border': 'solid 2px gold'}
        }
        else return {'backgroundColor': 'brown'}
    }
    
    else return {}
}


function background_color_deck(deck) {
    if (deck.leader.faction === 'Soldiers') return {'backgroundColor': 'blue'}
    else if (deck.leader.faction === 'Monsters') return {'backgroundColor': 'red'}
    else if (deck.leader.faction === 'Animals') return {'backgroundColor': 'green'}
    else return {}
}


export { border_for_hand, border_for_card, border_leader, background_color, background_color_deck, border_for_hand_2 }
