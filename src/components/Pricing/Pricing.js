/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import PricingCard from "./PricingCard";
import Button from "../GlobalComponents/Button";
import { pricingSections, pricingNote } from "../../PlanosPrecos";

const promoSection = pricingSections.find((section) => section.variant === "promo");
const paymentSections = pricingSections.filter((section) => section.variant === "payment");
const sideSections = pricingSections.filter(
  (section) => section.variant === "single" || section.variant === "partners"
);

const Pricing = () => (
  <section css={styles} className="pricing" id="pricing">
    <Title
      title="Planos e mensalidades"
      desc="Uma leitura mais clara para comparar promocoes por periodo, formas de pagamento e beneficios aceitos."
    />
    <Container>
      <div className="topBoard">
        {promoSection && <PricingCard {...promoSection} />}
        <div className="sideRail">
          <div className="sideRailHeader">
            <span>Treino e beneficios</span>
            <h3>Opcoes complementares</h3>
          </div>
          {sideSections.map((section) => (
            <PricingCard key={section.title} {...section} />
          ))}
        </div>
      </div>

      <div className="paymentSection">
        <div className="paymentRailHeader">
          <span>Mensalidades</span>
          <h3>Escolha como pagar</h3>
        </div>
        <div className="paymentGrid">
          {paymentSections.map((section) => (
          <PricingCard key={section.title} {...section} />
          ))}
        </div>
      </div>

      <div className="pricingBanner">
        <div>
          <span className="eyebrow">Condicao especial</span>
          <p className="pricingNote">{pricingNote}</p>
        </div>
        <Button text="Agende sua matricula" />
      </div>
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 140px 0;
  background:
    radial-gradient(circle at top, rgba(0, 158, 96, 0.18), transparent 35%),
    linear-gradient(180deg, #020202 0%, #0a0a0a 100%);
  .container {
    padding: 80px 0 0 0;
    width: 90% !important;
    max-width: 1080px;
  }
  .topBoard {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.75fr);
    gap: 24px;
    align-items: start;
  }
  .sideRail {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .paymentRailHeader,
  .sideRailHeader {
    padding: 8px 6px 0;
  }
  .paymentRailHeader span,
  .sideRailHeader span,
  .eyebrow {
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 11px;
    font-weight: 800;
    color: #00ff9c;
  }
  .paymentRailHeader h3,
  .sideRailHeader h3 {
    margin: 10px 0 0;
    font-size: 30px;
    line-height: 1;
    color: #fff;
  }
  .paymentSection {
    margin-top: 28px;
  }
  .paymentGrid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }
  .pricingBanner {
    margin-top: 24px;
    padding: 24px 28px;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(90deg, rgba(18, 18, 18, 0.98), rgba(10, 31, 18, 0.98));
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  .pricingNote {
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    margin: 8px 0 0;
  }
  @media (max-width: 650px) {
    .title {
      padding: 0 24px;
    }
    .paymentRailHeader h3,
    .sideRailHeader h3 {
      font-size: 28px;
    }
    .pricingNote {
      font-size: 22px;
      line-height: 1.4;
    }
  }
  @media (max-width: 1190px) {
    .topBoard,
    .paymentGrid {
      grid-template-columns: 1fr;
    }
    .pricingBanner {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (min-width: 1191px) {
    .topBoard {
      gap: 20px;
    }
    .pricingBanner {
      padding: 20px 24px;
    }
    .pricingNote {
      font-size: 24px;
    }
  }
`;

export default Pricing;
