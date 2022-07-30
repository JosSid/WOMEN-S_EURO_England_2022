
import {presentationGroups} from "./docs/presentationTournament.js";

import {resultsA, resultsB, resultsC, resultsD} from "./docs/scoresGroups.js"

import { score, winnerMatch } from "./docs/playOff.js"
//Primero mostramos los grupos resultantes del sorteo y los enfrentamientos de cada jornada
presentationGroups()

const groupLeagues = [resultsA, resultsB, resultsC, resultsD]

const teamsPO = []

const groupsNames = ['GROUP A', 'GROUP B', 'GROUP C', 'GROUP D']

for ( let i = 0; i < groupLeagues.length -1 ; i++) {
    let j = 0
    groupLeagues.forEach(group => {
        let homeName1 = group[i].results[0].homeTeamName
        let homeName2 = group[i].results[1].homeTeamName
        let awayName1 = group[i].results[0].awayTeamName
        let awayName2 = group[i].results[1].awayTeamName
        let goalsHome1 = group[i].results[0].homeGoals
        let goalsHome2 = group[i].results[1].homeGoals
        let goalsAway1 = group[i].results[0].awayGoals
        let goalsAway2 = group[i].results[1].awayGoals
        console.log('')
        console.log(`******* ROUND ${ i + 1} ${groupsNames[j]} ******`)
        j++
        console.log('')
        console.log(` ${homeName1}  ${goalsHome1}  <->  ${goalsAway1} ${awayName1}`)
        console.log(` ${homeName2}  ${goalsHome2}  <->  ${goalsAway2} ${awayName2}`)
        console.log('')
        console.table(group[i].stadisticsDay)
        if( i === 2) {
            console.log('')
            console.log(`**WINNER OF THE GROUP : ${group[2].stadisticsDay[0].name.toUpperCase()}`)
            console.log(`**SECOND OF THE GROUP : ${group[2].stadisticsDay[1].name.toUpperCase()}`)
            console.log('')
            teamsPO.push(group[2].stadisticsDay[0].name)
            teamsPO.push(group[2].stadisticsDay[1].name)
        }
    })
}

console.log('====================================================')
console.log('=============== START PLAY OFF ROUND================')
console.log('====================================================')
console.log('')
console.log('================= TEAMS QUALIFIED ==================')
console.log('')

console.log(`GRUPO A: ${teamsPO[0]}, ${teamsPO[1]}`)
console.log(`GRUPO B: ${teamsPO[2]}, ${teamsPO[3]}`)
console.log(`GRUPO C: ${teamsPO[4]}, ${teamsPO[5]}`)
console.log(`GRUPO D: ${teamsPO[6]}, ${teamsPO[7]}`)
console.log('')
console.log('======= QUARTER FINALS =======')
console.log('')
const quarters1 =[teamsPO[0], teamsPO[3]]
const resultado1 = score(quarters1)
const winnerMatch1 = winnerMatch(quarters1, resultado1)
console.log(`${quarters1[0]} ${resultado1[0]} - ${resultado1[1]} ${quarters1[1]} => ${winnerMatch1}`)

const quarters2 =[teamsPO[2], teamsPO[1]]
const resultado2 = score(quarters2)
const winnerMatch2 = winnerMatch(quarters2, resultado2)
console.log(`${quarters2[0]} ${resultado2[0]} - ${resultado2[1]} ${quarters2[1]} => ${winnerMatch2}`)

const quarters3 =[teamsPO[4], teamsPO[7]]
const resultado3 = score(quarters3)
const winnerMatch3 = winnerMatch(quarters3, resultado3)
console.log(`${quarters3[0]} ${resultado3[0]} - ${resultado3[1]} ${quarters3[1]} => ${winnerMatch3}`)

const quarters4 =[teamsPO[6], teamsPO[5]]
const resultado4 = score(quarters4)
const winnerMatch4 = winnerMatch(quarters4, resultado4)
console.log(`${quarters4[0]} ${resultado4[0]} - ${resultado4[1]} ${quarters4[1]} => ${winnerMatch4}`)

console.log('')
console.log('======= SEMIFINALS =======')
console.log('')

const semiFinal1 = [winnerMatch1, winnerMatch3]
const resultadoSemi1 = score(semiFinal1)
const winnerSemi1 = winnerMatch(semiFinal1, resultadoSemi1)
console.log(`${semiFinal1[0]} ${resultadoSemi1[0]} - ${resultadoSemi1[1]} ${semiFinal1[1]} => ${winnerSemi1}`)

let lostSemi1 = undefined 
winnerSemi1 == winnerMatch1 ? lostSemi1 = winnerMatch3 : lostSemi1 = winnerMatch1

const semiFinal2 = [winnerMatch2, winnerMatch4]
const resultadoSemi2 = score(semiFinal2)
const winnerSemi2 = winnerMatch(semiFinal2, resultadoSemi2)
console.log(`${semiFinal2[0]} ${resultadoSemi2[0]} - ${resultadoSemi2[1]} ${semiFinal2[1]} => ${winnerSemi2}`)

let lostSemi2 = undefined 
winnerSemi2 == winnerMatch2 ? lostSemi2 = winnerMatch4 : lostSemi2 = winnerMatch2

console.log('')
console.log('======== 3RD AND 4TH ========')
console.log('')

const thirdAndFourth = [lostSemi1, lostSemi2]
const resultadoThirdAndFourth = score(thirdAndFourth)
const winnerThirdAndFourth = winnerMatch(thirdAndFourth, resultadoThirdAndFourth)
console.log(`${thirdAndFourth[0]} ${resultadoThirdAndFourth[0]} - ${resultadoThirdAndFourth[1]} ${thirdAndFourth[1]} => ${winnerThirdAndFourth}`)

console.log('')
console.log('======== FINAL ========')
console.log('')

const final = [winnerSemi1, winnerSemi2]
const resultadoFinal = score(final)
const winnerFinal = winnerMatch(final, resultadoFinal)
console.log(`${final[0]} ${resultadoFinal[0]} - ${resultadoFinal[1]} ${final[1]} => ${winnerFinal}`)

console.log('')
console.log('')
console.log('*************************************************')
console.log('*************************************************')
console.log(`!${winnerFinal.toUpperCase()} CHAMPION OF THE EURO WOMENS CUP 2022!`)
console.log('*************************************************')
console.log('*************************************************')




