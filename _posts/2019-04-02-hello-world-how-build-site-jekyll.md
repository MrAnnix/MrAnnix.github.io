---
layout: post
title:  "Hello World! (or how I build this site with Jekyll)"
description: "About how I built this site on GitHub Pages using Jekyll."
date: 2019-04-02T18:20:00Z
image: /assets/images/blog/hello-world-how-build-site-jekyll.jpg
categories: Jekyll
tags: [Jekyll, SSG, CMS, Github Pages, blog, Sass, Liquid]
---

First of all, clarify that this is not a presentation and a lot less a tutorial about how to set up a site with [Jekyll](https://jekyllrb.com/ "Jekyll's homepage"). Rather it’s a post narrating a bit the process that can serve to inspire people who want to encourage themselves to do something similar or even use my code as a basis.

## What the hell is Jekyll?

In a rough way, it’s a static site generator (SSG for saving a bit of space). It’s open source and written in Ruby. You can literally *transform your plain text into a nice website or blog*. Even you don’t have to know how to code. So you can generate your own content only with a text editor.

Jekyll works with [markdown](https://daringfireball.net/projects/markdown/ "Markdown web") files `.md` converting them to HTML automatically. In fact, to write this post I’m only using Atom!

This is a huge advantage because unlike a dynamic content management system or CMS, we can generate a complete website by using only HTML, CSS and maybe JavaScript. That means that our site can be hosted almost anywhere (even on a Raspberry Pi).

### How a dynamic CMS works?

Mainly when a user requests a web page, the request is sent to the web server (Apache, Nginx, Lighttpd...) then forwarded to the CMS. The CMS builds the page from a number of templates, gets the content and other site data from the database build the HTML for that page and sends it back to the user.

This approach provides a lot of advantages such that personalized content for users, admin interfaces and real-time content. But usually, it’s more than most users need for a simple web or blog.

### How a SSG works?

First, the SSG *generates* all the files of the static web, then they have to be uploaded to the server. When a user requests a page of the site, the request is sent to the web server, which then finds the matching file and sends it back to the user.

SSGs provides less complexity, you don’t need PHP, MySQL, ASP... just a web server.

## Why Jekyll?

Initially, I had planned to use [Grav](https://getgrav.org/ "Grav’s homepage") to build this site. Grav is a plain-text CMS, something halfway between a dynamic CMS and an SSG. I had already worked with Wordpress and PHP in [GeekMag](https://www.geekmag.es "GeekMag") but I needed something lighter and it did not depend on a heavy database. Although I tried [Ghost](https://ghost.org/es/ "Página de inicio de Ghost") too, this one suffers from many of the features of Wordpress that it tried to avoid (like the database).

Grav promised to offer me everything I needed to manage and add content to the site. It’s even possible to install a plugin that allows you to manage it from a Wordpress-style panel. However, using a whole CMS for just a personal website and a blog seemed to me and still seems more than I need.

That’s when I decided to use Jekyll. It has integrated [support for Sass and compatibility with CoffeeScript](https://jekyllrb.com/docs/assets/ "Assets en Jekyll").

But the best is that it’s totally integrated with [GitHub Pages](https://pages.github.com/ "GitHub Pages") (also with [GitLab Pages](https://about.gitlab.com/product/pages/ "Información GitLab Pages") in case anyone is interested in), a free hosting service that GitHub provides to its users. But it’s also open source, simple, hardly requires maintenance and, although in this case I was not interested, provides everything necessary to migrate your existing website from almost any CMS to Jekyll. But especially because I can host it in GitHub Pages, which is fast, secure and 100% free.

## How to start?

First of all, you have to create an `index.html` and a `_config.yml` files in the root of your site folder. Now is when the thing starts to get more interesting. Jekyll uses [Liquid](https://shopify.github.io/liquid/ "Liquid"), a templating language written also in Ruby.

### Liquid

Liquid has three main parts: objects, tags, and filters. **Objects**, can have different types and tell Liquid where to output content (like variables in other programming languages), **tags** create the logic and control flow for templates and finally **filters** change the output of a Liquid object (some kind of methods).

{% highlight html %}
{% raw %}
<h2>Recent blog posts</h2>
{% for post in site.posts limit:4 %}
    <a href="{{ post.url | prepend: site.baseurl }}">
        <h4 class=title>{{ post.title }}</h4>
    </a>
    <p>{{ post.description }}</p>
{% endfor %}
<a href="{{ site.baseurl }}/blog" class=all>See all blog posts</a>
{% endraw %}
{% endhighlight %}

The previous code is an example on how Liquid can generate the post preview for the homepage.

### Plugins

Probably, you want your blog to do more things, for example: generate pages of labels and categories, a site map, a feed ...

For this Jekyll has a myriad of plugins. However, if you want to use Github Pages, I don’t recommend trying to use more than just and necessary, since only a few are compatible. In the case of this template are used only `jekyll-sitemap` and `jekyll-paginate` generate the site map and distribute the blog entries on several pages respectively.

For the rest of the functionalities I have used Liquid exclusively, specifically for the pages of categories and labels I followed [this tutorial](http://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/ "Use Tags and Categories in your Jekyll based Github Pages without plugins - Codinfox").

### Design

This design was originally conceived by [Benjamin Sago](https://bsago.me/ "Web de Benjamin Sago") but has been ported to Jekyll by me. I have added more functionalities and changed some styles how I liked it.

Anyone is free to use my code for their website, for a friend, for a client or whatever they want. But you must know that I don’t allow to redistribute my code, and the credits at the bottom of the page must remain. In addition, it would not hurt to send a cake to Benjamin.

Having said that, start using it, is as simple as accessing [this repository](https://github.com/MrAnnix/MrAnnix.github.io "Webs repo") and downloading it.

### Comments

Most likely, blog’s owners want to add comments features in their blog entries. This requires code execution from the server side. But Jekyll only generates static sites... What do we do? Be quiet, there are almost infinite solutions for this: Facebook Comments, Disqus or even self-managed options.

I personally have chosen [Commentbox](https://commentbox.io "No ads.  No Tracking.  Just Comments."), but there are great options to consider. e.g: [Commento](https://gitlab.com/commento/commento "A fast, bloat-free, privacy-focused commenting platform") (my second candidate in the list), [Remark42](https://remark42.com/ "self-hosted, lightweight, and simple commenting system"), [Just Comments](https://just-comments.com/ "Easy to set up, ad-free and fairly priced comment system") (it’s not free but it’s quite cheap)...

___________________________________________________

And that’s all! I hope I have encouraged you to create your own blog with Jekyll or migrate the one you already have. If you really want to start, you can do it [here](https://jekyllrb.com/docs/step-by-step/01-setup/ "Guía paso a paso de Jekyll"). Jekyll has a lot of documentation and if it isn’t enough, on the Internet there are hundreds of tutorials that explain how to do most of the things you want.
