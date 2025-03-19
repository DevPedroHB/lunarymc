import { Controller, Get } from "@nestjs/common";
import { AppService } from "src/infra/app.service";

@Controller()
export class CreateUserController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}
}
