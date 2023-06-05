import { dataSource } from "./dataSource"
import { List } from "./model"

export const listsRepository = dataSource.getRepository(List)
