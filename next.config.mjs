import nextra from 'nextra'
 
// Set up Nextra with its configuration
const withNextra = nextra({
  defaultShowCopyCode: true,
  latex: true,
  search: {
    codeblocks: true
  }
})
 
// Export the final Next.js config with Nextra included
export default withNextra({
  // Disable React Compiler - experimental and causes browser incompatibility
  // reactCompiler: true,
  // Force static export for SEO benefits
  output: 'export',
  images: {
    unoptimized: true // Required for static export
  },
  // Ensure proper static export
  trailingSlash: false,
  // Disable features that might cause issues in static export
  experimental: {
    optimizePackageImports: ['nextra-theme-docs']
  },
  // Additional optimizations for static sites
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable compression
})
