import 'dotenv/config'
import { sign, verify } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || ''

const generateToken = async (id: string) => await sign(id, JWT_SECRET)

const verifyToken = (token: string) => verify(token, JWT_SECRET)

export { generateToken, verifyToken }
