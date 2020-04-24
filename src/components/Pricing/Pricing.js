/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import PricingCard from "./PricingCard";

const Pricing = () => (
  <section css={styles} className="pricing" id="pricing">
    <Title
      title="OUR PRICING"
      desc="There are many variations of passages of lorem Ipsum available, but the majority
        have suffered alteration."
    />
    <Container>
      <PricingCard level="BEGINNER" />
      <PricingCard level="EXPERT" />
      <PricingCard level="PRO" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 140px 0;
  background: #000;
  .container {
    display: flex;
    justify-content: space-between;
    padding: 80px 0 0 0;
  }
  @media (max-width: 650px) {
    .title {
      padding: 0 40px;
    }
  }
  @media (max-width: 799px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 800px) and (max-width: 1189px) {
    .container {
      max-width: 90%;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 1190px) {
    .container {
      max-width: 90%;
    }
  }
`;

export default Pricing;
