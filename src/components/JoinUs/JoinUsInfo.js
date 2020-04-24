/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const JoinUsInfo = ({ title }) => (
  <div css={styles} className="cardInfo">
    <h2>{title}</h2>
    <p>
      There are many variations of passages of lorem Ipsum available, but the
      majority have suffered alteration.
    </p>
    <Button text="JOIN NOW" />
  </div>
);

const styles = css`
  z-index: 3;
  color: #fff;
  position: relative;
  width: 100%;
  max-width: 380px;
  text-align: center;
  margin: 0 auto;
  h2 {
    font-size: 36px;
    font-weight: 800;
    line-height: 1;
  }
  p {
    font-size: 17px;
    font-weight: 300;
    line-height: 1.6;
    margin: 18px 0 26px 0;
  }
  .btn {
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
`;

export default JoinUsInfo;
