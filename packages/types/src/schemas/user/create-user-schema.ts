import { z } from "zod";

export const createUserSchema = z.object({
	email: z
		.string()
		.min(1, { message: "O e-mail é obrigatório" })
		.email({ message: "O e-mail deve ser válido" }),
	password: z
		.string()
		.min(6, { message: "A senha deve ter no mínimo 6 caracteres" })
		.max(32, { message: "A senha deve ter no máximo 32 caracteres" })
		.regex(/^(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*?])\S*$/, {
			message:
				"A senha deve conter pelo menos um dígito, uma letra maiúscula, uma letra minúscula e um caractere especial (!@#$%^&*?), e não pode conter espaços.",
		}),
});

export type CreateUserSchema = z.infer<typeof createUserSchema>;
