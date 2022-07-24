import {groupA, groupB, groupC, groupD} from "./docs/groupsCreate.js"

import {presentationGroups} from "./docs/presentationTournament.js";

import teamsToObject from "./docs/teamsClass.js"
//Primero mostramos los grupos resultantes del sorteo y los enfrentamientos de cada jornada
presentationGroups()

const groupAObj = teamsToObject(groupA)
const groupBObj = teamsToObject(groupB)
const groupCObj = teamsToObject(groupC)
const groupDObj = teamsToObject(groupD)

/* console.log(groupAObj[0].stadistics.goalsAgainst, groupAObj[1].name, groupAObj[2].name, groupAObj[3].name)
console.log(groupBObj[0].name, groupBObj[1].name, groupBObj[2].name, groupBObj[3].name)
console.log(groupCObj[0].name, groupCObj[1].name, groupCObj[2].name, groupCObj[3].name)
console.log(groupDObj[0].name, groupDObj[1].name, groupDObj[2].name, groupDObj[3].name)
 */



