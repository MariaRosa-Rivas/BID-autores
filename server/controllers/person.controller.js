const { Person } = require("../models/person.model");

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createPerson = async (request, response) => {
    try {
        const { nombre } = request.body;
        persona = await Person.create({
            nombre,
        });
        response.json(persona);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllPeople = async (request, response) => {
    try {
        const persons = await Person.find({})
        response.json(persons);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getPerson = async (request, response) => {
    try {
        const persona = await Person.findOne({_id:request.params.id})
        response.json(persona);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updatePerson = async (request, response) => {
    try {
        const persona = await Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        response.json(persona);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deletePerson = async (request, response) => {
    try {
        const persona = await Person.deleteOne({ _id: request.params.id })
        response.json(persona);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}