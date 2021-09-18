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

//-s command
if (commands.includes('-s')) {
  for (let i = 1; i < contentArr.length; i++) {
    if (
      (contentArr[i] == '' && contentArr[i - 1] == '') ||
      (contentArr[i] == '' && contentArr[i - 1] == null)
    ) {
      contentArr[i] = null
    }
  }
  tempArr = []
  for (let i = 0; i < contentArr.length; i++) {
    if (contentArr[i] !== null) {
      tempArr.push(contentArr[i])
    }
  }
  contentArr = tempArr
}

//-n

if (commands.includes('-n')) {
  for (let i = 0; i < contentArr.length; i++) {
    contentArr[i] = `${i + 1} ` + contentArr[i]
  }
}


//-b

if (commands.includes('-b')) {
  let count = 1
  for (let i = 0; i < contentArr.length; i++) {
    if (contentArr[i] !== '') contentArr[i] = `${count} ` + contentArr[i]
    count++
  }
}

console.log(contentArr.join('\n'))
