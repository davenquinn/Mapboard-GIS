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

Figure = (props)->
  {src, children, className, width, rest...} = props
  style = {width}
  baseElement = h(Image, {width, src})
  if src.endsWith(".m4v") or src.endsWith(".mp4")
    baseElement = h(Video, {width, autoPlay: true, loop: true, rest..., src})
  h("figure", {className, style}, [
    baseElement
    h.if(children?)("figcaption", children)
  ])

export {Video, Image, Figure}