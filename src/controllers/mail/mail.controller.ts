import { Controller, Get, Param } from '@nestjs/common'
import { MailService } from 'src/services/mail/mail.service'

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get(':email/:name')
  signUp(@Param('email') email: string, @Param('name') name: string) {
    console.log(email, name)
    return this.mailService.sendUserConfirmation(email, name)
  }
}
