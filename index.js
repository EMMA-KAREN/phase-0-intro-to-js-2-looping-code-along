// Code your solutions in this file
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
  }
  
  // Initialize the gifts array with some values
  const gifts = ["toy car", "teddy bear", "board game"];
  
  // Call the wrapGifts function with the initialized gifts array
  const wrappedGifts = wrapGifts(gifts);
  console.log(wrappedGifts);
  
  function writeCards(names) {
    const messages = [];
    for (let a = 0; a < names.length; a++) {
      messages.push(`Thank you, ${names[a]}, for the wonderful surprise gift!`);
    }
    return messages;
  }
  
  function countDown(number) {
    for (let b = number; b >= 0; b--) {
      console.log(b);
    }
  }