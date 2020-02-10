SHELL := bash
CFLAGS := -std=c99 -Wall
.ONESHELL:
.PHONY: tags.html index.html news.html

PUBLICDIR = ../public/

sqlite:
	curl https://www.sqlite.org/2020/sqlite-amalgamation-3310100.zip > sqlite.zip
	unzip -jd sqlite sqlite.zip
	rm sqlite.zip

db.sqlite3: tbl2sql tags.tbtl news.tbtl
	rm -f db.sqlige3
	sqlite3 -bail db.sqlite3 <<< `tbl2sql tags.tbtl`
	sqlite3 -bail db.sqlite3 <<< `tbl2sql news.tbtl`

tbl2json: tbl.c tbl2json.c

tbl2sql: tbl.c tbl2sql.c

news: tbl.c sqlite/sqlite3.c news.c

news.html: news db.sqlite3
	rm -f news.html
	TITLE=News ./header.sh >> $(PUBLICDIR)/news.html
	./news db.sqlite3 >> $(PUBLICDIR)/news.html
	cat footer.src.html >> $(PUBLICDIR)/news.html

tags: tbl.c sqlite/sqlite3.c tags.c

tags.html: tags db.sqlite3
	rm -f tags.html
	TITLE=Tags ./header.sh >> $(PUBLICDIR)/tags.html
	./tags db.sqlite3 >> $(PUBLICDIR)/tags.html
	cat footer.src.html >> $(PUBLICDIR)/tags.html

index.html: index.src.html
	rm -f index.html
	TITLE="Aaron Morris" ./header.sh >> $(PUBLICDIR)/index.html
	cat index.src.html >> $(PUBLICDIR)/index.html
	cat footer.src.html >> $(PUBLICDIR)/index.html

all: sqlite index.html news.html tags.html

clean:
	rm -f index.html news.html tags.html
