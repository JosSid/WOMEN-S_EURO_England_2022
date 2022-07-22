//PRIMERA PARTE DE LA PRACTICA.

//SORTEO DE GRUPOS

//Array con los equipos clasificados para el torneo
const teams =  ['England', 'Austria', 'Norway', 'Northern Ireland', 'Netherlands', 'Sweden', 'Russia', 'Switzerland', 'Germany', 'Denmark', 'Spain', 'Finland', 'France', 'Italy', 'Belgium', 'Iceland']
//Funcion para reordenas aleatoriamnete los equipos en un nuevo array(Metodo Fisher Yates)
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
const teamsShuffle = shuffleArray(teams)

// Creamos los arrays de los grupos
const groupA = []
const groupB = []
const groupC = []
const groupD = []

//Repartimos los equipos en los grupos
for(let i = 0; i < teamsShuffle.length; i++) {
    if (i < 4) {
        groupA.push(teamsShuffle[i])
    }
    if (i > 3 && i < 8) {
        groupB.push(teamsShuffle[i])
    }
    if (i > 7 && i < 12) {
        groupC.push(teamsShuffle[i])
    }
    if (i > 11 && i < 16) {
        groupD.push(teamsShuffle[i])
    }

}

console.log(groupA, groupB, groupC, groupD)