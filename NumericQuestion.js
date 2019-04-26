const readlineSync = require("readline-sync")

class NumericQuestion {
  constructor(prompt, minimumNumber){
    this.prompt         = prompt
    this.minimumNumber  = minimumNumber
  }

  ask(){
    const answer = readlineSync.question(this.prompt)
    const numericAnswer = Number(answer)
    if(isNaN(numericAnswer) || numericAnswer < this.minimumNumber){
      console.log(`Naughty naughty!  "${answer}" is not a valid answer.  Please try again...`)
      return this.ask()
    }else{
      return numericAnswer
    }
  }
}

module.exports = NumericQuestion
