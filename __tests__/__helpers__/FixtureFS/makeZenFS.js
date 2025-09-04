import { fs as _fs, configure, Fetch, InMemory, CopyOnWrite } from '@zenfs/core'
import { FileSystem } from 'isomorphic-git/internal-apis'
import index from '../../__fixtures__/index.json' with { type: 'json' }

let configured = false

export async function makeZenFS(dir) {
  if (!configured) {
    await configure({
      backend: CopyOnWrite,
      readable: {
        backend: Fetch,
        index,
        baseUrl: '/base/__tests__/__fixtures__/',
      },
      writable: InMemory,
    })
    configured = true
  }


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

