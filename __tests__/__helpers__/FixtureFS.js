/* eslint-env node, browser, jasmine, jest */

import { makeLightningFS } from './FixtureFS/makeLightningFS.js'
import { makeZenFS } from './FixtureFS/makeZenFS.js'

globalThis.jest?.useFakeTimers?.()

if (globalThis.jasmine) jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

export async function makeFixture(dir) {
  if (!globalThis.__browser) {
    const { makeNodeFixture } = await import('./FixtureFS/makeNodeFixture.js')
    return makeNodeFixture(dir)
  } else return makeBrowserFixture(dir)
}

async function makeBrowserFixture(dir) {
  // enable / disable console.log statements
  // window.localStorage.debug = 'isomorphic-git'
  const isSafari = navigator?.userAgent?.includes('Safari')
  return /* globalThis.env?.ENABLE_LIGHTNINGFS && */ !isSafari
    ? makeLightningFS(dir)
    : makeZenFS(dir)
}
