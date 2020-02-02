clean:
	rm -f db.sqlite3
	rm -rf public
	mkdir -p public/tags/news/
	mkdir -p public/news/

bin:
	$(MAKE) -C bin/

db: bin
	cp news.tbtl public
	cp tags.tbtl public
	sqlite3 -bail db.sqlite3 <<< `bin/tbl2sql tags.tbtl`
	tbl2json tags.tbtl > public/tags.json
	sqlite3 -bail db.sqlite3 <<< `bin/tbl2sql news.tbtl`
	tbl2json news.tbtl > public/news.json

media:
	bin/compress.sh

homepage:
	cp index.html public

tagpage:
	# sqlite3 db.sqlite3 'select distinct tag from tags'
	bin/create-tags.sh

newspage:
	bin/create-news.sh

content: db homepage tagpage newspage

all: content media
