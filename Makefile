clean:
	rm db.sqlite3

db: clean
	sqlite3 -bail db.sqlite3 <<< `cd tags && tbl2sql tags.tbtl`
	cd tags && tbl2json tags.tbtl > tags.json
	sqlite3 -bail db.sqlite3 <<< `cd news && tbl2sql news.tbtl`
	cd news && tbl2json news.tbtl > news.json

tagpage:
	# sqlite3 db.sqlite3 'select distinct tag from tags'
	opt/create-tags.sh

newspage:
	opt/create-news.sh

all: db tagpage newspage
