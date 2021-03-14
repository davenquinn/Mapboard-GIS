import h from "@macrostrat/hyper"

updateSrc = (src)->
  if !(src.indexOf('://') > 0 or src.indexOf('//') == 0)
    src = process.env.MEDIA_PATH + src
  return src

Video = (props)->
  {src, rest...} = props
  h("video", {rest...}, [
    h("source", {src: updateSrc(src), type: "video/mp4"})
  ])

Image = (props)->
  {src, rest...} = props
  h("img", {rest..., src: updateSrc(src)})

export {Video, Image}