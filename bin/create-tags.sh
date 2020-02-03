#!/bin/bash
export DEST=public/tags/news/index.html
rm -f $DEST
TITLE="Tags" SUMMARY="links by tag" bin/header.sh >> $DEST
for tag in $(sqlite3 db.sqlite3 'select distinct tag from tags'); do echo "<h3>$tag</h3><ul>"; echo $(sqlite3 db.sqlite3 "select distinct title, url, summary, month, year from news inner join tags on news.title = tags.name where tags.tag = \"$tag\"" | awk -F'|' '{printf("<li><a href=\"%s\">%s - (%s %s)</a></li>", $2, $1, $4, $5)}' ); echo "</ul>"; done >> $DEST
cat bin/footer.html >> $DEST
