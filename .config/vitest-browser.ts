/// <reference types="vitest/browser" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['__tests__/test-*.{js,ts}'],
    globals: true,
    setupFiles: ['__tests__/__helpers__/vitest-setup.js'],
    coverage: {
      provider: 'v8',
      reportsDirectory: './coverage-browser',
    },
    deps: {},
    browser: {
      enabled: true,
      provider: 'playwright',
      headless: true,
	  screenshotFailures: false,
	  instances: [
		{
			browser: 'chromium',
		}
	  ]
    },
  },
  resolve: {
	alias: {
		'path/posix': '@zenfs/core/path',
		'path': '@zenfs/core/path',
	}
  }
})
