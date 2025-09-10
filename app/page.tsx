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

  const heroImages = ["/hero-bg-1.jpg", "/hero-bg-2.jpg"]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center border-b border-slate-200/60 bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="flex items-center justify-center">
          <img
            src="/196-white-bg.png"
            alt="196 Viagens Logo"
            className="h-16 w-auto transition-transform hover:scale-105 cursor-pointer"
          />
          <span className="ml-2 sm:ml-3 text-xl sm:text-2xl font-light tracking-wide text-slate-800">
            GRUPO PREMIUM IA{" "}
            <span className="font-extrabold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              196
            </span>
          </span>
        </div>
        <nav className="ml-auto hidden sm:flex gap-4 lg:gap-8">
          <Link href="#oferta" className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors">
            Oferta Exclusiva
          </Link>
          <Link
            href="#quem-somos"
            className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
          >
            Quem Somos
          </Link>
          <Link
            href="#depoimentos"
            className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors"
          >
            Experiências
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Introdução / Hero Section */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 xl:py-36 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/beautiful-tropical-beach-with-crystal-clear-water-.jpg"
              alt="Travel destination background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
          </div>

          <div className="container px-4 sm:px-6 md:px-8 mx-auto relative z-10">
            <div className="flex flex-col items-start justify-center text-center mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-4 sm:mb-6 justify-center">
                <Badge className="bg-gradient-to-r from-emerald-400 to-teal-500 text-white border-none px-4 py-2 text-sm font-bold shadow-md animate-pulse">
                  <Sparkles className="mr-2 h-4 w-4" />
                  MAIS DE 500 VIAJANTES REALIZADOS!
                </Badge>
                <div className="flex items-center gap-2 text-sm bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-300 shadow-md">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-500 text-yellow-500" />
                  <span className="font-bold text-slate-700">4.9/5</span>
                  <span className="text-slate-600">• Avaliação Máxima</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-tight text-white drop-shadow-2xl animate-fade-in mb-6">
                <span className="font-light">Viaje Mais</span>{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-text">
                  Gastando Menos
                </span>
                <br />
                <span className="font-light text-white/90">Direto no Seu WhatsApp</span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed font-medium px-4 sm:px-0 drop-shadow-lg">
                Ofertas exclusivas de <strong className="text-yellow-300">passagens e hotéis</strong> encontradas por{" "}
                <strong className="text-emerald-300">Inteligência Artificial</strong>
              </p>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center px-4 sm:px-0 mt-8">
              <Link
                href={mainCheckoutUrl}
                target="_blank"
                className="w-full sm:w-auto text-white px-16 py-4 sm:py-7 text-xl sm:text-2xl font-extrabold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full transform hover:scale-105 animate-bounce-slow flex items-center justify-center no-underline"
                style={{
                  background: "linear-gradient(to right, #059669, #047857)",
                  backgroundColor: "#059669", // Fallback solid color
                }}
              >
                <MessageCircle className="mr-3 h-6 w-6 sm:h-7 sm:w-7" />
                QUERO MINHAS OFERTAS AGORA!
              </Link>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm sm:text-base text-white font-medium">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-300" />
                  <span>Pagamento Seguro • Acesso Imediato • Satisfação Garantida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-300" />
                  <span>Comunidade Ativa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-teal-300" />
                  <span>Mundo de Destinos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
                  <span>7 Dias Sem Risco</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prova Social: Imagens de ofertas do grupo */}
        <section
          id="prova-social-imagens"
          className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-20">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/map-background.png')", // Mapa mundi ou ícones de viagem sutis
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="container px-4 sm:px-6 md:px-8 max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 sm:mb-8 text-slate-900">
              Transforme seus Sonhos em{" "}
              <span className="bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">
                Viagens Reais!
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 max-w-3xl mx-auto font-medium px-4 sm:px-0">
              Veja prints autênticos de ofertas que nossos membros já receberam e as economias que eles fizeram.
            </p>

            <div className="grid gap-8 sm:gap-10 md:grid-cols-3 mt-16 animate-fade-up">
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-blue-100 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/oferta-1.png"
                  alt="Exemplo de oferta de viagem para Paris"
                  className="w-full h-auto rounded-xl mb-6 shadow-md"
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Paris: R$ 1.200 (IDA E VOLTA!)</h3>
                <p className="text-base text-slate-700">Uma economia incrível de mais de 50% em passagens aéreas.</p>
                <Badge className="mt-4 bg-yellow-400 text-yellow-900 font-bold px-3 py-1 rounded-full text-sm">
                  #EconomiaReal
                </Badge>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-emerald-100 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/oferta-2.png"
                  alt="Exemplo de oferta de hotel 5 estrelas em Cancún"
                  className="w-full h-auto rounded-xl mb-6 shadow-md"
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Cancún Luxo: 70% OFF!</h3>
                <p className="text-base text-slate-700">
                  Estadia em hotel 5 estrelas por uma fração do preço original.
                </p>
                <Badge className="mt-4 bg-pink-400 text-pink-900 font-bold px-3 py-1 rounded-full text-sm">
                  #LuxoAcessível
                </Badge>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-2xl border border-purple-100 transform hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/oferta-3.png"
                  alt="Exemplo de oferta de pacote para a Ásia"
                  className="w-full h-auto rounded-xl mb-6 shadow-md"
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Aventura na Ásia por R$ 3.500</h3>
                <p className="text-base text-slate-700">
                  Pacote completo com voos e hospedagem para explorar o continente.
                </p>
                <Badge className="mt-4 bg-cyan-400 text-cyan-900 font-bold px-3 py-1 rounded-full text-sm">
                  #ExplorarOMundo
                </Badge>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-12 py-6 text-xl font-extrabold shadow-lg hover:shadow-xl transition-all duration-300 rounded-full transform hover:scale-105"
            >
              <Link href={mainCheckoutUrl} target="_blank">
                <Plane className="mr-3 h-5 w-5" />
                QUERO VER AS PRÓXIMAS OFERTAS!
              </Link>
            </Button>
          </div>
        </section>

        {/* O que você receberá */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-15">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/pattern-dots.png')", // Adiciona um padrão sutil de fundo
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="container px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 text-slate-900">
                O que você{" "}
                <span className="bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">
                  receberá
                </span>{" "}
                no grupo
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 max-w-3xl mx-auto font-medium px-4 sm:px-0">
                Uma curadoria exclusiva para você viajar mais e melhor!
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <Card className="flex flex-col items-center text-center p-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-blue-100 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2 text-slate-900">Passagens com Até 70% OFF</CardTitle>
                <CardDescription className="text-base text-slate-700">
                  Economize drasticamente em voos nacionais e internacionais para qualquer lugar do mundo.
                </CardDescription>
              </Card>

              <Card className="flex flex-col items-center text-center p-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-teal-100 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Bell className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2 text-slate-900">
                  Alertas de Oportunidades Relâmpago
                </CardTitle>
                <CardDescription className="text-base text-slate-700">
                  Seja o primeiro a saber das ofertas mais quentes antes que elas se esgotem.
                </CardDescription>
              </Card>

              <Card className="flex flex-col items-center text-center p-6 bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-purple-100 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2 text-slate-900">Roteiros e Dicas Exclusivas</CardTitle>
                <CardDescription className="text-base text-slate-700">
                  Aproveite ao máximo suas viagens com guias e segredos dos destinos mais procurados.
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        {/* Para quem é o grupo */}
        <section id="para-quem" className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/world-map-lines.png')", // Fundo de mapa com linhas de conexão
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="container px-4 sm:px-6 md:px-8 max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 sm:mb-8 text-slate-900">
              O Grupo Premium 196 é perfeito{" "}
              <span className="bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
                para você se...
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 max-w-3xl mx-auto font-medium px-4 sm:px-0">
              Prepare-se para transformar a forma como você explora o mundo!
            </p>

            <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 mt-16 animate-fade-up">
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-indigo-100 rounded-3xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Plane className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2 text-slate-900">Ama Viajar e Economizar</CardTitle>
                <CardDescription className="text-base text-slate-700">
                  Deseja explorar novos lugares sem comprometer seu orçamento.
                </CardDescription>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-emerald-100 rounded-3xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Timer className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2 text-slate-900">Não Tem Tempo para Pesquisar</CardTitle>
                <CardDescription className="text-base text-slate-700">
                  Prefere receber as melhores ofertas prontas, direto no celular.
                </CardDescription>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border border-pink-100 rounded-3xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold mb-2 text-slate-900">Busca Experiências Exclusivas</CardTitle>
                <CardDescription className="text-base text-slate-700">
                  Procura oportunidades únicas e inesquecíveis que vão além do convencional.
                </CardDescription>
              </Card>
            </div>
          </div>
        </section>

        {/* Chamada para Ação Intermediária */}
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-r from-blue-700 to-emerald-700 text-white text-center shadow-inner">
          <div className="container px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">
              Pronto para sua Próxima Grande Viagem?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-medium mb-10 max-w-2xl mx-auto">
              Garanta seu acesso e comece a receber ofertas incríveis hoje mesmo!
            </p>
            <Link
              href={mainCheckoutUrl}
              target="_blank"
              className="text-slate-900 px-16 py-4 sm:py-7 text-xl sm:text-2xl font-extrabold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full transform hover:scale-105 animate-bounce-slow flex items-center justify-center no-underline inline-flex"
              style={{
                backgroundColor: "#ffffff",
                color: "#0f172a",
              }}
            >
              <MessageCircle className="mr-3 h-6 w-6 sm:h-7 sm:w-7" />
              SIM, EU QUERO VIAJAR MAIS!
            </Link>
          </div>
        </section>

        {/* Quem é Anderson */}
        <section
          id="quem-somos"
          className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-15">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/compass-background.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="container px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-12 text-center text-slate-900">
              Conheça{" "}
              <span className="bg-gradient-to-r from-blue-700 to-teal-600 bg-clip-text text-transparent">
                Nosso Fundador
              </span>
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 max-w-4xl mx-auto">
              <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 sm:w-60 sm:h-60 bg-gray-200 rounded-full shadow-2xl border-4 border-white overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <img src="/anderson-photo.png" alt="Foto de Anderson" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-slate-900">Anderson</h3>
                <p className="text-lg sm:text-xl text-slate-700 mb-6 font-medium leading-relaxed">
                  Anderson é um explorador incansável que já desvendou os segredos de{" "}
                  <strong className="font-bold text-blue-800">196 países.</strong> Com uma bagagem de mais de{" "}
                  <strong className="font-bold text-emerald-800">1500 voos</strong> e{" "}
                  <strong className="font-bold text-teal-800">3.750 horas no ar</strong>, ele transformou sua paixão em
                  uma missão global: capacitar você a viajar mais longe, por menos, e viver experiências inesquecíveis.
                </p>
                <div className="text-lg text-slate-600 font-semibold flex items-center justify-center md:justify-start gap-2">
                  <Globe className="h-5 w-5 text-blue-500" />
                  <p>Equivalente a 56 voltas completas na Terra!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Oferta Final / Chamada para Ação */}
        <section
          id="oferta"
          className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-indigo-700 to-blue-900 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0 opacity-20">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/luxury-travel-background.png')", // Fundo mais sofisticado
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className="container px-4 sm:px-6 md:px-8 max-w-4xl mx-auto text-center relative z-10">
            <div className="text-center mb-8 sm:mb-12">
              <Badge className="bg-white/20 text-white border border-white/30 px-4 py-2 text-sm font-bold mb-4 animate-pulse">
                <Timer className="mr-2 h-4 w-4" />
                ÚLTIMA CHAMADA: VAGAS LIMITADAS!
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 sm:mb-6 drop-shadow-lg">
                Não Fique de Fora!
                <br />
                Acesso Exclusivo por Apenas{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  R$ 33,08/mês
                </span>
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl font-medium px-4 sm:px-0 opacity-90">
                Pagamento anual de R$ 397 — Garanta o seu acesso VIP hoje e comece a viajar sem limites!
              </p>
            </div>

            <Card className="border-0 shadow-3xl bg-white/95 backdrop-blur-md max-w-lg mx-auto rounded-3xl p-6 sm:p-8 transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader className="text-center pb-4 sm:pb-6">
                <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-700 to-teal-700 rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <img src="/196-white-bg.png" alt="196 Viagens Logo" className="h-14 w-auto" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl mb-2 text-slate-900 font-extrabold">
                  Seu Passaporte para o Mundo!
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-slate-700 font-medium">
                  Acesso completo às melhores ofertas e oportunidades de viagem.
                </CardDescription>

                <div className="text-center py-6 sm:py-8">
                  <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                    R$ 33,08
                  </div>
                  <div className="text-xl sm:text-2xl text-slate-800 mb-2">por mês</div>
                  <div className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">(Pagamento anual de R$ 397)</div>
                  <Badge className="bg-gradient-to-r from-red-500 to-orange-600 text-white font-bold px-4 py-2 rounded-full text-base shadow-md">
                    ECONOMIA INCRÍVEL DE R$ 90+!
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                <ul className="space-y-3 sm:space-y-4 text-left">
                  <li className="flex items-center gap-3 text-slate-800 font-medium text-base sm:text-lg">
                    <Check className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 flex-shrink-0" />
                    Opção de parcelamento em 12x no cartão
                  </li>
                  <li className="flex items-center gap-3 text-slate-800 font-medium text-base sm:text-lg">
                    <Check className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 flex-shrink-0" />
                    Acesso instantâneo ao Grupo Premium
                  </li>
                  <li className="flex items-center gap-3 text-slate-800 font-medium text-base sm:text-lg">
                    <Check className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 flex-shrink-0" />7 dias de garantia
                    incondicional
                  </li>
                </ul>

                <div className="space-y-3 sm:space-y-4 pt-4">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-teal-800 text-white px-16 py-4 sm:py-7 text-xl sm:text-2xl font-extrabold shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full transform hover:scale-105 animate-pulse-fast"
                    size="lg"
                  >
                    <Link href={mainCheckoutUrl} target="_blank">
                      <MessageCircle className="mr-3 h-6 w-6 sm:h-7 sm:w-7" />
                      QUERO GARANTIR MINHA VAGA AGORA!
                    </Link>
                  </Button>

                  <p className="text-sm sm:text-base text-center text-slate-600 flex items-center justify-center gap-2 font-medium">
                    <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                    Seu pagamento é 100% seguro.
                  </p>
                </div>
              </CardContent>
            </Card>

            <p className="text-base sm:text-lg text-slate-800 bg-white/90 backdrop-blur-sm rounded-lg px-6 py-4 mt-10 font-medium max-w-2xl mx-auto shadow-lg">
              Restam apenas <strong className="font-extrabold text-red-600">47 vagas</strong>! Esta oferta exclusiva é
              por tempo limitado e as vagas se esgotam rapidamente. Não perca a chance de transformar suas viagens para
              sempre.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 sm:py-16 text-white">
        <div className="container px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <img src="/196-white-bg.png" alt="196 Viagens Logo" className="h-16 w-auto" />
                <span className="text-xl sm:text-2xl font-light tracking-wide text-white">
                  <span className="font-extrabold text-blue-400">196</span> Viagens
                </span>
              </div>
              <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed">
                Conectando viajantes inteligentes às melhores oportunidades de explorar o mundo.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-4 text-white">Links Rápidos</h3>
              <nav className="space-y-2">
                <Link href="#" className="block text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Termos de Uso
                </Link>
                <Link href="#" className="block text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Política de Privacidade
                </Link>
                <Link href="#" className="block text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Fale Conosco
                </Link>
              </nav>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-4 text-white">Suporte</h3>
              <div className="space-y-2 text-slate-400">
                <p className="text-sm">Email: suporte@196viagens.net</p>
                <p className="text-sm">Atendimento: Seg a Sex, 9h às 18h (Horário de Teresina, PI)</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-xs sm:text-sm text-slate-500">© 2025 - 196 Viagens. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
