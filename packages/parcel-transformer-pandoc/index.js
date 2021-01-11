import { Transformer } from "@parcel/plugin";

Object.defineProperty(exports, '__esModule', { value: true });

export default new Transformer({
  transform({asset}) {
    asset.isIsolated = true;
    return [asset];
  },
});