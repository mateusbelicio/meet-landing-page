import styled from 'styled-components';

import footerImage from '../assets/image-footer.jpg';
import { breakpoint } from '../styles/globalStyles';
import { Container, Text, TitleSmall } from '../styles/styles';
import { SectionMarker } from '../components/SectionMarker';
import { Button } from '../components/Button';

const FooterStyle = styled.footer`
  padding-block: 5.75rem 4.5rem;
  margin-top: 7rem;
  position: relative;
  background-color: var(--clr-primary-400);

  @media screen and (min-width: ${breakpoint.tablet}) {
    padding-block-end: 4.125rem;
  }

  @media screen and (min-width: ${breakpoint.desktop}) {
    padding-block: 7.25rem 6.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.1;
    background-image: url(${footerImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    z-index: 1;
  }

  .section-marker {
    transform: translate(-50%, 50%);
    z-index: 2;
  }

  .footer {
    &__container {
      position: relative;
      justify-items: center;
      z-index: 2;
      text-align: center;
      row-gap: 0;
    }

    &__title {
      margin-bottom: 1.5rem;
    }

    &__text {
      margin-bottom: 2rem;
    }

    @media screen and (min-width: ${breakpoint.tablet}) {
      &__title {
        grid-column: col-start 4 / col-end -4;
      }

      &__text {
        grid-column: col-start 2 / col-end -2;
      }
    }

    @media screen and (min-width: ${breakpoint.desktop}) {
      &__title {
        grid-column: center-start / col-end 4;
        text-align: left;
        margin-bottom: 0;
      }

      &__text {
        grid-column: col-start 6 / col-end -4;
        text-align: left;
        justify-self: start;
        margin-bottom: 0;
      }

      &__btn {
        grid-column: col-start -3 / center-end;
        align-self: center;
      }
    }
  }
`;

export function Footer(props) {
  return (
    <FooterStyle className='footer'>
      <SectionMarker number='2' />
      <Container className='footer__container'>
        <TitleSmall className='footer__title' color='neutral-300'>
          Experience more together
        </TitleSmall>
        <Text className='footer__text' color='neutral-300' fontSize='1.125rem'>
          Stay connected with reliable HD meetings and unlimited one-on-one and group video
          sessions.
        </Text>
        <Button className='footer__btn' color='secondary'>
          Download <span>v1.3</span>
        </Button>
      </Container>
    </FooterStyle>
  );
}
