/**
 * Lesson 3
 */
const yargs = require('yargs')
// yargs.version('1.1.0')
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     handler: function () {
//         console.log('Adding a new note!')
//     }
// })
// console.log(yargs.argv)

/**
 * Lesson 4
 * 
 * jalankan perintah => node app.js --title="Hallo" --body="Hello aku ardi
 */
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

console.log(yargs.argv)
