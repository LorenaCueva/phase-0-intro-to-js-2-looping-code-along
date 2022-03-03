function writeCards(names, message){
    let finishedCards = [];
    for(let i = 0; i < names.length; i++){
        finishedCards.push(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
        debugger;
    }
    return finishedCards;
}

function countDown(num){
    while(num >= 0){
        console.log(num--);
    }
}
