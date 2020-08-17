#!/bin/sh
# can add to dockerfile be prefix, 'RUN'
groupmod -g 999 node && usermod -u 999 -g 999 node
usermod -d /home/myapp -l myapp node
