import h from "@macrostrat/hyper"

updateSrc = (src)->
  if !(src.indexOf('://') > 0 or src.indexOf('//') == 0)
    src = process.env.MEDIA_PATH + src
  return src

Video = (props)->
  {src, rest...} = props
  h("video", {rest..., src: updateSrc(src)})

Image = (props)->
  {src, rest...} = props
  h("img", {rest..., src: updateSrc(src)})

export {Video, Image}