/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const ImgOverlay = () => <div css={styles} className="imgOverlay"></div>;

const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000;
  opacity: 0.7;
`;

export default ImgOverlay;
