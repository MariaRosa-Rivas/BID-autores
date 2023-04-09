const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    nombre: { 
        type: String,
        minlength:[3, 'El minimo es de 3'] 
    }
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);

