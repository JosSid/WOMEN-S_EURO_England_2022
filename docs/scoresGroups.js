import {groupAObj, groupBObj, groupCObj, groupDObj} from "./teamsClass.js"


import { scheduleGroupA, scheduleGroupB, scheduleGroupC, scheduleGroupD } from "./matchDaysCreate.js"

function startLeague(scheduleGroup,groupObj) {
    //Para cada Jornada del calendario
    const scheduleGroupResults = []
    
    for(const matchDay of scheduleGroup) {
        const matchDayScoreBoard = {
            results: [],
            stadisticsDay: undefined
        }


        //Para cada partido de cada jornada
        for(const match of matchDay) {
            //jugar el partido
            
            const result = play(match)
            //TODO: crear las estadisticas para actualizarlas en cada jornada
            const updateTeams = (result) => {
                const homeTeam = groupObj.find(team => team.name === result.homeTeamName)
                const awayTeam = groupObj.find(team => team.name === result.awayTeamName)   
                homeTeam.stadistics.goalsFor += result.homeGoals
                homeTeam.stadistics.goalsAgainst += result.awayGoals
                awayTeam.stadistics.goalsFor += result.awayGoals
                awayTeam.stadistics.goalsAgainst += result.homeGoals
                if (result.homeGoals > result.awayGoals) {
                    homeTeam.stadistics.points += 3
                    homeTeam.stadistics.matchesWon++
                    
                    awayTeam.stadistics.points += 0
                    awayTeam.stadistics.matchesLost++
                    
                } else if (result.homeGoals < result.awayGoals) {
                    homeTeam.stadistics.points += 0
                    homeTeam.stadistics.matchesLost++
                    
                    awayTeam.stadistics.points += 3
                    awayTeam.stadistics.matchesWon++
                } else {
                    homeTeam.stadistics.points += 1
                    homeTeam.stadistics.matchesDraw++
                    
                    awayTeam.stadistics.points += 1
                    awayTeam.stadistics.matchesDraw++
                }
                
            }
            
            updateTeams(result)
            
            //Ordenar los equipos segun puntos en cada jornada
            matchDayScoreBoard.results.push(result)
            
        }
        
        
        let standings = createClasification(groupObj)
        

        matchDayScoreBoard.stadisticsDay = JSON.parse(JSON.stringify(standings))
        scheduleGroupResults.push(matchDayScoreBoard)
    }
    return scheduleGroupResults
}
//Me crea las estadisticas para cada equipo de cada partido de cada jornada

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

function play(match) {
    const homeGoals = generateGoals()
    const awayGoals = generateGoals()

    return {
        homeTeamName: match.home,
        homeGoals,
        awayTeamName: match.away,
        awayGoals
    }
}

function generateGoals(max = 7) {
    return Math.floor(Math.random() * max)
}
export const resultsA = startLeague(scheduleGroupA,groupAObj)
export const resultsB = startLeague(scheduleGroupB,groupBObj)
export const resultsC = startLeague(scheduleGroupC,groupCObj)
export const resultsD = startLeague(scheduleGroupD,groupDObj)



