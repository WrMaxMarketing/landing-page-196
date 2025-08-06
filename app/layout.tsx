import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'grupo premium',
  description: 'grupo premium',
  generator: 'grupo premium',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-M6X2P8TT'+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M6X2P8TT');
            `,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}

        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body>{children}
        {/* <!-- Google Tag Manager (noscript) --> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6X2P8TT"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            `,
          }}
        />
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  )
}
