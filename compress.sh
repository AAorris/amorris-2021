convert aaron-100.jpg -resize 10% -ordered-dither o8x8,1 -dither Floyd-Steinberg -comment "" -strip public/aaron-10.jpg
cd img
rm -f p10.*
for f in *.jpg
do
	convert $f -resize 600x350^ -gravity Center -extent 600x350 -comment "" -strip p10.$f
	# convert $f -resize 540x350 -ordered-dither o8x8,1 -dither Floyd-Steinberg -comment "" -strip p10.$f
done
