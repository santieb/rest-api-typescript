import { Schema, model } from 'mongoose'
import { Car } from '../interfaces/car'

const ItemSchema = new Schema<Car>({
  name: {
    type: 'string',
    require: true
  },
  color: {
    type: String,
    require: true
  },
  gas: {
    type: String,
    enum: ['gasoline', 'electric'],
    require: true
  },
  year: {
    type: Number,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  }
}, {
  timestamps: true,
  versionKey: false
})

const ItemModel = model('items', ItemSchema)
export default ItemModel
