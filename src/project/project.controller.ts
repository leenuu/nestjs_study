import { Controller, Post, HttpStatus } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { ResponseEntity } from "src/utill/response.utill";

@Controller("project")
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Post("test")
    test() {
        return ResponseEntity.create(HttpStatus.OK, "test complete", "");
    }
}
