import { Router } from 'express'
import authCtrl from '../controllers/auth'
const router = Router()

router
  .post('/register', authCtrl.register)
  .post('/login', authCtrl.login)

export { router }
