namespace NodeJS {
  interface Process {
    browser: boolean
  }
}
namespace jasmine {
  function getEnv(): any
  function addMatchers(matchers: CustomMatcherFactories): void
}
namespace jest {
  interface Matchers<R> {
    toBe(expected: any, message?: string): R
    toEqual(expected: any, message?: string): R
  }
}

declare global {
	const __browser: boolean
}

declare const globalThis: {
	__browser: boolean
}