import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table
export class Receiver extends Model<Receiver> {
  constructor(email: string, name: string) {
    super()
    this.email = email
    this.name = name
  }
  @Column({
    type: DataType.STRING(64),
    allowNull: false,
  })
  email: string
  @Column({
    type: DataType.STRING(64),
    allowNull: false,
  })
  name: string
}
