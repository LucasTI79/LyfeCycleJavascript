import mocha from 'mocha'
const { describe, it } = mocha
import chai from 'chai'
const { expect } = chai
import Person from '../src/person.js'

describe('Person', () => {
  it('should return a person instance from a string', () => {
    const person = Person.generateInstanceFromString(
      '1 Bike,Carro,Avião 200000 2000-10-22 2021-08-22'
    )

    const expected = {
      from:'2000-10-22',
      to:'2021-08-22',
      vehicles:['Bike','Carro','Avião'],
      kmTraveled: '200000',
      id: '1'
    }

    expect(person).to.be.deep.equal(expected)
  })

  it('should format values', () => {
    const person = new Person({
      from:'2000-10-22',
      to:'2021-08-22',
      vehicles:['Bike','Carro','Avião'],
      kmTraveled: '200000',
      id: '1'
    })
    const result = person.formatted('pt-BR')
    const expected = {
      id: 1,
      vehicles: 'Bike, Carro e Avião',
      kmTraveled: '200.000 km',
      from: '22 de outubro de 2000',
      to: '22 de agosto de 2021'
    }
    expect(result).to.deep.equal(expected)
  })
})
