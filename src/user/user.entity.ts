import { RegistDto } from "src/dto/user/regist-dto";
import { BaseEntity, PrimaryColumn, Column, Entity, Timestamp } from "typeorm";

@Entity()
class User extends BaseEntity {
    constructor(userId: String, name: String, email: String, password: String) {
        super()
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.enabled = true;
    }

    @PrimaryColumn({ type: "varchar" })
    userId!: String;
    @Column({ type: "varchar" })
    name!: String;
    @Column({ type: "varchar" })
    email!: String;
    @Column({ type: "text" })
    password!: String;
    @Column({ type: "tinyint" })
    enabled!: Boolean;
    @Column({ type: "timestamp" })
    createdAt!: Timestamp;
    @Column({ type: "timestamp" })
    updatedAt!: Timestamp;
}

class UserBuilder {
    private userId!: String;
    private name!: String;
    private email!: String;
    private password!: String;

    setDto(dto: RegistDto): UserBuilder {
        this.userId = dto.userId;
        this.name = dto.name;
        this.email = dto.email;
        this.password = dto.password;
        return this;
    }

    build(): User {
        return new User(this.userId, this.name, this.email, this.password);
    }

}
export {User, UserBuilder};