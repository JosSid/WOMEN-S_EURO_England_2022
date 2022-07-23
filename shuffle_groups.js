//Crear equipos que va a participar en el torneo
//Creación de la clase para instanciar los equipos
class Team {
    constructor(name,stadistics = {} ) {
        this.name = name
        this.ball = Math.random(this) //Bola del sorteo de grupos
        this.setup(stadistics) //Estadisticas de los equipos
    }

    setup(stadistics = {}) {
        const defaultStadistics = {  
            matchesPlayed: 0,
            matchesWon: 0,
            matchesDraw: 0,
            matchesLost: 0,
            points: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalsDifference: 0 }
        this.stadistics = Object.assign(defaultStadistics, stadistics) // uso de Object.assign para usar una "plantilla" si no nos llega nada como config
    }
}

//Instanciamos los equipos que van a participar en el torneo

const team1 = new Team('England')
const team2 = new Team('Austria')
const team3 = new Team('Norway')
const team4 = new Team('Northern Ireland')
const team5 = new Team('Netherlands')
const team6 = new Team('Sweden')
const team7 = new Team('Russia')
const team8 = new Team('Switzerland')
const team9 = new Team('Germany')
const team10 = new Team('Denmark')
const team11 = new Team('Spain')
const team12 = new Team('Finland')
const team13 = new Team('France')
const team14 = new Team('Italy')
const team15 = new Team('Belgium')
const team16 = new Team('Iceland')
//Obtenemos el conjunto de equipos participantes en un Array
const teams = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13, team14, team15, team16]

//Sorteo de los 4 grupos de la liguilla

teams.sort(function(a,b) { //Reordenamos el array principal
    if (a.ball > b.ball) {
        return 1;
      }
      if (a.ball < b.ball) {
        return -1;
      }
      
      return 0;
})
// Creamos los arrays de los grupos
const groupA = []
const groupB = []
const groupC = []
const groupD = []

//Repartimos los equipos en los grupos
for(let i = 0; i < teams.length; i++) {
    if (i < 4) {
        groupA.push(teams[i])
    }
    if (i > 3 && i < 8) {
        groupB.push(teams[i])
    }
    if (i > 7 && i < 12) {
        groupC.push(teams[i])
    }
    if (i > 11 && i < 16) {
        groupD.push(teams[i])
    }

}



for(let team of teams) {
    delete team.ball
}



/* function shuffleTeams () {
    console.log('***UEFA WOMENS EURO CUP LONDON 2022***')
    console.log('')
    console.log('=======GROUP A=======')
    console.log(`*******${groupA[0].name}*******`)
    console.log(`*******${groupA[1].name}*******`)
    console.log(`*******${groupA[2].name}*******`)
    console.log(`*******${groupA[3].name}*******`)
    console.log('')
    console.log('=======GROUP B=======')
    console.log(`*******${groupB[0].name}*******`)
    console.log(`*******${groupB[1].name}*******`)
    console.log(`*******${groupB[2].name}*******`)
    console.log(`*******${groupB[3].name}*******`)
    console.log('')
    console.log('=======GROUP C=======')
    console.log(`*******${groupC[0].name}*******`)
    console.log(`*******${groupC[1].name}*******`)
    console.log(`*******${groupC[2].name}*******`)
    console.log(`*******${groupC[3].name}*******`)
    console.log('')
    console.log('=======GROUP D=======')
    console.log(`*******${groupD[0].name}*******`)
    console.log(`*******${groupD[1].name}*******`)
    console.log(`*******${groupD[2].name}*******`)
    console.log(`*******${groupD[3].name}*******`)
    console.log('')
} */

console.table(teams[0].stadistics)

export {Team, teams, groupA, groupB, groupC, groupD}