console.log('this worked')
const name = 'Jay'

const add = function(a,b){
    return a + b
}
//add will be exported to the app to allow us to use the function on the app.js file

module.exports = add