import { PassThrough } from 'readable-stream'

export function asyncIteratorToStream(iter) {
  const stream = new PassThrough()
  queueMicrotask(async () => {
    for await (const chunk of iter) {
      stream.write(chunk)
    }
    stream.end()
  })
  return stream
}
