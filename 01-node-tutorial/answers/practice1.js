const data = require('./practice2.js')
console.log(data);
const os = require ('os')
const {writeFile} = require('fs')

console.log(os.userInfo().username)

writeFile('./content/practice.txt', `Sentence: ${data.sentence} UserName: ${os.userInfo().username}`,(err,result) => {
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    })