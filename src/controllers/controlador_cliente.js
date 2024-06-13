import UserModel from "../models/modelo_cliente.js";
import bcrypt from 'bcrypt'; // Importar la libreria para encriptar contraseñas
import { v4 as uuidv4 } from 'uuid'; // Importar la funcion para generar un id unico

const registerUserController = async (req, res) => {
    const {username, password, ...other} = req.body;
    // Punto 1: Creacion de un objeto con los datos enviados por el cliente
    const newUser = {
        id: uuidv4(),
        username,
        password: await bcrypt.hash(password, 10), // Encriptar la contraseña
        ...other // Operador Spread
    }
    try {
        // Punto 2: Mandar a la base de datos el nuevo cliente
        const result = await UserModel.registerUserModel(newUser);
        res.status(201).json(result); // Punto 3: Enviar respuesta al cliente
    } catch (error) {
        res.status(500).json(error.message);
    }
}

const loginUserController = async (req, res) => {
    try {
        // Punto 1: Obtener  el ID de la URL
        const username = req.body.username.toString();
        const password = req.body.password.toString();
        // Punto 2: Conprobar si el usuario existe en la base de datos
        const user = await UserModel.loginUserModel(username, password);
        const status = user.error ? 404 : 200;
        res.status(status).json(user); // Punto 3: Enviar respuesta al cliente
    } catch (error) {
        res.status(500).json(error.message);
    }
}

export { 
    registerUserController,
    loginUserController
} // Exportar el controlador