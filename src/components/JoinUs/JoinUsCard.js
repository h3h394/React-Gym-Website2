/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import ImgOverlay from "../GlobalComponents/ImgOverlay";
import JoinUsInfo from "./JoinUsInfo";

const JoinUsCard = ({ title }) => (
  <div css={styles} className="card">
    <ImgOverlay />
    <JoinUsInfo title={title} />
  </div>
);

const styles = css`
  width: 100%;
  max-width: 50%;
  padding: 200px 0;
  position: relative;
  background-size: 100% 100%;
  &:hover {
    background-size: 105% 105%;
  }
  @media(max-width: 1000px) {
    max-width: 100%;
  }
`;

export default JoinUsCard;
