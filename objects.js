// const person = {
//     name: 'Abdussomad',
//     shirt: 'Blue'
// }
// console.log(person.name)
// console.log(person['shirt'])
// person.sex = 'male'
// console.log(person.sex)
// console.log(person)

// Person2
// const person2 ={
//     name: 'Qazi',
//     color: 'Black'
// }
// console.log(person2)
// console.log((person2['name']), (person2['color']))

const introduction = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        asset: 50000000000,
        liabilities: 500000,
        netWorth: function (){
            return this.asset - this.liabilities
        }
    }
    const intro = `My name is ${person.name}, the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()}USD.`
    return intro
}
console.log(introduction('Abdussomad', 'Black'))
//console.log(introduction('Harzkid', 'White'))