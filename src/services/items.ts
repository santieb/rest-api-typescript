import { Car } from '../interfaces/car'
import ItemModel from '../models/item'

const getItems = async () => await ItemModel.find()

const getItem = async (id: string) => await ItemModel.findOne({ _id: id })

const postItem = async (data: Car) => await ItemModel.create(data)

const updateItem = async (id: string, data: Car) =>
  await ItemModel.findOneAndUpdate({ _id: id }, data, { new: true })

const deleteItem = async (id: string) => await ItemModel.remove({ _id: id })

export default { getItem, getItems, postItem, updateItem, deleteItem }
