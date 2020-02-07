#!/bin/bash

export DEST=public/news/index.html
rm -f $DEST

TITLE="News" SUMMARY="Sharing links is an ongoing personal experiment around information bias and content management." bin/header.sh >> $DEST

sqlite3 db.sqlite3 'select title, summary, url, url, (select group_concat(tag, ", ") from tags where tags.name = news.title) from news' \
	| bin/printt "printf '<p><strong>%s</strong> - %s<br/><a href=\"%s\">%s</a><br/>%s'" >> $DEST


cat bin/footer.html >> $DEST
