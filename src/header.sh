cat <<EOF
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>${TITLE:-Aaron Morris - Vancouver Software Engineer}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Technotopian Environmentalist">
  <meta name="theme-color" content="black">
	<style>$(cat theme.css)</style>
</head>

<body>
		<nav style="position:sticky">
		<p><a href="/">amorris.ca</a></p>
		<p>${TITLE}</p>
		<section>
         <a href="/links/" style="margin-right: 16px" title="I actively collect links.">Links</a>
         <a href="/tags/" style="margin-right: 16px" title="">Tags</a>
         <a href="//webring.xxiivv.com" title="Surf the web like its 1999.">Web Ring</a>
		</section>
		</nav>
		<main>
EOF
