import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { receiver } from './IReceiver'
@Controller('emailAddresses')
export class EmailAddressesController {
  constructor() {}

  receivers = [
    { id: 1, email: 'Poc@gmail.com', name: 'paula' },
    { id: 2, email: 'jorge@gmail.com', name: 'mario' }
  ]

  @Get()
  getAll(): Array<receiver> {
    return this.receivers
  }

  @Get(':id')
  getOne(@Param() params: receiver): string {
    return this.receivers[params.id].email
  }

  @Post()
  createOne(@Body() params: receiver): Array<receiver> {
    this.receivers.push(params)
    return this.receivers
  }

  @Put()
  updateOne(@Body() params: receiver): receiver{
    return params
  }

  @Delete()
  deleteOne(): Array<receiver> {
    this.receivers.pop()
    return this.receivers
  }
}
