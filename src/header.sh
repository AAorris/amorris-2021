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
		<header>
		<nav style="position:sticky">
		<p><a href="/">amorris.ca</a></p>
		<p>${TITLE}</p>
		<section>
         <a href="/links/" style="margin-right: 16px" title="Links">🔗</a>
         <a href="/tags/" style="margin-right: 16px" title="Tags">🏷️</a>
         <a href="//webring.xxiivv.com" title="Web Ring">
					<svg xmlns="http://www.w3.org/2000/svg" class="vector" width="33px" height="40px" baseProfile="full" version="1.1" style="fill:none;stroke:white;stroke-width:28px;stroke-linecap:square;"> <g transform="translate(0,18),scale(0.1)"> <g transform="translate(150,150),rotate(120,0,0)"> <path d="M0,-60 a60,60 0 1,0 0,120 l100,0"/>   </g> <g transform="translate(150,150),rotate(240,0,0)"> <path d="M0,-60 a60,60 0 1,0 0,120 l100,0"/>   </g> <g transform="translate(150,150),rotate(0,0,0)"> <path d="M0,-60 a60,60 0 1,0 0,120 l100,0"/>   </g> </g> </svg>
				 </a>
		</section>
		</nav>
		</header>
		<main>
EOF
