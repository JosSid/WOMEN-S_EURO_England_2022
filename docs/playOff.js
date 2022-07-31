//SEXTA PARTE DE LA PRACTICA

//Funciones para solucionar resultados del playOff

//Funcion para asignar un resultado a cada partido
/**
 * 
 * @param {*Array de equipos que se enfrentan en el partido} teams 
 * @returns Marcador del partido
 */
 export const score = function (teams) {
    const scoreBoardP = []
        for (let team in teams) {
            let goals = Math.random()
            goals = goals * 5
            goals = goals.toFixed(goals)
            scoreBoardP.push(goals)
        } if(scoreBoardP[0] > scoreBoardP[1]){
            (scoreBoardP[0]++)
            scoreBoardP[0] = Math.floor(scoreBoardP[0])
            scoreBoardP[1] = Math.floor(scoreBoardP[1])
        } else {
            (scoreBoardP[1]++)
            scoreBoardP[0] = Math.floor(scoreBoardP[0])
            scoreBoardP[1] = Math.floor(scoreBoardP[1])
        }
        
        return scoreBoardP
    }

//Funcion para obtener la variable Ganador de cada partido
/**
 * 
 * @param {*Array de equipos que han jugado el partido} teams 
 * @param {*Resultado del marcador del partido} score 
 * @returns Ganador del partido
 */
export function winnerMatch(teams, score) {
    if (score[0] > score[1]){
        const winner = teams[0]
        return winner
    } else {
        const winner = teams[1]
        return winner
    }
    
}







