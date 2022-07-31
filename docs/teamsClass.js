//SEGUNDA PARTE DE LA PRACTICA

//Creamos la clase para instanciar los Object Teams

import {groupA, groupB, groupC, groupD} from "./groupsCreate.js"

class Team {
    constructor(name,points = 0, matchesWon = 0, matchesDraw = 0, matchesLost = 0, goalsFor = 0, goalsAgainst = 0) {
        this.name = name
        this.points = points
        this.matchesWon = matchesWon
        this.matchesDraw = matchesDraw
        this.matchesLost = matchesLost
        this.goalsFor = goalsFor
        this.goalsAgainst = goalsAgainst
    }

}
/**
 * 
 * @param {*Array de strings} group 
 * @returns Array de Objetos
 */
 function teamsToObject(group) {
    const groupObj = []
    for(let i = 0; i < group.length ; i++) {
        const teamObj = new Team(group[i])
        groupObj.push(teamObj)
    }
    return groupObj
}

export const groupAObj = teamsToObject(groupA)
export const groupBObj = teamsToObject(groupB)
export const groupCObj = teamsToObject(groupC)
export const groupDObj = teamsToObject(groupD)





