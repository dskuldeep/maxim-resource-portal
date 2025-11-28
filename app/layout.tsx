import { Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { LogoImage } from './components/LogoImage'
import { SubNavbar } from './components/SubNavbar'
import { CustomFooter } from './components/CustomFooter'
import { ErrorDisplay } from './components/ErrorDisplay'
import { getBaseUrl } from './utils/getBaseUrl'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: 'Maxim AI - FAQ Portal',
  description: 'Frequently Asked Questions about Maxim AI',
}

const banner = (
  <Banner storageKey="maxim-ai-banner">
    🚀 Welcome to Maxim AI FAQ Portal
  </Banner>
)

const NavbarLoginButton = () => {
  return (
    <div className="navbar-login-wrapper" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      width: '100%',
    }}>
      <div className="navbar-login-container" style={{
        maxWidth: 'var(--nextra-content-width, 90rem)',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '0.75rem',
        paddingRight: '2rem',
        paddingLeft: '2rem',
        pointerEvents: 'auto',
      }}>
        <a
          href="https://getmaxim.ai/demo"
          className="navbar-demo-button"
          style={{
            color: '#0c3b43',
            backgroundColor: '#a3ffdc',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontSize: '0.9375rem',
            fontWeight: '500',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            pointerEvents: 'auto',
          }}
        >
          Book a Demo
        </a>
        <a
          href="https://app.getmaxim.ai/sign-up"
          className="navbar-login-button"
          style={{
            color: 'white',
            backgroundColor: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            fontSize: '0.9375rem',
            fontWeight: '500',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            pointerEvents: 'auto',
          }}
        >
          Sign Up
        </a>
      </div>
    </div>
  )
}

const navbar = (
  <div style={{ margin: 0, padding: 0, position: 'sticky', top: 0, zIndex: 31, backgroundColor: '#0c3b43' }}>
    <div style={{ backgroundColor: '#0c3b43', margin: 0, padding: 0, position: 'relative', zIndex: 31 }}>
      <Navbar
        logo={<LogoImage />}
        projectLink="https://github.com/maximhq"
      />
      <NavbarLoginButton />
    </div>
    <SubNavbar />
  </div>
)

const footer = <CustomFooter />

