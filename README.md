# MrAnnix.github.io

> Personal website and tech blog built with Jekyll

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Jekyll](https://img.shields.io/badge/Jekyll-CC0000?style=flat&logo=jekyll&logoColor=white)
![Ruby](https://img.shields.io/badge/Ruby-3.3-CC342D?style=flat&logo=ruby&logoColor=white)

| Environment | Status | URL |
|:-----------|:-------|:----|
| 🚀 Production | [![Deploy Production Site](https://github.com/MrAnnix/MrAnnix.github.io/actions/workflows/deploy-prod.yml/badge.svg)](https://github.com/MrAnnix/MrAnnix.github.io/actions/workflows/deploy-prod.yml) | [raulsanmartin.me](https://raulsanmartin.me/) |
| 🔧 Development | [![Netlify Status](https://api.netlify.com/api/v1/badges/29c1e0d9-efaa-48f9-8a11-712ec6df7cd3/deploy-status)](https://app.netlify.com/sites/dev-raulsanmartin-me/deploys) | [dev.raulsanmartin.me](https://dev.raulsanmartin.me/) |

![Theme Snapshot](https://raulsanmartin.me/assets/images/snapshot.png "Snapshot")

---

## 📖 Table of Contents

- [About](#-about)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Creating Content](#-creating-content)
- [Deployment](#-deployment)
- [License](#-license)
- [Contact](#-contact)

---

## 📝 About

Personal website of **Raúl San Martín Aniceto** ([@MrAnnix](https://github.com/MrAnnix)), a Big Data engineer and Machine Learning enthusiast based in Spain. This site serves as both a technical blog and portfolio.

### 📚 Blog Topics

Technical articles covering **Big Data**, **Machine Learning**, **Computer Science**, and **Web Technologies**.

---

## 🚀 Tech Stack

### Core Technologies
- **Static Site Generator:** [Jekyll](https://jekyllrb.com/) 3.10 (pinned by the `github-pages` gem)
- **Language:** Ruby
- **Markup:** Markdown, HTML5, Liquid templating
- **Styling:** SASS/SCSS with custom architecture
- **Deployment:** GitHub Pages

### Jekyll Plugins
- `jekyll-sitemap` — XML sitemap generation
- `jekyll-paginate` — Blog pagination (10 posts/page)
- `github-pages` — GitHub Pages compatibility

### Key Features
✅ Responsive design  
✅ Blog with pagination, categories & tags  
✅ Contact form  
✅ RSS & JSON feeds  
✅ Syntax highlighting for code blocks  
✅ MathJax support for mathematical equations  
✅ Custom web fonts (Bryant Condensed, Iosevka Term, Moniker)  
✅ Font Awesome icons  
✅ Google Site Verification  
✅ SEO optimized

---

## 📁 Project Structure

```plaintext
MrAnnix.github.io/
│
├── 📄 _config.yml              # Jekyll configuration & site settings
├── 📄 index.html               # Homepage
├── 📄 blog.html                # Blog listing page
├── 📄 categories.html          # Categories overview
├── 📄 tags.html                # Tags overview
├── 📄 contact.html             # Contact page
├── 📄 404.html                 # Custom 404 error page
│
├── 📂 _layouts/                # Page templates
│   ├── default.html            # Base layout
│   └── post.html               # Blog post layout
│
├── 📂 _includes/               # Reusable components
│   ├── header.html             # Site header
│   ├── footer.html             # Site footer
│   ├── head.html               # <head> section
│   └── scripts.html            # JavaScript includes
│
├── 📂 _posts/                  # Published blog posts (Markdown)
├── 📂 _drafts/                 # Draft posts (not published)
│
├── 📂 _sass/                   # SCSS partials
│   ├── _animations.scss
│   ├── _blog-index.scss
│   ├── _common.scss
│   ├── _contact.scss
│   ├── _index.scss
│   ├── _mathjax.scss
│   └── _syntax-highlighting.scss
│
├── 📂 assets/                  # Static assets
│   ├── css/                    # Compiled stylesheets
│   ├── js/                     # JavaScript files
│   ├── images/                 # Images & graphics
│   └── fonts/                  # Custom web fonts
│
├── 📂 static/                  # Additional static files
├── 📄 feed.xml                 # RSS feed
├── 📄 feed.json                # JSON feed
├── 📄 robots.txt               # Search engine crawling rules
├── 📄 CNAME                    # Custom domain configuration
└── 📄 Gemfile                  # Ruby dependencies
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed:
- **Ruby** 3.3 (the version in [`.ruby-version`](.ruby-version), also used by CI and Netlify)
- **Bundler** (`gem install bundler`)
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MrAnnix/MrAnnix.github.io.git
   cd MrAnnix.github.io
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```
   Or with live reload:
   ```bash
   bundle exec jekyll serve --livereload
   ```

4. **View the site**
   
   Open your browser and navigate to `http://localhost:4000`

### Building for Production

Generate the static site:
```bash
bundle exec jekyll build
```

The optimized site will be created in the `_site/` directory.

---

## ✍️ Creating Content

### Writing a New Blog Post

1. **Create a new Markdown file** in `_posts/` following the naming convention:
   ```
   YYYY-MM-DD-title-with-hyphens.md
   ```

2. **Add front matter** at the top of the file:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   description: "Brief description for SEO and previews"
   last_modified_at: 2025-11-08 12:00 +0100
   image: "/assets/images/blog/your-post-image.webp"
   categories: "Category Name"
   tags: [Tag1, Tag2, Tag3]
   ---
   ```

3. **Write your content** using Markdown syntax

4. **Add images** to `assets/images/blog/your-post-name/`

5. **Preview locally** before publishing

### Draft Posts

Store work-in-progress posts in `_drafts/` (without dates in filename). View drafts locally:
```bash
bundle exec jekyll serve --drafts
```

---

## 🚢 Deployment

### Automatic Deployment

- **Production**: every push to `master` runs the [Deploy Production Site](.github/workflows/deploy-prod.yml) workflow, which builds the site, checks it with HTMLProofer and publishes it to **GitHub Pages** → [raulsanmartin.me](https://raulsanmartin.me)
- **Pull requests**: the [Validate Pull Request](.github/workflows/validate-pr.yml) workflow runs the same build and checks without deploying, and **Netlify** publishes a deploy preview
- **Development**: **Netlify** deploys the development branch → [dev.raulsanmartin.me](https://dev.raulsanmartin.me)

Both domains are proxied through Cloudflare. Netlify environment settings live in [`netlify.toml`](netlify.toml); dependency updates are configured in [`.github/dependabot.yml`](.github/dependabot.yml).

### Manual Deployment

If deploying elsewhere, build the site and upload the `_site/` directory:
```bash
bundle exec jekyll build
```

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2019 Raúl San Martín Aniceto

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

See the [LICENSE](LICENSE) file for full details.

---

## 🔗 Contact

**Raúl San Martín Aniceto** (MrAnnix)

- 🌐 Website: [raulsanmartin.me](https://raulsanmartin.me)
- 💼 LinkedIn: [raul-san-martin-aniceto](https://www.linkedin.com/in/raul-san-martin-aniceto)
- 🐙 GitHub: [@MrAnnix](https://github.com/MrAnnix)
- 📧 Email: hello@[domain] (see website for contact form)

---

<div align="center">
  
**Built with ❤️ using Jekyll**

⭐ Star this repo if you find it useful!

</div>
