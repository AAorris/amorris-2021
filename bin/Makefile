clean:
	rm -f tbl2json
	rm -f tbl2sql

tbl2json:
	gcc -g -Wall tbl.c tbl2json.c -o tbl2json

tbl2sql:
	gcc -g -Wall tbl.c tbl2sql.c -o tbl2sql

all: clean tbl2json tbl2sql
