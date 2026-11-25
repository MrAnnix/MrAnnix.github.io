# AGENTS.md

Jekyll source of https://raulsanmartin.me. Human-facing docs are in [README.md](README.md).

## Commands

- Install: `bundle install` (Ruby version in `.ruby-version`)
- Serve: `bundle exec jekyll serve --livereload`; add `--drafts` to render `_drafts/`
- Verify, exactly as CI does (needs network for external links):

  ```bash
  bundle exec jekyll build
  bundle exec htmlproofer ./_site --only-4xx --ignore-status-codes "403,429" --checks Images,Scripts,Links,Favicon,OpenGraph
  ```

  There are no unit tests: a change is done when both commands pass and the affected pages render as intended.

## Gotchas

- Jekyll is 3.10, pinned by the `github-pages` gem, so Jekyll 4 features (such as `:slugified_categories`) are unavailable.
- The `github-pages` gem applies GitHub Pages defaults and overrides on every build, local ones included: safe mode with a plugin whitelist and kramdown with GFM input. Its `future: true` default does not apply: production skips future-dated posts.
- `liquid.error_mode: strict`: invalid Liquid fails the build.
- Permalinks are `/:categories/:title/`, where `:title` is the file's slug. A `categories` string with spaces splits into several categories and path segments (`"Big Data"` gives `/big/data/`). Renaming a published post's file or changing its categories changes its URL.
- `_includes/head.html` picks each page's stylesheet by `page.title` (`Home`, `Contact`, `Blog`) or `layout: post`; any other page gets `assets/css/styles.css`. Renaming one of those titles changes the page's CSS.
- The development site renders `_drafts/` and future-dated posts publicly (`show_drafts` and `future` in `_config_dev.yaml`), so keep anything that must not be published out of `_drafts/`; the post template lives in `_templates/`, which Jekyll skips.
- MathJax and Mermaid load only for posts with `mathjax: true` or `mermaid: true` in their front matter.
- `.well-known/` must reach the deployed site: it needs `include` in `_config.yml` and `include-hidden-files` in `.github/workflows/build.yml`.
- Third-party scripts in `_includes/scripts.html` are pinned to exact versions, most with an SRI hash; when bumping a version, update its `integrity` hash in the same change, or browsers block the script.
- Workflows run with least privilege: `build.yml` gets `contents: read`, and only the `deploy` job in `deploy-prod.yml` gets `pages: write` and `id-token: write`. Its `github-pages` environment only accepts `master`.
- Images in `static/` are referenced from an e-mail signature outside this repo; keep their names and paths.
- Keep the e-mail address written as `hello@[this domain]`: it is obfuscated on purpose.

## Conventions

- English for code, comments, commits and posts.
- Branch from `master` and open a pull request to `master`, which deploys to production on merge. `develop` feeds the development site.
- Post images go in `assets/images/blog/<slug>/`, preferably as WebP.
