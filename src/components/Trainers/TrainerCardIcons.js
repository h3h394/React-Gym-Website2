/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const TrainerCardIcons = () => (
  <div css={styles} className="socialIcons">
    <div className="icon">
      <i className="fab fa-facebook-f"></i>
    </div>
    <div className="icon">
      <i className="fab fa-twitter"></i>
    </div>
    <div className="icon">
      <i className="fab fa-instagram"></i>
    </div>
  </div>
);

const styles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  .icon {
    width: 40px;
    height: 40px;
    border: 1px solid #909294;
    border-radius: 50%;
    display: flex;
    margin: 0 8px;
    color: #909294;
    cursor: pointer;
    transition: background 600ms ease-in-out, color 600ms ease-in-out,
      border 600ms ease-in-out;
    &:hover {
      background: #ff1414;
      border: 1px solid #ff1414;
      color: #fff;
    }
    i {
      margin: auto;
    }
  }
`;

export default TrainerCardIcons;
