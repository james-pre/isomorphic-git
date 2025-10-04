import { Buffer } from 'buffer'

import { vi } from 'vitest'

vi.stubGlobal('jest', vi)
vi.stubGlobal('Buffer', Buffer)
vi.stubGlobal('__browser', true)
