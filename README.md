# Casse-pere

[![Build Status](https://travis-ci.org/albanleandri/hugo-casse-pere.svg?branch=master)](https://travis-ci.org/albanleandri/hugo-casse-pere)

## History
[Casse-pere](https://github.com/albanleandri/hugo-casse-pere) is based on [Chaschper](https://github.com/jcfischer/hugo-chaschper).

Thank you to Jens-Christian Fischer for his work on [Chaschper](https://github.com/jcfischer/hugo-chaschper). Chaschper is based on [Casper Two](https://github.com/eueung/hugo-casper-two), a port of the [Casper](https://github.com/TryGhost/Casper), the default personal blogging theme for Ghost. A legacy version (v1.x) has [already been ported](https://github.com/vjeantet/hugo-theme-casper) to Hugo years ago.

With Casse-pere, I tried to organize things in a way that suited me better.

* Moved the navigation bar on top of the page
* Added the Whatsapp, LinkedIn and Email share buttons to the floating header
* Added support for Google Tag Manager
* Added ability to toggle on/off the search feature, logo footer, author signature in posts
* Show post description in list instead of full untruncated content
* Removed the "archive" content type
* Decoupled the word count and the read time, so I can show only read time in articles
* Fixed some screen width responsivity issues arout the 900px breakpoint
* Removed Matomo, as Google Analytics is free, and suited me

## Theme Demo

- [albanleandri.com](https://albanleandri.com/)

## Installation

Inside the folder of your Hugo site run:

    $ cd themes
    $ git clone https://github.com/albanleandri/hugo-casse-pere.git casse-pere
    
or if you plan to use [netlify](https://netlify.com) to host your site
   
    $ cd themes
    $ git submodule add https://github.com/albanleandri/hugo-casse-pere.git casse-pere
   

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.


## Sample Configuration

The following `config.toml` is used for the demo site. 

```toml
baseurl         = "https://example.com/"
title           = "Blog Example"
theme           = [ "casse-pere" ]
languageCode    = "en-US"
disqusShortname = ""
paginate        = 6
canonifyurls    = true
assetDir        = "static"


[author]
    name    = "Alban Leandri"
    nick    = "aleandri"
    email   = "alban.leandri@gmail.com"
    avatar  = ""
    description = "Product Manager. Marketer. Engineer"

[params]
  title       = "Blog"
  domain      = "blog.com"
  subtitle    = "Stuffs. Stuffs. Stuffs"
  copyright   = "© 2019"

  cover       = "img/blog-cover.jpg"
  description = "Blog"
  metaDescription = ""
  googleAnalytics = ""
  customCSS = []
  RSSLinkPost = ""
  showSubcribe = true
  showReadingTime = true

  mainSections = ["music", "code"]

  twitterName = "yourhandlehere"
  fbName = "yourhandlehere"
  githubName = "yourhandlehere"
  linkedinName = "yourhandlehere"
  keybaseName = "yourhandlehere"


  pageNotFoundTitle = "404 - Page not found"


[permalinks]
  posts = "/:year/:month/:slug/"

[[menu.main]]
  name = "Musings"
  url = "/categories/musings"
  weight = 200

[[menu.main]]
  name = "Music"
  url = "/categories/music"
  weight = 100

[[menu.main]]
  name = "Code"
  url = "/categories/code"
  weight = 99

[[menu.main]]
  name = "Art"
  url = "/categories/art"
  weight = 95

[[menu.main]]
  name = "About"
  url = "/about"
  weight = 90


# These are parameters used for indieweb identity. You should set these along
# with the above email/social network parameters.
[params.IndieWeb]
    Country = "Switzerland"
    City = "Geneva"
    webmention = "example.com"

```

Sample content structure is given in the `exampleSite` folder. Have fun!

### Search

The forked themes had a search function. It must be toggled on, in order to be visible in the navigation bar.
It uses [DuckDuckGo](https://duckduckgo.com) for a site specific search, provided you have set the `domain` parameter in your `config.toml` file

To get DuckDuckGo to index your domain, submit it to the 
[Yandex Webmaster Tools](https://webmaster.yandex.com) -
after a few days, DuckDuckGo will have picked up the domain and the pages indexed by Yandex.

## Image Galleries

Create a directory called "galleries" in your `content` directory. Add a directory for each 
gallery and place the images in it. Add `index.md` (otherwise it will not work) with a
description (optional) and the following front matter:

    ---
    title: "Scuol 2018-10-25"
    date: 2018-10-25T15:26:46+01:00
    tags: ["scuol", "autumn"]
    type: "gallery"
    ---
    
    A wonderful, sunny day in Scuol in autumn. Pictures taken during a walk down to the Inn river.

The galleries will mix in with your regular posts and there is
a `/galleries` path that lists all of them in reverse chronological order.

Uses [Fluidbox](https://terrymun.github.io/Fluidbox/demo/index.html) to display images.


## License

This theme is released under the MIT license. For more information read the [License](//github.com/albanleandri/hugo-kashpair/blob/master/LICENSE.md).