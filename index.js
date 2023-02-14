const cards = ["Charlie", "Samip", "Ali"];
const writeCards = (arr,event) => {  
    const messages = []
    for(let i = 0; i < arr.length; i++) {                
           const greetingMessage = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
    }          
           return messages;
    
   

}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))


let countdown = 10;
while (countdown > 0) {
  console.log(countdown--);
}
  console.log(countdown);