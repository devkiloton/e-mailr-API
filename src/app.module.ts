import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { MailModule } from './controllers/mail/mail.module'
import { MailController } from './controllers/mail/mail.controller'
import { Receiver } from './models/receiver.model'
import { MailService } from './services/mail/mail.service'
import { EmailAddressesController } from './controllers/email-address/emailAddresses.controller'
import { EmailAddressesService } from './services/email-addresses/email-addresses.service'
@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env['HOST_DB'],
      port: 3306,
      username: process.env['USERNAME_DB'],
      password: process.env['PASSWORD_DB'],
      database: process.env['DB'],
      autoLoadModels: true,
      synchronize: true
    }),
    SequelizeModule.forFeature([Receiver]),
    MailModule
  ],
  controllers: [EmailAddressesController, MailController],
  providers: [EmailAddressesService, MailService]
})
export class AppModule {}
