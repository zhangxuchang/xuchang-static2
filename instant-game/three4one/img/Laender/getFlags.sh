#!/bin/bash


wget -r -I 'people/koppi' -A .svg http://www.openclipart.org/user-cliparts/koppi

cd www.openclipart.org/people/koppi

for i in *; do echo $i; rsvg-convert -w 150 -h 150 $i -o png/`echo $i | sed -e 's/svg$/png/'`; done

