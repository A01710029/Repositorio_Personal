const db = require("../util/database");

module.exports = class Usuario {
    constructor(mi_username, mi_password) {
        this.username = mi_username;
        this.password = mi_password;
    }

    save() {
        return db.execute(
            'INSERT INTO usuario (username, password) VALUES (?, ?)',
            [this.username, this.password]
        );
    }

    static fetchAll() {
        return db.execute('SELECT * FROM usuario')
    }

    static fetchOne(username, password) {
        return db.execute('SELECT * FROM usuario WHERE username=? AND password=?',
        [username, password]);
    }
}