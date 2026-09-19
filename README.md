# hugo website

## Setup

Install: https://gohugo.io/installation/linux/

```sh
sudo dnf install hugo
```

## Serve locally

Run:

```sh
hugo server
```

## Deploy

Pushing to `main` deploys to <https://jakeherrmann.com>.

Pushing to any other branch deploys to
`https://<branch>-personal-site.jtherrmann1.workers.dev`,
e.g. <https://develop-personal-site.jtherrmann1.workers.dev>.

Test changes on `develop`, then release to prod via:

```sh
git switch main && git merge develop && git push && git switch develop
```

## Theme

Current theme: https://github.com/luizdepra/hugo-coder

It was installed with:

```sh
git submodule add https://github.com/luizdepra/hugo-coder.git themes/hugo-coder
```

TODO: see https://github.com/luizdepra/hugo-coder#quick-start for more advice on configuring `hugo.toml`

TODO: If https://github.com/luizdepra/hugo-coder/pull/991 is merged, can update `build.sh` to install standard Hugo rather than extended.

## Notes

### Hugo

This project was created with:

```sh
hugo new project hugo-website
cd hugo-website
git init
```

Source: https://gohugo.io/getting-started/quick-start/

### Cloudflare

I followed https://gohugo.io/host-and-deploy/host-on-cloudflare/ to host this project on Cloudflare.

If this project ever requires Dart Sass, Go, or Node/npm,
those parts would need to be uncommented in the [build script](./build.sh).

All Cloudflare-related files in this project have a `Cloudflare` comment in them.

Cloudflare build limits and pricing:
https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/

TODO: It may be worth enabling the build cache for faster build times:
- https://gohugo.io/host-and-deploy/host-on-cloudflare/#build-cache
- https://developers.cloudflare.com/workers/ci-cd/builds/build-caching/

TODO: Consider enabling scheduled builds if this project or chosen theme fetches remote assets at build time:
https://gohugo.io/host-and-deploy/host-on-cloudflare/#scheduled-builds

### Sass

Sass is a CSS extension language.
Your theme may require LibSass (included in Hugo's extended edition),
the newer Dart Sass (installed separately),
or neither (many features of Sass are now included in CSS).
Also see: https://gohugo.io/functions/css/sass/

Currently, `build.sh` controls whether Hugo regular vs. extended is installed
and whether Dart Sass is installed.
