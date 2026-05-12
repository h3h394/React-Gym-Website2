/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PricingTitle from "./PricingTitle";
import PricingInfo from "./PricingInfo";

const PricingCard = ({ title, subtitle, rows, partners, variant }) => (
  <article css={styles} className={`pricingCard ${variant || ""}`}>
    <PricingTitle title={title} subtitle={subtitle} variant={variant} />
    <PricingInfo rows={rows} partners={partners} variant={variant} />
  </article>
);

const styles = css`
  min-width: 0;
  padding: 30px 26px;
  background: linear-gradient(180deg, rgba(24, 24, 24, 0.98) 0%, rgba(10, 10, 10, 0.98) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.24);
  text-align: left;
  transition: border 400ms ease-in-out, transform 400ms ease-in-out;
  &:hover {
    border: 1px solid #00ff00;
    transform: translateY(-4px);
  }
  &.promo {
    background:
      linear-gradient(135deg, rgba(0, 158, 96, 0.18), transparent 38%),
      linear-gradient(180deg, rgba(28, 28, 28, 0.98) 0%, rgba(8, 8, 8, 0.98) 100%);
    align-self: start;
  }
  &.partners {
    background: linear-gradient(135deg, rgba(0, 158, 96, 0.14), rgba(16, 16, 16, 0.98));
  }
  &.single {
    background: linear-gradient(180deg, rgba(26, 26, 26, 0.98), rgba(12, 12, 12, 0.98));
  }
  @media (min-width: 1191px) {
    padding: 24px 22px;
    border-radius: 22px;
  }
`;

export default PricingCard;
