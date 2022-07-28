import teamsToObject from "./docs/teamsClass.js"
import {groupA, groupB, groupC, groupD} from "./docs/groupsCreate.js"

import { scheduleGroupA, scheduleGroupB, scheduleGroupC, scheduleGroupD } from "./docs/matchDaysCreate.js"

const groupAObj = teamsToObject(groupA)
const groupBObj = teamsToObject(groupB)
const groupCObj = teamsToObject(groupC)
const groupDObj = teamsToObject(groupD)

function matchDaysScore(scheduleGroup) {
    const scoreBoardGroup = []
    for(let i = 0; i < scheduleGroup.length ; i++) {
        const scoreboardMatch1 = score(scheduleGroup[i][0])
        const scoreboardMatch2 = score(scheduleGroup[i][1])
        scheduleGroup[i][0].goalsHome += scoreboardMatch1[0]
        scheduleGroup[i][0].goalsAway += scoreboardMatch1[1]
        scheduleGroup[i][1].goalsHome += scoreboardMatch2[0]
        scheduleGroup[i][1].goalsAway += scoreboardMatch2[1]
        const matchDaysScore1 = scheduleGroup[i][0]
        const matchDaysScore2 = scheduleGroup[i][1]
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
//console.log(scoreBoardGroupA)

const scoreBoardGroupB = matchDaysScore(scheduleGroupB)
//console.log(scoreBoardGroupB)

const scoreBoardGroupC = matchDaysScore(scheduleGroupC)
//console.log(scoreBoardGroupC)

const scoreBoardGroupD = matchDaysScore(scheduleGroupD)
//console.log(scoreBoardGroupD)


//TODO: Montar las clasificaciones de cada jornada para cada grupo y mostrarlas por pantalla

