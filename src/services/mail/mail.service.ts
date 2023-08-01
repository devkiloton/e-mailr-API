import { Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(receiver: string, name: string) {
    await this.mailerService.sendMail({
      to: receiver,
      subject: `${name}, bem vindo à Xarlat!`,
      template: './confirmation',
      context: {
        name: name,
        url: 'xarlat.com'
      }
    })
  }
}
