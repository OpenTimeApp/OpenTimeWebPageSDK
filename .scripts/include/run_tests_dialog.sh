#!/usr/bin/env bash
realpath() {
    [[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"
}
ABSPATH=$(realpath $0)
BASEPATH=$(dirname ${ABSPATH})
PROJPATH=$(dirname $(dirname ${BASEPATH}))

cd "${PROJPATH}"

echo "Would you like to run the tests now?"
echo -n "Type [y] or [n] then press [ENTER]: "

test_now=null

read test_now

while [  ${test_now} != "y" ] && [ ${test_now} != "n" ]; do
    echo "Invalid entry"
    echo "Would you like to run the tests now?"
    echo -n "Type [y] or [n] then press [ENTER]: "

    read test_now
done

if [ ${test_now} = "y" ]; then

    "${PROJPATH}/.scripts/test"

fi