/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const PricingInfo = () => (
  <div css={styles} className="pricingInfo">
    <p>24h unlimited access</p>
    <p>Trainer Advice</p>
    <p>Locker + Bathroom</p>
    <p>Personal trainer</p>
    <Button text="JOIN NOW" />
  </div>
);

const styles = css`
  padding-top: 30px;
  p {
    color: #fff;
    font-size: 15px;
    margin-bottom: 26px;
    &:nth-child(3),
    &:nth-child(4) {
      color: #7a838b;
    }
  }
  .btn {
    margin: 20px 0 0 0;
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
`;

export default PricingInfo;
