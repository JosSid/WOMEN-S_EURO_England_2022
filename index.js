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

function matchDaysScore(scheduleGroup) {
    const scoreBoardGroup = []
    for(let i = 0; i < scheduleGroup.length ; i++) {
        const scoreboardMatch1 = score(scheduleGroup[i][0])
        const scoreboardMatch2 = score(scheduleGroup[i][1])
        const matchDaysScore1 = [scheduleGroup[i][0],scoreboardMatch1[0], scoreboardMatch1[1], scheduleGroup[i][0]]
        const matchDaysScore2 = [scheduleGroup[i][1],scoreboardMatch2[0], scoreboardMatch2[1], scheduleGroup[i][1]]
        scoreBoardGroup.push([matchDaysScore1, matchDaysScore2])
    }
    return scoreBoardGroup
}

function score(teams) {
    const scoreBoard = []
    for (let team in teams) {
        let goals = Math.random()
        goals = goals * 7
        goals = Math.floor(goals)
        scoreBoard.push(goals)
    }
    return scoreBoard

    
}



const scoreBoardGroupA = matchDaysScore(scheduleGroupA)
console.log(scoreBoardGroupA)

const scoreBoardGroupB = matchDaysScore(scheduleGroupB)
console.log(scoreBoardGroupB)

const scoreBoardGroupC = matchDaysScore(scheduleGroupC)
console.log(scoreBoardGroupC)

const scoreBoardGroupD = matchDaysScore(scheduleGroupD)
console.log(scoreBoardGroupD)


