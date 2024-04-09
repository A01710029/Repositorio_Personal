/* Stored procedure pago Colegiatura */
CREATE PROCEDURE insertar_Pago(IN pIDDeuda INT, IN pmotivo VARCHAR(50), IN pmontoPagado FLOAT, IN pNota VARCHAR(200), In ptipoPago VARCHAR(30),
IN pfechaPago TIMESTAMP)
BEGIN
INSERT INTO Pago (IDDeuda, Motivo, montoPagado, Nota, tipoPago, fechaPago)
VALUES(pIDDeuda, pmotivo, pmontoPagado, pNota, ptipoPago, pfechaPago);
END

/* Llamar el stored procedure */
CALL insertar_Pago('31', 'Pago Abril', '100', 'Perdon por pagar tarde', 'Tarjeta', '2024-04-02');

/* Con esto lo probe en la pagina web y ya se actualizo en base a lo que opuso el usuario */
/* PagoExtras.save_pago(32, request.body.motivo, request.body.monto, 'Perdon por pagar tarde', 'Efectivo', '2024-04-02'); */
/* static save_pago(iddeuda, motivo, monto, nota, tipo, fecha) {
        return db.execute(`CALL insertar_Pago 
        (?, ?, ?, ?, ?, ?)`, 
        [iddeuda, motivo, monto, nota, tipo, fecha]);
    } */

/* Stored procedure de pago diplomado */
CREATE DEFINER=root@localhost PROCEDURE insertarPagoDiplomado(IN pmatricula VARCHAR(20), IN pIDDiplomado VARCHAR(20), IN pfechaPago TIMESTAMP, 
IN pmontoPagado FLOAT, IN pMotivo VARCHAR(40), IN pNota VARCHAR(60), IN ptipoPago VARCHAR(30))
BEGIN
INSERT INTO pagaDiplomado VALUES (pmatricula, pIDDiplomado, pfechaPago, pmontoPagado, pmotivo, pNota, ptipoPago);
END

/* Llamar el stored procedure */
CALL insertarPagoDiplomado ('8001', 'DIPL0002', '2024-04-02', '690', 'Pago AI Moda', 'Perdon por pagar tarde', 'Transferencia');

/* Con este script lo probe en la pagina web para ver si funcionaba */
/* PagoExtras.save_pago_diplomado(8001, 'DIPL0005', '2024-04-02', request.body.monto, request.body.motivo, 'Perdon por pagar tarde', 'Tarjeta'); */
/* static save_pago_diplomado(matricula, iddiplomado, fecha, monto, motivo, nota, tipo) {
        return db.execute(CALL insertarPagoDiplomado (?, ?, ?, ?, ?, ?, ?), 
        [matricula, iddiplomado, fecha, monto, motivo, nota, tipo]);
    } */

/* Stored procedure pago Extra */
CREATE PROCEDURE insertarPagoExtra (IN pIDPagosExtra VARCHAR(10), IN pmotivoPago VARCHAR(40), IN pmontoPagar FLOAT)
BEGIN
INSERT INTO pagosExtras VALUES(pIDPagosExtra, pmotivoPago, pmontoPagar);
END

/* Llamar el stored procedure */
CALL insertarPagoExtra ('PAGEX021', 'Robot', 650);

/* Con este script lo probe en la pagina web para ver si funcionaba */
/* PagoExtras.save_pago_Extra('PAGEX021',request.body.monto, request.body.motivo); */
/* static save_pago_Extra(idpagoextra, monto, motivo) {
        return db.execute(CALL insertarPagoExtra (?, ?, ?);, 
        [idpagoextra, monto, motivo]);
    } */