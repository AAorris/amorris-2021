SHELL := bash
CFLAGS := -std=c99 -Wall -DSQLITE_THREADSAFE=0 -DSQLITE_OMIT_LOAD_EXTENSION
.ONESHELL:

PUBLICDIR = ../public

sqlite.zip:
	curl https://www.sqlite.org/2020/sqlite-amalgamation-3310100.zip > sqlite.zip
	unzip -jd sqlite sqlite.zip
	cp sqlite/sqlite3.{c,h} .
	rm -rf sqlite/

tbl2sql: tbl.c tbl2sql.c
tbl2json: tbl.c tbl2json.c

db.sqlite3: sqlite.zip tbl2sql tags.tbtl news.tbtl
	rm -f db.sqlite3
	sqlite3 -bail db.sqlite3 <<< `./tbl2sql tags.tbtl`
	sqlite3 -bail db.sqlite3 <<< `./tbl2sql news.tbtl`


news: tbl.c sqlite3.c news.c
news.html: news db.sqlite3 theme.css
	rm -f $(PUBLICDIR)/news/index.html
	TITLE=News ./header.sh >> $(PUBLICDIR)/news/index.html
	./news db.sqlite3 >> $(PUBLICDIR)/news/index.html
	cat footer.src.html >> $(PUBLICDIR)/news/index.html

tags: tbl.c sqlite3.c tags.c
tags.html: tags db.sqlite3 theme.css
	rm -f $(PUBLICDIR)/tags/index.html
	TITLE=Tags ./header.sh >> $(PUBLICDIR)/tags/index.html
	./tags db.sqlite3 >> $(PUBLICDIR)/tags/index.html
	cat footer.src.html >> $(PUBLICDIR)/tags/index.html

index.html: index.src.html theme.css
	rm -f $(PUBLICDIR)/index.html
	./header.sh >> $(PUBLICDIR)/index.html
	cat index.src.html >> $(PUBLICDIR)/index.html
	cat footer.src.html >> $(PUBLICDIR)/index.html

pages: index.html news.html tags.html

all: db.sqlite3 pages

clean:
	rm -rf index.html news.html tags.html tbl2sql sqlite/ db.sqlite3
