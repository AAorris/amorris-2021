cat <<EOF
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>${TITLE:-Aaron Morris - Vancouver Software Engineer}</title>
  <meta name="og:title" content="Aaron Morris">
  <meta name="og:description" content="Software Engineer">
  <meta name="og:url" content="https://amorris.ca/">
  <meta name="og:image" content="https://amorris.ca/aaron-10.jpg">
  <meta name="google-site-verification" content="fkirvSljItXe5zerAIyJ7YgmPZ1sCS6sn3hM7g_3nb0" />
  <link rel="stylesheet" href="/reset.css">
  <link rel="stylesheet" href="/theme.css">
</head>

<body>
		<nav style="position:sticky">
		<h3><a href="/">amorris.ca</a></h3>
		<h2>${TITLE}</h2>
		<section>
         <a href="/news/" style="padding-right: 16px" title="I actively collect links.">News</a>
         <a href="/tags/news/" style="padding-right: 16px" title="">Tags</a>
         <a href="//webring.xxiivv.com" title="Surf the web like its 1999.">Web Ring</a>
		</section>
		</nav>
		<main>
EOF
