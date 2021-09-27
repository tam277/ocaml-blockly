#!/bin/bash

# Asai: copied from:
# https://raw.githubusercontent.com/google/blockly/26db9167db6da15c5ba463e345727243054bea64/local_build/local_build.sh
# which is the latest version before being deleted.

# Locally build and compress the core Blockly files into a single JavaScript
# file.
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# Usage: local_build.sh.
#
# This script generates only local_blockly_compressed.js and
# local_blocks_compressed.js . You may modify it as needed to build other
# files.
#
# local_blockly_compressed.js:
# The compressed file is a concatenation of all of Blockly's core files, run
# through a local copy of Google's Closure Compiler with simple optimizations
# turned on.
#
# local_blocks_compressed.js:
# The compressed file is a concatenation of all of Blockly's block files, run
# through a local copy of Google's Closure Compiler with simple optimizations
# turned on.
#

# Future work:
# - Trim down Google's Apache licenses, to match the output of build.py.
# - Generate other compressed files generated by build.py normally.
# - Add a good error message if multiple versions of the closure compiler were
#   found.

EXPECTED_PWD='local_build'
# Check the current working directory.
if [[ ${PWD##*/} != $EXPECTED_PWD ]]; then
  echo ""
  echo "  WARNING   This script should be run from the local_build folder."
  echo ""
  exit 1
fi

# Find the Closure Compiler.
if [ -f "$(npm root)/google-closure-compiler-java/compiler.jar" ]; then
  COMPILER="$(npm root)/google-closure-compiler-java/compiler.jar"
elif [ -f closure-compiler*.jar ]; then
  COMPILER="closure-compiler*.jar"
  # TODO: Check whether multiple files were found.
else
  echo "ERROR: Closure Compiler not found."
  echo "Download from this URL, and place jar file in current directory."
  echo "https://dl.google.com/closure-compiler/compiler-latest.zip"
  exit 1
fi

echo Using $COMPILER as the compiler.
rm local_blockly_compressed.js 2> /dev/null
echo Compiling Blockly core...
java -jar $COMPILER \
  --js='../core/**.js' \
  --js='../../closure-library/closure/goog/**.js' \
  --js='../../closure-library/third_party/closure/goog/**.js' \
  --generate_exports \
  --warning_level='DEFAULT' \
  --compilation_level SIMPLE_OPTIMIZATIONS \
  --dependency_mode=STRICT \
  --entry_point=Blockly \
  --js_output_file local_blockly_compressed.js

if [ -s local_blockly_compressed.js ]; then
  echo Compilation OK.
else
  echo Compilation FAIL.
  exit 1
fi

rm local_blocks_compressed.js 2> /dev/null
echo Compiling Blockly blocks...

# Add Blockly and Blockly.Blocks to be compatible with the compiler.
echo -e "'use strict';\ngoog.provide('Blockly');goog.provide('Blockly.Blocks');" > temp.js

# Concatenate all blocks/*.js into the first file, as the compiler will otherwise
# remove them as not needed.
# Also remove 'use strict' to avoid unnecessary warnings
cat ../blocks/*.js| grep -v "^'use strict';" >> temp.js
java -jar $COMPILER \
  --js='temp.js' \
  --generate_exports \
  --warning_level='DEFAULT' \
  --compilation_level SIMPLE_OPTIMIZATIONS \
  --dependency_mode=NONE \
  --entry_point=Blockly \
  --js_output_file local_blocks_compressed.js
rm temp.js 2> /dev/null
if [ -s local_blocks_compressed.js ]; then
       echo Compilation OK
       # Remove Blockly initialization line. This is present in local_blockly_compressed.
       sed -i '' 's/var Blockly={Blocks:{}};//g' local_blocks_compressed.js
else
       echo Compilation FAIL.
       exit 1
fi

rm local_typedlang_compressed.js 2> /dev/null
echo Compiling Blockly typelang generator...

# Add Blockly.Generator to be compatible with the compiler.
echo -e "'use strict';\n;goog.provide('Blockly.Generator');" > temp.js

# Concatenate all generators/typedlang/*.js into the first file, as the compiler will otherwise
# remove them as not needed.
# Also remove 'use strict' to avoid unnecessary warnings
cat ../generators/typedlang.js ../generators/typedlang/*.js | grep -v "^'use strict';" >> temp.js
java -jar $COMPILER \
  --js='temp.js' \
  --generate_exports \
  --warning_level='DEFAULT' \
  --compilation_level SIMPLE_OPTIMIZATIONS \
  --dependency_mode=NONE \
  --js_output_file local_typedlang_compressed.js
rm temp.js 2> /dev/null
if [ -s local_typedlang_compressed.js ]; then
       echo Compilation OK
       # Remove Blockly initialization line. This is present in local_blockly_compressed.
       sed -i '' 's/var Blockly={Generator:{}};//g' local_typedlang_compressed.js
else
       echo Compilation FAIL.
       exit 1
fi
