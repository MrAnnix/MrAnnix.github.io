---
layout: post
title:  "Hello World! (or how I build this site with Jekyll)"
description: "About how I built this site on GitHub Pages using Jekyll."
date: 2019-04-02T18:20:00Z
image: /assets/images/blog/hello-world-how-build-site-jekyll.jpg
categories: Jekyll
tags: [Jekyll, SSG, CMS, Github Pages, blog, Sass, Liquid]
---

First of all clarify that this is not a presentation and a lot less a tutorial about how to set up a site with [Jekyll](https://jekyllrb.com/ "Jekyll's homepage"). Rather it’s a post narrating a bit the process that can serve to inspire people who want to encourage themselves to do something similar or even use my code as a basis.

## What the hell is Jekyll?

In a rough way, it’s a static site generator (SSG for saving a bit of space). It’s open source and written in Ruby. You can literally *transform your plain text into a nice website or blog*. Even you don’t have to know how to code. So you can generate your own content only with a text editor.

Jekyll works with [markdown](https://daringfireball.net/projects/markdown/ "Markdown web") files `.md` converting them to HTML automatically. In fact, to write this post I’m only using Atom!

This is a huge advantage beacause unlike dynamic content management system or CMS, we can generate a complete website by using only HTML, CSS and maybe JavaScript. That means that our site can be hosted almost anywhere (even on a Raspberry Pi).

### How a dynamic CMS works?

Mainly when a user request a web page, the request is sent to the web server (Apache, Nginx, lighttpd...) then forwarded to the CMS. The CMS builds the page from a number of templates, gets the content and other site data from the database build the HTML for that page and sends it back to the user.

This approach provides a lot of advantages such that personalized content for users, admin interfaces and real-time content. But usually it’s more than most users need for a simple web or blog.

### How a SSG works?

First the SSG *generates* all the files of the static web, then they have to be uploaded to the server. When a user requests a page of the site, the request is sent to the web server, which then finds the matching file and sends it back to the user.

SSGs provides less complexity, you don’t need PHP, mySQL, ASP... just a web server.

## Why Jekyll?

Initially I had planned to use [Grav](https://getgrav.org/ "Grav’s homepage") to build this site. Grav is a plain-text CMS, something halfway between a dynamic CMS and an SSG. I had already worked with Wordpress and PHP in [GeekMag](https://www.geekmag.es "GeekMag") but I needed something lighter and it did not depend on a heavy database. Although I tried [Ghost](https://ghost.org/es/ "Página de inicio de Ghost") too, this one suffers from many of the features of Wordpress that it tried to avoid (like the database).

Grav promised to offer me everything I needed to manage and add content to the site. It’s even possible to install a plugin that allows you to manage it from a Wordpress-style panel. However, using a whole CMS for just a personal website and a blog seemed to me and still seems more than I need.

That’s when I decided to use Jekyll. It has integrated [support for Sass and compatibility with CoffeeScript](https://jekyllrb.com/docs/assets/ "Assets en Jekyll").

But the best is that it’s totally integrated with [GitHub Pages](https://pages.github.com/ "GitHub Pages") (also with [GitLab Pages](https://about.gitlab.com/product/pages/ "Información GitLab Pages") in case anyone is interested to), a free hosting service that GitHub provides to its users. But it’s also open source, simple, hardly requires maintenance and, although in this case I was not interested, provides everything necessary to migrate your existing website from almost any CMS to Jekyll. But specially because I can host it in GitHub Pages, which is fast, secure and 100% free.

## How to start?

First of all you have to create an `index.html` in the root of your site folder. Now is when the thing starts to get more interesting. Jekyll uses [Liquid](https://shopify.github.io/liquid/ "Liquid"), a templating language writen also in Ruby.

### Liquid

Liquid has three main parts: objects, tags and filters. **Objects**, can have different types and tell Liquid where to output content (like variables in other programming languages), **tags** create the logic and control flow for templates and finally **filters** change the output of a Liquid object (some kind of methods).

{% highlight css %}
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

### Design

Ya tenía un diseño simple pero funcional en la web (gracias a [Benjamin Sago](https://bsago.me/ "Web de Benjamin Sago")) desde el que trabajar. Sin embargo quería algo más vistoso sobre lo que trabajar. Fue así como encontré el diseño actual.

Dicho diseño ha sido concebido originalmente por [Styleshout](https://www.styleshout.com/free-templates/hola/ "Página de la plantilla de la web") pero ha sido portado a Jekyll por mí.

Cualquiera es libre de utilizar mi código para su web, la de un amigo, para un cliente o lo que quiera. Pero debéis saber que no permito redistribuir mi código y que los créditos a pie de página deben permanecer. Además se deben tener en cuenta las políticas de [Styleshout](https://www.styleshout.com/about-us/#remove-link "Licencia diseño") para sus diseños.

Dicho esto empezar a usarlo es tan simple como acceder a [éste repositorio](https://github.com/MrAnnix/MrAnnix.github.io "Repo de la web") y descargarlo.

### Cómo empezar

Una vez que ya tenía una plantilla con un diseño de mi agrado, lo primero fue crear un fichero `_config.yml` en la raíz de la web, que almacenase la opciones de configuración del sitio y cómo Jekyll debía generarlo.

Ese es el fichero que debéis editar si queréis utilizar esta o cualquier otra plantilla (incluso la plantilla por defecto de Jekyll).

#### Liquid

Una vez que ya estaba configurado lo básico, lo siguiente era hacer que se hiciera la magia. Para ello Jekyll utiliza [Liquid](https://shopify.github.io/liquid/ "Liquid"), un lenguaje para procesar plantillas escrito en Ruby, al igual que Jekyll, y con un gran potencial.

    {% for post in site.posts limit:4 %}
    <article class="col-block">
        <div class="blog-date">
            <a>{{ post.date | date: '%B %d, %Y' }}</a>
        </div>    
        <h2 class="h01"><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p>{{ post.excerpt | strip_html | truncate: 360 }}</p>   
        <div class="blog-cat">
            {% for category in post.categories %}
            <a href="{{ site.baseurl }}{{ site.category_page }}#{{ category | slugify }}">
			    {{ category }}
		    </a>
            {% endfor %}
        </div>    
    </article>
    {% endfor %}

El fragmento de arriba pertenece a la porción de código que genera la previsualización de los posts para la página principal de la web. Como podréis apreciar, la parte de Liquid es muy intuitiva y fácil de programar.

#### Plugins
Seguramente, querréis que vuestro blog haga más cosas, por ejemplo: generar páginas de etiquetas y categorías, un mapa del sitio, un feed...

Para ello Jekyll dispone de una miríada de plugins. Sin embargo, si queréis utilizar Github Pages, no os recomiendo intentar utilizar más de los justos y necesarios, ya que sólo unos pocos son compatibles. En el caso de esta plantilla solo se utilizan `jekyll-sitemap` y `jekyll-paginate` para generar el mapa del sitio y distribuir las entradas del blog en varias páginas respectivamente.

Para el resto de las funcionalidades he utilizado Liquid exclusivamente, en concreto para las páginas de categorías y etiquetas he seguido [este tutorial](http://codinfox.github.io/dev/2015/03/06/use-tags-and-categories-in-your-jekyll-based-github-pages/ "Use Tags and Categories in your Jekyll based Github Pages without plugins - Codinfox").

#### Comentarios

Lo más probable es que los propietarios de un blog deseen añadir la función de comentarios en las entradas del mismo. Para ello es necesaria la ejecución de código por parte del servidor. Pero Jekyll solo genera sitios estáticos... ¿Qué hacemos? Tranquilos, existen infinidad de soluciones para ello. Desde Facebook Comments, Disqus o incluso opciones autogestionadas.

Yo personalmente me decanté por [Commentbox](https://commentbox.io "No ads.  No Tracking.  Just Comments."), pero existen opciones geniales a tener en cuenta. Por ejemplo: [Commento](https://gitlab.com/commento/commento "A fast, bloat-free, privacy-focused commenting platform") (mi segundo candidato en la lista), [Remark42](https://remark42.com/ "self-hosted, lightweight, and simple commenting system"), [Just Comments](https://just-comments.com/ "Easy to set up, ad-free and fairly priced comment system") (no es gratis pero es bastante barato)...

___________________________________________________


Espero haber animado a más de uno a crear su propio blog con Jekyll o a migrar el que ya tiene. Si de verdad queréis empezar, podéis hacerlo [aquí](https://jekyllrb.com/docs/step-by-step/01-setup/ "Guía paso a paso de Jekyll"). Jekyll tiene documentación a raudales y cuando esta no es suficiente, en Internet hay muchísimos tutoriales que explican como realizar la mayoría de las cosas que queráis hacer.
