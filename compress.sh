
convert aaron-100.jpg -gamma 0.3 -colorspace gray -colors 2 -resize 20% -ordered-dither o8x8,1 -dither Floyd-Steinberg -comment "" -strip aaron-20.jpg
convert aaron-100.jpg -gamma 0.3 -colorspace gray -colors 2 -resize 10% -ordered-dither o8x8,1 -dither Floyd-Steinberg -comment "" -strip aaron-10.jpg
