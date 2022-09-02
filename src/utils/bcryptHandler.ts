import { hash, compare } from 'bcryptjs'

const encrypt = async (pass: string) => await hash(pass, 8)

const verify = async (pass: string, passHash: string) => await compare(pass, passHash)

export { encrypt, verify }
