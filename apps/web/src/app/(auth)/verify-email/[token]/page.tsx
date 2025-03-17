interface IVerifyEmail {
	params: Promise<{
		token: string;
	}>;
}

export default async function VerifyEmail({ params }: IVerifyEmail) {
	const { token } = await params;

	return (
		<main>
			<h1>Verify Email</h1>
			<p>Token: {token}</p>
		</main>
	);
}
