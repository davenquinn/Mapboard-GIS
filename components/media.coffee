import h from "@macrostrat/hyper"

Video = (props)->
  {src, rest...} = props
  if !(src.indexOf('://') > 0 or src.indexOf('//') == 0)
    src = process.env.MEDIA_PREFIX + src
  h("video", {src, rest...})

export {Video}