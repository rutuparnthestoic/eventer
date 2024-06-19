//Caching the connecting ( Mongo db )
//As Vercel is going to be used for deployment, we have to cache the DB connection for efficiency.
//In serverless env like vercel, code runs on short lived instances (lambdas) instead of a full fledged server.
//So whenever a HTTP req comes, the code is run on lambdas or instances and vercel scales these instances as requests increase.
//Now, for each req, vercel will create a new instance of the code and function in general.
//This will result in multiple instances of DB connection function, and lets say if 5 users access website at same time, 
//as a result, 5 separate database connections would be made, which is inefficient and could lead to resource exhaustion.

//While cached connection works like this : 
//When the first user accesses the website, a new instance of the function is created, and connectToDatabase is called.
//The connection is established, and cached in that instance.
//If the second user’s request is routed to the same instance (while it's still "warm"), the cached connection will be reused.
//If the second user's request is routed to another instance then it will create separate connection as in vercel, instances dont share memory.


import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

//Cached is a variable that will store the connection if exist or a conn and promise which are initially null.
let cached = (global as any).mongoose || {conn: null, promise: null}


//Function to connect.
export const connectToDatabase = async () => {

    //If conn already exist, use the same conn.
    if (cached.conn) return cached.conn;

    //If URI does not exist, give an error.
    if(!MONGODB_URI) throw new Error('Mongo URI Missing');

    //If promise exist use it else create a new connection and store it in promise.
    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'eventer',
        bufferCommands: false,
    })

    //Once promise is fulfilled, store the connection object in conn.
    cached.conn = await cached.promise;

    //Return the connection object.
    return cached.conn;

}