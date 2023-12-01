const db = require('../models/db.js');

const Contacts = require('../models/Contacts.js');

const contactsController = {
    getContacts: async function(req, res){
        const contacts = await Contacts.find();

        console.log(contacts);

        res.json(contacts);
    }
}

module.exports = contactsController;
