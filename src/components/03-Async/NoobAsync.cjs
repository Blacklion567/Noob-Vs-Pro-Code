const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readlineInterface.question("What is your name? ", name => {
  readlineInterface.question(`Hello ${name}! How are you today? `, answer => {
    readlineInterface.question("How old are you?", age => {
      console.log("Hello" + ". You are a " + age + " year old " + answer + ".");
      readlineInterface.close();
    });
  });
});
