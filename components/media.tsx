import h from "@macrostrat/hyper";

const updateSrc = function (src) {
  if (!(src.indexOf("://") > 0 || src.indexOf("//") === 0)) {
    src = process.env.NEXT_PUBLIC_MEDIA_PATH + src;
  }
  return src;
};

const Video = function (props) {
  const { src, ...rest } = props;
  return h("video", { ...rest, src: updateSrc(src) });
};

const Image = function (props) {
  const { src, ...rest } = props;
  return h("img", { ...rest, src: updateSrc(src) });
};

const Figure = function (props) {
  const { src, children, className, width, ...rest } = props;
  const style = { width };
  let baseElement = h(Image, { width, src });
  if (src.endsWith(".m4v") || src.endsWith(".mp4")) {
    const type = props.type ?? "video/mp4";
    baseElement = h(Video, {
      width,
      autoPlay: true,
      playsInline: true,
      muted: true,
      loop: true,
      ...rest,
      type,
      src,
    });
  }
  return h("figure", { className, style }, [
    baseElement,
    h.if(children != null)("figcaption", children),
  ]);
};

export { Video, Image, Figure };
