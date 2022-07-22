import {Team, teams, groupA, groupB, groupC, groupD,shuffleTeams} from "./shuffle_groups.js";

shuffleTeams()

//TODO: Crear jornadas

let round = []
function groupSchedule (group) {
    for(let i = 0; i < group.length - 1; i++ ) {
        let roundGroup = []
        roundGroup.push(group[i].name)
        for(let j = 0; j < group.length ; j++) {
            roundGroup.push(group[j].name)
            
        }return roundGroup
    } return round
}

groupSchedule(groupA)
groupSchedule(groupB)

console.log(round)

