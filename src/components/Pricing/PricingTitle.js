/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const PricingTitle = ({ title, subtitle, variant }) => (
  <div css={styles} className={`pricingTitle ${variant || ""}`}>
    {variant === "promo" && <span className="eyebrow">Melhor custo por periodo</span>}
    <h3>{title}</h3>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

const styles = css`
  padding-bottom: 22px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  .eyebrow {
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 11px;
    font-weight: 800;
    color: #00ff9c;
    margin-bottom: 14px;
  }
  h3 {
    font-size: 28px;
    font-weight: 900;
    color: #fff;
    line-height: 1.05;
    margin: 0;
  }
  p {
    color: #b9c0c6;
    font-size: 16px;
    line-height: 1.4;
    margin: 12px 0 0 0;
  }
  &.promo h3 {
    font-size: 42px;
  }
  @media (min-width: 1191px) {
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 15px;
    }
    &.promo h3 {
      font-size: 34px;
    }
  }
`;

export default PricingTitle;
