let fs = require('fs')
const path = require('path')
let inputArr = process.argv.slice(2)
let commands = []
let files = []

//Seprate commands and files

for (let i = 0; i < inputArr.length; i++) {
  let x = inputArr[i].charAt(0)
  if (x == '-') {
    commands.push(inputArr[i])
  } else {
    files.push(inputArr[i])
  }
}

let contentArr = ''

for (let i = 0; i < files.length; i++) {
  const filepath = path.join(__dirname, files[i])
  if (!fs.existsSync(filepath))
    return console.log(path.basename(filepath), 'does not exist.')
  buffer = fs.readFileSync(filepath)
  contentArr = contentArr + buffer + '\r\n'
}

contentArr = contentArr.split('\r\n')

// temp = ''


console.log(contentArr.join('\n'))