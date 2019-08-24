<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Aaron's News</title>
  <meta name="description" content="Aaron's news - mostly nerdy tech links">
  <meta name="keywords" content="august, 2019, tech, software, frontend, social, sustainability, vancouver">
  <link rel="author" href="https://amorris.ca/">
  <meta name="updated" content="2019-07-31" scheme="yyyy-mm-dd">
  <!-- random external stuff -->
  <meta name="twitter:card" content="Software news and updates by Aaron.">
  <meta name="twitter:site" content="@aaorris">
  <meta name="og:title" content="Aaron Morris">
  <meta name="og:description" content="Software news and updates by Aaron.  ">
  <meta name="og:url" content="https://amorris.ca/">
  <meta name="og:image" content="https://amorris.ca/portrait.jpg">
  <!-- -->
  <link rel="stylesheet" href="/lib/reset.css">
  <link rel="stylesheet" href="/lib/theme.css">
</head>

<body class="news">
  <h2><a href="/news/">News</a></h2>
  <h3><a href="/">Aaron Morris</a></h3>
  <section class="previous-months">
    <div>Earlier: </div>
    <h4><a href="/news/2019/july.html" style="text-decoration: underline">July</a></h4>
    <h4><a href="/news/2019/june.html" style="text-decoration: underline">June</a></h4>
    <h4><a href="/news/2019/may.html" style="text-decoration: underline">May</a></h4>
    <h4><a href="/news/2019/april.html" style="text-decoration: underline">April</a></h4>
  </section>
  <h4>August</h4>
  <h5>All Tags</h5>
  <button
    onclick="document.querySelectorAll('li.link-item').forEach(tag => tag.hidden = false); document.location.hash = ''">
    Clear Filters
  </button>
  <ul class=all-tags id=allTags></ul>
  <template id=item>
    <li class=link-item>
      <a href="url">title</a>
      <q>summary</q>
      <ul class=tags></ul>
    </li>
  </template>
  <template id=tagTemplate>
    <li class=tag-item>
      <a href="#tag" class=tag>#tag</a>
    </li>
  </template>
  <h5>Links</h5>
  <pre content-type=tablatal>
