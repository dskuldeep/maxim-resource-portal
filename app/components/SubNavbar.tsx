'use client'

import { usePathname } from 'next/navigation'

export function SubNavbar() {
  const pathname = usePathname()
  
  const links = [
    { label: 'FAQs', href: '/faqs' },
    { label: 'Glossary', href: '/glossary' },
    { label: 'Guides', href: '/guides' },
  ]

  const isActive = (href: string) => {
    // usePathname returns null during SSR, which is fine - it will update on client
    if (!pathname) return false
    if (href === '/faqs') {
      return pathname.startsWith('/faqs') || pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="sub-navbar" style={{
      backgroundColor: '#0c3b43',
      borderBottom: '0.8rem solid rgba(255, 255, 255, 0.0)',
      paddingTop: '0',
      paddingBottom: '1.25rem',
      marginTop: '0',
    }}>
      <nav className="sub-navbar-nav" style={{
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
      }}>
        {links.map((link) => {
          const active = isActive(link.href)
          return (
            <a
              key={link.href}
              href={link.href}
              className="sub-navbar-link"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '0.9375rem',
                fontWeight: active ? '700' : '500',
                transition: 'opacity 0.2s',
                opacity: active ? 1 : 0.9,
                borderBottom: active ? '2px solid #a3ffdc' : '2px solid transparent',
                paddingBottom: '0.5rem',
              }}
            >
              {link.label}
            </a>
          )
        })}
      </nav>
    </div>
  )
}

