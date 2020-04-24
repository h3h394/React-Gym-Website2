/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import JoinUsCard from "./JoinUsCard";
import ForGirlBg from "../Images/forGirl.png";
import ForBoysBg from "../Images/forBoys.png";

const JoinUs = () => (
  <section css={styles} className="joinUs" id="blog">
    <Container>
      <JoinUsCard title="FOR GIRL" />
      <JoinUsCard title="FOR BOYS" />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  .container {
    max-width: 100%;
    display: flex;
    .card {
      background: url('${ForGirlBg}') no-repeat center/cover;
      background-size: 100% 100%;
      transition: all 300ms ease-in-out;
      &:hover {
        background-size: 105% 105%;
      }
      &:last-of-type {
        background: url('${ForBoysBg}') no-repeat center/cover;
        background-size: 100% 100%;
        &:hover{
            background-size: 105% 105%;
        }
      }
    }
  }
  @media(max-width: 1000px){
    .container{
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default JoinUs;
