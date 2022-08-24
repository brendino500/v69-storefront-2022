import '../styles/globals.css'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <DefaultSeo
        title=""
        defaultTitle=""
        description=""
        canonical=""
        openGraph={{
          type: 'website',
          locale: 'en-gb',
          url: '',
          site_name: '',
          description: '',
          images: [
            {
              url: '',
              width: 800,
              height: 600,
              alt: '',
            },
          ],
        }}
        twitter={{
          handle: '',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: '',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/x-con',
          },
          {
            rel: 'apple-touch-icon',
            href: '/apple-icon-57x57',
            type: 'image/png',
            sizes: '57x57',
          },
        ]}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
