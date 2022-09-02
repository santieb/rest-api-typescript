import { Router } from 'express'
import itemsCtrl from '../controllers/items'
const router = Router()

router
  .get('/', itemsCtrl.getItems)
  .get('/:id', itemsCtrl.getItem)

  .post('/', itemsCtrl.postItem)

  .put('/:id', itemsCtrl.updateItem)

  .delete('/:id', itemsCtrl.deleteItem)

export { router }
