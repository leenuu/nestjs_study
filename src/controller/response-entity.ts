import { Exclude, Expose } from "@nestjs/class-transformer";
import { HttpStatus } from "@nestjs/common";

export class ResponseEntity<T> {
    @Exclude() 
    private _statusCode: HttpStatus;

    @Exclude() 
    private _message: string;

    @Exclude() 
    private _data: T

    @Expose({ name : "status" })
    get __statusCode(): HttpStatus {
        return this._statusCode;
    }

    @Expose({ name : "message" })
    get __message(): string {
        return this._message;
    }

    @Expose({ name: "data" })
    get __data(): T {
        return this._data;
    }

    private constructor(status?: HttpStatus) {
        this._statusCode = status;
        this._message = "";
        this._data = null;
    }

    static ok(message?: string): ResponseEntity<string> {
        return new ResponseEntity<string>(HttpStatus.OK).message("").data("");
    }

    static created<T>(): ResponseEntity<T> {
        return new ResponseEntity<T>(HttpStatus.OK);
    }

    static status<T>(status: HttpStatus): ResponseEntity<T> {
        return new ResponseEntity<T>(status);
    }

    message(message: string): ResponseEntity<T> {
        this._message = message;
        return this;
    }

    data(data: T) : ResponseEntity<T> {
        this._data = data;
        return this;
    }
}

