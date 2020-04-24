/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import ImgOverlay from "../GlobalComponents/ImgOverlay";
import MainBgOne from "../Images/mainBgOne.png";
import TrainerCard from "./TrainerCard";
import TeamOneBg from "../Images/teamOne.png";
import TeamTwoBg from "../Images/teamTwo.png";
import TeamThreeBg from "../Images/teamThree.png";

const Trainers = () => (
  <section css={styles} className="trainers" id="pages">
    <ImgOverlay />
    <Title
      title="OUR TRAINERS"
      desc="There are many variations of passages of lorem Ipsum available, but the majority
        have suffered alteration."
    />
    <Container>
      <TrainerCard
        trainerName="Jessica Mino"
        trainerGender="Woman Trainer"
        trainerImg={TeamOneBg}
      />
      <TrainerCard
        trainerName="Amit Khan"
        trainerGender="Men Trainer"
        trainerImg={TeamTwoBg}
      />
      <TrainerCard
        trainerName="Paulo Rolac"
        trainerGender="Men Trainer"
        trainerImg={TeamThreeBg}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 160px 0;
  text-align: center;
  position: relative;
  background: url('${MainBgOne}') no-repeat center/cover;
  .title{
    position: relative;
    z-index: 5;
  }
  .container {
    display: flex;
    justify-content: space-between;
    z-index: 6;
    position: relative;
    padding: 80px 0 0 0;
  }
  @media(max-width: 650px) {
    .title{
      padding: 0 40px;
    }
  }
  @media(max-width: 769px) {
      .container{
        max-width: 90%;
        flex-direction: column;
        align-items: center;
      }
  }
  @media(min-width: 770px) and (max-width: 1200px) {
    .container{
        max-width: 90%;
        flex-wrap: wrap;
      }
  }
`;

export default Trainers;
