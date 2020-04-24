/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import GalleryImg from "./GalleryImg";
import GalleryOneBg from "../Images/galleryOne.png";
import GalleryTwoBg from "../Images/galleryTwo.png";
import GalleryThreeBg from "../Images/galleryThree.png";
import GalleryFourBg from "../Images/galleryFour.png";
import GalleryFiveBg from "../Images/galleryFive.png";
import GallerySixBg from "../Images/gallerySix.png";

const Gallery = () => (
  <section css={styles} className="gallery" id="gallery">
    <Container>
      <GalleryImg galleryBg={GalleryOneBg} />
      <GalleryImg galleryBg={GalleryTwoBg} />
      <GalleryImg galleryBg={GalleryThreeBg} />
      <GalleryImg galleryBg={GalleryFourBg} />
      <GalleryImg galleryBg={GalleryFiveBg} />
      <GalleryImg galleryBg={GallerySixBg} />
    </Container>
  </section>
);

const styles = css`
  .container {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    .galleryImg {
      &:nth-child(3),
      &:nth-child(4) {
        width: 100%;
        max-width: 30%;
      }
    }
  }
  @media (max-width: 769px) {
    .container {
      .galleryImg {
        max-width: 100%;
        &:nth-child(3),
        &:nth-child(4) {
          max-width: 100%;
        }
      }
    }
  }
  @media (min-width: 770px) and (max-width: 1000px) {
    .container {
      .galleryImg {
        max-width: 50%;
        &:nth-child(3),
        &:nth-child(4) {
          max-width: 50%;
        }
      }
    }
  }
`;

export default Gallery;
