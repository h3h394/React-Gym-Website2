/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import BigOfferBg from "../Images/bigOfferBg.webp";

const BannerOffer = () => (
  <section css={styles} className="bannerOffer">
    <h2>
      A BIG OFFER FOR <br /> THIS SUMMER
    </h2>
    <Button text='JOIN NOW' />
  </section>
);

const styles = css`
  width: 100%;
  padding: 240px 0;
  text-align: center;
  background: url('${BigOfferBg}') no-repeat center/cover;
  color: #fff;
  h2{
    font-size: 50px;
    font-weight: 900;
  }
  .btn{
    margin: 30px 0 0 0;
    &:hover {
      background: transparent;
      color: #ff1414;
      border: 1px solid #ff1414;
    }
  }
`;

export default BannerOffer;
