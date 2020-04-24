/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Container = ({ children }) => (
  <div css={styles} className="container">
    {children}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

export default Container;
