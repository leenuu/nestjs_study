import { HttpStatus } from "@nestjs/common";

export class ResponseEntity<T> {
  // readonly status: string;

  private constructor(
    readonly status: HttpStatus,
    readonly message: string,
    readonly data: T,
  ) {}

  static create<T>(
    status: HttpStatus,
    message: string,
    data: T,
  ): ResponseEntity<T> {
    return new ResponseEntity<T>(status, message, data);
  }
}
