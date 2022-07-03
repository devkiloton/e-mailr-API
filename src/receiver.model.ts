import { Column, DataType, Model, Table } from "sequelize-typescript"

@Table
export class Receiver extends Model<Receiver> {
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
