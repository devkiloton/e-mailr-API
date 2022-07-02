import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { emailAddressesService } from './emailAddresses.service'
import { Receiver } from './receiver.model'
@Controller('emailAddresses')
export class EmailAddressesController {
  constructor( private emailAddressesService: emailAddressesService) {}

  @Get()
  getAll(): Array<Receiver> {
    return this.emailAddressesService.getAll()
  }

  @Get(':id')
  getOne(@Param() params: Receiver): string {
    return this.emailAddressesService.getOne(params)
  }

  @Post()
  createOne(@Body() params: Receiver): Array<Receiver> {
    this.emailAddressesService.receivers.push(params)
    return this.emailAddressesService.receivers
  }

  @Put()
  updateOne(@Body() params: Receiver): Receiver{
    return params
  }

  @Delete()
  deleteOne(): Array<Receiver> {
    this.emailAddressesService.receivers.pop()
    return this.emailAddressesService.receivers
  }
}
