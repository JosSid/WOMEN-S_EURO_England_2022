import {groupA, groupB, groupC, groupD} from "./docs/groupsCreate.js"

//Creamos la clase para instanciar los Object Teams

class Team {
    constructor(name,stadistics = {} ) {
        this.name = name
        this.setup(stadistics) //Estadisticas de los equipos
    }

    setup(stadistics = {}) {
        const defaultStadistics = {  
            matchesPlayed: 0,
            points: 0,
            matchesWon: 0,
            matchesDraw: 0,
            matchesLost: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            goalsDifference: 0 }
        this.stadistics = Object.assign(defaultStadistics, stadistics) // uso de Object.assign para usar una "plantilla" si no nos llega nada como config
    }
}

function teamsToObject(group) {
    const groupObj = []
    for(let i = 0; i < group.length ; i++) {
        const teamObj = new Team(group[i])
        groupObj.push(teamObj)
    }
    return groupObj
}

const groupAObj = teamsToObject(groupA)
const groupBObj = teamsToObject(groupB)
const groupCObj = teamsToObject(groupC)
const groupDObj = teamsToObject(groupD)


console.log(groupAObj[0].name, groupAObj[1].name, groupAObj[2].name, groupAObj[3].name)
console.log(groupBObj[0].name, groupBObj[1].name, groupBObj[2].name, groupBObj[3].name)
console.log(groupCObj[0].name, groupCObj[1].name, groupCObj[2].name, groupCObj[3].name)
console.log(groupDObj[0].name, groupDObj[1].name, groupDObj[2].name, groupDObj[3].name)
