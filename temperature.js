let n = 0
let temp = [ ]

//Fonction qui affichera le chiffre le plus proche de 0
function procheZero(temp){

//si aucun élement dans le tableau
    if(temp.length == 0){
        return  0
      }
    let min = temp[0]
    for(let i = 1;i<temp.length;i++){
        
        if(Math.abs(min)>Math.abs(temp[i])){
            min = temp[1]
        }else if(Math.abs(min) == Math.abs(temp[i])){
            min = Math.abs(min)
        }
        
        
    }return min
}

console.log(procheZero(temp));