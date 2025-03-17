import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { privacyPolicy } from "@/constants/privacy-policy";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Política de Privacidade",
};

export default function PrivacyPolicy() {
	return (
		<main className="flex flex-col gap-4 py-4">
			<div className="flex flex-col items-center">
				<h1 className="font-bold text-4xl">Política de Privacidade</h1>
				<p className="text-muted-foreground">
					Última atualização: 16 de Março de 2025
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
							{privacyPolicy.map((section, index) => {
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
								Esta política de privacidade explicará quais informações
								coletamos online, por que as coletamos e as opções que
								oferecemos a você.
							</CardTitle>
							<CardDescription>
								Esta política de privacidade ("Política") descreve as práticas
								de dados da rede LunaryMC. e suas subsidiárias (coletivamente
								"nós" ou a "Empresa"), cobrindo seus serviços sob seu controle,
								incluindo este site, quaisquer produtos, aplicativos móveis,
								aplicativos de console ou PC (coletivamente "Serviços"). Ao usar
								os Serviços, você concorda com esta Política e com o
								processamento de seus dados da maneira prevista nesta Política.
								Se você não concordar com estes termos, não use os Serviços.
							</CardDescription>
						</CardHeader>
						<CardContent className="dark:prose-invert max-w-none prose prose-slate">
							<section id={privacyPolicy[0].id}>
								<h2>1. {privacyPolicy[0].label}</h2>
								<p>
									Bem-vindo à Política de Privacidade do LunaryMC. Respeitamos
									sua privacidade e estamos comprometidos em proteger suas
									informações pessoais. Esta Política de Privacidade explica
									como coletamos, usamos, divulgamos e protegemos suas
									informações quando você utiliza nosso servidor de Minecraft e
									serviços relacionados.
								</p>
								<p>
									Ao utilizar o LunaryMC, você concorda com a coleta e uso de
									informações de acordo com esta política. Recomendamos que você
									leia este documento cuidadosamente para entender nossas
									práticas em relação aos seus dados.
								</p>
							</section>
							<section id={privacyPolicy[1].id}>
								<h2>2. {privacyPolicy[1].label}</h2>
								<p>
									Coletamos vários tipos de informações para fornecer e melhorar
									nossos serviços:
								</p>
								<h3>2.1. Informações de Conta</h3>
								<ul>
									<li>Nome de usuário do Minecraft</li>
									<li>Endereço de e-mail</li>
									<li>Endereço IP</li>
									<li>UUID do Minecraft</li>
									<li>Data e hora de login/logout</li>
								</ul>
								<h3>2.2. Informações de Jogo</h3>
								<ul>
									<li>Estatísticas de jogo (pontuações, conquistas, etc.)</li>
									<li>Mensagens de chat</li>
									<li>Comandos executados</li>
									<li>Interações com outros jogadores</li>
									<li>Itens adquiridos ou comprados</li>
								</ul>
								<h3>2.3. Informações de Transação</h3>
								<ul>
									<li>
										Detalhes de pagamento (processados por nossos parceiros de
										pagamento)
									</li>
									<li>Histórico de compras</li>
									<li>Data e valor das transações</li>
								</ul>
								<h3>2.4. Informações Técnicas</h3>
								<ul>
									<li>Tipo de dispositivo</li>
									<li>Versão do Minecraft</li>
									<li>Sistema operacional</li>
									<li>Versão do navegador (para o site)</li>
									<li>Cookies e tecnologias semelhantes</li>
								</ul>
							</section>
							<section id={privacyPolicy[2].id}>
								<h2>3. {privacyPolicy[2].label}</h2>
								<p>
									Utilizamos as informações coletadas para os seguintes
									propósitos:
								</p>
								<ul>
									<li>Gerenciar sua conta e fornecer nossos serviços</li>
									<li>
										Processar transações e enviar notificações relacionadas
									</li>
									<li>Personalizar sua experiência de jogo</li>
									<li>
										Monitorar e prevenir atividades fraudulentas ou violações
										das regras
									</li>
									<li>Melhorar nossos serviços e desenvolver novos recursos</li>
									<li>
										Comunicar-se com você sobre atualizações, eventos e
										promoções
									</li>
									<li>Resolver disputas e solucionar problemas</li>
									<li>Proteger a segurança e integridade do servidor</li>
									<li>Cumprir obrigações legais</li>
								</ul>
							</section>
							<section id={privacyPolicy[3].id}>
								<h2>4. {privacyPolicy[3].label}</h2>
								<p>
									Não vendemos suas informações pessoais a terceiros. No
									entanto, podemos compartilhar suas informações nas seguintes
									circunstâncias:
								</p>
								<h3>4.1. Provedores de Serviços</h3>
								<p>
									Compartilhamos informações com terceiros que nos ajudam a
									operar, fornecer e melhorar nossos serviços, como:
								</p>
								<ul>
									<li>Processadores de pagamento</li>
									<li>Provedores de hospedagem</li>
									<li>Serviços de análise</li>
									<li>Suporte ao cliente</li>
								</ul>
								<p>
									Esses provedores de serviços têm acesso às suas informações
									pessoais apenas para realizar tarefas em nosso nome e são
									obrigados a não divulgar ou usar as informações para qualquer
									outro propósito.
								</p>
								<h3>4.2. Requisitos Legais</h3>
								<p>
									Podemos divulgar suas informações se acreditarmos de boa fé
									que tal ação é necessária para:
								</p>
								<ul>
									<li>Cumprir uma obrigação legal</li>
									<li>Proteger e defender nossos direitos ou propriedade</li>
									<li>
										Prevenir ou investigar possíveis irregularidades
										relacionadas ao serviço
									</li>
									<li>
										Proteger a segurança pessoal dos usuários do serviço ou do
										público
									</li>
									<li>Proteger contra responsabilidade legal</li>
								</ul>
								<h3>4.3. Transferências de Negócios</h3>
								<p>
									Se o LunaryMC estiver envolvido em uma fusão, aquisição ou
									venda de ativos, suas informações pessoais podem ser
									transferidas. Notificaremos você antes que suas informações
									pessoais sejam transferidas e se tornem sujeitas a uma
									política de privacidade diferente.
								</p>
							</section>
							<section id={privacyPolicy[4].id}>
								<h2>5. {privacyPolicy[4].label}</h2>
								<p>
									A segurança de seus dados é importante para nós. Implementamos
									medidas técnicas e organizacionais apropriadas para proteger
									suas informações pessoais contra acesso não autorizado,
									alteração, divulgação ou destruição:
								</p>
								<ul>
									<li>
										Utilizamos criptografia para proteger dados sensíveis
										transmitidos online
									</li>
									<li>
										Acessos a informações pessoais são restritos a funcionários,
										contratados e agentes que precisam conhecer essas
										informações para processá-las
									</li>
									<li>
										Realizamos revisões regulares de nossas práticas de coleta,
										armazenamento e processamento de dados
									</li>
									<li>
										Implementamos medidas físicas de segurança para proteger os
										sistemas onde armazenamos seus dados
									</li>
								</ul>
								<p>
									No entanto, nenhum método de transmissão pela Internet ou
									método de armazenamento eletrônico é 100% seguro. Embora nos
									esforcemos para usar meios comercialmente aceitáveis para
									proteger suas informações pessoais, não podemos garantir sua
									segurança absoluta.
								</p>
							</section>
							<section id={privacyPolicy[5].id}>
								<h2>6. {privacyPolicy[5].label}</h2>
								<p>
									Nossos serviços são destinados a pessoas de todas as idades,
									mas reconhecemos a importância de proteger a privacidade das
									crianças.
								</p>
								<p>
									Não coletamos intencionalmente informações pessoais
									identificáveis de crianças menores de 13 anos sem o
									consentimento verificável dos pais. Se você é pai/mãe ou
									responsável legal e acredita que seu filho nos forneceu
									informações pessoais sem sua aprovação, entre em contato
									conosco para que possamos tomar as medidas necessárias para
									remover essas informações.
								</p>
								<p>
									Incentivamos os pais e responsáveis a monitorar e orientar as
									atividades online de seus filhos.
								</p>
							</section>
							<section id={privacyPolicy[6].id}>
								<h2>7. {privacyPolicy[6].label}</h2>
								<p>
									Utilizamos cookies e tecnologias de rastreamento semelhantes
									para rastrear a atividade em nosso site e manter certas
									informações.
								</p>
								<p>
									Cookies são arquivos com pequena quantidade de dados que podem
									incluir um identificador exclusivo anônimo. Os cookies são
									enviados para o seu navegador a partir de um site e
									armazenados no seu dispositivo. Outras tecnologias de
									rastreamento também são utilizadas, como beacons, tags e
									scripts para coletar e rastrear informações e melhorar e
									analisar nosso serviço.
								</p>
								<p>
									Você pode instruir seu navegador a recusar todos os cookies ou
									indicar quando um cookie está sendo enviado. No entanto, se
									você não aceitar cookies, poderá não conseguir usar algumas
									partes do nosso serviço.
								</p>
								<p>Usamos cookies para os seguintes fins:</p>
								<ul>
									<li>Cookies Essenciais: Para operar nosso serviço</li>
									<li>
										Cookies de Preferências: Para lembrar suas preferências e
										configurações
									</li>
									<li>Cookies de Segurança: Para fins de segurança</li>
									<li>
										Cookies Analíticos: Para entender como você usa nosso
										serviço
									</li>
								</ul>
							</section>
							<section id={privacyPolicy[7].id}>
								<h2>8. {privacyPolicy[7].label}</h2>
								<p>
									Dependendo da sua localização, você pode ter certos direitos
									relacionados às suas informações pessoais, incluindo:
								</p>
								<ul>
									<li>
										Direito de acesso: Você pode solicitar cópias das suas
										informações pessoais que mantemos
									</li>
									<li>
										Direito de retificação: Você pode solicitar que corrijamos
										informações que você acredita serem imprecisas
									</li>
									<li>
										Direito ao esquecimento: Você pode solicitar que apaguemos
										suas informações pessoais em determinadas circunstâncias
									</li>
									<li>
										Direito à restrição de processamento: Você pode solicitar
										que restrinjamos o processamento de suas informações
										pessoais
									</li>
									<li>
										Direito à portabilidade de dados: Você pode solicitar a
										transferência das informações que coletamos para outra
										organização ou diretamente para você
									</li>
									<li>
										Direito de oposição: Você pode se opor ao nosso
										processamento de suas informações pessoais
									</li>
								</ul>
								<p>
									Se você deseja exercer qualquer um desses direitos, entre em
									contato conosco através do e-mail de contato. Podemos
									solicitar informações específicas para confirmar sua
									identidade antes de responder a sua solicitação.
								</p>
							</section>
							<section id={privacyPolicy[8].id}>
								<h2>9. {privacyPolicy[8].label}</h2>
								<p>
									Podemos atualizar nossa Política de Privacidade
									periodicamente. Recomendamos que você revise esta página
									regularmente para ficar informado sobre quaisquer alterações.
								</p>
								<p>
									Notificaremos você sobre quaisquer alterações publicando a
									nova Política de Privacidade nesta página e, se as alterações
									forem significativas, forneceremos um aviso mais proeminente
									ou enviaremos uma notificação direta.
								</p>
								<p>
									As alterações entrarão em vigor imediatamente após serem
									publicadas nesta página, e a data da "Última atualização" no
									topo será modificada.
								</p>
								<p>
									Seu uso continuado do serviço após a publicação de alterações
									constitui sua aceitação dessas alterações.
								</p>
							</section>
							<section id={privacyPolicy[9].id}>
								<h2>10. {privacyPolicy[9].label}</h2>
								<p>
									Se você tiver dúvidas sobre esta Política de Privacidade,
									entre em contato conosco:
								</p>
								<ul>
									<li>Por e-mail: suporte@lunarymc.com</li>
									<li>Através do nosso formulário de contato no site</li>
									<li>Pelo Discord oficial do LunaryMC</li>
								</ul>
								<p>
									Nossa equipe de privacidade revisará sua mensagem e responderá
									o mais rápido possível.
								</p>
							</section>
						</CardContent>
					</Card>
				</div>
			</div>
		</main>
	);
}
