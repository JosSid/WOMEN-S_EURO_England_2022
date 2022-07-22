//PRIMERA PARTE DE LA PRACTICA.

//SORTEO DE GRUPOS

//Array con los equipos clasificados para el torneo
const teamsQualified =  ['England', 'Austria', 'Norway', 'Northern Ireland', 'Netherlands', 'Sweden', 'Russia', 'Switzerland', 'Germany', 'Denmark', 'Spain', 'Finland', 'France', 'Italy', 'Belgium', 'Iceland']
//Funcion para reordenas aleatoriamnete los equipos en un nuevo array(Metodo Fisher Yates)
/**
 * 
 * @param {'Array original'} arrayToShuffle 
 * @returns Array Shuffle
 */
function shuffleArray(arrayToShuffle) {
  for (let i = arrayToShuffle.length -1; i > 0; i-- ) {
    let randomPosition = Math.floor(Math.random() * (i + 1));
    let temp = arrayToShuffle[i];
    arrayToShuffle[i] = arrayToShuffle[randomPosition];
    arrayToShuffle[randomPosition] = temp;
  }
  return arrayToShuffle
}
//Le asignamos a la variable teamsShuffle el Array reordenado
export const teams = shuffleArray(teamsQualified)

// Creamos los arrays de los grupos
export const groupA = []
export const groupB = []
export const groupC = []
export const groupD = []

//Repartimos los equipos en 4 grupos de 4 equipos
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

