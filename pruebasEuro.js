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

function clasificationTeams(result,groupObj) {
    const pointsPerWin = 3
    const pointsPerDraw = 1
    const pointsPerLose = 0
    const clasificationGroup = []
    for(let i = 0; i < result.length; i++) {
        let homeTeam1 = groupObj.find(team => team.name === result[i].homeTeamName)
        let homeTeam2 = groupObj.find(team => team.name === result[i].homeTeamName)
        let awayTeam1 = groupObj.find(team => team.name === result[i].awayTeamName)
        let awayTeam2 = groupObj.find(team => team.name === result[i].awayTeamName)

        homeTeam1.stadistics.goalsFor += result[i].homeGoals
        homeTeam1.stadistics.goalsAgainst += result[i].awayGoals
        awayTeam1.stadistics.goalsFor += result[i].awayGoals
        awayTeam1.stadistics.goalsAgainst += result[i].homeGoals

        homeTeam2.stadistics.goalsFor += result[i].homeGoals
        homeTeam2.stadistics.goalsAgainst += result[i].awayGoals
        awayTeam2.stadistics.goalsFor += result[i].awayGoals
        awayTeam2.stadistics.goalsAgainst += result[i].homeGoals

        if (result[i].homeGoals > result[i].awayGoals) {
            homeTeam1.stadistics.points += pointsPerWin
            homeTeam1.stadistics.matchesWon++
            
            awayTeam1.stadistics.points += pointsPerLose
            awayTeam1.stadistics.matche
        } else if (result[i].homeGoals < result[i].awayGoals) {
            homeTeam1.stadistics.points += pointsPerLose
            homeTeam1.stadistics.matchesLost++
            
            awayTeam1.stadistics.points += pointsPerWin
            awayTeam1.stadistics.matchesWon++
        } else {
            homeTeam1.stadistics.points += pointsPerDraw
            homeTeam1.stadistics.matchesDraw++
            
            awayTeam1.stadistics.points += pointsPerDraw
            awayTeam1.stadistics.matchesDraw++
        }

        if (result[i].homeGoals > result[i].awayGoals) {
            homeTeam2.stadistics.points += pointsPerWin
            homeTeam2.stadistics.matchesWon++
            
            awayTeam2.stadistics.points += pointsPerLose
            awayTeam2.stadistics.matchesLost++
            
        } else if (result[i].homeGoals < result[i].awayGoals) {
            homeTeam2.stadistics.points += pointsPerLose
            homeTeam2.stadistics.matchesLost++
            
            awayTeam2.stadistics.points += pointsPerWin
            awayTeam2.stadistics.matchesWon++
        } else {
            homeTeam2.stadistics.points += pointsPerDraw
            homeTeam2.stadistics.matchesDraw++
            
            awayTeam2.stadistics.points += pointsPerDraw
            awayTeam2.stadistics.matchesDraw++
        }

        
        
    }

    return clasificationGroup

}
//Me ordena los equipos de groupObj creando la clasificacion de cada jornada
function createClasification(groupObj) {
    const clasification = groupObj.sort(function(teamA,teamB) {
        if (teamA.stadistics.points > teamB.stadistics.points) {
            return -1
        } else if (teamB.stadistics.points > teamA.stadistics.points) {
            return 1
        } else {
            const diffGoalsTeamA = teamA.stadistics.goalsFor - teamA.stadistics.goalsAgainst
            const diffGoalsTeamB = teamB.stadistics.goalsFor - teamB.stadistics.goalsAgainst

            if (diffGoalsTeamA > diffGoalsTeamB) {
                return -1
            } else if (diffGoalsTeamB > diffGoalsTeamA){
                return 1
            } else {
                return 0
            }
        }
    }) 
    return clasification
}
