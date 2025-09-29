import { createFileRoute } from '@tanstack/react-router'
import {
  ProductHuntBanner,
  Header,
  Hero,
  TemplateGallery,
  Features,
  Security,
  Pricing,
  FAQ,
  Footer,
} from '@/components/landing'
import { buildSeoHead, getHomeJsonLd } from '@/lib/seo'

export const Route = createFileRoute('/_public/')({
  head: () =>
    buildSeoHead({
      path: '/',
      title: 'Build something real',
      description:
        'Turn your ideas into functional products by chatting with the most complete AI builder ever made.',
      keywords: [
        'AI builder',
        'website builder',
        'product builder',
        'no-code',
        'Imagine',
      ],
      jsonLd: getHomeJsonLd(),
    }),
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] font-['Inter',sans-serif]">
      {/* Product Hunt Banner */}
      <ProductHuntBanner />

      {/* Header / Navigation */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Template Gallery */}
        <TemplateGallery />

        {/* Features Section */}
        <Features />

        {/* Security Section */}
        <Security />

        {/* Pricing Section */}
        <Pricing />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
