//QUINTA PARTE DE LA PRACTICA

//Resolver los resultados y clasificaciones de cada liguilla de grupo

import {groupAObj, groupBObj, groupCObj, groupDObj} from "./teamsClass.js"


import { scheduleGroupA, scheduleGroupB, scheduleGroupC, scheduleGroupD } from "./matchDaysCreate.js"
/**
 * 
 * @param {*Array de jornadas y enfrentamientos en cada jornada} scheduleGroup 
 * @param {*Array de equipos participantes} groupObj 
 * @returns Resultados de cada liguilla disputada
 */
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
            //Me crea las estadisticas para cada equipo de cada partido de cada jornada
            /**
             * 
             * @param {*Resultado del partido} result 
             */
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
            //Actualizar estadisticas de los equipos cada partido
            updateTeams(result)
            
            //Subir los marcadores de cada jornada a las estadisticas del grupo
            matchDayScoreBoard.results.push(result)
            
        }
        
        //Ordenar los equipos segun puntos en cada jornada
        let standings = createClasification(groupObj)
        //Meter todas las estadisticas de cada equipo al mismo nivel en el objeto para que console.table funcione bien
        standings = standings.map(team => {
            team.stadistics = {
                teamName: team.name,
                points: team.stadistics.points,
                matchesWon: team.stadistics.matchesWon,
                matchesDraw: team.stadistics.matchesDraw,
                matchesLost: team.stadistics.matchesLost,
                goalsFor: team.stadistics.goalsFor,
                goalsAgainst: team.stadistics.goalsAgainst
            }
            return team.stadistics
        })
        //Romper las referencias de los objetos para poder presentar resultados de cada jornada
        matchDayScoreBoard.stadisticsDay = JSON.parse(JSON.stringify(standings))
        //Subir estadisticas al registro de estadisticas
        scheduleGroupResults.push(matchDayScoreBoard)
    }
    return scheduleGroupResults
}


//Me ordena los equipos de groupObj creando la clasificacion de cada jornada
/**
 * 
 * @param {*Array de equipos con resultados} groupObj 
 * @returns Array ordenado segun los resultados obtenidos en cada jornada
 */
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
/**
 * 
 * @param {*Partido a disputar} match 
 * @returns Marcador del partido
 */
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
/**
 * 
 * @param {*Maximo de goles por equipo} max 
 * @returns Goles de cada equipo
 */
function generateGoals(max = 7) {
    return Math.floor(Math.random() * max)
}
export const resultsA = startLeague(scheduleGroupA,groupAObj)
export const resultsB = startLeague(scheduleGroupB,groupBObj)
export const resultsC = startLeague(scheduleGroupC,groupCObj)
export const resultsD = startLeague(scheduleGroupD,groupDObj)



