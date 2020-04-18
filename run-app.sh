docker-compose kill

yes | docker-compose rm

# docker volume rm geospatial-data-visualisation_static-ui-content

docker pull stephar/geospatial-data-visualisation-ui:latest
docker pull stephar/geospatial-data-visualisation-api:latest

docker-compose up --build

# #!/bin/bash

# set -e
# # function cleanup {
# #   cd $cwd
# # }

# function show_help {
# cat << EOF
# -n skip build
# -s activate stream
# EOF
# }

# # trap cleanup EXIT

# export PROJECT_DIR=$(pwd)
# export PROJECT_BIN=$(pwd)/bin

# cwd=$(pwd)
# nobuild=0
# # stream=0
# webapp=0
# while getopts "h?nw" opt; do
#     case "$opt" in
#     h|\?)
#         show_help
#         exit 0
#         ;;
#     n)  nobuild=1
#     ;;
#     # s)  stream=1
#     # ;;
#     w)  webapp=1
#     esac
# done

# shift $((OPTIND - 1))

# echo ""
# echo "*****************************"
# echo "No build      : $nobuild"
# # echo "Stream source : $stream"
# echo "Webapp Compile : $webapp"
# echo "*****************************"
# echo ""

# # . $PROJECT_BIN/load_config_variables
# #
# # $PROJECT_BIN/print_config_variables

# # Building webapp
# if [ "$webapp" -eq "1" ]; then
#   echo "running ---> npm run build ----> compiling frontend"
#   cd ./webapp
#   npm i
#   npm run build
#   cd ..
# fi

# if [ "$nobuild" -eq "0" ]; then
#   # if [ "$stream" -eq "0" ]; then
#     echo "running ---> docker-compose -f docker-compose.yml up --build"
#     docker-compose -f docker-compose.yml up --build
#   # else
#   #   echo "running ---> docker-compose -f  docker-compose.yml up --build ---> with stream"
#   #   docker-compose -f docker-compose.yml -f docker-compose.override.yml up --build
#   # fi
# else
#   # if [ "$stream" -eq "0" ]; then
#     echo "running ---> docker-compose -f docker-compose.yml up"
#     docker-compose -f docker-compose.yml up
#   # else
#   #   echo "running ---> docker-compose -f docker-compose.yml up  ---> with stream"
#   #   docker-compose -f docker-compose.yml -f docker-compose.override.yml up
#   # fi
# fi
