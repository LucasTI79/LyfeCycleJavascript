9999999999999999 // 16
//10000000000000000
true + 2
//3
'21' + true
//'21true'
'21'-true
//20
'21'- - 1
//22
0.1+0.2 === 0.3
//false
3>2>1
//false
3>2>=1
//true
"B" + "a" + + "a" + "a"
// BaNaNa

// === // === // === // ===

console.assert(String(123) === '123', 'explicit convertion to string')
console.assert(123 + '' === '123', 'implicit convertion to string')
console.assert(('hello' || 1 === 'hello', '|| returns the first element'))
console.assert(('hello' && 123 === 123, '&& returns the last element'))

// === // === // === // ===

const item  = {
  name: 'Lucas Alves',
  age: 18,
  //string: 1 se não for priomitivo, chama valueOf
  toString(){
    return `Name ${this.name}, Age: ${this.age}`
  },
  // number: 1 se não for primitivo, chama o toString
  valueOf(){
    return 007
  },
  //ele tem prioridade na parada! kkk
  [Symbol.toPrimitive](coercionType){
    //console.log('trying to convert to', coercionType)
    const types = {
      string: JSON.stringify(this),
      number: '0007'
    }

    return types[coercionType] || types.string
  }
}

// console.log('item.toString()', String(item))

// //Vai retornar NaN pois o toString retornou a string
// console.log('item.valueOf()', Number(item))

//depois de adicionar o toPrimitive
// console.log('String', String(item))
// console.log('Number', Number(item))
// console.log('Date', new Date(item))
console.assert(item + 0 === '{"name":"Lucas Alves","age":18}0')
// console.log('!!item is true?', !!item)
console.assert(!!item)

// console.log('string.concat', 'Ae'.concat(item))
console.assert('Ae'.concat(item) === 'Ae{"name":"Lucas Alves","age":18}')

// console.log('implit + explicit coercion (using ==)', item == String(item))
console.assert(item == String(item),'')

const item2 = {...item, name: "Zézin", age: 20}
// console.log('New Object', item2)
console.assert(item2.name === "Zézin" && item2.age === 20)