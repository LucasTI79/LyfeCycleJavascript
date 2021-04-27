const assert = require('assert')

const obj = {}
const arr = []
const fn = () => {}

//__proto__ é onde o objeto guarda as referências

//internamente, objetos literais viram funções explícitas

console.log('new Object() is {}?', new Object().__proto__ === {}.__proto__)
assert.deepStrictEqual(new Object().__proto__, {}.__proto__)

//__proto__ é a referência do atual objeto
console.log('obj.__proto__ === Object.prototype',obj.__proto__ === Object.prototype)
assert.deepStrictEqual(obj.__proto__ ,Object.prototype)

console.log('arr.__proto__ === Array.prototype',arr.__proto__ === Array.prototype)
assert.deepStrictEqual(arr.__proto__, Array.prototype)

console.log('fn.__proto__ === Function.prototype',fn.__proto__ === Function.prototype)
assert.deepStrictEqual(fn.__proto__, Function.prototype)

//o __proto__ de Object.__proto__ é null
console.log('obj.__proto__.__proto__ === null',obj.__proto__.__proto__ === null)

// === // === // === // ===

console.log('=== // === // === // ===')

function Employee(){}

Employee.prototype.salary = () => "salary**"

// console.log(Employee.prototype.salary())

function Supervisor(){}
//herda a instancia do Employee
Supervisor.prototype = Object.create(Employee.prototype)
Supervisor.prototype.profitShare = () => "profitShare**"

//console.log(typeof Supervisor.prototype.__proto__.__proto__.__proto__)

function Manager(){}
Manager.prototype = Object.create(Supervisor.prototype)
Manager.prototype.monthlyBonuses = () => "monthlyBonuses**"

//podemos chamar via prototype, mas se tentar chamar direto dá erro!
console.log('Manager.prototype.salary()',Manager.prototype.salary())
// console.log('Manager.salary()',Manager.salary())

//se nao chamar o 'new', o primeiro __proto__ vai ser sempre
//a instância de Function, sem herdar nossas classes
//Para acessar as classes sem o new, pode acessar via prototype
console.log('Manager.prototype.__proto__ === Supervisor.prototype',Manager.prototype.__proto__ === Supervisor.prototype)
assert.deepStrictEqual(Manager.prototype.__proto__,Supervisor.prototype)

// === // === // === // ===

console.log('=== // === // === // ===')

//quando chamamos com o 'new' o __proto__ recebe o prototype
console.log('manager.__proto__: %s, manager.salary(): %s',new Manager().__proto__, new Manager().salary())
console.log('Supervisor.prototype === new Manager().__proto__.__proto__',Supervisor.prototype === new Manager().__proto__.__proto__)
assert.deepStrictEqual(Supervisor.prototype,new Manager().__proto__.__proto__)
//console.log('Supervisor.__proto__ === Object.__proto__',Supervisor.__proto__ === Object.__proto__)

// === // === // === // ===

console.log('=== // === // === // ===')

const manager = new Manager()
console.log('manager.salary()',manager.salary())
console.log('manager.profitShare()',manager.profitShare())
console.log('manager.monthlyBonuses()',manager.monthlyBonuses())

//toda vez que chamar o operador new o __proto__ recebe o prototype da função
console.log(manager.__proto__.__proto__.__proto__.__proto__.__proto__)
assert.deepStrictEqual(manager.__proto__, Manager.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__, Supervisor.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__, Employee.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__.__proto__, Object.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__.__proto__.__proto__, null)

// === // === // === // ===

console.log('=== // === // === // ===')

class T1{
  ping(){ return 'ping' }
}

class T2 extends T1 {
  pong(){ return 'pong' } 
}

class T3 extends T2 {
  shoot(){ return 'shoot' } 
}

const t3 = new T3()
//new o __proto__ é o prototype
//sem new __proto__ é Function 

console.log('t3 inherits nul?', t3.__proto__.__proto__.__proto__.__proto__.__proto__ === null)
assert.deepStrictEqual(t3.__proto__.__proto__.__proto__.__proto__.__proto__,null)
console.log(t3.ping())
console.log(t3.pong())
console.log(t3.shoot())

assert.deepStrictEqual(t3.__proto__, T3.prototype)
assert.deepStrictEqual(t3.__proto__.__proto__, T2.prototype)
assert.deepStrictEqual(t3.__proto__.__proto__.__proto__, T1.prototype)
assert.deepStrictEqual(t3.__proto__.__proto__.__proto__.__proto__, Object.prototype)
assert.deepStrictEqual(t3.__proto__.__proto__.__proto__.__proto__.__proto__, null)

// === // === // === // ===

console.log('=== // === // === // ===')

//my tests
// console.log('Employee',Employee.__proto__, Employee.prototype)
// console.log('Supervisor',Supervisor.__proto__, Supervisor.prototype)
// console.log('Manager',Manager.__proto__, Manager.prototype)
// console.log(Object.prototype === Object.__proto__.__proto__)
// console.log(typeof Object.prototype )

// console.log(new Manager().__proto__ === Manager.prototype)
// console.log(new Manager().__proto__)
// console.log(Manager.prototype)
// console.log(new Manager().__proto__)

// console.log(typeof new Function().__proto__.__proto__) 

//__proto__ onde o objeto em questão armazena a referência de onde veio (o que ele é)
//prototype onde o objeto em questão armazena todas as suas propriedades levando em conta o que foi herdado
// console.log(Object.keys(Manager.prototype))
// console.log(Object.keys(Supervisor.prototype))

// console.log(new Manager().profitShare() === Supervisor.prototype.profitShare())

