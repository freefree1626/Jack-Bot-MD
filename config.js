import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['212625457341', '𝑀𝑉𝑅𝛩 𝐵𝛩𝑇', true], 
 ['212635937387', '𝑀𝑉𝑅𝛩 𝐵𝛩𝑇', true],  ['201141045951'], ['201024882594'], ['201080898312'], ['201119571169'], ['201141045951'], ['201066909808'], ['201159596672'], ['201158460046'], ['201066909808']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +201208386317
global.confirmCode = ''

global.animxscans = ['201208386317']
global.suittag = ['201208386317']
global.mods = []
global.prems = []

global.packname = '𝟎𝟏𝟐𝟎𝟖𝟑𝟖𝟔𝟑𝟏𝟕'
global.author = '𝑀𝑉𝑅𝛩 𝐵𝛩𝑇'
global.wm = '𝑀𝑉𝑅𝛩 𝐵𝛩𝑇'
global.wm2 = '𝑀𝑉𝑅𝛩 𝐵𝛩𝑇'
global.azami = '𝑀𝑉𝑅𝛩 𝐵𝛩𝑇'
global.cb = '𝑀𝑉𝑅𝛩 𝐵𝛩𝑇'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.KMA = '╰━━━〔 *𝑀𝑉𝑅𝛩 𝐵𝛩𝑇* 〕━━━━━⬣'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '𝑀𝑉𝑅𝛩 𝐵𝛩𝑇'
global.devnum = '201208386317'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
