import { User } from '../interfaces/user'
import { Auth } from '../interfaces/auth'
import UserModel from '../models/user'
import { encrypt, verify } from '../utils/bcryptHandler'
import { generateToken } from '../utils/jwtHandler'

const register = async ({ email, password, name }: User) => {
  const user = await UserModel.findOne({ email })
  if (user) return 'ALREADY_USER'

  const passwordHash = await encrypt(password)

  return await UserModel.create({ email, password: passwordHash, name })
}

const login = async ({ email, password }: Auth) => {
  const user = await UserModel.findOne({ email })
  if (!user) return

  const { id, password: passwordHash } = user

  const isValid = await verify(password, passwordHash)
  if (!isValid) return

  const token = await generateToken(id)
  return { user, token }
}

export default { register, login }
