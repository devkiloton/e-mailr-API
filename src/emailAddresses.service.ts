import { Injectable } from "@nestjs/common"
import { Receiver } from "./receiver.model"

@Injectable()
export class emailAddressesService{
    receivers: Array<Receiver> = [
        // new Receiver("yarego", "jdskjdd"),
        // new Receiver("yaregosas", "jdsasakjdd")  
      ]

  getAll(): Array<Receiver> {
    return this.receivers
  }

  getOne(params: Receiver): string {
    return this.receivers[params.id].email
  }

  createOne(params: Receiver): Array<Receiver> {
    this.receivers.push(params)
    return this.receivers
  }

  updateOne(params: Receiver): Receiver{
    return params
  }

  deleteOne(): Array<Receiver> {
    this.receivers.pop()
    return this.receivers
  }
}