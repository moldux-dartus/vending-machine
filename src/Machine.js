class Machine {
  constructor() {
    this.snacks = []
    this.balance = 0
  }

  seeSelections() {
    return this.snacks
  }

  stock(inventory) {
    if(inventory == undefined) {
      throw Error("please do not troll. you cannot stock nothing.")
    }
    this.snacks = inventory
  }
  
  displayBalance() {
    return this.balance
  }

  deposit(amount) {
    switch(amount){
      case 10:
      case 20:
      case 50:
      case 100:
      case 500:
        this.balance+=amount
        return this.balance
      default:
        return ("I'm afraid I cannot accept this")
    }
  }

  selectItem(code) {
    let snackObj = this.snacks
    if (this.snacks.name.includes(code)) {
      if(snackObj.price > this.displayBalance() && this.displayBalance() == 0){
          return "We have that in stock"
      }
      else{
          var discrepancy = snackObj.price - this.displayBalance()
          return `Your deposit is insufficient.  Please add Rs ${discrepancy} for this item`
      }
    }
    else {
      return `We don't have that in stock`
    }
  }
}

module.exports = Machine