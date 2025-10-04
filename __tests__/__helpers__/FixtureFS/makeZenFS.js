import {
  fs as _fs,
  configureSingle,
  CopyOnWrite,
  Fetch,
  InMemory,
} from '@zenfs/core'
import { FileSystem } from 'isomorphic-git/internal-apis'
import index from '../../__fixtures__/index.json' with { type: 'json' }

export async function makeZenFS(dir) {
  await configureSingle({
    backend: CopyOnWrite,
    readable: {
      backend: Fetch,
      index,
      baseUrl: 'http://localhost:9876/base/__tests__/__fixtures__/',
    },
    writable: InMemory,
  })

  const fs = new FileSystem(_fs)

  dir = `/${dir}`
  const gitdir = `/${dir}.git`
  await fs.mkdir(dir)
  await fs.mkdir(gitdir)
  return {
    _fs,
    fs,
    dir,
    gitdir,
  }
}
