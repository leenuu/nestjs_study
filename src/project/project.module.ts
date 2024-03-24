import { Module } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { ProjectController } from "./project.controller";
import { AuthModule } from "src/auth/auth.module";
import { AuthGuard } from "src/auth/auth.guard";

@Module({
  imports: [AuthModule],
  controllers: [ProjectController],
  providers: [ProjectService, AuthGuard],
})
export class ProjectModule {}
