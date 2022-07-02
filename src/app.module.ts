import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EmailAddressesController } from './emailAddresses.controller'

@Module({
  imports: [],
  controllers: [AppController, EmailAddressesController],
  providers: [AppService]
})
export class AppModule {}
