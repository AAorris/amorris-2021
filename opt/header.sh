cat <<EOF
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>${TITLE:-Aaron Morris - Vancouver Software Engineer}</title>
  <meta name="og:title" content="Aaron Morris">
  <meta name="og:description" content="Software Engineer">
  <meta name="og:url" content="https://amorris.ca/">
  <meta name="og:image" content="https://amorris.ca/portrait.jpg">
  <meta name="google-site-verification" content="fkirvSljItXe5zerAIyJ7YgmPZ1sCS6sn3hM7g_3nb0" />
  <link rel="stylesheet" href="/lib/reset.css">
<style>h3,p{margin-block-end:4px}p{margin-block-start:4px;font-size:100%;color:#444}body>div{padding:1em}</style>
</head>

<body style="max-width:600px;margin:auto;font-size:150%;padding:0.25in;font-family:sans-serif;font-weight:300">
		<nav style="position:sticky">
		<h2>${TITLE}</h2>
		<h2><a href="/">Aaron Morris</a></h2>
		<q style="opacity:0.53">${SUMMARY}</q>
		</nav>
		<br/><hr />
EOF
