#!/bin/bash
set -x #echo on

echo "Ip arg: $1"
echo "Command arg: $2"

if [ "$2" = "on" ]; then
        sudo miio --control "$1" --method set_power --params '["on"]'
elif [ "$2" = "off" ]; then
        sudo miio --control "$1" --method set_power --params '["off"]'
fi