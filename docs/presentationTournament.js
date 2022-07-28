//TERCERA PARTE DE LA PRACTICA

//PRESENTACION DEL TORNEO

//Con esta funcion se presentan los equipos participantes del torneo y los partidos de cada jornada.

import {groupA, groupB, groupC, groupD} from "./groupsCreate.js";

/**
 * 
 * @param {'array de grupos de equipos'} group 
 */
export function presentationGroups() {
  console.log('***UEFA WOMENS EURO CUP LONDON 2022***')
  console.log('')
  console.log('**********GROUPS AND SCHEDULE*********')
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

export const titlesGroups = ['GROUP A', 'GROUP B', 'GROUP C', 'GROUP D']
export const teamsGroups = [groupA, groupB, groupC, groupD]
