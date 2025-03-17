import { z } from "zod";

export const forgotPasswordSchema = z.object({
	email: z
		.string()
		.min(1, { message: "O e-mail é obrigatório" })
		.email({ message: "O e-mail deve ser válido" }),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
