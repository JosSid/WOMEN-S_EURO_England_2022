import {groupAObj, groupBObj, groupCObj, groupDObj} from "./docs/teamsClass.js"
import {groupA, groupB, groupC, groupD} from "./docs/groupsCreate.js"

import { scheduleGroupA, scheduleGroupB, scheduleGroupC, scheduleGroupD } from "./docs/matchDaysCreate.js"


function startLeague(scheduleGroup) {
    //Para cada Jornada del calendario
    const scheduleGroupResults = []
    
    for(const matchDay of scheduleGroup) {
        const matchDayScoreBoard = {
            results: [],
            stadistics: undefined
        }

        scheduleGroupResults.push(matchDayScoreBoard)
        //Para cada partido de cada jornada
        for(const match of matchDay) {
            //jugar el partido
            
            const matchScoreBoard = {
                homeTeamName: match.home,
                homeGoals: generateGoals(),
                awayTeamName: match.away,
                awayGoals: generateGoals()
            }
            //TODO: crear las estadisticas para actualizarlas en cada jornada
            
            //Ordenar los equipos segun puntos en cada jornada
            matchDayScoreBoard.results.push(matchScoreBoard)
        }
        
    }
    return scheduleGroupResults
}

function clasificationTeams(result,groupObj) {
    const pointsPerWin = 3
    const pointsPerDraw = 1
    const pointsPerLose = 0
    for(let i = 0; i < result.length; i++) {
        let homeTeam1 = groupObj.find(team => team.name === result[i].results[0].homeTeamName)
        let homeTeam2 = groupObj.find(team => team.name === result[i].results[1].homeTeamName)
        let awayTeam1 = groupObj.find(team => team.name === result[i].results[0].awayTeamName)
        let awayTeam2 = groupObj.find(team => team.name === result[i].results[1].awayTeamName)

        homeTeam1.stadistics.goalsFor += result[i].results[0].homeGoals
        homeTeam1.stadistics.goalsAgainst += result[i].results[0].awayGoals
        awayTeam1.stadistics.goalsFor += result[i].results[0].awayGoals
        awayTeam1.stadistics.goalsAgainst += result[i].results[0].homeGoals

        homeTeam2.stadistics.goalsFor += result[i].results[1].homeGoals
        homeTeam2.stadistics.goalsAgainst += result[i].results[1].awayGoals
        awayTeam2.stadistics.goalsFor += result[i].results[1].awayGoals
        awayTeam2.stadistics.goalsAgainst += result[i].results[1].homeGoals

        if (result[i].results[0].homeGoals > result[i].results[0].awayGoals) {
            homeTeam1.stadistics.points += pointsPerWin
            homeTeam1.stadistics.matchesWon++
            
            awayTeam1.stadistics.points += pointsPerLose
            awayTeam1.stadistics.matchesLost++
            
        } else if (result[i].results[0].homeGoals < result[i].results[0].awayGoals) {
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

        if (result[i].results[1].homeGoals > result[i].results[1].awayGoals) {
            homeTeam2.stadistics.points += pointsPerWin
            homeTeam2.stadistics.matchesWon++
            
            awayTeam2.stadistics.points += pointsPerLose
            awayTeam2.stadistics.matchesLost++
            
        } else if (result[i].results[1].homeGoals < result[i].results[1].awayGoals) {
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

    return groupObj

}

function createClasification(groupObj) {
    const stadistics = groupObj.sort(function(teamA,teamB) {
        if (teamA.stadistics.points > teamB.stadistics.points) {
            return -1
        } else if (teamA.stadistics.points > teamB.stadistics.points) {
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
    return stadistics
}

function generateGoals(max = 7) {
    return Math.floor(Math.random() * max)
}

const a = startLeague(scheduleGroupA)
clasificationTeams(a,groupAObj)
createClasification(groupAObj)
console.log(a[0], a[1], a[2])
console.log(a)
console.log(groupAObj)