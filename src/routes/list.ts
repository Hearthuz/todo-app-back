import { Router } from "express"
import { listsRepository } from "../repositories"

const router = Router()

router.get("", async (req, res) => {
  const lists = await listsRepository.find({ order: { id: "asc" } })
  return res.send(lists)
})

router.get("/:id", async (req, res) => {
  const listId = req.params.id
  const lists = await listsRepository.findOneBy({ id: listId })
  return res.json(lists)
})

router.post("", async (req, res, next) => {
  try {
    const list = await listsRepository.save(req.body)
    return res.json(list)
  } catch (err) {
    console.error(err)
    next(err)
  }
})

router.patch("/:id", async (req, res, next) => {
  try {
    const listId = req.params.id
    const todo = await listsRepository.findOneByOrFail({ id: listId })

    Object.assign(todo, req.body)
    listsRepository.save(todo)
    return res.send(todo)
  } catch (err) {
    next(err)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    const listId = req.params.id
    const list = await listsRepository.findOneByOrFail({ id: listId })
    listsRepository.remove(list)
    return res.status(204).send()
  } catch (err) {
    next(err)
  }
})

export const listRouter = router
