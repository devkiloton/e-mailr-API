import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EmailAddressesController } from './emailAddresses.controller'
import { emailAddressesService } from './emailAddresses.service'
import { Receiver } from './receiver.model'
import { MailModule } from './mail/mail.module';
import { MailController } from './mail/mail.controller'
import { MailService } from './mail/mail.service'
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
      synchronize: true,
    }),
    SequelizeModule.forFeature([Receiver]),
    MailModule,
  ],
  controllers: [AppController, EmailAddressesController, MailController],
  providers: [AppService, emailAddressesService, MailService],
})
export class AppModule {}
