export default {
  titleSuffix: ' – S.T.A.L.K.E.R. Mobile',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">S.T.A.L.K.E.R. Mobile</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Новости и описание мобильных проектов
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="S.T.A.L.K.E.R. Mobile News" />
      <meta name="og:description" content="S.T.A.L.K.E.R. Mobile News" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://stalker.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="stalker.vercel.app" />
      <meta name="twitter:url" content="https://stalker.vercel.app" />
      <meta name="og:title" content="S.T.A.L.K.E.R. Mobile News" />
      <meta name="og:image" content="https://stalker.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="S.T.A.L.K.E.R. Mobile" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: false,
  prevLinks: false,
  nextLinks: false,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <> {new Date().getFullYear()} © Неравнодушный сталкер</>,
  unstable_faviconGlyph: '☢️',
}
