import mongoose  from 'mongoose';

const Connection = async (username = 'admin1', password = 'Zxcvbnm123') => {
    const URL = `mongodb://${username}:${password}@ac-6dhebbb-shard-00-00.7v1nkoi.mongodb.net:27017,ac-6dhebbb-shard-00-01.7v1nkoi.mongodb.net:27017,ac-6dhebbb-shard-00-02.7v1nkoi.mongodb.net:27017/?ssl=true&replicaSet=atlas-9fghv9-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Documents`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;