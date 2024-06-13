import { Router } from 'express'
import { registerUserController, loginUserController } from "../controllers/controlador_cliente.js";

// Crear la instancia de Router
const router = Router()

// Punto 1: Crear la ruta
// Punto 2: invocar al controlador (POST)
router.post("/users", registerUserController)

// Punto 1: Crear la ruta
// Punto 2: invocar al controlador (GET)
router.get("/users/", loginUserController)

// Exportar por defecto la variable router (EJS)
export default router;