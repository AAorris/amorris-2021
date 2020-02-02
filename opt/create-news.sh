#!/bin/bash

export DEST=news/index.html
rm -f $DEST

TITLE="News" SUMMARY="Sharing links is an ongoing personal experiment around information bias and content management." opt/header.sh >> $DEST

echo "<div><a href=\"/tags/news\">[Tag directory]</a></div>" >> $DEST

sqlite3 db.sqlite3 'select title, title, summary, url, url from news' \
	| opt/printt "printf '<div><h3 name=\"title\"><a id=\"%s\">%s</a></h3><div name=\"summary\"><p>%s</p></div><div name=\"url\"><a href=\"%s\">%s</a></div></div>\n'" >> $DEST


cat opt/footer.html >> $DEST
