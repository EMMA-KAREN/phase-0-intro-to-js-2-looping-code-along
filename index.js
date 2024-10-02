// Code your solutions in this file
function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
    }
    wrapGifts(gifts);
    
    function writeCards(names){
    const messages = [];
    for (let a = 0; a < names.length; a++){
    messages.push(`Thank you, ${names[a]}, for the wonderful surprise gift!`);
    }
    return messages;
    }
    
    function countDown(number){
    for (let b = number; b >= 0; b--){
    console.log(b);
    } 
    }
    