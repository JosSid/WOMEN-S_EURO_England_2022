//CUARTA PARTE DE LA PRACTICA

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
/**
 * 
 * @param {*Array de strings} group 
 * @returns Array de Objetos
 */
export default function teamsToObject(group) {
    const groupObj = []
    for(let i = 0; i < group.length ; i++) {
        const teamObj = new Team(group[i])
        groupObj.push(teamObj)
    }
    return groupObj
}





