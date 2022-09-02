import { Request, Response } from 'express'
import { handleHttp } from '../utils/errorHandler'
import authServices from '../services/auth'

const register = async ({ body }: Request, res: Response) => {
  try {
    const response = await authServices.register(body)
    res.send(response)
  } catch (err) {
    handleHttp(res, 'ERROR_POST_REGISTER', err)
  }
}

const login = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body
    const response = await authServices.login({ email, password })

    if (!response) res.status(403).send('ERROR_AUTH')
    res.send(response)
  } catch (err) {
    handleHttp(res, 'ERROR_POST_LOGIN', err)
  }
}

export default { register, login }
