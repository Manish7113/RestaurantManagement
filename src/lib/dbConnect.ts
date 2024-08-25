import mongoose from "mongoose";

type connectionObject = {
    isConnected ?: number
}

const connection : connectionObject = {} 

async function dbconnect(): Promise<void> {
    if(connection.isConnected)
    {
        console.log('Already connected')
        return
    }
    try{

        const db  = await mongoose.connect(process?.env?.MONGODBURI || '', {})
        connection.isConnected = db.connections[0].readyState
        console.log('DB connected')


    }
    catch(error)
    {
        console.log('DB connection is failed')
        process.exit(1)
    }
    
}

export default dbconnect