import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MapPin, Plane, Users, Clock, Star, MessageCircle, Globe, Zap, ArrowRight, Shield, Gift } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function TravelWhatsAppLanding() {
  const checkoutUrl = "https://pay.kiwify.com.br/9Mjpjp2"

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-20 flex items-center border-b bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
            <Plane className="h-6 w-6 text-white" />
          </div>
          <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">GRUPO PREMIUM - IA - 196 SONHOS</span>
        </div>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          <Link href="#beneficios" className="text-sm font-semibold hover:text-blue-600 transition-colors relative group">
            Benefícios
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#depoimentos" className="text-sm font-semibold hover:text-blue-600 transition-colors relative group">
            Depoimentos
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#preco" className="text-sm font-semibold hover:text-blue-600 transition-colors relative group">
            Preço
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-cyan-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 px-4 py-2 text-sm font-semibold">
                    🔥 Mais de 500 membros satisfeitos
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none leading-tight text-center">
                  As melhores ofertas de {" "}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      Viagens
                    </span>{" "}
                    direto no seu whatsapp diariamente
                  </h1>
                  <p className="max-w-[600px] text-gray-600 text-lg md:text-xl leading-relaxed mx-auto text-center">
                  Usamos IA para vasculhar diariamente as melhores ofertas de Voos, hospedagens e pacotes de viagem relâmpago
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg">
                    <Link href={checkoutUrl} target="_blank">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Assinar Agora
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600 pt-4 justify-center">
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">500+ membros</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9/5 avaliação</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 shadow-sm">
                    <Zap className="h-4 w-4 text-orange-500" />
                    <span className="font-medium">Ofertas diárias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="beneficios" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge variant="outline" className="px-4 py-2 text-blue-600 border-blue-200">
                Por que escolher
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Nosso grupo VIP?
              </h2>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">Ofertas em Tempo Real</CardTitle>
                  <CardDescription className="text-base">
                    Receba notificações instantâneas das melhores promoções antes que esgotem
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">Destinos Exclusivos</CardTitle>
                  <CardDescription className="text-base">
                    Acesso a ofertas especiais para destinos nacionais e internacionais
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-purple-50 to-pink-50">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">Suporte Especializado</CardTitle>
                  <CardDescription className="text-base">
                    Tire dúvidas e receba dicas de viagem de nossa equipe especializada
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* O que você recebe */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="bg-white/20 text-white hover:bg-white/30 px-4 py-2 mb-6">
                  Benefícios Exclusivos
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                  O que você recebe no grupo VIP
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Acesso completo a todas as ofertas e benefícios exclusivos
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Ofertas de passagens aéreas com até 70% de desconto",
                  "Promoções de hotéis e resorts exclusivas",
                  "Pacotes completos de viagem com preços especiais",
                  "Alertas de erro de tarifa e promoções relâmpago",
                  "Dicas de viagem e roteiros personalizados",
                  "Suporte para reservas e dúvidas"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge variant="outline" className="px-4 py-2 text-green-600 border-green-200">
                Depoimentos
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                O que nossos membros dizem
              </h2>
              <p className="max-w-[800px] text-gray-600 text-lg md:text-xl">
                Mais de 500 viajantes já economizaram milhares de reais
              </p>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Maria Silva",
                  text: "Consegui uma passagem para Paris por R$ 1.200! Economizei mais de R$ 2.000. O grupo é incrível!"
                },
                {
                  name: "João Santos", 
                  text: "Já fiz 3 viagens com as ofertas do grupo. A economia foi absurda e o atendimento é excelente!"
                },
                {
                  name: "Ana Costa",
                  text: "Melhor investimento que fiz! As ofertas chegam todos os dias e são realmente imperdíveis."
                }
              ].map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-base leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Preço */}
        <section id="preco" className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2">
                Oferta Especial
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Acesso completo por menos de{" "}
                <span className="text-green-600">R$ 1,30 por dia</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Cancele quando quiser, sem fidelidade
              </p>
            </div>
            <div className="mx-auto max-w-md">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <CardHeader className="text-center pt-8">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <MessageCircle className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Grupo Premium 196</CardTitle>
                  <CardDescription className="text-base">Acesso completo às melhores ofertas</CardDescription>
                  <div className="text-center py-6">
                    <div className="text-sm text-gray-500 line-through mb-2">De R$ 67,90</div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      R$ 37,90
                    </div>
                    <div className="text-base text-gray-600 mt-2">por mês</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 px-8 pb-8">
                  <ul className="space-y-4">
                    {[
                      "Ofertas diárias exclusivas",
                      "Suporte especializado", 
                      "Cancele quando quiser",
                      "Garantia de 7 dias"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-base font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 text-lg" size="lg">
                  <Link href="https://pay.kiwify.com.br/9Mjpjp2" target="_blank">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Assinar Agora no Grupo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-4">
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4" />
                      <span>Pagamento seguro</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="h-4 w-4" />
                      <span>Acesso imediato</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Gift className="h-4 w-4" />
                      <span>Sem fidelidade</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-green-600 via-emerald-600 to-blue-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Não perca mais nenhuma oferta incrível!
              </h2>
              <p className="text-xl text-green-100 max-w-3xl leading-relaxed">
                Entre agora no grupo VIP e comece a economizar nas suas viagens ainda hoje. Vagas limitadas!
              </p>
              <div className="space-y-6">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 px-12 py-6 text-xl font-semibold">
                  <Link href={checkoutUrl} target="_blank">
                    <MessageCircle className="mr-3 h-6 w-6" />
                    Quero Assinar Agora
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
                <div className="flex items-center justify-center gap-6 text-sm text-green-100">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Promoção por tempo limitado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
            <Plane className="h-4 w-4 text-white" />
          </div>
          <p className="text-sm text-gray-600 font-medium">© 2024 Grupo Premium 196. Todos os direitos reservados.</p>
        </div>
        <nav className="sm:ml-auto flex gap-6 sm:gap-8">
          <Link href="#" className="text-sm hover:text-blue-600 transition-colors text-gray-600 font-medium">
            Termos de Uso
          </Link>
          <Link href="#" className="text-sm hover:text-blue-600 transition-colors text-gray-600 font-medium">
            Política de Privacidade
          </Link>
          <Link href="#" className="text-sm hover:text-blue-600 transition-colors text-gray-600 font-medium">
            Contato
          </Link>
        </nav>
      </footer>
    </div>
  )
}
