import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { emailAddressesService } from './emailAddresses.service'
import { Receiver } from './receiver.model'
@Controller('emailAddresses')
export class EmailAddressesController {
  constructor( private emailAddressesService: emailAddressesService) {}

  @Get()
  async getAll(): Promise<Array<Receiver>> {
    return this.emailAddressesService.getAll()
  }

  @Get(':id')
  async getOne(@Param('id') params:number): Promise<Receiver | string> {
    const receiver = await this.emailAddressesService.getOne(params)
    if(receiver){
      return receiver
    }
    return "Something went wrong"
  }

  @Post()
  async createOne(@Body() params: Receiver): Promise<Receiver> {
    const receiver = await this.emailAddressesService.createOne(params)
    return receiver
  }

  @Put()
  async updateOne(@Body() body: Receiver): Promise<[number]>{
    const receiver = await this.emailAddressesService.updateOne(body)
    return receiver
  }

  @Delete(':id')
  async deleteOne(@Param('id') params: number): Promise<string> {
    await this.emailAddressesService.deleteOne(params)
    return 'Receiver deleted'
  }
}
