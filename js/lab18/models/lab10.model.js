const db = require("../util/database");

module.exports = class Recomendacion {
    constructor(mi_rec, mi_razon, username) {
        this.rec = mi_rec;
        this.razon = mi_razon;
        this.username = username;
    }

    save() {
        return db.execute(
            'INSERT INTO recomendacion (nombre, razon, username) VALUES (?, ?, ?)',
            [this.rec, this.razon, this.username]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM recomendacion')
    }
}