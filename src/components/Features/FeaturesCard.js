/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const FeaturesCard = ({ cardImg, cardTitle }) => (
  <div css={styles} className="featuresCard">
    <img src={cardImg} alt="icon" />
    <h3>{cardTitle}</h3>
    <p>There are many variations of passages of lorem Ipsum available.</p>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 25%;
  color: #fff;
  text-align: center;
  padding: 0 20px;
  h3 {
    font-size: 24px;
    line-height: 1;
    margin: 24px 0 0 0;
  }
  p {
    margin: 12px 0 0 0;
    line-height: 1.6;
    color: #aab1b7;
  }
  @media(max-width: 579px){
    max-width: 100%;
    margin-bottom: 50px;
    p{
      font-size: 14px;
    }
  }
  @media (min-width: 580px) and (max-width: 1000px) {
    max-width: 47%;
    margin-bottom: 50px;
  }
`;

export default FeaturesCard;
