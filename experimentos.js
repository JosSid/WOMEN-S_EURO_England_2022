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
                homeTemName: match.home,
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

function generateGoals(max = 7) {
    return Math.floor(Math.random() * max)
}

const a = startLeague(scheduleGroupA)

console.log(a[0], a[1], a[2])