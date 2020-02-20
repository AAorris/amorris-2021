#include <stdio.h>
#include <string.h>
#include <locale.h>
#include <wchar.h>
#include "sqlite3.h"

int main(int argc, char **argv) {
	sqlite3 *db;
	sqlite3_stmt *res;

	setlocale(LC_ALL, "");

	if (argc != 2) {
		fprintf(stderr, "usage: %s DB\n", argv[0]);
		return(1);
	}
	if (sqlite3_open(argv[1], &db)) {
		fprintf(stderr, "Can't open db: %s\n", sqlite3_errmsg(db));
	}

	char* sql = "SELECT DISTINCT tag FROM tags";
	if (sqlite3_prepare_v2(db, sql, -1, &res, 0) != SQLITE_OK) {
		fprintf(stderr, "SQL error: %s\n", sqlite3_errmsg(db));
	}
	char* tagNewsQuery = "select url, uri, txt"
			" from links inner join tags on links.uri = tags.name"
			" where tags.tag = ?";
	sqlite3_stmt *linksRes;
	sqlite3_prepare_v2(db, tagNewsQuery, -2, &linksRes, 0);
	while (sqlite3_step(res) == SQLITE_ROW) {
		char* tag = (char*) sqlite3_column_text(res, 0);
		printf("<h3>%s</h3>\n<ul>", tag);
		if (sqlite3_bind_text(linksRes, 1, tag, -1, NULL) != SQLITE_OK) {
			fprintf(stderr, "SQL error: %s\n", sqlite3_errmsg(db));
		}
		while (sqlite3_step(linksRes) == SQLITE_ROW) {
			printf(
				"\t<li><a href=\"%s\">%s</a> - %s</li>\n",
				sqlite3_column_text(linksRes, 0),
				sqlite3_column_text(linksRes, 1),
				sqlite3_column_text(linksRes, 2)
			);
		}
		printf("</ul>\n");
		sqlite3_reset(linksRes);
	}
	sqlite3_finalize(linksRes);
	sqlite3_finalize(res);
	sqlite3_close(db);
	return 0;
}

