import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { termsOfService } from "@/constants/terms-of-service";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Termos de Serviço",
};

export default function TermsOfService() {
	return (
		<main className="flex flex-col gap-4 py-4">
			<div className="flex flex-col items-center">
				<h1 className="font-bold text-4xl">Termos de Serviço</h1>
				<p className="text-muted-foreground">
					Última atualização: 15 de Março de 2025
				</p>
			</div>
			<div className="flex flex-wrap gap-4">
				<div className="flex-1 md:max-w-sm">
					<Card className="md:top-4 md:sticky">
						<CardHeader>
							<CardTitle>Seções</CardTitle>
							<CardDescription>Navegue pelos termos de serviço</CardDescription>
						</CardHeader>
						<CardContent className="flex flex-col">
							{termsOfService.map((section, index) => {
								const sectionIndex = index + 1;

								return (
									<Button
										key={section.id}
										variant="ghost"
										className="justify-start"
										asChild
									>
										<Link href={`#${section.id}`}>
											{sectionIndex}. {section.label}
										</Link>
									</Button>
								);
							})}
						</CardContent>
					</Card>
				</div>
				<div className="flex-1">
					<Card>
						<CardHeader className="pb-0">
							<CardTitle>
								Leia estes Termos de Serviço cuidadosamente antes de usar os
								serviços da rede LunaryMC.
							</CardTitle>
							<CardDescription>
								A utilização dos serviços da rede LunaryMC. implica a aceitação
								dos Termos de Serviço, que regulam o relacionamento do usuário
								com a empresa. Esses termos se aplicam a toda a "Rede LunaryMC"
								– incluindo o servidor para Minecraft, o site, a loja
								lunarymc.com, jogos, minijogos e demais funcionalidades
								acessíveis em qualquer dispositivo. Caso você não concorde
								integralmente com esses termos, não deve utilizar os serviços.
							</CardDescription>
						</CardHeader>
						<CardContent className="dark:prose-invert max-w-none prose prose-slate">
							<section id={termsOfService[0].id}>
								<h2>1. {termsOfService[0].label}</h2>
								<p>
									Bem-vindo ao LunaryMC. Estes Termos de Serviço ("Termos")
									regem o seu acesso e uso do servidor de Minecraft LunaryMC,
									incluindo todos os serviços, recursos e conteúdos oferecidos
									por meio do servidor.
								</p>
								<p>
									Ao acessar ou usar o LunaryMC, você concorda em cumprir e
									estar vinculado a estes Termos. Se você não concordar com
									qualquer parte destes Termos, você não deve acessar ou usar o
									LunaryMC.
								</p>
								<p>
									Reservamo-nos o direito de modificar estes Termos a qualquer
									momento. As modificações entrarão em vigor imediatamente após
									serem publicadas. Seu uso contínuo do LunaryMC após a
									publicação das modificações constitui sua aceitação dos Termos
									modificados.
								</p>
							</section>
							<section id={termsOfService[1].id}>
								<h2>2. {termsOfService[1].label}</h2>
								<p>
									"LunaryMC", "nós", "nosso" referem-se ao servidor de Minecraft
									LunaryMC e sua equipe administrativa.
								</p>
								<p>
									"Serviços" refere-se ao servidor de Minecraft, fórum, loja
									web, e quaisquer outros serviços oferecidos pelo LunaryMC.
								</p>
								<p>
									"Usuário", "você", "seu" referem-se a qualquer pessoa que
									acesse ou use os Serviços do LunaryMC.
								</p>
								<p>"Conta" refere-se à sua conta registrada no LunaryMC.</p>
								<p>
									"Conteúdo" refere-se a qualquer informação, texto, gráficos,
									fotos, vídeos, mensagens, ou outros materiais que apareçam nos
									Serviços.
								</p>
							</section>
							<section id={termsOfService[2].id}>
								<h2>3. {termsOfService[2].label}</h2>
								<p>
									O LunaryMC é destinado a jogadores de Minecraft de todas as
									idades, mas recomendamos supervisão parental para usuários
									menores de 13 anos.
								</p>
								<p>
									Você é responsável por garantir que seu acesso ao LunaryMC
									cumpra todas as leis aplicáveis em sua jurisdição.
								</p>
								<p>
									O LunaryMC se reserva o direito de recusar acesso a qualquer
									pessoa, a qualquer momento, por qualquer motivo, sem aviso
									prévio.
								</p>
							</section>
							<section id={termsOfService[3].id}>
								<h2>4. {termsOfService[3].label}</h2>
								<p>Ao usar o LunaryMC, você concorda em não:</p>
								<ul>
									<li>
										Usar cheats, hacks, mods não autorizados, ou qualquer
										software que ofereça vantagem injusta.
									</li>
									<li>Abusar de bugs, exploits ou falhas do servidor.</li>
									<li>
										Assediar, intimidar, discriminar ou difamar outros usuários.
									</li>
									<li>
										Compartilhar conteúdo inadequado, ofensivo, ilegal ou
										adulto.
									</li>
									<li>Inundar o chat com mensagens repetitivas (spam).</li>
									<li>
										Tentar acessar áreas restritas do servidor ou contas de
										outros usuários.
									</li>
									<li>
										Comercializar itens virtuais por dinheiro real fora dos
										canais oficiais do LunaryMC.
									</li>
									<li>
										Disseminar malware, vírus ou outros códigos maliciosos.
									</li>
									<li>
										Violar qualquer lei aplicável enquanto usar nossos Serviços.
									</li>
								</ul>
							</section>
							<section id={termsOfService[4].id}>
								<h2>5. {termsOfService[4].label}</h2>
								<p>
									O LunaryMC oferece itens virtuais e benefícios para compra com
									dinheiro real através de nossa loja oficial.
								</p>
								<p>
									Todas as compras são processadas por nossos parceiros de
									pagamento. Ao realizar uma compra, você concorda com os termos
									desses parceiros de pagamento.
								</p>
								<p>
									Você reconhece que as compras de itens virtuais conferem
									apenas uma licença limitada, não transferível e revogável para
									usar esses itens dentro do LunaryMC.
								</p>
								<p>
									Os preços e disponibilidade dos itens estão sujeitos a
									alterações sem aviso prévio.
								</p>
							</section>
							<section id={termsOfService[5].id}>
								<h2>6. {termsOfService[5].label}</h2>
								<p>
									Todas as vendas são finais e não reembolsáveis, exceto
									conforme exigido pela lei aplicável.
								</p>
								<p>
									Podemos, a nosso critério exclusivo, oferecer reembolsos em
									circunstâncias excepcionais, como falhas técnicas que impeçam
									a entrega do item comprado.
								</p>
								<p>
									Solicitações de reembolso devem ser enviadas dentro de 7 dias
									da data da compra para nosso suporte através do e-mail de
									contato.
								</p>
							</section>
							<section id={termsOfService[6].id}>
								<h2>7. {termsOfService[6].label}</h2>
								<p>
									Você é responsável por manter a segurança de sua conta,
									incluindo sua senha.
								</p>
								<p>
									Uma conta pode ser utilizada apenas pelo titular registrado.
									Compartilhar contas é estritamente proibido.
								</p>
								<p>
									Você concorda em notificar imediatamente o LunaryMC se
									suspeitar de qualquer violação de segurança ou uso não
									autorizado de sua conta.
								</p>
								<p>
									O LunaryMC não é responsável por quaisquer perdas ou danos
									resultantes de sua falha em cumprir com estas obrigações de
									segurança.
								</p>
							</section>
							<section id={termsOfService[7].id}>
								<h2>8. {termsOfService[7].label}</h2>
								<p>
									O LunaryMC pode, a seu critério exclusivo, suspender ou
									encerrar seu acesso aos Serviços por violação destes Termos ou
									por qualquer outra razão.
								</p>
								<p>
									Em caso de rescisão, você perderá o acesso à sua conta e a
									todos os itens, progressos e benefícios associados.
								</p>
								<p>
									Você pode encerrar sua conta a qualquer momento entrando em
									contato com nossa equipe de suporte.
								</p>
							</section>
							<section id={termsOfService[8].id}>
								<h2>9. {termsOfService[8].label}</h2>
								<p>
									O LunaryMC reserva-se o direito de modificar, suspender ou
									descontinuar qualquer aspecto dos Serviços a qualquer momento,
									incluindo, mas não se limitando a conteúdo, recursos, horas de
									disponibilidade e equipamento necessário para acesso.
								</p>
								<p>
									Tais ações podem ser tomadas sem responsabilidade para com
									você ou terceiros.
								</p>
							</section>
							<section id={termsOfService[9].id}>
								<h2>10. {termsOfService[9].label}</h2>
								<p>
									Se você tiver dúvidas sobre estes Termos de Serviço, por favor
									entre em contato conosco através do e-mail:
									suporte@lunarymc.com
								</p>
								<p>
									Nossa equipe de suporte está disponível para ajudar com
									quaisquer preocupações ou questões relacionadas ao servidor.
								</p>
							</section>
						</CardContent>
					</Card>
				</div>
			</div>
		</main>
	);
}
