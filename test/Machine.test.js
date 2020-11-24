const Machine = require('../src/Machine')

describe('The vending machine', () => {
  it('is initialized with no items', () => {
    // SEAT
    // setup
    const vendingMachine = new Machine();

    // exercise & assert
    expect(vendingMachine.seeSelections()).toEqual([])

    // teardown, not needed
  })

  it('can stock one snack', () => {
    // setup
    const vendingMachine = new Machine();
    const snack = {
      name: 'macadamia nuts',
      price: 250
    }

    // exercise
    vendingMachine.stock([snack])

    // assert
    expect(vendingMachine.seeSelections()).toEqual([snack])
  })

  it('displays an error if no inventory comes with stocking', () => {
    // setup
    const vendingMachine = new Machine()
    const displayMessage = "please do not troll. you cannot stock nothing."

    // exercise & assert
    expect(() => vendingMachine.stock()).toThrow(displayMessage)
  })

  it('displays how much money was deposited', () => {
    // setup
    const vendingMachine = new Machine()

    // exercise
    vendingMachine.deposit(990)
    let stockErrorMessage = "I'm afraid I cannot accept this"

    // assert
    expect(vendingMachine.deposit(500)).toEqual(vendingMachine.displayBalance())
    expect(vendingMachine.deposit(990)).toEqual(stockErrorMessage)
  })

  it('displays the total balance in the machine', () => {
    // setup
    const vendingMachine = new Machine()
    
    // exercise
    vendingMachine.deposit(100)
    vendingMachine.deposit(100)
    vendingMachine.deposit(100)

    // assert
    expect(vendingMachine.displayBalance()).toEqual(300)
  })

  it('it displays whether or not an item is in stock', () => {
    // setup
    const vendingMachine = new Machine()
    var notInStock = "We don't have that in stock"; var inStock = "We have that in stock"
    const snack = {
      name: 'macadamia nuts',
      price: 250
    }

    // exercise
    vendingMachine.stock(snack)

    // assert
    expect(vendingMachine.selectItem('pig feet')).toEqual(notInStock)
    expect(vendingMachine.selectItem('macadamia nuts')).toEqual(inStock)
  })

  it('it tells me if I need to give it more money for the supplied item', () => {
    // setup    
    const vendingMachine = new Machine()
    const snack = {
      name: 'macadamia nuts',
      price: 250
    }
    var notEnough = 'Your deposit is insufficient.  Please add Rs 50 for this item'

    // exercise
    vendingMachine.stock(snack)
    vendingMachine.deposit(100)
    vendingMachine.deposit(100)

    // assert
    expect(vendingMachine.selectItem('macadamia nuts')).toEqual(notEnough)
  })
})
