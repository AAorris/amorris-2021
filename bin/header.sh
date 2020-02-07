cat <<EOF
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>${TITLE:-Aaron Morris - Vancouver Software Engineer}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Technotopian Environmentalist">
  <meta name="theme-color" content="black">
  <link rel="preload" as="style" href="/theme.css" onload="this.onload=null;this.rel='stylesheet'">
</head>

<body>
		<nav style="position:sticky">
		<p><a href="/">amorris.ca</a></p>
		<p>${TITLE}</p>
		<section>
         <a href="/news/" style="margin-right: 16px" title="I actively collect links.">News</a>
         <a href="/tags/news/" style="margin-right: 16px" title="">Tags</a>
         <a href="//webring.xxiivv.com" title="Surf the web like its 1999.">Web Ring</a>
		</section>
		</nav>
		<main>
EOF
