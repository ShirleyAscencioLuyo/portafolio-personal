-- Base de datos de contacto
CREATE DATABASE IF NOT EXISTS db_personal;
-- Poniendo en uso la base de datos
USE db_personal;

-- Creando la tabla de registro contacto
CREATE TABLE CONTACTO (
ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
NOMCON VARCHAR(200),
CORRCON VARCHAR(100),
DESCON TEXT
);

-- Ingresando registros a la tabla contacto
INSERT INTO CONTACTO (NOMCON, CORRCON, DESCON)
VALUES ('Alex Doe', 'alex.doe@gmail.com', 'Solicitud de matricula para 1° grado');

-- Listando los registros de la tabla contacto
SELECT * FROM CONTACTO;