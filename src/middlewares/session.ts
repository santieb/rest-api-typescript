import { NextFunction, Request, Response } from 'express'
import { verifyToken } from '../utils/jwtHandler'
import { JwtPayload } from 'jsonwebtoken'

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwt = req.headers.authorization || ''
    const token = jwt.split(' ').pop()

    const user = verifyToken(`${token}`)
    if (!user) res.status(402).send('INVALID_SESSION')

    req.user = user
    next()
  } catch (err) {
    res.status(402)
    res.send('INVALID_SESSION')
  }
}

export { checkJwt }
