import { AppService } from "@/infra/app.service";
import { Module } from "@nestjs/common";
import { CreateUserController } from "./create-user.controller";

@Module({
	controllers: [CreateUserController],
	providers: [AppService],
})
export class AccountModule {}
