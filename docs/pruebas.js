const team = {
  name: "Albalat",
  matchesPlayed: 0,
  matchesWon: 0,
  matchesDraw: 0,
  matchesLost: 0,
  points: 0,
  goalsFor: 0,
  goalsAgainst: 0,
  goalsDifference: 0,
};



//PRESENTACION DEL TORNEO

//Con esta funcion se presentan los equipos participantes del torneo y los partidos de cada jornada.

import { scheduleGroupA, scheduleGroupB, scheduleGroupC, scheduleGroupD } from "./matchDaysCreate.js";
import {teams, groupA, groupB, groupC, groupD} from "./groupsCreate.js";

/**
 * 
 * @param {'array de equipos'} group 
 */
function presentationGroups(group) {
  console.log('***UEFA WOMENS EURO CUP LONDON 2022***')
  console.log('')
  console.log('**********GRUPOS Y CALENDARIO*********')
  console.log('')
  for (let i = 0; i < teamsGroups.length ; i++ ) {
    console.log(`=======${titlesGroups[i]}=======`)
    console.log(`*******${teamsGroups[i][0]}*******`)
    console.log(`*******${teamsGroups[i][1]}*******`)
    console.log(`*******${teamsGroups[i][2]}*******`)
    console.log(`*******${teamsGroups[i][3]}*******`)
    console.log('')
    console.log('Match Day 1 :')
    console.log(`- ${teamsGroups[i][0]} VS ${teamsGroups[i][3]}`)
    console.log(`- ${teamsGroups[i][1]} VS ${teamsGroups[i][2]}`)
    console.log('')
    console.log('Match Day 2 :')
    console.log(`- ${teamsGroups[i][3]} VS ${teamsGroups[i][2]}`)
    console.log(`- ${teamsGroups[i][1]} VS ${teamsGroups[i][0]}`)
    console.log('')
    console.log('Match Day 3 :')
    console.log(`- ${teamsGroups[i][3]} VS ${teamsGroups[i][1]}`)
    console.log(`- ${teamsGroups[i][2]} VS ${teamsGroups[i][0]}`)
    console.log('')
  }
}

const titlesGroups = ['GROUP A', 'GROUP B', 'GROUP C', 'GROUP D']
const teamsGroups = [groupA, groupB, groupC, groupD]
presentationGroups(groupA)