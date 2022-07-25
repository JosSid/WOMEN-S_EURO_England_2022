//SEGUNDA PARTE DE LA PRACTICA

//EMPAREJAMIENTOS DE LOS EQUIPOS PARA LOS PARTIDOS DE LA LIGUILLA

import {teams, groupA, groupB, groupC, groupD} from "./groupsCreate.js"

//Funcion para definir las jornadas de cada grupo del torneo
/**
 * 
 * @param {'array de equipos'} group 
 * @returns Array con los partidos y jornadas
 */
function scheduleCreation(group) {//Como parametro le pasaremnos un Array de equipos
    const scheduleMatches = []; //Array donde se almacenaran las diferentes jornadas del grupo
    const numMatchesDay = group.length - 1; //El número de jornadas es == al numero de equipos de cada grupo - 1
    const numMatchesForMatchDay = group.length / 2;//El numero de partidos por jornada es == al total de equipos / 2
    // para cada jornada
    for (let i = 0; i < numMatchesDay; i++) {
      //Para cada partido de la jornada
      const matchDay = []; //Array donde se almacenara cada jornada y despues la subiremos al array del calendario
      for (let j = 0; j < numMatchesForMatchDay; j++) {
        //Registrar el partido en la planificacion
        //Un partido es el enfrentamiento entre dos equipos
        const match = { home: "home", goalsHome: 0, goalsAway: 0,away: "away" };
        matchDay.push(match);
      }
      scheduleMatches.push(matchDay);
    }
  
    //Para cada partido:
    // Primero definimos los equipos que jugaran de Local
    let groupIndex = 0;
    let groupIndexMaxValor = group.length - 1 - 1;
    scheduleMatches.forEach((matchDay) => {
      matchDay.forEach((match) => {
        match.home = group[groupIndex];
        groupIndex++; //Incrementamos el Indice
        if (groupIndex > groupIndexMaxValor) { //Resetaemos el Indice para que no meta el ultimo equipo del Array en los equipos Locales
          groupIndex = 0;
        }
      });
    });
    
    // A continuación definimos los equipos visitantes 
    let i = group.length - 1 -1;
    scheduleMatches.forEach((matchDay) => {
      matchDay.forEach((match, groupIndex) => {
        if (groupIndex === 0) { //el primer visitante siempre sera el ultimo equipo del Array
          match.away = group[group.length - 1];
        } else {
          match.away = group[i];// El segundo visitante sera el resto de equipos del Array en orden inverso
          i--;
        }
        if (i < 0) {
          i = group.length - 1 -1 //Resetearemos la variable en caso de que sea menor a cero para que no nos de equipos Undefined
        }
      });
    });
    return scheduleMatches
  }

 
export const scheduleGroupA = scheduleCreation(groupA)
export const scheduleGroupB = scheduleCreation(groupB)
export const scheduleGroupC = scheduleCreation(groupC)
export const scheduleGroupD = scheduleCreation(groupD)
  
