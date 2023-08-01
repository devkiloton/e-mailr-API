import { MailerModule } from '@nestjs-modules/mailer'
import { Module } from '@nestjs/common'
import { join } from 'path'
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import { MailService } from 'src/services/mail/mail.service'
@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async () => ({
        transport: {
          service: 'gmail',
          auth: {
            user: process.env['MAIL_USER'],
            pass: process.env['MAIL_PASSWORD']
          }
        },
        defaults: {
          from: `Xarlat <${process.env['MAIL_FROM']}>`
        },
        template: {
          dir: join(__dirname, 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true
          }
        }
      })
    })
  ],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
