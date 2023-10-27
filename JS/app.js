var running=false

function stopGame(){
    running=false
    document.querySelector(".statut").innerHTML="No game running"
}

function run(){
    running=true
    document.querySelector(".statut").innerHTML="Game running"
}

function computerChoice(){
    if(running==true){
        var cChoice
        var number = Math.random()
        if (number<=1/3){
            cChoice='Rock'
        }
        else if (number<=2/3){
            cChoice='Paper'
        }
        else{
            cChoice='Scissors'
        }
        return(cChoice)
    }else{
        console.log('Aucun jeu en cours')
    }

}

//Charge score

score = JSON.parse(localStorage.getItem("score"))||{
    Wins : 0,
    Looses : 0,
    Ties : 0
}

function play(playerMoove){
    if(running==true){
        cChoice=computerChoice()
        if (playerMoove == "Rock"){
            if (cChoice=="Rock"){
                console.log('Computer choice : '+cChoice+'. Ties!')
                score.Ties+=1
                printMoove(".js-computer-moove","rock")
            }else if(cChoice=="Paper"){
                console.log('Computer choice : '+cChoice+'. Loose!')
                score.Looses+=1
                printMoove(".js-computer-moove","paper")
            }else{
                console.log('Computer choice : '+cChoice+'. Win!')
                score.Wins+=1
                printMoove(".js-computer-moove","scissors")
            }
            printMoove(".js-player-moove","rock")
        }else if(playerMoove == "Paper"){
            if (cChoice=="Rock"){
                console.log('Computer choice : '+cChoice+'. Win!')
                score.Wins+=1
                printMoove(".js-computer-moove","rock")
            }else if(cChoice=="Paper"){
                console.log('Computer choice : '+cChoice+'. Ties!')
                score.Ties+=1
                printMoove(".js-computer-moove","paper")
            }else{
                console.log('Computer choice : '+cChoice+'. Loose!')
                score.Looses+=1
                printMoove(".js-computer-moove","scissors")
            }
            printMoove(".js-player-moove","paper")
        }else{
            if (cChoice=="Rock"){
                console.log('Computer choice : '+cChoice+'. Loose!')
                score.Looses+=1
                printMoove(".js-computer-moove","rock")
            }else if(cChoice=="Paper"){
                console.log('Computer choice : '+cChoice+'. Win!')
                score.Wins+=1
                printMoove(".js-computer-moove","paper")
            }else{
                console.log('Computer choice : '+cChoice+'. Ties!')
                score.Ties+=1
                printMoove(".js-computer-moove","scissors")
            }
            printMoove(".js-player-moove","scissors")
        }
        localStorage.setItem("score", JSON.stringify(score))
        printScore()
    }else{
        console.log('Aucun jeu en cours')
    }
}

//Affiche score

function printScore(){
    document.querySelector(".score").innerHTML="Wins : "+score.Wins+" | Losses : "+score.Looses+" | Ties : "+score.Ties
}

printScore()

//Reset score

function resetScore(){
    score={
        Wins : 0,
        Looses : 0,
        Ties : 0
    }
    localStorage.setItem("score", JSON.stringify(score))
    printScore()
}



function printMoove(player, moove){
    if (moove=="rock"){
        document.querySelector(player).src="img/rock.png"
    }
    else if (moove=="paper"){
        document.querySelector(player).src="img/paper.png"
    }
    else {
        document.querySelector(player).src="img/scissors.png"
    }
}