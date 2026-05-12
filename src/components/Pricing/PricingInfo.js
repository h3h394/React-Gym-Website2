/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import wellhubLogo from "../Images/logo-wellhub.svg";
import totalpassLogo from "../Images/logo-totalpass.svg";

const partnerLogos = {
  Wellhub: wellhubLogo,
  TotalPass: totalpassLogo
};

const PricingInfo = ({ rows = [], partners = [], variant }) => (
  <div css={styles} className="pricingInfo">
    {rows.map((row) => (
      <div
        key={`${row.label}-${row.value}`}
        className={`pricingRow ${row.highlight ? "highlight" : ""} ${variant || ""}`}
      >
        <span>{row.label}</span>
        <strong>{row.value}</strong>
      </div>
    ))}
    {partners.length > 0 && (
      <div className={`partners ${variant === "partners" ? "standalone" : ""}`}>
        {partners.map((partner) => (
          <div key={partner} className="partnerBadge">
            <img src={partnerLogos[partner]} alt={`Logo ${partner}`} />
          </div>
        ))}
      </div>
    )}
  </div>
);

const styles = css`
  padding-top: 24px;
  .pricingRow {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 14px;
    padding: 14px 0;
    color: #fff;
    font-size: 18px;
    line-height: 1.3;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  .pricingRow span {
    color: #d4d9de;
  }
  .pricingRow strong {
    color: #fff;
    font-size: 22px;
    white-space: nowrap;
  }
  .pricingRow.promo {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    padding: 18px 0;
  }
  .pricingRow.promo span {
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .pricingRow.promo strong {
    font-size: 28px;
  }
  .pricingRow.highlight {
    margin-top: 8px;
    padding-top: 18px;
    border-top: 1px solid rgba(0, 255, 0, 0.2);
  }
  .pricingRow.highlight span,
  .pricingRow.highlight strong {
    color: #00ff00;
    font-weight: 800;
  }
  .pricingRow:last-of-type {
    margin-bottom: 0;
  }
  .partners {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .partners.standalone {
    padding-top: 6px;
  }
  .partnerBadge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 64px;
    padding: 8px 10px;
    border-radius: 16px;
    background: rgba(0, 255, 0, 0.08);
    border: 1px solid rgba(0, 255, 0, 0.2);
  }
  .partnerBadge img {
    width: 100%;
    max-width: 248px;
    height: auto;
    object-fit: contain;
  }
  @media (min-width: 1191px) {
    .pricingRow {
      padding: 12px 0;
      font-size: 16px;
    }
    .pricingRow strong {
      font-size: 19px;
    }
    .pricingRow.promo strong {
      font-size: 24px;
    }
    .partnerBadge {
      min-height: 58px;
    }
  }
  @media (max-width: 650px) {
    .pricingRow {
      font-size: 16px;
    }
    .pricingRow strong {
      font-size: 18px;
    }
    .partnerBadge {
      width: 100%;
    }
  }
`;

export default PricingInfo;
