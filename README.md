# Kashpair

[![Build Status](https://travis-ci.org/albanleandri/hugo-kashpair.svg?branch=master)](https://travis-ci.org/albanleandri/hugo-kashpair)

## History
[Kashpair](https://github.com/albanleandri/hugo-kashpair) is based on [Chaschper](https://github.com/jcfischer/hugo-chaschper)
[Chaschper](https://github.com/jcfischer/hugo-chaschper) is based on [Casper Two](https://github.com/eueung/hugo-casper-two), a port of the [Casper](https://github.com/TryGhost/Casper), the default personal blogging theme for Ghost. A legacy version (v1.x) has [already been ported](https://github.com/vjeantet/hugo-theme-casper) to Hugo years ago.

With Kashpair, I tried to organize things in a way that suited me better.

From Chaschper, I removed certain things:
* Removed the "archive" content type
* Decoupled the word count and the read time, so I can show only read time in articles

In addition, Kashpair features additional features:

* Added the Whatsapp & LinkedIn share buttons to the floating header
* Added support for Google Tag Manager
* Added ability to toggle on/off the search feature
* Show post description in list instead of full untruncated content


## Theme Demo

- [albanleandri.com](https://albanleandri.com/)

## Installation

Inside the folder of your Hugo site run:

    $ cd themes
    $ git clone https://github.com/albanleandri/hugo-kashpair.git kashpair
    
or if you plan to use [netlify](https://netlify.com) to host your site
   
    $ cd themes
    $ git submodule add https://github.com/albanleandri/hugo-kashpair.git kashpair
   

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.


## Sample Configuration

The following `config.toml` is used for the demo site. 

```toml
baseurl         = "https://invisible.ch/"
title           = "Invisible - Musings. Music. Code. Art"
theme           = [ "chaschper", "matomo" ]
languageCode    = "en-US"
disqusShortname = ""
paginate        = 6
canonifyurls    = true
assetDir        = "static"


[author]
    name    = "Jens-Christian Fischer"
    nick    = "jcfischer"
    email   = "jens-christian@invisible.ch"
    avatar  = ""
    description = "Maker. Musician"

[params]
  title       = "Invisible"
  domain      = "invisible.ch"
  subtitle    = "Musings. Music. Code. Art"
  copyright   = "© 2018"

  cover       = "img/blog-cover.jpg"
  description = "Portfolio and Blog of Jens-Christian Fischer"
  metaDescription = ""
  googleAnalytics = ""
  customCSS = []
  RSSLink = ""
  showSubcribe = true
  show_reading_time = true

  mainSections = ["musings", "music", "code", "art"]

  twitterName = "jcfischer"
  fbName = "JensChristianFischer"
  githubName = "jcfischer"
  linkedinName = "jenscfischer"
  keybaseName = "jcfischer"


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
    City = "Zurich"
    webmention = "invisible.ch"

[params.matomo]
    url = "https://matomo.invisible.ch"
    id = 1

[params.matomo.track]
    button = "Enable Analytics"
    message = "Your visits will be logged."
[params.matomo.block]
    button = "Disable Analytics"
    message = "Your visits will *not* be logged."
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