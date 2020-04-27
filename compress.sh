cd public/img
for f in {0*.jpg,1*.jpg}
do
	convert $f -resize 600x350^ -gravity Center -extent 600x350 -comment "" -strip p10.$f
done
