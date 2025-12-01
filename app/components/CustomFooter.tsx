'use client'

export function CustomFooter() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          .footer-cta {
            flex-direction: column !important;
            text-align: center !important;
            padding: 1.5rem 0 !important;
          }
          .footer-cta-left {
            width: 100% !important;
            min-width: unset !important;
          }
          .footer-cta h3 {
            font-size: 1.25rem !important;
          }
          .footer-main {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .footer-left-col {
            max-width: 100% !important;
            min-width: unset !important;
            margin-bottom: 2rem;
            text-align: center;
          }
          .footer-right-cols {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
            width: 100%;
          }
          .section-footer {
            padding: 2rem 0 1.5rem !important;
          }
        }
        @media (max-width: 480px) {
          .footer-right-cols {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .footer-badges {
            justify-content: center !important;
          }
          .footer-social {
            justify-content: center !important;
          }
          .footer-cta-left > div:first-child {
            margin-bottom: 1rem !important;
          }
          .footer-cta-left > div:last-child {
            flex-direction: column !important;
            width: 100%;
          }
          .footer-cta-left > div:last-child > a {
            width: 100%;
            justify-content: center;
          }
        }
      ` }} />
      <section className="section-footer" style={{
        backgroundColor: '#0c3b43',
        color: '#ffffff',
        padding: '4rem 0 2rem',
        marginTop: '4rem',
      }}>
        <div style={{
          maxWidth: 'var(--nextra-content-width, 90rem)',
          margin: '0 auto',
          padding: '0 clamp(1rem, 4vw, 2rem)',
        }}>
          {/* Top CTA Strip */}
          <div className="footer-cta" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            padding: '2rem 0',
            marginBottom: '3rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            flexWrap: 'wrap',
          }}>
            <div className="footer-cta-left" style={{ flex: '1', minWidth: '300px' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{
                  textAlign: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  margin: '0 0 0.5rem 0',
                  color: '#ffffff',
                }}>
                  Ship your AI agents 5x faster ⚡️
                </h3>
                <div style={{
                  textAlign: 'center',
                  fontSize: '1rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                }}>
                  Get in touch to learn how AI teams are saving 100s of hours of development time
                </div>
              </div>
              <div style={{
                justifyContent: 'center',
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}>
                <a
                  href="https://app.getmaxim.ai/sign-up"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#a3ffdc',
                    color: '#0c3b43',
                    textDecoration: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8fe8c8'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#a3ffdc'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Get started free
                </a>
                <a
                  href="https://getmaxim.ai/demo"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    textDecoration: 'none',
                    borderRadius: '0.5rem',
                    fontWeight: '600',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  Book a demo
                </a>
              </div>
            </div>
            {/* <div style={{ flexShrink: 0 }}>
            <a
              href="https://youtube.com/watch?v=qtDJcNwSn_s?si=EetbhiTd-9TwbpDR"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                textDecoration: 'none',
              }}
            >
              <img
                src="https://cdn.prod.website-files.com/665ab0daac869acad030a349/679738aa9d67032ec8ccc244_video-img.svg"
                alt="Watch video"
                style={{
                  maxWidth: '200px',
                  height: 'auto',
                  borderRadius: '0.5rem',
                }}
              />
            </a>
          </div> */}
          </div>

          {/* Main Footer */}
          <div className="footer-main" style={{
            display: 'flex',
            gap: '4rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}>
            {/* Left Column - Logo, Copyright, Badges, Social */}
            <div className="footer-left-col" style={{
              flex: '0 0 auto',
              minWidth: '280px',
              maxWidth: '350px',
            }}>
              {/* Logo */}
              <div style={{ marginBottom: '1.5rem' }}>
                <img
                  src="https://cdn.prod.website-files.com/665ab0daac869acad030a349/666c450d9d94389d4219bf75_logo-white.svg"
                  alt="Maxim AI Logo"
                  style={{
                    height: '2rem',
                  }}
                />
              </div>

              {/* Copyright */}
              <div style={{
                fontSize: '0.875rem',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '2rem',
                lineHeight: '1.6',
              }}>
                © Copyright H3 Labs Inc,<br />
                All rights reserved.
              </div>

              {/* Compliance Badges */}
              <div className="footer-badges" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}>
                <img
                  src="https://cdn.prod.website-files.com/665ab0daac869acad030a349/66fe99bae027e906828812ed_21972-312_SOC_NonCPA.png"
                  alt="SOC 2"
                  style={{ height: '40px', width: 'auto' }}
                />
                <img
                  src="https://cdn.prod.website-files.com/665ab0daac869acad030a349/66fe9aa86579ed03ca44fde2_PNG_GDPR-e1672263252689.png"
                  alt="GDPR"
                  style={{ height: '40px', width: 'auto' }}
                />
                <img
                  src="https://cdn.prod.website-files.com/665ab0daac869acad030a349/6703769213e45e2379621c47_ISO%2027001.png"
                  alt="ISO 27001"
                  style={{ height: '40px', width: 'auto' }}
                />
                <img
                  src="https://cdn.prod.website-files.com/665ab0daac869acad030a349/674059445b7e5f0567d4aa54_image%20(15).png"
                  alt="HIPAA"
                  style={{ height: '40px', width: 'auto' }}
                />
              </div>

              {/* Social Links */}
              <div className="footer-social" style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '2rem',
              }}>
                <a
                  href="https://x.com/getmaximai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    color: '#ffffff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  }}
                  aria-label="Twitter/X"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/maxim-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    color: '#ffffff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  }}
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/maximhq"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    color: '#ffffff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  }}
                  aria-label="GitHub"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/WJzTeWDEsX"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    color: '#ffffff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  }}
                  aria-label="Discord"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>

              {/* Status Badge */}
              <div style={{ marginBottom: '1.5rem' }}>
                <iframe
                  src="https://status.getmaxim.ai/badge?theme=dark"
                  width="250"
                  height="30"
                  frameBorder="0"
                  scrolling="no"
                  style={{ border: 'none' }}
                  title="Status"
                />
              </div>

              {/* Badge */}
              {/* <div>
              <img
                src="https://cdn.prod.website-files.com/665ab0daac869acad030a349/6665411ce2398ec703d85405_badge.png"
                alt="Badge"
                width="50"
                height="50"
              />
            </div> */}
            </div>

            {/* Right Columns - Link Groups */}
            <div className="footer-right-cols" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, minmax(140px, 1fr))',
              gap: '2rem',
              flex: '1',
            }}>
              {/* Integrations */}
              <div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#ffffff',
                }}>
                  Integrations
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { label: 'Langchain', href: 'https://www.getmaxim.ai/docs/sdk/python/integrations/langchain/langchain' },
                    { label: 'LangGraph', href: 'https://www.getmaxim.ai/docs/sdk/python/integrations/langgraph/langgraph-without-decorator' },
                    { label: 'OpenAI', href: 'https://www.getmaxim.ai/docs/sdk/python/integrations/openai/one-line-integration' },
                    { label: 'OpenAI Agents', href: 'https://www.getmaxim.ai/docs/sdk/python/integrations/openai/agents-sdk' },
                    { label: 'LiveKit', href: 'https://www.getmaxim.ai/docs/sdk/python/integrations/livekit/livekit' },
                    { label: 'Crew AI', href: 'https://www.getmaxim.ai/docs/sdk/python/integrations/crewai/crewai' },
                    { label: 'Agno', href: 'https://www.getmaxim.ai/docs/sdk/python/integrations/agno/agno' },
                    { label: 'LiteLLM', href: 'https://www.getmaxim.ai/docs/sdk/python/integrations/litellm/litellm-sdk' },
                    { label: 'LiteLLM Proxy', href: 'https://www.getmaxim.ai/docs/sdk/python/integrations/litellm/litellm-proxy' },
                    { label: 'Anthropic', href: 'https://www.getmaxim.ai/docs/sdk/python/integrations/anthropic/anthropic' },
                    { label: 'Bedrock', href: 'https://github.com/maximhq/maxim-cookbooks/blob/main/python/observability-online-eval/bedrock/single-line-integration.ipynb' },
                    { label: 'Mistral', href: 'https://www.getmaxim.ai/docs/sdk/python/integrations/mistral/mistral' },
                  ].map((link, index) => (
                    <a
                      key={`${link.label}-${index}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#a3ffdc'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Product */}
              <div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#ffffff',
                }}>
                  Product
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { label: 'Experimentation', href: '/products/experimentation' },
                    { label: 'Agent simulation & evaluations', href: '/products/agent-simulation-evaluation' },
                    { label: 'Agent observability', href: '/products/agent-observability' },
                    { label: 'Bifrost LLM gateway', href: 'https://www.getmaxim.ai/bifrost' },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#a3ffdc'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Platform */}
              <div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#ffffff',
                }}>
                  Platform
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { label: 'Docs', href: 'https://getmaxim.ai/docs' },
                    { label: 'Pricing', href: '/pricing' },
                    { label: 'Status', href: 'https://status.getmaxim.ai/' },
                    { label: 'Trust center', href: 'https://trust.getmaxim.ai/' },
                    { label: 'OSS friends', href: 'https://www.getmaxim.ai/bifrost/oss-friends' },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#a3ffdc'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#ffffff',
                }}>
                  Company
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { label: 'About us', href: '/about-us' },
                    { label: 'Careers', href: '/careers' },
                    { label: 'Blog', href: 'https://www.getmaxim.ai/blog' },
                    { label: 'Contact us', href: '/contact' },
                    { label: 'LLMs.txt', href: 'https://www.getmaxim.ai/llms.txt' },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#a3ffdc'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Legal */}
              <div>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#ffffff',
                }}>
                  Legal
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    { label: 'Terms', href: '/terms-of-service' },
                    { label: 'Privacy', href: '/privacy-policy' },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      style={{
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#a3ffdc'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

