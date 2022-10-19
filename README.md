[![Blitz.js](https://raw.githubusercontent.com/blitz-js/art/master/github-cover-photo.png)](https://blitzjs.com)

This is a minimal [Blitz.js](https://github.com/blitz-js/blitz) app.

# **blitz-vercel-og-issue**

## Vercel OG (Edge Function) fails in Blitz app

The serverless functions for the newly introduced [Vercel OG](https://vercel.com/blog/introducing-vercel-og-image-generation-fast-dynamic-social-card-images) fail in a Blitz project.

Locally the endpoint `/api/og` returns the rendered image, but deployed on Vercel it fails with the following error:

```
[GET] /api/og
10:35:43:31
2022-10-19T08:35:43.987Z	07ecfd4c-572b-43ca-b0ae-64c8af4dd017	ERROR	Unhandled error during request: ReferenceError: self is not defined
    at Object.<anonymous> (/var/task/.next/serverless/pages/api/og.js:1:1)
    at Module._compile (node:internal/modules/cjs/loader:1105:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at /api/og (/var/task/___next_launcher.cjs:26:38)
    at Server.page (/var/task/___next_launcher.cjs:95:31)
    at Server.emit (node:events:527:28)
2022-10-19T08:35:43.987Z	07ecfd4c-572b-43ca-b0ae-64c8af4dd017	ERROR	Uncaught Exception 	{"errorType":"ReferenceError","errorMessage":"self is not defined","stack":["ReferenceError: self is not defined","    at Object.<anonymous> (/var/task/.next/serverless/pages/api/og.js:1:1)","    at Module._compile (node:internal/modules/cjs/loader:1105:14)","    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1159:10)","    at Module.load (node:internal/modules/cjs/loader:981:32)","    at Function.Module._load (node:internal/modules/cjs/loader:822:12)","    at Module.require (node:internal/modules/cjs/loader:1005:19)","    at require (node:internal/modules/cjs/helpers:102:18)","    at /api/og (/var/task/___next_launcher.cjs:26:38)","    at Server.page (/var/task/___next_launcher.cjs:95:31)","    at Server.emit (node:events:527:28)"]}
Unknown application error occurred
```

## Reproduction

I've created a Blitz app as reproduction:

- repo: https://github.com/jasperhartong/blitz-vercel-og-issue
- failing URL: https://blitz-vercel-og-issue.vercel.app/api/og

Also see the working branch with the Blitz wrappers removed in `_app` and `next.config.js` (and building with Next instead of with Blitz):

- PR: https://github.com/jasperhartong/blitz-vercel-og-issue/pull/2
- successful URL: https://blitz-vercel-og-issue-git-no-blitz-works-jasperhartongprivate.vercel.app/api/og

It might have something to do with the webpack magic needed to make the queries and mutations work. Also, it's not usual to have a `.tsx` file inside the `pages/api` path, so that could also be messing things up?
