all: media

media:
	rclone sync --s3-acl=public-read -L media/ davenquinn-spaces:mapboard-gis-assets

.PHONY: media