// Generate JSON-LD structured data
function generateStructuredData() {
  const baseUrl = getBaseUrl()

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Maxim AI',
    url: 'https://getmaxim.ai',
    logo: 'https://mintcdn.com/maximai/3RnX5HkRjKtE2PMo/logo/light.svg',
    sameAs: [
      'https://github.com/maximhq',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Maxim AI FAQ Portal',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return { organizationSchema, websiteSchema }
}

// Helper function to ensure pageMap items have unique keys
function ensureUniquePageMap(pageMap: any[]): any[] {
  const seen = new Set<string>()
  const processed: any[] = []
  
  for (const item of pageMap) {
    // Create a unique key based on route and name
    const key = item.route || item.name || JSON.stringify(item)
    
    if (!seen.has(key)) {
      seen.add(key)
      // Recursively process children
      if (item.children && Array.isArray(item.children)) {
        item.children = ensureUniquePageMap(item.children)
      }
      processed.push(item)
    }
  }
  
  return processed
}

// Force static generation - this layout should be statically generated
export const dynamic = 'force-static'
export const dynamicParams = false

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { organizationSchema, websiteSchema } = generateStructuredData()
  const rawPageMap = await getPageMap()
  // Process pageMap to ensure uniqueness
  const pageMap = ensureUniquePageMap(rawPageMap)

  return (
    <html
      lang="en"
      dir="ltr"
      className="light"
      style={{ colorScheme: 'light' }}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // SHOW ALL ERRORS - NO SUPPRESSION
              window.addEventListener('error', function(e) {
                console.error('=== CRITICAL ERROR ===');
                console.error('Message:', e.message);
                console.error('File:', e.filename);
                console.error('Line:', e.lineno + ':' + e.colno);
                if (e.error && e.error.stack) {
                  console.error('Stack:', e.error.stack);
                }
                console.error('=====================');

                // Show error on screen
                var errorDiv = document.createElement('div');
                errorDiv.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#f00;color:#fff;padding:20px;z-index:999999;font-family:monospace;font-size:14px;';
                errorDiv.innerHTML = '<strong>ERROR:</strong> ' + e.message + '<br>File: ' + e.filename + ':' + e.lineno;
                document.body.appendChild(errorDiv);
              });

              // Catch React errors
              window.addEventListener('unhandledrejection', function(e) {
                console.error('=== UNHANDLED PROMISE REJECTION ===');
                console.error('Reason:', e.reason);
                console.error('===================================');
              });

              // Polyfill for incognito/private browsing mode
              try {
                if (typeof localStorage === 'undefined' || !localStorage) {
                  window.localStorage = {
                    getItem: function() { return null; },
                    setItem: function() {},
                    removeItem: function() {},
                    clear: function() {},
                    length: 0,
                    key: function() { return null; }
                  };
                }
                // Test if localStorage is actually accessible
                localStorage.setItem('__test__', '1');
                localStorage.removeItem('__test__');
              } catch (e) {
                console.warn('localStorage blocked, using fallback');
                window.localStorage = {
                  getItem: function() { return null; },
                  setItem: function() {},
                  removeItem: function() {},
                  clear: function() {},
                  length: 0,
                  key: function() { return null; }
                };
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={getBaseUrl()} />
        <style>{`
          html.dark { display: none; }
          html { color-scheme: light !important; }
          button[aria-label*="theme" i],
          button[title*="theme" i],
          [class*="theme"] button[aria-label] {
            display: none !important;
          }
          /* Override navbar height CSS variable */
          :root {
            --nextra-navbar-height: 72px !important;
          }
          /* Ensure navbar has solid background color and increase height (thickness) */
          nav.nextra-nav-container,
          nav.nextra-nav-container > div,
          header.nextra-navbar nav {
            background-color: #0c3b43 !important;
            height: 72px !important;
            min-height: 72px !important;
            overflow: visible !important;
          }
          /* Increase navbar content padding - extra right padding for buttons */
          nav.nextra-nav-container > div,
          header.nextra-navbar nav {
            padding-left: 2rem !important;
            padding-right: 25rem !important;
          }
          /* Remove blur and transparency from navbar */
          .nextra-navbar-blur {
            background-color: #0c3b43 !important;
            backdrop-filter: none !important;
            opacity: 1 !important;
            border-bottom: none !important;
            overflow: visible !important;
          }
          /* Remove border from navbar header */
          header.nextra-navbar {
            border-bottom: none !important;
            margin-bottom: 0 !important;
            margin-top: 0 !important;
            padding-bottom: 0 !important;
            overflow: visible !important;
            z-index: 100 !important;
          }
          /* Ensure search dropdown is visible */
          .nextra-search-results,
          div[class*="search-results"],
          ul[class*="search-results"] {
            z-index: 1000 !important;
          }
          /* Remove border-bottom class from navbar */
          header.nextra-navbar.nextra-border,
          .nextra-border {
            border-bottom: none !important;
          }
          /* Remove gap between navbar wrapper and sub-navbar */
          div[style*="background-color"] > header + div.sub-navbar,
          div[style*="background-color"] + div.sub-navbar,
          header.nextra-navbar + div.sub-navbar {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
          /* Ensure no margin on navbar wrapper divs */
          div[style*="background-color:#0c3b43"],
          div[style*="background-color: rgb(12, 59, 67)"] {
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
            gap: 0 !important;
          }
          /* Remove any spacing from Nextra layout between navbar and sub-navbar */
          div[style*="background-color"] > header {
            margin-bottom: 0 !important;
          }
          /* Make sure navbar links are visible */
          nav.nextra-nav-container a,
          nav.nextra-nav-container button {
            color: white !important;
          }
          /* Ensure logo displays correctly and is clickable */
          nav.nextra-nav-container a[aria-label="Home page"],
          header.nextra-navbar a[aria-label="Home page"] {
            position: relative !important;
            z-index: 102 !important;
            pointer-events: auto !important;
            opacity: 1 !important;
          }
          nav.nextra-nav-container a[aria-label="Home page"]:hover,
          header.nextra-navbar a[aria-label="Home page"]:hover {
            opacity: 1 !important;
          }
          nav.nextra-nav-container a[aria-label="Home page"] img,
          header.nextra-navbar a[aria-label="Home page"] img {
            filter: none !important;
            height: 1.75rem !important;
            width: auto !important;
            cursor: pointer !important;
            pointer-events: auto !important;
            opacity: 1 !important;
            position: relative !important;
            z-index: 103 !important;
          }
          nav.nextra-nav-container a[aria-label="Home page"]:hover img,
          header.nextra-navbar a[aria-label="Home page"]:hover img {
            opacity: 1 !important;
          }
          /* Ensure logo link is above button wrapper */
          header.nextra-navbar nav > a[aria-label="Home page"] {
            z-index: 102 !important;
          }
          /* Invert GitHub logo to make it white - target all possible selectors */
          nav.nextra-nav-container a[href*="github"] svg,
          nav a[aria-label*="repository" i] svg,
          nav a[aria-label*="Project repository" i] svg,
          nav.nextra-nav-container svg[viewBox*="3 3 18 18"],
          nav.nextra-nav-container a svg,
          nav svg[fill="currentColor"],
          nav svg[viewBox="3 3 18 18"],
          /* Very broad selector as fallback */
          nav svg {
            filter: invert(1) brightness(1.2) !important;
          }
          /* Make search input background white */
          input[type="search"][role="combobox"],
          input[placeholder*="Search documentation"],
          input[placeholder*="Search"] {
            background-color: white !important;
          }
          /* Login button wrapper positioning */
          .navbar-login-wrapper {
            z-index: 100 !important;
          }
          /* Ensure wrapper doesn't block logo */
          .navbar-login-wrapper {
            pointer-events: none !important;
          }
          .navbar-login-container {
            pointer-events: none !important;
          }
          /* Hide Login button on mobile and reset navbar padding */
          @media (max-width: 768px) {
            .navbar-login-wrapper {
              display: none !important;
            }
            nav.nextra-nav-container > div,
            header.nextra-navbar nav {
              padding-right: 2rem !important;
            }
            /* Mobile sub-navbar adjustments */
            .sub-navbar-nav {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
              gap: 1rem !important;
            }
            .sub-navbar-link {
              font-size: 0.875rem !important;
            }
            /* Mobile content padding */
            main.nextra-content,
            div.nextra-content,
            article.nextra-content,
            main[class*="content"],
            body > div > main,
            div[class*="container"] > main {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
              padding-top: 1.5rem !important;
            }
          }
          /* Login button hover effect */
          .navbar-login-button:hover {
            border-color: rgba(255, 255, 255, 0.5) !important;
            background-color: rgba(255, 255, 255, 0.1) !important;
          }
          /* Demo button hover effect */
          .navbar-demo-button:hover {
            background-color: #8fe8c8 !important;
            opacity: 0.9 !important;
          }
          /* Sub-navbar styling - part of the sticky navbar wrapper */
          .sub-navbar {
            position: relative !important;
            z-index: 29 !important;
            margin-top: 0 !important;
            margin-bottom: 0 !important;
            padding-top: 0 !important;
            background-color: #0c3b43 !important;
          }
          /* Align sub-navbar with navbar logo and body content */
          .sub-navbar-nav {
            max-width: var(--nextra-content-width, 90rem) !important;
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
          /* Ensure sub-navbar container doesn't add extra padding */
          .sub-navbar {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .sub-navbar-link {
            opacity: 0.9;
          }
          .sub-navbar-link:hover {
            opacity: 1 !important;
          }
          /* Make left sidebar sticky and scrollable */
          aside.nextra-sidebar-container,
          nav.nextra-sidebar,
          div[class*="sidebar"],
          aside[class*="sidebar"],
          .nextra-sidebar-container,
          nav[class*="nextra-nav-container-level"],
          aside:has(nav.nextra-sidebar) {
            position: sticky !important;
            top: 132px !important;
            max-height: calc(100vh - 132px) !important;
            overflow-y: auto !important;
            overflow-x: hidden !important;
          }
          /* Target Nextra's specific sidebar structure */
          body > div > div > aside:first-of-type,
          main ~ aside:first-of-type,
          div[class*="container"] > aside:first-child,
          aside:has(.nextra-sidebar),
          [class*="sidebar-container"] {
            position: sticky !important;
            top: 132px !important;
            max-height: calc(100vh - 132px) !important;
            overflow-y: auto !important;
          }
          /* More specific for Nextra layout */
          div > aside:not([class*="toc"]),
          aside.md\\:flex,
          aside[class*="md:"],
          aside[class*="max-md:hidden"] {
            position: sticky !important;
            top: 132px !important;
            max-height: calc(100vh - 132px) !important;
            overflow-y: auto !important;
          }
          /* Catch all left-side asides */
          aside {
            position: sticky !important;
            top: 132px !important;
            max-height: calc(100vh - 132px) !important;
            overflow-y: auto !important;
            padding-top: 1.5rem !important;
          }
          /* Make right TOC panel sticky and scrollable - override the catch-all */
          nav.nextra-toc,
          div.nextra-toc,
          aside[class*="toc"],
          nav[class*="toc"],
          div[class*="toc"] nav {
            position: sticky !important;
            top: 132px !important;
            max-height: calc(100vh - 132px) !important;
            overflow-y: auto !important;
            overflow-x: hidden !important;
            padding-top: 1.5rem !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          /* Fix nested scrollable elements in TOC */
          nav.nextra-toc > div,
          nav.nextra-toc > ul,
          div.nextra-toc > div,
          nav[class*="toc"] > div {
            overflow: visible !important;
            max-height: none !important;
          }
          /* Ensure TOC title is at consistent position */
          nav.nextra-toc > p,
          nav.nextra-toc > div:first-child,
          div.nextra-toc > p:first-child,
          nav[class*="toc"] > p:first-child {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
          /* Hide scrollbars for TOC and sidebars */
          nav.nextra-toc::-webkit-scrollbar,
          aside::-webkit-scrollbar,
          div[class*="toc"]::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          /* Hide scrollbars for left sidebar */
          aside::-webkit-scrollbar {
            display: none !important;
          }
          aside {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          /* Make inner logo link work by bringing it forward */
          header.nextra-navbar a[aria-label="Home page"] > a {
            position: relative;
            z-index: 1;
          }
          /* Fix main content area padding to prevent navbar overlap */
          main.nextra-content,
          div.nextra-content,
          article.nextra-content,
          main[class*="content"],
          body > div > main,
          div[class*="container"] > main {
            padding-top: 2rem !important;
          }

          /* Scope: only this specific Nextra container instance */
          div[class~="nextra-border"][class~="x:inline-flex"][class~="x:overflow-hidden"][class~="x:items-stretch"] {
            border: none !important;
            box-shadow: none !important; /* if border is simulated via shadow */
            outline: none !important;
          }

          /* Remove pseudo-element borders if any */
          div[class~="nextra-border"][class~="x:inline-flex"][class~="x:overflow-hidden"][class~="x:items-stretch"]::before,
          div[class~="nextra-border"][class~="x:inline-flex"][class~="x:overflow-hidden"][class~="x:items-stretch"]::after {
            content: none !important;
            border: none !important;
            box-shadow: none !important;
          }

          /* Button styling: subtle grey */
          div[class~="nextra-border"][class~="x:inline-flex"][class~="x:overflow-hidden"][class~="x:items-stretch"] > button {
            border: none !important;
            box-shadow: none !important;
            outline: none !important;

            background-color: #cacbcdff; /* light grey */
            color: #111827;            /* dark text for contrast */
            transition: background-color 150ms ease, color 150ms ease;
          }

          /* Hover state: slightly darker grey */
          div[class~="nextra-border"][class~="x:inline-flex"][class~="x:overflow-hidden"][class~="x:items-stretch"] > button:hover {
            background-color: #e5e7eb; /* hover grey */
          }

          /* Active/pressed state */
          div[class~="nextra-border"][class~="x:inline-flex"][class~="x:overflow-hidden"][class~="x:items-stretch"] > button:active {
            background-color: #d1d5db; /* pressed grey */
          }

          /* Optional: focus-visible ring for accessibility (no outline) */
          div[class~="nextra-border"][class~="x:inline-flex"][class~="x:overflow-hidden"][class~="x:items-stretch"] > button:focus-visible {
            outline: none !important;
            box-shadow: 0 0 0 3px rgba(31, 41, 55, 0.15); /* subtle focus ring */
          }


        `}</style>
      </Head>
      <body>
        <noscript>
          <div style={{
            padding: '2rem',
            textAlign: 'center',
            fontFamily: 'system-ui, sans-serif',
          }}>
            <h1>JavaScript Required</h1>
            <p>This site requires JavaScript to function. Please enable JavaScript in your browser settings.</p>
          </div>
        </noscript>
        <Layout
          // banner={banner}
          darkMode={false}
          navbar={navbar}
          pageMap={pageMap}
          footer={footer}
          editLink=""
          feedback={{
            content: '',
            labels: ''
          }}
          copyPageButton={true}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            toggleButton: true
          }}
          toc={{
            title: 'On This Page',
            backToTop: true,
            extraContent: null,
            float: true
          }}
        >
          {children}
        </Layout>
        <ErrorDisplay />
      </body>
    </html>
  )
}
