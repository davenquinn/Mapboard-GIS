
all:
	mkdir -p src/text
	pandoc -o src/text/Mapboard-GIS.html text/Mapboard-GIS.md

media:
	rclone sync --s3-acl=public-read -L media/ davenquinn-spaces:mapboard-gis-assets

.PHONY: media