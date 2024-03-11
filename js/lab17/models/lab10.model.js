const db = require("../util/database");

module.exports = class Recomendacion {
    constructor(mi_rec, mi_razon) {
        this.rec = mi_rec;
        this.razon = mi_razon;
    }

    save() {
        return db.execute(
            'INSERT INTO recomendacion (nombre, razon, username) VALUES (?, ?, "palmadamartinez")',
            [this.rec, this.razon]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM recomendacion')
        .then(([rows, fields]) => {
            console.log(rows); // Log the result
            return rows; // Return the data
        })
        .catch(err => {
            console.log(err); // Log any errors
            throw err; // Throw the error for handling elsewhere
        });
    }
}