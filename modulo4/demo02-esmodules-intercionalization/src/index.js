import database from './../database.json'
import Person from './person.js'
import TerminalControler from './TerminalController.js'
import { save } from './repository.js'
const DEFAULT_LANG = "pt-BR"
const STOP_TERM = ':q'

const terminalControler = new TerminalControler()
terminalControler.initializeTerminal(database, DEFAULT_LANG)

async function mainLoop(){
  try {
    const answer = await terminalControler.question()
    if(answer === STOP_TERM){
      terminalControler.closeTerminal()
      console.log('process finished!')
      return;
    }
    const person = Person.generateInstanceFromString(answer)
    terminalControler.updateTable(person.formatted(DEFAULT_LANG))
    await save(person)
    return mainLoop()
  
  } catch (error) {
    console.error('DEU RUIM**',error)
    return mainLoop()
  }
}

await mainLoop()