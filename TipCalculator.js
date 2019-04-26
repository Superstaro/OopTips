const NumericQuestion = require("./NumericQuestion")

class TipCalulator {
  constructor(){
    this.bill = new NumericQuestion("What is the bill?", 0).ask()
    this.tipPercent = new NumericQuestion("What percent do you want to tip?", 0).ask()
    this.partySize = new NumericQuestion("How many people are there in your party?", 1).ask()
  }
  tip(){
    return this.bill * (this.tipPercent / 100)
  }
  total(){
    return this.bill + this.tip()
  }
  share(){
    return this.total() / this.partySize
  }
  calculate(){
    console.log(`The tip is $${this.tip().toFixed(2)}`)
    console.log(`The total is $${this.total().toFixed(2)}`)
    console.log(`Your share is $${this.share().toFixed(2)}`)
  }
}

module.exports = TipCalulator
