#!/usr/bin/env bash
realpath() {
    [[ $1 = /* ]] && echo "$1" || echo "$PWD/${1#./}"
}
ABSPATH=$(realpath $0)
BASEPATH=$(dirname ${ABSPATH})
PROJPATH=$(dirname ${BASEPATH})

cd ${PROJPATH}

echo "Ignoring changes for configuration files"
git update-index --assume-unchanged src/tests/test-config.ts

echo "Installing git hooks"
cp ${PROJPATH}/.scripts/pre-commit ${PROJPATH}/.git/hooks/pre-commit
chmod +x ${PROJPATH}/.git/hooks/pre-commit

echo "Installation complete!"