function calculateTotal (food, tip){
    const tipPercentage = tip/100
    const tipAmount = food * tipPercentage
    const total = Number(food + tipAmount)
    return total
}
console.log(calculateTotal (300, 20))