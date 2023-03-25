const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(array, event) {
  const messages = []
  for (let i = 0; i < array.length; i++) { 
  const thanksMessage = `Thank you, ${array[i]}, for the wonderful ${event} gift!`
  messages.push(thanksMessage);
  }
  return messages;
};

writeCards(names, "surprise");

  function countDown(i) {
    while (i >= 0) 
      console.log(i--);
  };
  
  countDown(10);