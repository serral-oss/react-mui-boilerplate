import { fileURLToPath, URL } from 'node:url'

import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import type { PluginOption } from 'vite'
import { compression } from 'vite-plugin-compression2'
import svgr from 'vite-plugin-svgr'
import { defineConfig } from 'vitest/config'

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  const isAnalyze = process.env.ANALYZE_BUNDLE === 'true'

  const plugins: PluginOption[] = [react(), svgr()]

  // Production-specific plugins
  if (isProduction) {
    plugins.push(
      compression({
        algorithms: ['gzip'],
        include: /\.(js|css|html|svg)$/,
        threshold: 10240
      })
    )
  }

  // Bundle analyzer
  if (isAnalyze) {
    plugins.push(visualizer({ open: true, gzipSize: true, filename: 'build/stats.html' }))
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: 3000,
      open: true
    },
    preview: {
      port: 3000
    },
    build: {
      outDir: 'build',
      sourcemap: true,
      chunkSizeWarningLimit: 1024,
      rolldownOptions: {
        output: {
          minify: isProduction ? { compress: { dropConsole: true } } : false
        }
      }
    },
    test: {
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      css: true
    }
  }
})