title                summary                                       tags           url                                                                                                                     
Power Keyboard       OSX rule based keyboard automation            tech           https://medium.com/@caulfieldOwen/turn-your-keyboard-into-a-text-editing-rocket-1514d8474d2d
Imba Language        Very fun and concise syntax for web apps      web tech       https://imba.io/
Lisp Manual          The Lisp Programmers Manual 1.5               lisp books     http://web.cse.ohio-state.edu/~rountev.1/6341/pdf/Manual.pdf
Make a Lisp          Lisp implementation and docs in 77 languages  lisp tech      https://github.com/kanaka/mal
Write a Text Editor  Build your own Text Editor in C               tech           https://viewsourcecode.org/snaptoken/kilo/index.html
Norns Tutorial 23241 Crash-course tutorial to get started          audio tech     https://llllllll.co/t/norns-tutorial/23241
Hundred Rabbits      New: 40 minutes of ambient music              audio          https://aliceffekt.bandcamp.com/album/hundred-rabbits
Magnetic Nozzle      Orca composition using renoise                audio video    https://www.youtube.com/watch?v=6tBASX8KC7E
Seaboard Keyboard    Midi polyphonic expression keyboard           audio tech     https://roli.com/products/seaboard
Ameyama Link Dump    Link Dump 6                                   links          https://ameyama.com/blog/link-dump-006
Eve - Visual History Rethinking literate programming               language tech  https://futureofcoding.org/essays/eve/
Flix                 Opinionated functional programming language   language tech  https://flix.dev/
Maria Web            Lisp dialect with great documentation         lisp tech      https://www.maria.cloud/quickstart
Diablo Web           Play Diablo I in your browser                 game tech      https://d07riv.github.io/diabloweb/
Gerbil Scheme        Opinionated Lisp dialect built on Gambit      lisp tech      https://cons.io/guide/intro.html#standard-library
Awk Basics           Nice little awk article                       awk tech       https://start.jcolemorrison.com/understanding-enough-awk-to-search-piles-of-files-and-text/
Zeit Now             Now with zero configuration deployments       tech           https://zeit.co/guides/upgrade-to-zero-configuration/
Dart Language        Highly cross platform and native language     dart tech      https://renato.athaydes.com/posts/interesting-dart-features.html
How to water start   Windsurfing tutorial. Short and clear.        sport video    https://youtu.be/QmWnEZ-G-HE
Linux Git Video      Gource video of linux kernel development      video          https://www.youtube.com/watch?v=5iFnzr73XXk
Sci-Fi Interfaces    Collected designs for visual inspiration      scifi tech     https://sciencefictioninterfaces.tumblr.com/
LCD Pixel Effect     Cool LCD pixel effect made with Blender       video          https://twitter.com/chiu_hans/status/1157655821150330881
C-Mera               Next level syntax for C like languages        tech           https://github.com/kiselgra/c-mera
Lisp Algorithms      Programming algorithms and data structures    lisp tech      https://lisp-univ-etc.blogspot.com/2019/08/programming-algorithms-data-structures.html
JS Data Structures   Data structures and algorithms walkthrough    web tech       https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript
Compositing Guide    A guide to alpha compositing                  color math     https://ciechanow.ski/alpha-compositing/
Algebraic Effects    They're like exceptions on steroids but not   tech math      https://overreacted.io/algebraic-effects-for-the-rest-of-us/
MDN: Selection       Javascript input selection API                web tech       https://developer.mozilla.org/en-US/docs/Web/API/Selection
Lib Five             Lisp for parametric and procedural design     lisp tech      https://libfive.com/
Bivectors            Geometric algebra                             tech math      https://bivector.net/
Layers of Being      Short visualization of layered human models   life links     https://layers.amorris.ca/
Daybreaker           Wake up and dance with your community         community life https://www.daybreaker.com/
Radha Agrawal        Community Architect, social entrepreneur      community life https://www.radhaagrawal.com/
What's the big idea? Podcasts about people with big ideas.         life podcast   https://www.itsandrewhorn.com/blog/connorbeaton
John Gottman         Predicting marital success, sex perspectives  life podacst   https://armchairexpertpod.com/pods/john-gottman
Tracy Gapin          Epigenetics, testosterone, precision medicine men life coach https://drtracygapin.com/
Stefanos Sifandos    Life coach focused on masculinity and love    men life coach https://stefanossifandos.com/
Dad is Cool          Book recommended to me about fatherhood       men life books https://www.amazon.com/Dad-cool-Marcos-Piangers-ebook/dp/B0191QL9DU
Makepad              Simple productivity app for indie devs        tech links     https://makepad.live/
X-Tag                Pluggable and light web components library    web tech       https://x-tag.github.io/
Money blocks         Podcast with Amber Dugger                     money podcast  https://thewellnessbusinesshub.com/simplest-way-remove-money-blocks-good/
Revenue Goals        Tools for defining how much income you need   money tech     https://thewellnessbusinesshub.com/how-to-clearly-define-revenue-goals-for-your-business-and-your-life/
5 Signs of Burnout   Sleep in, need coffee, slipping productivity? podcast        https://eshuemake1.podbean.com/e/episode-2-5-signs-youre-burning-out/
Teensy 4.0           Tiny 600 MHz micro controller                 hardware       https://hackaday.com/2019/08/07/new-teensy-4-0-blows-away-benchmarks-implements-self-recovery-returns-to-smaller-form/
ErgoWrap             Crazy, cool, DIY keyboard with lots of stuff  hardware       https://github.com/pseudoku/ErgoWarp
Node mini server     DIY mini home server for decentralized web    hardware       https://n-o-d-e.net/node_mini_server2.html
CMMI                 Capability Maturity Model Integration         management     https://en.wikipedia.org/wiki/Capability_Maturity_Model_Integration
Sans Forgetica       A font aimed at improving memory of notes     tech           https://sansforgetica.rmit/
Joe Armstrong        Making reliable distributed systems - Erlang  tech books     https://web.archive.org/web/20041204143417/http://www.sics.se/~joe/thesis/armstrong_thesis_2003.pdf
Meta Object Protocol A new approach to programming language design tech books     https://mitpress.mit.edu/books/art-metaobject-protocol
Control Structures   ...For programming languages, old PDF         tech books     http://reports-archive.adm.cs.cmu.edu/anon/home/ftp/usr0/anon/anon/scan/CMU-CS-70-fisher.pdf
APL                  A programming language                        tech books     https://en.wikipedia.org/wiki/APL_(programming_language)
The Artificial       Sciences of the Artificial, Third Edition     tech books     https://mitpress.mit.edu/books/sciences-artificial
Mythical Man Month   Essays on Software Engineering                tech books     https://en.wikipedia.org/wiki/The_Mythical_Man-Month
Computation          Finite and Infinite Machines                  tech books     https://dl.acm.org/citation.cfm?id=1095587
</pre>

  <ul id="news" class="news">
  </ul>
  <script type=module>
    import tablatal from '/lib/tablatal.js'
    const links = document.querySelector('pre')
    const data = tablatal(links.textContent)
    const output = document.createElement('ul')
    const elements = data.forEach(({title, summary, tags, url}) => {
      // note: item is #item and importNode is instancing the template
      const element = document.importNode(item.content, true)
      const a = element.querySelector('a')
      a.href = url
      a.textContent = title
      const q = element.querySelector('q')
      q.textContent = summary
      const tagContainer = element.querySelector('.tags')
      const tagStrings = tags.split(/ /)
      tagStrings.forEach(tag => {
        const tagElement = document.importNode(tagTemplate.content, true)
        const a = tagElement.querySelector('a')
        a.textContent = a.href = `#${tag}`
        const tagCopy = tagElement.cloneNode(true)
        tagContainer.appendChild(tagElement)
        if (allTags.querySelector(`[href="#${tag}"]`)) return
        allTags.appendChild(tagCopy)
      })
      console.log(window.location.hash.replace('#', ''))
      if (window.location.hash && !tagStrings.includes(window.location.hash.replace('#', ''))) {
        element.querySelector('li').hidden = true
      }
      output.appendChild(element)
    })
    links.replaceWith(output)

    document.addEventListener('click', e => {
      if (!e.target.classList.contains('tag')) return console.log(e.target.classList)
      if (!e.target.tagName === 'A') return console.log('not a link')
      const tagText = e.target.href
      document.querySelectorAll('.link-item').forEach(item => {
        console.log(item)
        const tagLinks = item.querySelectorAll('.tag-item > a')
        let match = false
        tagLinks.forEach(item => {
          if (item.href === tagText) match = true
        })
        item.hidden = !match
      })
    })
  </script>
</body>

</html>
