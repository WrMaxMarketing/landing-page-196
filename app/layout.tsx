import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: '196 Viagens',
  description: 'Grupo Premium',
  generator: 'Grupo Premium',
  icons: {
    icon: "/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* GTM Head Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-TRML2J6K'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TRML2J6K');
            `,
          }}
        />
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body>
        {/* GTM noscript fallback */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TRML2J6K"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            `,
          }}
        />
        {children}
      </body>
    </html>
  )
}
