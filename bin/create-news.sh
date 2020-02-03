#!/bin/bash

export DEST=public/news/index.html
rm -f $DEST

TITLE="News" SUMMARY="Sharing links is an ongoing personal experiment around information bias and content management." bin/header.sh >> $DEST

echo "<div><a href=\"/tags/news\">[by tag]</a></div>" >> $DEST

sqlite3 db.sqlite3 'select title, summary, url, url from news' \
	| bin/printt "printf '<p><strong>%s</strong> - %s<br/><a href=\"%s\">%s</a>'" >> $DEST


cat bin/footer.html >> $DEST
