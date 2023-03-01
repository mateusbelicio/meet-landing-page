import styled from 'styled-components';

import { TitleSmall, Subtitle, TextMedia, Container } from '../styles/styles';
import { breakpoint } from '../styles/globalStyles';

import { SectionMarker } from '../components/SectionMarker';
import { Gallery } from '../components/Gallery';

import image1 from '../assets/image-woman-in-videocall.jpg';
import image2 from '../assets/image-women-videochatting.jpg';
import image3 from '../assets/image-men-in-meeting.jpg';
import image4 from '../assets/image-man-texting.jpg';

const images = [
  { src: image1, alt: 'Woman smiling while making a video call on her macbook' },
  { src: image2, alt: 'Three old women video chatting' },
  { src: image3, alt: 'Men in online meeting' },
  { src: image4, alt: 'Man smiling while texting a message on his smartphone' },
];

const FeaturesStyle = styled.section`
  padding-block: 4rem;
  margin-top: 8.75rem;
  position: relative;

  @media screen and (min-width: ${breakpoint.tablet}) {
    padding-block-end: 4.5rem;
  }

  .features {
    &__container {
      row-gap: 4rem;
    }

    &__content {
      text-align: center;
      display: grid;
      justify-items: center;
    }

    &__subtitle {
      margin-bottom: 1.5rem;
    }

    &__title {
      margin-bottom: 2rem;
      width: 90%;
    }

    @media screen and (min-width: ${breakpoint.tablet}) {
      &__container {
        row-gap: 3rem;
      }

      &__content {
        grid-column: col-start 2 / col-end -2;
      }

      &__subtitle {
        margin-bottom: 1rem;
      }
    }

    @media screen and (min-width: ${breakpoint.desktop}) {
      &__container {
        row-gap: 5rem;
      }

      &__content {
        grid-column: col-start 4 / col-end -4;
      }

      &__title {
        width: 80%;
      }
    }
  }
`;

export function Features(props) {
  return (
    <FeaturesStyle className='features'>
      <SectionMarker number='1' />
      <Container className='features__container'>
        <Gallery srcArray={images} />
        <div className='features__content'>
          <Subtitle className='features__subtitle'>Built for modern use</Subtitle>
          <TitleSmall className='features__title'>Smarter meetings, all in one place</TitleSmall>
          <TextMedia className='features__text'>
            Send messages, share files, show your screen, and record your meetings — all in one
            workspace. Control who can join with invite-only team access, data encryption, and data
            export.
          </TextMedia>
        </div>
      </Container>
    </FeaturesStyle>
  );
}
