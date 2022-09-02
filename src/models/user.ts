import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user'

const UserSchema = new Schema<User>({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  name: {
    type: String
  },
  description: {
    type: String,
    default: 'This is a description user...'
  }
}, {
  timestamps: true,
  versionKey: false
})

const UserModel = model('users', UserSchema)
export default UserModel
