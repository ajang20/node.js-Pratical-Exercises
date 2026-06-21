export const requestLogger = (req,res,next) => {
    const start = Date.now()
    const timeStamp = new Date().toISOString()

    res.on("finish",() => {
        const time = Date.now() - start
        console.log(`[${timeStamp}] ${req.method} ${req.url} - ${time} ms`)
    })
    next()
}


export const getAll = (req,res) => {
    res.status(200).json({sucess:true,message:"Successfully Retrieved all Data"})
}
export const getUsers = (req,res) => {
    res.status(200).json({sucess:true,message:"Successfully Retrieved Users"})
}