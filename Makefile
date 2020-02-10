.PHONY: src

cleandb:
	rm -f db.sqlite3

cleanpublic:
	rm -rf public/*
	mkdir -p public/tags/
	mkdir -p public/news/

cleancss:
	rm -f public/*.css

clean: cleandb cleanpublic

src:
	mkdir -p public/{tags,news}
	$(MAKE) -C src/ all

media:
	bin/compress.sh

copymedia:
	cp aaron-10.jpg public
	cp -r img public

content: cleancss
	cp *.svg public
	cp -r launch/ public/launch/
	cp -r resume/ public/resume/

all: src content copymedia
