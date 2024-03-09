const contenido = [];

module.exports = class Recomendacion {
    constructor(mi_rec, mi_razon) {
        this.rec = mi_rec;
        this.razon = mi_razon;
    }

    save() {
        contenido.push({
            rec: this.rec,
            razon: this.razon
        });
    }

    static fetchAll() {
        return contenido;
    }
}