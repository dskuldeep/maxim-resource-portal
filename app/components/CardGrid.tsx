'use client'

import Link from 'next/link'

interface Card {
  title: string
  href: string
  description?: string
}

interface CardGridProps {
  cards: Card[]
  cols?: number
}

export function CardGrid({ cards, cols = 3 }: CardGridProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .card-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .card-grid {
            grid-template-columns: repeat(${Math.min(cols, 2)}, 1fr) !important;
          }
        }
      ` }} />
      <div 
        className="card-grid" 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: '1.5rem',
          marginTop: '2rem',
          marginBottom: '2rem',
        }}
      >
      {cards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          style={{
            display: 'block',
            padding: '1.5rem',
            border: '1px solid #e5e7eb',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'all 0.2s',
            backgroundColor: '#ffffff',
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#0c3b43'
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e5e7eb'
            e.currentTarget.style.boxShadow = 'none'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          <h3 style={{
            margin: '0 0 0.5rem 0',
            fontSize: '1.125rem',
            fontWeight: '600',
            color: '#0c3b43',
          }}>
            {card.title}
          </h3>
          {card.description && (
            <p style={{
              margin: '0',
              fontSize: '0.875rem',
              color: '#6b7280',
              lineHeight: '1.5',
            }}>
              {card.description}
            </p>
          )}
        </Link>
      ))}
    </div>
    </>
  )
}

