all: media

media:
	git annex add media
	rclone sync --s3-acl=public-read -L media/ davenquinn-spaces:mapboard-gis-assets

.PHONY: media