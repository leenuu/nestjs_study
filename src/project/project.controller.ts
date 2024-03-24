import { Controller, Post, HttpStatus, UseGuards } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { ResponseEntity } from "src/utill/response.utill";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("project")
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @UseGuards(AuthGuard)
  @Post("test")
  test() {
    return ResponseEntity.create(HttpStatus.OK, "test complete", "");
  }
}
