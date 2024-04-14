#!/bin/bash

node  ../cli/build/ts/index.js publish \
    -p $USER_PUBLIC_KEY \
    -sk $USER_PRIVATE_KEY \
    -i 1 -v $VOTE_INDEX -w 9 -n 1 -o 0