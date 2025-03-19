import { AppModule } from "@/infra/app.module";
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import request from "supertest";
import { App } from "supertest/types";

describe("Create user (E2E)", () => {
	let app: INestApplication<App>;

	beforeAll(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();

		await app.init();
	});

	test("[POST] /users", async () => {
		const body = {
			email: "example@email.com",
			password: "PSW@p4ssw0rd",
		};

		const response = await request(app.getHttpServer())
			.post("/users")
			.send(body);

		expect(response.statusCode).toBe(201);
		expect(response.body).toEqual({
			token: expect.any(String),
			user: expect.objectContaining({
				email: body.email,
			}),
		});
	});
});
