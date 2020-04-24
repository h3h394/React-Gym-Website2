/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const PricingTitle = ({ level }) => (
  <div css={styles} className="pricingTitle">
    <h3>{level}</h3>
    <h5>$45/m</h5>
  </div>
);

const styles = css`
  padding-bottom: 30px;
  border-bottom: 1px solid #313131;
  h3 {
    font-size: 28px;
    color: #fff;
    line-height: 1;
  }
  h5 {
    color: #ff1414;
    font-size: 26px;
    margin: 14px 0 0 0;
    line-height: 1;
  }
`;

export default PricingTitle;
