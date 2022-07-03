import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/sequelize"
import { Receiver } from "./receiver.model"

@Injectable()
export class emailAddressesService{
  constructor(
    @InjectModel(Receiver) private receiverModel: typeof Receiver
  ) {}

  async getAll(): Promise<Array<Receiver>> {
    return this.receiverModel.findAll()
  }

  async getOne(id: number): Promise<Receiver | null> {
    return this.receiverModel.findByPk(id)
  }

  async createOne(receiver: Receiver): Promise<Receiver> {
    return this.receiverModel.create(receiver)
  }

  async updateOne(receiver: Receiver): Promise<[number]>{
    return this.receiverModel.update(receiver, {
      where: { 
        id: receiver.id 
      }
    })
  }

  async deleteOne(id: number): Promise<void> {
    const receiver = await this.getOne(id)
    if (receiver) {
      receiver.destroy()
    }
  }
}