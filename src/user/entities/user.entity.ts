import { BaseEntity, PrimaryColumn, Column, Entity, Timestamp } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({ type: "varchar" })
  userId: string;
  @Column({ type: "varchar" })
  name: string;
  @Column({ type: "varchar" })
  email: string;
  @Column({ type: "text" })
  password: string;
  @Column({ type: "tinyint" })
  enabled: boolean;
  @Column({ type: "timestamp" })
  createdAt: Timestamp;
  @Column({ type: "timestamp" })
  updatedAt: Timestamp;
}
