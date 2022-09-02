import { Request, Response } from 'express'
import { handleHttp } from '../utils/errorHandler'
import itemServices from '../services/items'

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await itemServices.getItem(id)
    const data = response || 'NOT_FOUND'
    res.send(data)
  } catch (err) {
    handleHttp(res, 'ERROR_GET_ITEM', err)
  }
}

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await itemServices.getItems()
    res.send(response)
  } catch (err) {
    handleHttp(res, 'ERROR_GET_ITEMS', err)
  }
}

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await itemServices.postItem(body)
    res.send(response)
  } catch (err) {
    handleHttp(res, 'ERROR_POST_ITEM', err)
  }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await itemServices.updateItem(id, body)
    res.send(response)
  } catch (err) {
    handleHttp(res, 'ERROR_UPDATE_ITEM', err)
  }
}

const deleteItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params
    const response = await itemServices.deleteItem(id)
    res.send(response)
  } catch (err) {
    handleHttp(res, 'ERROR_DELETE_ITEM', err)
  }
}

export default { getItem, getItems, postItem, updateItem, deleteItem }
