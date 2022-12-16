import 'reflect-metadata'
import { createApp } from './app'
import { dataSource } from './dataSource'
import { PORT, HOST } from './config'

const connect: () => void = () =>
  dataSource
    .initialize()
    .then(() => {
          console.log('DB initialized')
        }
    )
    .catch((err) => {
      console.error(err)
      setTimeout(() => connect(), 3000)
    })

connect()

const app = createApp()

app.listen(PORT, HOST, () =>
  console.log(
    `server started, listening on http(s)://${HOST}:${PORT}`
  )
)