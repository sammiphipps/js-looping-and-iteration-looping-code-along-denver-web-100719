// Code your solutions in this file
function writeCards(nameArray, eventName){
    const newArray = [];
    for(let i = 0; i < nameArray.length; i++){
        newArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArray;
}

function countDown(positiveInteger){
    while(positiveInteger >= 0){
        console.log(positiveInteger);
        positiveInteger--;
    }
}