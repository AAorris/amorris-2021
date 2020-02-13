SHELL := bash
CFLAGS := -std=c99 -Wall
.ONESHELL:

PUBLICDIR = ../public

sqlite:
	curl https://www.sqlite.org/2020/sqlite-amalgamation-3310100.zip > sqlite.zip
	unzip -jd sqlite sqlite.zip
	rm sqlite.zip
	cp sqlite/sqlite3.{c,h} .
	rm -rf sqlite/

db.sqlite3: tbl2sql tags.tbtl news.tbtl
	rm -f db.sqlite3
	sqlite3 -bail db.sqlite3 <<< `tbl2sql tags.tbtl`
	sqlite3 -bail db.sqlite3 <<< `tbl2sql news.tbtl`

tbl.o: tbl.c

sqlite3.o: sqlite3.c

tbl2json: tbl.o tbl2json.c

tbl2sql: tbl.o tbl2sql.c

news: tbl.o sqlite3.o news.c

news.html: news db.sqlite3 theme.css
	rm -f $(PUBLICDIR)/news/index.html
	TITLE=News ./header.sh >> $(PUBLICDIR)/news/index.html
	./news db.sqlite3 >> $(PUBLICDIR)/news/index.html
	cat footer.src.html >> $(PUBLICDIR)/news/index.html

tags: sqlite tbl.c sqlite3.c tags.c

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

all: sqlite index.html news.html tags.html

clean:
	rm -f index.html news.html tags.html
