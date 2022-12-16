import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class List {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: String, nullable: true })
  title: string | null;

  @Column({ type: String, nullable: true })
  description: string | null;

  @Column({ type: Date, nullable: true })
  date: Date | null;

  @Column({ type: String, default: "Todo" })
  status: string;
}
