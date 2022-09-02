import ItemModel from '../models/item'

const getOrders = async () => await ItemModel.find()

export default { getOrders }
