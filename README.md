# Maxim AI FAQ Portal

A comprehensive FAQ portal for Maxim AI built with [Nextra](https://nextra.site/) - a powerful documentation framework based on Next.js.

## 🚀 Features

- **Static Site Generation (SSG)** - Fully static HTML for maximum SEO benefits and performance
- **Beautiful Documentation Theme** - Clean, modern design optimized for readability
- **Full-Text Search** - Fast search powered by FlexSearch and Pagefind
- **MDX Support** - Write content with Markdown and React components
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **SEO Optimized** - Built-in meta tags, structured data (JSON-LD), sitemap, and robots.txt
- **Type-Safe** - Built with TypeScript for better DX

## 📁 Project Structure

```
/Users/kuldeeppaul/faq/
├── app/
│   ├── layout.tsx              # Root layout with Nextra theme
│   ├── page.mdx                # Homepage
│   ├── _meta.js                # Navigation structure
│   ├── getting-started/        # Getting Started section
│   │   ├── page.mdx
│   │   ├── _meta.js
│   │   ├── what-is-maxim-ai.mdx
│   │   └── quick-start.mdx
│   ├── products-features/      # Products & Features section
│   ├── account-billing/        # Account & Billing section
│   ├── technical-support/      # Technical Support section
│   ├── security-privacy/       # Security & Privacy section
│   └── api-integration/        # API & Integration section
├── mdx-components.tsx          # Custom MDX components
├── next.config.mjs             # Next.js + Nextra configuration
└── package.json

```

## 🛠️ Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn or pnpm

### Installation

Dependencies are already installed. To reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your FAQ portal.

### Build for Production

This site is configured for **static export**, generating fully static HTML files optimized for SEO:

```bash
npm run build
```

The static files will be generated in the `out/` directory. You can preview them locally:

```bash
npm run serve
```

**Static Site Benefits:**
- ✅ All pages are pre-rendered as static HTML
- ✅ Fast page loads and excellent SEO
- ✅ Can be deployed to any static hosting (Netlify, Vercel, S3, etc.)
- ✅ No server required - pure HTML/CSS/JS
- ✅ Automatic sitemap.xml and robots.txt generation

## 📝 Adding New FAQ Content

### Create a New Category

1. Create a new folder under `app/`: 
   ```bash
   mkdir app/new-category
   ```

2. Add `page.mdx` for the category overview:
   ```mdx
   # New Category
   
   Overview content here...
   ```

3. Add `_meta.js` to define the structure:
   ```js
   export default {
     'page': 'Overview',
     'topic-1': 'Topic 1',
     'topic-2': 'Topic 2'
   }
   ```

4. Update `app/_meta.js` to include the new category

### Create a New FAQ Page

Simply create a new `.mdx` file:

```mdx
# Your FAQ Topic

Your content here with full Markdown and React component support!

import { Callout } from 'nextra/components'

<Callout type="info">
This is an info callout!
</Callout>
```

## 🎨 Available Components

Nextra provides built-in components you can use:

- **Callout** - Highlighted notes (info, warning, error)
- **Cards** - Card grids for navigation
- **Steps** - Numbered step-by-step guides
- **Tabs** - Tabbed content
- **FileTree** - Display file structures
- **Code Blocks** - Syntax highlighted code with copy button

## 🔍 Search Configuration

Search is powered by FlexSearch and configured in `next.config.mjs`:

```js
search: {
  codeblocks: true,
  placeholder: 'Search FAQ...'
}
```

## 🎨 Customization

### Update Branding

Edit `app/layout.tsx` to customize:
- Logo and navbar
- Footer content
- Banner messages
- Theme colors

### Add Custom Styling

Nextra uses Tailwind CSS. You can add custom styles by:
1. Creating a custom CSS file
2. Importing it in your layout
3. Using Tailwind utility classes in MDX

## 📚 Documentation

- [Nextra Documentation](https://nextra.site/)
- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)

## 🚢 Deployment

### Deploy to Netlify

The site is configured for Netlify deployment with `netlify.toml`:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically:
   - Run `npm run build`
   - Deploy the `out/` directory
   - Set up the `NEXT_PUBLIC_BASE_URL` environment variable

### Deploy to Vercel

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Static Hosts

Build the static site:

```bash
npm run build
```

The output will be in the `out/` directory. You can deploy this to:
- **Netlify** - Configured with `netlify.toml`
- **Vercel** - Automatic detection
- **AWS S3 + CloudFront** - Upload `out/` directory
- **GitHub Pages** - Deploy `out/` directory
- **Any static hosting** - Just upload the `out/` folder

**Note:** This is a fully static site - no Node.js server required!

## 📄 License

MIT © Maxim AI

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For questions or issues:
- Email: support@maxim-ai.com
- GitHub Issues: [Create an issue](https://github.com/maxim-ai/faq)
- Community: [Join our forum](https://community.maxim-ai.com)

---

Built with ❤️ using [Nextra](https://nextra.site/)
