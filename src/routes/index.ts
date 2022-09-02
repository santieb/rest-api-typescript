import { Router } from 'express'
import { readdirSync } from 'fs'

const router = Router()
const PATH_ROUTER = `${__dirname}`

const cleanFileName = (fileName: string) => fileName.split('.').shift()

// eslint-disable-next-line
readdirSync(PATH_ROUTER).map(fileName => {
  const cleanName = cleanFileName(fileName)
  if (cleanName !== 'index') {
    import(`./${cleanName}`).then(moduleRouter => {
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})

export { router }
