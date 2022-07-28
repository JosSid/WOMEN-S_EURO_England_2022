import {groupAObj, groupBObj, groupCObj, groupDObj} from "./teamsClass.js"
import {groupA, groupB, groupC, groupD} from "./groupsCreate.js"

import { scheduleGroupA, scheduleGroupB, scheduleGroupC, scheduleGroupD } from "./matchDaysCreate.js"



//Funcion para crear los marcadores de cada jornada
/**
 * 
 * @param {*calendario de jornadas} scheduleGroup 
 * @returns resultado de cada jornada del calendario
 */
function matchDaysScore(scheduleGroup) {
    const scoreBoardGroup = [] //Array donde se almacenan los resultados de los partidos cada jornada
    for(let i = 0; i < scheduleGroup.length ; i++) {
        const scoreboardMatch1 = score(scheduleGroup[i][0])//Resultado del primer partido
        const scoreboardMatch2 = score(scheduleGroup[i][1])//Resultado del segundo partido
        scheduleGroup[i][0].goalsHome += scoreboardMatch1[0]//Sumamos los goles de cada equipo al objeto "partido"
        scheduleGroup[i][0].goalsAway += scoreboardMatch1[1]//Sumamos los goles de cada equipo al objeto "partido"
        scheduleGroup[i][1].goalsHome += scoreboardMatch2[0]//Sumamos los goles de cada equipo al objeto "partido"
        scheduleGroup[i][1].goalsAway += scoreboardMatch2[1]//Sumamos los goles de cada equipo al objeto "partido"
        const matchDaysScore1 = scheduleGroup[i][0]
        const matchDaysScore2 = scheduleGroup[i][1]
        scoreBoardGroup.push([matchDaysScore1, matchDaysScore2])
    }
    return scoreBoardGroup
}

//Funcion para asignar goles al marcador de cada partido
/**
 * 
 * @param {*Array de dos equipos} teams 
 * @returns Resultado para el partido
 */
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