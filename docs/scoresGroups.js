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
                homeTeam.goalsFor += result.homeGoals
                homeTeam.goalsAgainst += result.awayGoals
                awayTeam.goalsFor += result.awayGoals
                awayTeam.goalsAgainst += result.homeGoals
                if (result.homeGoals > result.awayGoals) {
                    homeTeam.points += 3
                    homeTeam.matchesWon++
                    
                    awayTeam.points += 0
                    awayTeam.matchesLost++
                    
                } else if (result.homeGoals < result.awayGoals) {
                    homeTeam.points += 0
                    homeTeam.matchesLost++
                    
                    awayTeam.points += 3
                    awayTeam.matchesWon++
                } else {
                    homeTeam.points += 1
                    homeTeam.matchesDraw++
                    
                    awayTeam.points += 1
                    awayTeam.matchesDraw++
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
        if (teamA.points > teamB.points) {
            return -1
        } else if (teamB.points > teamA.points) {
            return 1
        } else {
            const diffGoalsTeamA = teamA.goalsFor - teamA.goalsAgainst
            const diffGoalsTeamB = teamB.goalsFor - teamB.goalsAgainst

            if (diffGoalsTeamA > diffGoalsTeamB) {
                return -1
            } else if (diffGoalsTeamB > diffGoalsTeamA){
                return 1
            } else {
                if(teamA.goalsFor > teamB.goalsFor) {
                    return -1
                }else if (teamB.goalsFor > teamA.goalsFor) {
                    return 1
                } else {
                    return 0
                }
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



