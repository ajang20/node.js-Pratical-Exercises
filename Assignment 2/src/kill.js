const fs = require('node:fs')
const path = require('node:path')
const kill = (req,res) => {

    console.log("Warning!, Server will shut down in 3 seconds ")

    res.writeHead(200)
    res.end(JSON.stringify({message:"Server will shutting down in 3 seconds..."}))

    process.on( 'exit', (code) => {
       const timeStamp = new Date().toISOString()
       const file = path.join(__dirname,"server.log")
       const text = `Server shut down at ${timeStamp}`

       fs.writeFileSync(file,text)


    } )

    setTimeout(() => {
        process.exit(1)
    },3000)

}

module.exports = kill