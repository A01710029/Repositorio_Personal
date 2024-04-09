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

    static fetchOne(id) {
        return db.execute(
            'SELECT * FROM recomendacion WHERE id=?',
            [id]);
    }

    static fetch(id) {
        if(id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

    static delete(id) {
        return db.execute('DELETE FROM recomendacion WHERE id=?', [id]);
    }
}