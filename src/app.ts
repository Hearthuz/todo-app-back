import cors from "cors"
import express, { json, urlencoded } from "express"
import router from "./routes"
import errorHandler from "./errorHandler"

export const createApp = () => {
  const app = express()

  app.set("trust proxy", true)

  app.use(json())
  app.use(urlencoded({ extended: true, limit: "5mb" }))
  app.use(cors())

  app.use(router)
  app.use(errorHandler)

  return app
}
