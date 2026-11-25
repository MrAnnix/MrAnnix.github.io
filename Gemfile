source 'https://rubygems.org'

# github-pages pins Jekyll and every plugin GitHub Pages allows, jekyll-sitemap included.
# Versions: https://pages.github.com/versions/
gem 'github-pages', '~> 233', group: :jekyll_plugins
gem 'tzinfo-data', platforms: [:windows, :jruby]

group :jekyll_test do
  # Pinned to the major version: CLI options change between majors and CI depends on them
  gem 'html-proofer', '~> 5.2'
end

# Gemfile.lock lists the x64-mingw-ucrt (Windows) and x86_64-linux platforms.
# On any other platform, add yours first: bundle lock --add-platform <platform> (e.g. arm64-darwin)
