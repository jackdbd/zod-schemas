# Zod schemas

[![npm version](https://badge.fury.io/js/@jackdbd%2Fzod-schemas.svg)](https://badge.fury.io/js/@jackdbd%2Fzod-schemas)
![CI workflow](https://github.com/jackdbd/zod-schemas/actions/workflows/ci.yaml/badge.svg)
![Release to npmjs.com workflow](https://github.com/jackdbd/zod-schemas/actions/workflows/release-to-npmjs.yaml/badge.svg)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![install size](https://packagephobia.com/badge?p=@jackdbd/zod-schemas)](https://packagephobia.com/result?p=@jackdbd/zod-schemas)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@jackdbd/zod-schemas)](https://socket.dev/npm/package/@jackdbd/zod-schemas)

Some [Zod](https://github.com/colinhacks/zod) schemas I reuse across projects.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details><summary>Table of Contents</summary>

- [Installation](#installation)
- [Development](#development)
- [Docs](#docs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
</details>

## Installation

```sh
npm install @jackdbd/zod-schemas
```

## Development

Launch both the TypeScript compiler and the [Node.js test runner](https://nodejs.org/api/test.html) in watch mode:

```sh
npm run dev
```

Build all TypeScript files with the TypeScript compiler, and all docs with [TypeDoc](https://github.com/TypeStrong/typedoc) and [api-extractor + api-documenter](https://api-extractor.com/pages/setup/generating_docs/):

```sh
npm run build
```

You can also build the TypeScript files and the docs separately:

```sh
npm run build:ts
npm run docs
```

Whenever you change the public API of this project, you need to run api-extractor with the `--local` flag:

```sh
npx api-extractor run --config ./config/api-extractor.json --verbose --local
```

## Docs

Preview the documentation generated by TypeDoc:

```sh
npm run serve:docs
```

Note: it doesn't make much sense to preview the API docs generated by api-extractor + api-documenter. They are just a bunch of markdown files.