import styled from 'styled-components';

import logo from '../assets/logo.svg';
import heroLeft from '../assets/image-hero-left.png';
import heroRight from '../assets/image-hero-right.png';

import { Container } from '../styles/styles';
import { breakpoint } from '../styles/globalStyles';
import { Title, TextMedia } from '../styles/styles';
import { Button } from '../components/Button';

const HeroStyle = styled.div`
  .hero {
    &__container {
      justify-items: center;
      text-align: center;
      align-items: center;

      row-gap: 3rem;
      padding-block: 3rem 4rem;
    }

    &__logo {
      padding-bottom: 0.375rem;
    }

    &__img-left,
    &__img-right {
      width: 105%;
      max-width: none;
      max-height: 300px;
      object-fit: contain;
    }

    &__img-left {
      grid-column: full-start / col-end 6;
      justify-self: end;
      margin-right: 0.5rem;
      object-position: right;
    }

    &__img-right {
      grid-column: col-start -6 / full-end;
      justify-self: start;
      margin-left: 0.5rem;
      object-position: left;
    }

    &__title {
      margin-bottom: 1.5rem;
    }

    &__text {
      margin-bottom: 2rem;
    }

    &__content {
      display: grid;
      place-items: center;
    }

    &__cta {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    @media screen and (min-width: ${breakpoint.tablet}) {
      &__container {
        padding-block: 3rem 5rem;
      }

      &__img-left {
        margin-right: 0.6875rem;
        justify-self: end;
      }

      &__img-right {
        margin-left: 0.6875rem;
        justify-self: start;
      }

      &__content {
        grid-column: col-start 3 / col-end -3;
      }
    }

    @media screen and (min-width: ${breakpoint.desktop}) {
      &__container {
        padding-block: 5rem 6.875rem;
      }

      &__img-left {
        grid-column: full-start / col-end 3;
        margin-right: 3.625rem;
        align-self: start;
      }

      &__img-right {
        grid-column: col-start -3 / full-end;
        margin-left: 3.625rem;
        align-self: end;
      }

      &__title {
        margin-bottom: 2rem;
        width: 80%;
      }

      &__content {
        grid-column: col-start 4 / col-end -4;
        grid-row: 2;
        padding-block: 3rem 0.625rem;
      }
    }
  }
`;

export function Hero() {
  return (
    <HeroStyle className='hero'>
      <Container className='hero__container'>
        <img className='hero__logo' src={logo} alt='' aria-hidden='true' />
        <img className='hero__img-left' src={heroLeft} alt='' aria-hidden='true' />
        <img className='hero__img-right' src={heroRight} alt='' aria-hidden='true' />
        <div className='hero__content'>
          <Title className='hero__title'>Group Chat for Everyone</Title>
          <TextMedia className='hero__text'>
            Meet makes it easy to connect with others face-to-face virtually and collaborate across
            any device.
          </TextMedia>
          <div className='hero__cta'>
            <Button>
              Download <span>v1.3</span>
            </Button>
            <Button as='a' href='#' color='secondary' paddingSmall>
              What is it?
            </Button>
          </div>
        </div>
      </Container>
    </HeroStyle>
  );
}
