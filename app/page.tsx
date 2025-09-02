"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Award,
  Bell,
  Camera,
  Check,
  Globe,
  Map,
  MessageCircle,
  Plane,
  Shield,
  Sparkles,
  Star,
  Timer,
  Users,
} from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function TravelWhatsAppLanding() {
  const params = useSearchParams()
  const utmCampaign = params.get("utm_campaign")
  const isPromo = utmCampaign === "promo_set_150"

  // Checkout
  const mainCheckoutUrl = isPromo ? "https://pay.kiwify.com.br/FLdbH9U" : "https://pay.kiwify.com.br/9Mjpjp2"

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center border-b border-slate-200/60 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-center">
          {/* <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Compass className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div> */}
          <img
            src="/196-white-bg.png"
            alt="Vipex Logo"
            className="h-12 w-auto transition-transform hover:scale-105 cursor-pointer"
          />
          <span className="ml-2 sm:ml-3 text-xl sm:text-2xl font-light tracking-wide text-slate-800">
            GRUPO PREMIUM IA{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              196
            </span>
          </span>
        </div>
        <nav className="ml-auto hidden sm:flex gap-4 lg:gap-8">
          <Link href="#vantagens" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Vantagens
          </Link>
          <Link
            href="#depoimentos"
            className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          >
            Experiências
          </Link>
          <Link href="#oferta" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Oferta
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        {isPromo ? (
          <section className="relative w-full py-20 md:py-28 text-center text-white overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero-section-horizontal.png')" }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

            <div className="relative z-10 container mx-auto px-6">
              <Badge className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 mb-6 text-sm sm:text-base">
                🎉 Promoção Exclusiva
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">Viaje mais pagando menos</h1>
              <p className="text-lg sm:text-2xl mb-8 max-w-2xl mx-auto">
                Entre para o <strong>Grupo Premium 196</strong> por apenas <br /> {" "}
                <span className="font-bold">R$ 150 / 3 meses</span> <br />
                (menos de R$ 2 por dia!)
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white-600 font-semibold px-10 py-6 rounded-xl shadow-lg hover:from-emerald-800 hover:to-emerald-800"
              >
                <Link href={mainCheckoutUrl} target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  GARANTIR MEU ACESSO
                </Link>
              </Button>
            </div>
          </section>
        ) : (
          // Hero original
          <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              {/* Mobile background (vertical image) */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
                style={{
                  backgroundImage: "url('/hero-h.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Desktop background (horizontal image) */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
                style={{
                  backgroundImage: "url('/hero-section.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-white/70 to-blue-30/20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/50"></div>
            </div>

            {/* Content */}
            <div className="container px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10">
              <div className="flex flex-col items-start justify-center text-left">
                <div className="flex flex-col justify-center space-y-6 sm:space-y-8 max-w-5xl">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 sm:mb-6 justify-center">
                      <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border border-emerald-200 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-sm">
                        <Sparkles className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        500+ Viajantes Satisfeitos
                      </Badge>
                      <div className="flex items-center gap-2 text-xs sm:text-sm bg-white/60 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-slate-200 shadow-sm">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-slate-700">4.9/5</span>
                        <span className="text-slate-500">• Avaliação</span>
                      </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-tight text-slate-800">
                      <span className="font-extralight">As melhores ofertas </span>
                      <br />
                      <span className="font-semibold bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                        de viagem,
                      </span>

                      <span className="font-extralight"> direto no seu</span>
                      <br />
                      <span className="font-semibold bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                        WhatsApp
                      </span>
                      <br />
                      <span className="font-light">— todos os dias!</span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-light px-4 sm:px-0">
                      Receba no seu WhatsApp ofertas exclusivas de{" "}
                      <strong className="font-medium text-slate-800">passagens, hotéis e experiências únicas, </strong>
                      escolhidas a dedo pela nossa equipe especializada e potencializadas pela nossa Inteligência
                      Artificial.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row justify-center items-center px-4 sm:px-0">
                    <Button
                      asChild
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-teal-700 text-white px-12 sm:px-8 py-3 sm:py-6 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                    >
                      <Link href={mainCheckoutUrl} target="_blank">
                        <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Entrar no Grupo
                      </Link>
                    </Button>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                      <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-600" />
                      <span>Seguro • Imediato • Sem Compromisso</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-4 sm:pt-6 justify-center">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                      <span className="text-xs sm:text-sm font-medium">500+ Membros</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-teal-500" />
                      <span className="text-xs sm:text-sm font-medium">Destinos Globais</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Award className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
                      <span className="text-xs sm:text-sm font-medium">Garantia 7 Dias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Oferta Especial */}
        <section
          id="oferta"
          className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-blue-50"
        >
          <div className="container px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Oferta especial anual
              </Badge>
              {isPromo ? (
                <>
                  <h2 className="text-3xl sm:text-5xl font-bold text-emerald-600">Acesso completo por R$ 150</h2>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-light">
                    Oferta exclusiva por 3 meses 🚀
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-slate-800 px-4 sm:px-0">
                    Acesso completo por{" "}
                    <span className="font-semibold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                      R$ 33,08/mês
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-light px-4 sm:px-0">
                    Pagamento anual de R$ 397
                  </p>
                </>
              )}
            </div>

            <Card className="border-0 shadow-2xl bg-white max-w-lg mx-auto">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl mb-1 sm:mb-2 text-slate-800 font-medium">
                  Grupo Premium 196
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-slate-600">
                  Acesso completo às melhores ofertas de viagem
                </CardDescription>

                <div className="text-center py-4 sm:py-6">
                  {isPromo ? (
                    <>
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-emerald-600 mb-2 sm:mb-3">
                        R$ 150
                      </div>
                      <div className="text-lg sm:text-xl text-slate-600 mb-1">por 3 meses</div>
                      <div className="text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3">Menos de R$ 2 por dia!</div>
                      <Badge className="bg-gradient-to-r from-red-50 to-orange-50 text-red-700 border border-red-200">
                        Oferta limitada
                      </Badge>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                        R$ 33,08
                      </div>
                      <div className="text-lg sm:text-xl text-slate-600 mb-1">por mês</div>
                      <div className="text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3">R$ 397 (pagamento anual)</div>
                      <Badge className="bg-gradient-to-r from-red-50 to-orange-50 text-red-700 border border-red-200">
                        Economia de mais de R$90,00
                      </Badge>
                    </>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 sm:py-6 text-base sm:text-lg font-medium shadow-lg rounded-xl"
                  size="lg"
                >
                  <Link href={mainCheckoutUrl} target="_blank">
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    {isPromo ? "Garantir meu acesso" : "Começar Agora"}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Por que se tornar VIP */}
        <section id="vantagens" className="w-full py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              /*  backgroundImage: "url('/tropical-paradise.png')", */
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-blue-50/85"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/90"></div>
          </div>

          <div className="container px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 border border-blue-200 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Map className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Por que escolher nosso grupo?
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-slate-800 px-4 sm:px-0">
                Sua{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  experiência de viagem
                </span>
                <br />
                começa aqui
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-light px-4 sm:px-0">
                Mais de 1500 voos realizados , 196 países visitados, um recorde mundial, 3750 horas no ar (equivalente a
                156 dias), 2.250.000km percorridos (56 voltas completas na terra)
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 px-4 sm:px-0">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm group">
                <CardHeader className="text-center pb-4 sm:pb-6 pt-6 sm:pt-8">
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Bell className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl mb-2 sm:mb-3 text-slate-800 font-medium">
                    Alertas Instantâneos
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Seja o primeiro a saber sobre ofertas exclusivas que chegam ao seu WhatsApp
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/80 backdrop-blur-sm group">
                <CardHeader className="text-center pb-4 sm:pb-6 pt-6 sm:pt-8">
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Camera className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl mb-2 sm:mb-3 text-slate-800 font-medium">
                    Experiências Únicas
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Passagens com até <strong>70% de desconto</strong> e experiências que você não encontra em outro
                    lugar
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* O que você ganha */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50">
          <div className="container px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-slate-800">
                O que você{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  recebe
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-light px-4 sm:px-0">
                Sua próxima aventura está a um clique de distância
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              <div className="flex items-start gap-3 sm:gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/40 shadow-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-slate-800">
                    Passagens com Super Desconto
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">
                    Até 70% de economia em voos nacionais e internacionais
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/40 shadow-sm">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2 text-slate-800">Oportunidades Únicas</h3>
                  <p className="text-sm sm:text-base text-slate-600">
                    Alertas de tarifas especiais que aparecem por pouco tempo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="w-full py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/tropical-paradise.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-slate-50/90"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-transparent to-white/80"></div>
          </div>

          <div className="container px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <Badge className="bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border border-amber-200 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Star className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Experiências reais
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-slate-800">
                O que nossos{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  viajantes
                </span>{" "}
                dizem
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-light px-4 sm:px-0">
                Histórias reais de quem já economizou milhares de reais
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-lg shadow-lg">
                      M
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg text-slate-800 font-medium">Maria Silva</CardTitle>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <Badge className="bg-blue-50 text-blue-700 text-xs border border-blue-200">
                        Membro há 8 meses
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    "Consegui uma passagem para Paris por R$ 1.200! Economizei mais de R$ 2.000. As ofertas são
                    realmente incríveis!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-lg shadow-lg">
                      J
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg text-slate-800 font-medium">João Santos</CardTitle>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <Badge className="bg-emerald-50 text-emerald-700 text-xs border border-emerald-200">
                        Membro há 1 ano
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    "Já fiz 4 viagens com as ofertas do grupo. A economia foi absurda e o atendimento é sempre muito
                    atencioso!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm md:col-span-2 lg:col-span-1">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-lg shadow-lg">
                      A
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg text-slate-800 font-medium">Ana Costa</CardTitle>
                      <div className="flex mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <Badge className="bg-purple-50 text-purple-700 text-xs border border-purple-200">
                        Membro há 6 meses
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    "Melhor investimento que já fiz! As ofertas chegam todos os dias e são realmente imperdíveis. Super
                    recomendo!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Oferta Especial */}
        <section
          id="oferta"
          className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-blue-50"
        >
          <div className="container px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border border-green-200 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Sparkles className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Oferta especial anual
              </Badge>
              {isPromo ? (
                <>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-slate-800 px-4 sm:px-0">
                    Acesso completo por{" "}
                    <span className="font-semibold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                      R$ 150
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-light px-4 sm:px-0">
                    Por 3 meses completos
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-slate-800 px-4 sm:px-0">
                    Acesso completo por{" "}
                    <span className="font-semibold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                      R$ 33,08/mês
                    </span>
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-light px-4 sm:px-0">
                    Pagamento anual de R$ 397
                  </p>
                </>
              )}
            </div>

            <Card className="border-0 shadow-2xl bg-white max-w-lg mx-auto">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                  <img
                    src="/196-black-bg.png"
                    alt="Vipex Logo"
                    className="h-12 w-auto transition-transform hover:scale-105 cursor-pointer"
                  />
                </div>
                <CardTitle className="text-xl sm:text-2xl mb-1 sm:mb-2 text-slate-800 font-medium">
                  Grupo Premium 196
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-slate-600">
                  Acesso completo às melhores ofertas de viagem
                </CardDescription>

                <div className="text-center py-4 sm:py-6">
                  {isPromo ? (
                    <>
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                        R$ 150
                      </div>
                      <div className="text-lg sm:text-xl text-slate-600 mb-1">por 3 meses</div>
                      <div className="text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3">Menos de R$ 2 por dia!</div>
                      <Badge className="bg-gradient-to-r from-red-50 to-orange-50 text-red-700 border border-red-200">
                        Oferta exclusiva
                      </Badge>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-light bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                        R$ 33,08
                      </div>
                      <div className="text-lg sm:text-xl text-slate-600 mb-1">por mês</div>
                      <div className="text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3">R$ 397 (pagamento anual)</div>
                      <Badge className="bg-gradient-to-r from-red-50 to-orange-50 text-red-700 border border-red-200">
                        Economia de mais de R$90,00{" "}
                      </Badge>
                    </>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                <div className="space-y-3 sm:space-y-4">
                  {isPromo ? (
                    <>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                        <span className="text-sm sm:text-base font-medium text-slate-700">
                          R$ 150 por 3 meses completos
                        </span>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                        <span className="text-sm sm:text-base font-medium text-slate-700">Menos de R$ 2 por dia</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                        <span className="text-sm sm:text-base font-medium text-slate-700">
                          Ou pague em 12x de R$ 41,06 no cartão (R$ 492,72)
                        </span>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                        </div>
                        <span className="text-sm sm:text-base font-medium text-slate-700">
                          R$ 397 pagamento anual (economia de mais de R$ 90,00)
                        </span>
                      </div>
                    </>
                  )}

                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-slate-700">
                      Acesso imediato e totalmente seguro
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <span className="text-sm sm:text-base font-medium text-slate-700">
                      Garantia de satisfação de 7 dias
                    </span>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-800 hover:to-emerald-700 text-white py-3 sm:py-6 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
                    size="lg"
                  >
                    <Link href={mainCheckoutUrl} target="_blank">
                      <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      {isPromo ? "Garantir meu acesso" : "Começar Agora"}
                    </Link>
                  </Button>

                  <p className="text-xs sm:text-sm text-center text-slate-500 flex items-center justify-center gap-2">
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                    Pagamento Seguro • Acesso Imediato
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Urgência / Escassez */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 relative overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/tropical-beach-airplane.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/70 to-white/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/88 via-white/12 to-white/86"></div>
          </div>

          <div className="container px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-center relative z-10">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Timer className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600 animate-pulse" />
                <Badge className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
                  Oferta por tempo limitado
                </Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-slate-800">
                Últimas{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  47 vagas
                </span>{" "}
                disponíveis!
              </h2>

              <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light px-4 sm:px-0 text-slate-800">
                Não perca a oportunidade de fazer parte do grupo mais exclusivo de ofertas de viagem. Sua próxima
                aventura está esperando!
              </p>

              <div className="bg-gradient-to-br from-emerald-500/90 to-green-600/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md mx-auto border border-emerald-400/50 shadow-xl">
                {isPromo ? (
                  <>
                    <div className="text-base sm:text-lg text-emerald-100 mb-2">Oferta exclusiva por 3 meses:</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2">R$ 150</div>
                    <div className="text-xs sm:text-sm text-emerald-100 mb-1">por 3 meses</div>
                    <div className="text-xs text-emerald-200 mb-4 sm:mb-6">Menos de R$ 2 por dia!</div>
                  </>
                ) : (
                  <>
                    <div className="text-base sm:text-lg text-emerald-100 mb-2">Plano anual com super desconto:</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2">R$ 33,08</div>
                    <div className="text-xs sm:text-sm text-emerald-100 mb-1">por mês</div>
                    <div className="text-xs text-emerald-200 mb-4 sm:mb-6">R$ 397 pagamento anual</div>
                  </>
                )}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-white hover:bg-gray-50 text-slate-800 font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border border-white/20"
                >
                  <Link href={mainCheckoutUrl} target="_blank">
                    <Plane className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Garantir Minha Vaga
                  </Link>
                </Button>
                <p className="text-xs sm:text-sm text-emerald-100 mt-3 sm:mt-4">
                  ⏰ Restam poucas horas para esta oferta
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 sm:py-16">
        <div className="container px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                {/* <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Compass className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div> */}
                <img
                  src="/196-white-bg.png"
                  alt="Vipex Logo"
                  className="h-16 w-auto transition-transform hover:scale-105 cursor-pointer"
                />
                <span className="text-xl sm:text-2xl font-light tracking-wide text-slate-800">
                  <span className="font-semibold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    196
                  </span>{" "}
                  Viagens
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
                Conectando viajantes às melhores experiências do mundo. Sua próxima aventura começa aqui.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-medium mb-3 sm:mb-4 text-slate-800">Links Úteis</h3>
              <nav className="space-y-1 sm:space-y-2">
                <Link
                  href="#"
                  className="block text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Termos de Uso
                </Link>
                <Link
                  href="#"
                  className="block text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href="#"
                  className="block text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors"
                >
                  Contato
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-medium mb-3 sm:mb-4 text-slate-800">Suporte</h3>
              <div className="space-y-1 sm:space-y-2 text-slate-600">
                <p className="text-xs sm:text-sm">Email: suporte@196viagens.net</p>
                <p className="text-xs sm:text-sm">Atendimento: 9h às 18h</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-slate-500">© 2025 - 196 Viagens. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
