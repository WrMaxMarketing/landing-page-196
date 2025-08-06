import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MapPin, Plane, Users, Clock, Star, MessageCircle, Globe, Zap } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function TravelWhatsAppLanding() {
  const checkoutUrl = "https://pay.kiwify.com.br/9Mjpjp2"

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <Plane className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">ViagemVIP</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#beneficios" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Benefícios
          </Link>
          <Link href="#depoimentos" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Depoimentos
          </Link>
          <Link href="#preco" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Preço
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    🔥 Mais de 500 membros satisfeitos
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Ofertas Exclusivas de <span className="text-blue-600">Viagens</span> no seu WhatsApp
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Entre no grupo VIP e receba diariamente as melhores ofertas de passagens, hotéis e pacotes de viagem
                    com até <strong>70% de desconto</strong>. Seja o primeiro a saber das promoções relâmpago!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    <Link href={checkoutUrl} target="_blank">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Assinar Agora
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    Ver Ofertas Anteriores
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>500+ membros</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>4.9/5 avaliação</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4" />
                    <span>Ofertas diárias</span>
                  </div>
                </div>
              </div>
              <Image
                src="/tropical-beach-airplane.png"
                width="600"
                height="600"
                alt="Ofertas de viagem"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Por que escolher nosso grupo VIP?</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mais de 2 anos conectando viajantes às melhores oportunidades do mercado
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Ofertas em Tempo Real</CardTitle>
                  <CardDescription>
                    Receba notificações instantâneas das melhores promoções antes que esgotem
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Destinos Exclusivos</CardTitle>
                  <CardDescription>Acesso a ofertas especiais para destinos nacionais e internacionais</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-blue-200 transition-colors">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Suporte Especializado</CardTitle>
                  <CardDescription>Tire dúvidas e receba dicas de viagem de nossa equipe especializada</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* O que você recebe */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    O que você recebe no grupo VIP
                  </h2>
                  <p className="max-w-[600px] text-blue-100 md:text-xl">
                    Acesso completo a todas as ofertas e benefícios exclusivos
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Ofertas de passagens aéreas com até 70% de desconto</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Promoções de hotéis e resorts exclusivas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Pacotes completos de viagem com preços especiais</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Alertas de erro de tarifa e promoções relâmpago</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Dicas de viagem e roteiros personalizados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-400" />
                    <span>Suporte para reservas e dúvidas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que nossos membros dizem</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mais de 500 viajantes já economizaram milhares de reais
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">Maria Silva</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Consegui uma passagem para Paris por R$ 1.200! Economizei mais de R$ 2.000. O grupo é incrível!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">João Santos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Já fiz 3 viagens com as ofertas do grupo. A economia foi absurda e o atendimento é excelente!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">Ana Costa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Melhor investimento que fiz! As ofertas chegam todos os dias e são realmente imperdíveis."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Preço */}
        <section id="preco" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Acesso completo por menos de R$ 1,30 por dia
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Cancele quando quiser, sem fidelidade
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-md py-12">
              <Card className="border-2 border-blue-200 shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <MessageCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Grupo VIP Viagens</CardTitle>
                  <CardDescription>Acesso completo às melhores ofertas</CardDescription>
                  <div className="text-center py-4">
                    <div className="text-sm text-gray-500 line-through">De R$ 67,90</div>
                    <div className="text-4xl font-bold text-blue-600">R$ 37,90</div>
                    <div className="text-sm text-gray-600">por mês</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Ofertas diárias exclusivas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Suporte especializado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Cancele quando quiser</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Garantia de 7 dias</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white" size="lg">
                    <Link href="https://pay.kiwify.com.br/tTggpR1" target="_blank">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Assinar Agora no Grupo
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    🔒 Pagamento seguro • ⚡ Acesso imediato • 🚫 Sem fidelidade
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Não perca mais nenhuma oferta incrível!
                </h2>
                <p className="mx-auto max-w-[600px] text-green-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Entre agora no grupo VIP e comece a economizar nas suas viagens ainda hoje. Vagas limitadas!
                </p>
              </div>
              <div className="space-y-4">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Link href={checkoutUrl} target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Quero Assinar Agora
                  </Link>
                </Button>
                <p className="text-sm text-green-100">
                  ⏰ Promoção por tempo limitado • 🎁 Primeiro mês com desconto especial
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2024 ViagemVIP. Todos os direitos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Termos de Uso
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Política de Privacidade
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Contato
          </Link>
        </nav>
      </footer>
    </div>
  )
}
