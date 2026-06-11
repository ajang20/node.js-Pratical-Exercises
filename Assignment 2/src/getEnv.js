

const env = (req,res) => {

const envCotainer = {}

for( const [key,value] of Object.entries(process.env)){
    const upperkey = key.toUpperCase()

    if( upperkey.includes('SECRET') || upperkey.includes('KEY') || upperkey.includes('PASSWORD')){
        envCotainer[key] = "***"
    }
    else{
        envCotainer[key] = value
    }
}

res.writeHead(200)
return res.end(JSON.stringify(envCotainer))
}

module.exports = env