/**
 * Zod schemas that I reuse across projects.
 *
 * @packageDocumentation
 */
export { isUnique } from './utils.js'

// Note: api-extractor does not support this syntax:
// export * as dom from "./dom/index.js";
// api-extractor gives this error if you try to use the syntax above:
// ERROR: The "export * as ___" syntax is not supported yet; as a workaround,
// use "import * as ___" with a separate "export { ___ }" declaration.

import * as cloudflare from './cloudflare/index.js'
import * as dom from './dom/index.js'
import * as elevenlabs from './elevenlabs/index.js'
import * as eleventy from './eleventy/index.js'
import * as gcp from './gcp/index.js'
import * as telegram from './telegram/index.js'

export { cloudflare, dom, elevenlabs, eleventy, gcp, telegram }
