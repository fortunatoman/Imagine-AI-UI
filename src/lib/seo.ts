const DEFAULT_SITE_URL = 'https://imagine-ai.omsharma.xyz'

const rawSiteUrl = import.meta.env.VITE_SITE_URL?.trim() || DEFAULT_SITE_URL
const normalizedSiteUrl = rawSiteUrl.replace(/\/+$/, '')

const DEFAULT_DESCRIPTION =
  'Turn your ideas into functional products by chatting with the most complete AI builder ever made.'

const DEFAULT_IMAGE_PATH = '/opengraph-image.png'

const DEFAULT_KEYWORDS = [
  'AI app builder',
  'no-code builder',
  'website builder',
  'SaaS builder',
  'product builder',
  'Imagine',
]

const SOCIAL_LINKS = [
  'https://x.com/1omsharma',
  'https://www.instagram.com/coderomm/',
  'https://imagine-ai.omsharma.xyz/',
]

const INDEXABLE_ROBOTS =
  'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
const NOINDEX_ROBOTS = 'noindex, nofollow, noarchive, nosnippet'

type JsonLd = {
  '@context': 'https://schema.org'
  '@type': string
  [key: string]: unknown
}

type SeoHeadOptions = {
  path: string
  title?: string
  description?: string
  keywords?: string[]
  noIndex?: boolean
  imagePath?: string
  imageAlt?: string
  type?: 'website' | 'article'
  jsonLd?: JsonLd | JsonLd[]
}

export const seoConfig = {
  siteName: 'Imagine',
  siteUrl: normalizedSiteUrl,
  locale: 'en_US',
  defaultTitle: 'Imagine - Build something real',
  defaultDescription: DEFAULT_DESCRIPTION,
  twitterHandle: '@1omsharma',
}

function withLeadingSlash(path: string) {
  return path.startsWith('/') ? path : `/${path}`
}

function normalizePath(path: string) {
  const nextPath = withLeadingSlash(path)
  return nextPath === '/' ? nextPath : nextPath.replace(/\/+$/, '')
}

function toAbsoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl
  }

  return `${seoConfig.siteUrl}${withLeadingSlash(pathOrUrl)}`
}

function getRobotsContent(noIndex?: boolean) {
  return noIndex ? NOINDEX_ROBOTS : INDEXABLE_ROBOTS
}

function getTitle(title?: string) {
  if (!title) {
    return seoConfig.defaultTitle
  }

  if (title.includes(seoConfig.siteName)) {
    return title
  }

  return `${title} | ${seoConfig.siteName}`
}

export function buildSeoHead({
  path,
  title,
  description = seoConfig.defaultDescription,
  keywords = DEFAULT_KEYWORDS,
  noIndex = false,
  imagePath = DEFAULT_IMAGE_PATH,
  imageAlt = seoConfig.defaultTitle,
  type = 'website',
  jsonLd,
}: SeoHeadOptions) {
  const canonicalPath = normalizePath(path)
  const canonicalUrl = `${seoConfig.siteUrl}${canonicalPath}`
  const robotsContent = getRobotsContent(noIndex)
  const pageTitle = getTitle(title)
  const imageUrl = toAbsoluteUrl(imagePath)
  const jsonLdSchemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return {
    meta: [
      { title: pageTitle },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { name: 'robots', content: robotsContent },
      { name: 'googlebot', content: robotsContent },
      { name: 'theme-color', content: '#0a0a0a' },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: seoConfig.siteName },
      { property: 'og:locale', content: seoConfig.locale },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:image:alt', content: imageAlt },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:creator', content: seoConfig.twitterHandle },
      ...(import.meta.env.VITE_GOOGLE_SITE_VERIFICATION
        ? [
          {
            name: 'google-site-verification',
            content: import.meta.env.VITE_GOOGLE_SITE_VERIFICATION,
          },
        ]
        : []),
    ],
    links: [
      { rel: 'canonical', href: canonicalUrl },
      { rel: 'alternate', href: canonicalUrl, hrefLang: 'en-US' },
      { rel: 'alternate', href: canonicalUrl, hrefLang: 'x-default' },
    ],
    scripts: jsonLdSchemas.map((schema) => ({
      type: 'application/ld+json',
      children: JSON.stringify(schema),
    })),
  }
}

export function buildNoIndexHead() {
  const robotsContent = getRobotsContent(true)

  return {
    meta: [
      { name: 'robots', content: robotsContent },
      { name: 'googlebot', content: robotsContent },
    ],
  }
}

export function getHomeJsonLd(): JsonLd[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
      description: seoConfig.defaultDescription,
      inLanguage: 'en-US',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
      logo: toAbsoluteUrl(DEFAULT_IMAGE_PATH),
      sameAs: SOCIAL_LINKS,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: seoConfig.siteName,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: seoConfig.siteUrl,
      description: seoConfig.defaultDescription,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
  ]
}
