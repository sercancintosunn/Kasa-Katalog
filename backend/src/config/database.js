const mongoose = require('mongoose')

class Database{
    constructor(){
        if(!Database.instance){
            this.conection = null;
            Database.instance = this
        }
        return Database.instance
    }

    async connect(){

        if(this.conection){
            return this.conection;
        }

        try {
            const mongoURI = process.env.MONGODB_URI
            const conn = await mongoose.connect(mongoURI)
            this.connection = conn
            console.log('Veritabanına bağlanıldı')
        } catch (err) {
            console.log("Veritabanına bağlanılmadı")
            process.exit(1)
        }
    }
}

const instance = new Database()
module.exports = instance