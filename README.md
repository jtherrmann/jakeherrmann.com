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

TODO: this was the output of `hugo new project`:

```
Congratulations! Your new Hugo project was created in /home/jth/repos/hugo-website.

Just a few more steps...

1. Change the current directory to /home/jth/repos/hugo-website.
2. Create or install a theme:
   - Create a new theme with the command "hugo new theme <THEMENAME>"
   - Or, install a theme from https://themes.gohugo.io/
3. Edit hugo.toml, setting the "theme" property to the theme name.
4. Create new content with the command "hugo new content <SECTIONNAME>/<FILENAME>.<FORMAT>".
5. Start the embedded web server with the command "hugo server --buildDrafts".

See documentation at https://gohugo.io/.
```

### Cloudflare

I followed https://gohugo.io/host-and-deploy/host-on-cloudflare/ to host this project on Cloudflare.

If this project ever requires Dart Sass, Go, or Node/npm,
those parts would need to be uncommented in the [build script](./build.sh).

All Cloudflare-related files in this project have a `Cloudflare` comment in them.

TODO: left off at https://gohugo.io/host-and-deploy/host-on-cloudflare/#build-cache

TODO: limited number of deployments per month on free plan? do deployments without changes count?

### Sass

Sass is a CSS extension language.
Your theme may require LibSass (included in Hugo's extended edition),
the newer Dart Sass (installed separately),
or neither (many features of Sass are now included in CSS).
Also see: https://gohugo.io/functions/css/sass/

Currently, `build.sh` controls whether Hugo regular vs. extended is installed
and whether Dart Sass is installed.
