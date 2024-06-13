import bcrypt from 'bcrypt';

//Definir el modelo para el cliente

const URL = "http://localhost:4000/cliente"

// Objeto para el registro de los clientes
const UserModel = {

    async registerUserModel(newClient){
        // Peticion POST para registrar un nuevo cliente
        const peticion = await fetch(URL, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newClient)
        });
        const data = await peticion.json();
        // Retornamos la respuesta del servidor
        return data;
    },

    async loginUserModel(username, password){
        // Pinto 1: Peticion GET para obtener los clientes
        const peticion = await fetch(URL);
        const clients = await peticion.json();
        // Comprobar si el cliente existe
        const client = clients.find(client => client.username === username);
        if (!client) {
            return {msg: 'Usuario o contraseña incorrectos'};
        }
        // Comprobar si la contraseña es correcta
        const passwordMatch = await bcrypt.compare(password, client.password);
        if (client && passwordMatch) {
            return client;
        } else {
            return {msg: "contraseña incorrecta"};
        }
    },
}

export default UserModel;