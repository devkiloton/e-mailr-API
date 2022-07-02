import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EmailAddressesController } from './emailAddresses.controller'
import { emailAddressesService } from './emailAddresses.service'
import { Receiver } from './receiver.model'
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'us-cdbr-east-06.cleardb.net',
      port: 3306,
      username: 'b22a48408e1df3',
      password: '119ee50b',
      database: 'heroku_4c421b6f600603c',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Receiver]),
  ],
  controllers: [AppController, EmailAddressesController],
  providers: [AppService, emailAddressesService],
})
export class AppModule {}
