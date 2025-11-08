# Development Setup

## Platform Compatibility

This repository supports development on both Windows and Linux platforms.

### Gemfile.lock Platforms

The `Gemfile.lock` includes the following platforms:
- `x64-mingw-ucrt` - Windows development
- `x86_64-linux` - GitHub Actions (Linux) and Linux development

### Adding New Platforms

If you encounter platform compatibility errors, run:

```bash
# For Linux
bundle lock --add-platform x86_64-linux

# For macOS (if needed)
bundle lock --add-platform x86_64-darwin
bundle lock --add-platform arm64-darwin
```

### GitHub Actions

The workflow automatically handles platform compatibility with a verification step that adds the Linux platform if needed.

## Local Development

### Install Dependencies

```bash
bundle install
```

### Build Site Locally

```bash
# Development build
bundle exec jekyll serve --config _config.yml,_config.dev.yml

# Production build
JEKYLL_ENV=production bundle exec jekyll build --config _config.yml
```

### Test Site

```bash
bundle exec htmlproofer ./_site --checks Images,Scripts,Links,Favicon,OpenGraph --ignore-status-codes "403,429,503"
```

## Troubleshooting

### Platform Errors

If you see errors like:
```
Your bundle only supports platforms ["x64-mingw-ucrt"] but your local platform is x86_64-linux
```

Run:
```bash
bundle lock --add-platform x86_64-linux
git add Gemfile.lock
git commit -m "Add Linux platform to Gemfile.lock"
```

### Bundler Version Conflicts

The project uses Bundler 2.7.2. If you have version conflicts:

```bash
gem install bundler:2.7.2
bundle _2.7.2_ install
```
