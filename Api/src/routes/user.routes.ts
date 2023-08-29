import { Router } from 'express'
import * as userController from '../controllers/user.controller'
const router = Router()

router.get('/users', userController.getAllUsers)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)

export default router