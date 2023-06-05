import { Request, Response, Router } from "express"
import { listRouter } from "./list"

const router = Router()

router.use("/list", listRouter)

export default router
