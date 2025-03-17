let humanscore=0
let computerscore=0

function getcomputerchoice() {

    let a= Math.floor(Math.random()*(3))
   if(a===0)
      return "PIERRE"
   if (a===1)
      return "FEUILLE"
   if(a===2)
      return "CISEAUX"

}
function gethumanchoice(){
   let b= prompt("choisissez entre : PIERRE , FEUILLE ,CISEAUX")
   return b.toUpperCase()
}
function playround(computerchoice,humanchoice) {
    
 const win =((computerchoice==="PIERRE"&&humanchoice==="FEUILLE")|| 
 (computerchoice==="FEUILLE"&&humanchoice==="CISEAUX")||(computerchoice==="CISEAUX"&&humanchoice==="PIERRE"))
    const lose =((computerchoice==="FEUILLE"&&humanchoice==="PIERRE")||
     (computerchoice==="CISEAUX"&&humanchoice==="FEUILLE")||(computerchoice==="PIERRE"&&humanchoice==="CISEAUX"))
   
 if(win) {
          console.log("t'as gagne "+ humanchoice +" bat " + computerchoice)
          humanscore++ }
   else {
        if(lose){
             console.log("t'as perdu "+ computerchoice +" bat " + humanchoice)
             computerscore++}
         else{
             console.log("vous avez choisi le meme element que l'ordinateur")
             }
        }

}
function playgame(){
    for(let i=0;i<5;i++){
         console.log("MANCHE " +  (i+1) )
         const computer=getcomputerchoice()
         const human=gethumanchoice()
         playround(computer,human)
        }
}

playgame()
console.log("le match s'est termine sur une score de : " + humanscore + " - " + computerscore )



