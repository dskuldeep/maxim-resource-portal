import { getBaseUrl } from '../utils/getBaseUrl'

interface StructuredDataProps {
  pathname?: string
  title?: string
  description?: string
  type?: 'FAQPage' | 'Article' | 'WebPage'
}

// Force static generation - this component should be statically generated
export const dynamic = 'force-static'

export function StructuredData({
  pathname,
  title,
  description,
  type = 'WebPage'
}: StructuredDataProps) {
  const baseUrl = getBaseUrl()

  // Use provided pathname or default to '/'
  // In static export, we can't use headers() - pathname must be provided explicitly
  const path = pathname || '/'

  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title || 'Maxim AI FAQ',
    description: description || 'Frequently Asked Questions about Maxim AI',
    url: `${baseUrl}${path}`,
    publisher: {
      '@type': 'Organization',
      name: 'Maxim AI',
      url: 'https://getmaxim.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mintcdn.com/maximai/3RnX5HkRjKtE2PMo/logo/light.svg',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}

