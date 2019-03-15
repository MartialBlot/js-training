'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase (a){
    let jad=a.split(" ");
    for (let i=0; i < jad.length;i++){
        jad[i]=jad[i].charAt(0).toUpperCase()+jad[i].slice(1);
    }
    let jaden = jad.join(" ");
    return jaden;
}

//console.log(jadenCase("How are you ?"))


//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('How are you ?'),'How Are You ?')
//assert.strictEqual(jadenCase('Salut toi comment ça va ?'), 'Salut Toi Comment Ça Va ?')
//assert.fail('You must write your own tests')
// End of tests */
