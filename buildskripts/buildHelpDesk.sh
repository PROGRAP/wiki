#! /bin/bash


echo "Starting the buildHelpDesk script"
echo "cleaning the working directory..."
cd  /Users/zmb/MainDir/zmbCORE/workspace/jeremy/wiki/_posts/
for file in * ;do
    fname=$(basename "$file")
    if [[ $fname == *\.md ]]
        then
            echo "remove old file..."
            rm $fname
    fi
done

# run my python import script
python quickstart.py

for file in * ;do
    fname=$(basename "$file")
    if [[ $fname == *\.gif ]]
        then
            echo "an image gets put into to img folder \n "
            mv  ./$fname ../img
    fi
done

for file in * ;do
    fname=$(basename "$file")
    if [[ $fname == *\.jpg ]]
        then
            echo "an image gets put into to img folder \n "
            mv  ./$fname ../img
    fi
done

for file in * ;do
    fname=$(basename "$file")
    if [[ $fname == *\.png ]]
        then
            echo "an image gets put into to img folder \n "
            mv  ./$fname ../img
    fi
done

echo "looking through the downloaded data"

for file in * ;do
    fname=$(basename "$file")
    if [[ $fname == *\.* ]]
        then
            echo $fname "has an invalid file extension and is ignored"
        else
            echo $fname "gets converted into a .md file and gets its BOM removed"
            echo "removing BOM... "
            awk '{if(NR==1)sub(/^\xef\xbb\xbf/,"");print}' $fname > $fname.md
            echo "remove old file..."
            rm $fname
            echo "done"
            echo "putting into /_post folder..."
            echo "done"
    fi
done

#change into folder for the push
cd ..

#Change branch
git checkout gh-pages

#track changes
git add -A

#commit changes
git commit -m "Update from" # Add Timestamp

#push changes

git push

cd /Users/zmb/MainDir/zmbCORE
