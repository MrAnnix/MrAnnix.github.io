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
- The `github-pages` gem applies GitHub Pages defaults and overrides on every build, local ones included: safe mode with a plugin whitelist, kramdown with GFM input, and `future: true` unless the config sets it.
- `liquid.error_mode: strict`: invalid Liquid fails the build.
- Permalinks are `/:categories/:title/`, where `:title` is the file's slug. A `categories` string with spaces splits into several categories and path segments (`"Big Data"` gives `/big/data/`). Renaming a published post's file or changing its categories changes its URL.
- `_includes/head.html` picks each page's stylesheet by `page.title` (`Home`, `Contact`, `Blog`) or `layout: post`; any other page gets `assets/css/styles.css`. Renaming one of those titles changes the page's CSS.
- MathJax and Mermaid load only for posts with `mathjax: true` or `mermaid: true` in their front matter.
- `.well-known/` must reach the deployed site: it needs `include` in `_config.yml` and `include-hidden-files` in `.github/workflows/deploy.yml`.
- Images in `static/` are referenced from an e-mail signature outside this repo; keep their names and paths.
- The e-mail address is written as `hello@[this domain]` deliberately; do not replace it with the real address.

## Conventions

- English for code, comments, commits and posts.
- Branch from `master` and open a pull request to `master`, which deploys to production on merge. `develop` feeds the development site.
- Post images go in `assets/images/blog/<slug>/`, preferably as WebP.
