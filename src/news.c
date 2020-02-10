#include <stdio.h>
#include <sqlite3.h>

static int callback(void *NotUsed, int argc, char **argv, char **azColName) {
	printf(
		"<p><strong>%s</strong> - %s<br/><a href=\"%s\">%s</a><br/><sub>%s</sub>",
		argv[0], argv[1], argv[2], argv[2], argv[3]
	);
	return 0;
}

int main(int argc, char **argv) {
	sqlite3 *db;
	char *zErrMsg = 0;
	// int rc;
	if (argc != 2) {
		fprintf(stderr, "usage: %s DB\n", argv[0]);
		return(1);
	}
	if (sqlite3_open(argv[1], &db)) {
		fprintf(stderr, "Can't open db: %s\n", sqlite3_errmsg(db));
	}
	char* arg = "SELECT title, summary, url, (SELECT group_concat(tag, \" \") FROM tags WHERE tags.name = news.title) FROM news";
	if (sqlite3_exec(db, arg, callback, 0, &zErrMsg) != SQLITE_OK) {
		fprintf(stderr, "SQL error: %s\n", zErrMsg);
		sqlite3_free(zErrMsg);
	}
	sqlite3_close(db);
	return 0;
}

