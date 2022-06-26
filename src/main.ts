import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function start() {
  try {
    const app = await NestFactory.create(AppModule)
    await app.listen(3000)
  } catch (e) {
    console.log(e)
  }
}
start()
