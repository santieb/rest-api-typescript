import { Request, Response } from 'express'
import { handleHttp } from '../utils/errorHandler'
import { JwtPayload } from 'jsonwebtoken'
import orderServices from '../services/orders'

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const getOrders = async (req: RequestExt, res: Response) => {
  try {
    const response = await orderServices.getOrders()
    res.send({
      data: response,
      user: req.user
    })
  } catch (err) {
    handleHttp(res, 'ERROR_GET_ITEMS', err)
  }
}

export default { getOrders }
