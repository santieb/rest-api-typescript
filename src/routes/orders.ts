import { Router } from 'express'
import ordersCtrl from '../controllers/orders'
import { checkJwt } from '../middlewares/session'

const router = Router()

router.get('/', checkJwt, ordersCtrl.getOrders)

export { router }
