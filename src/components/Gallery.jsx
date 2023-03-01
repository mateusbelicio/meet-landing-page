import styled from 'styled-components';

import { breakpoint } from '../styles/globalStyles';

const GalleryStyle = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(9.4375rem, 1fr));
  gap: 1.5rem;
  justify-content: center;
  place-items: center;

  @media screen and (min-width: ${breakpoint.tablet}) {
    gap: var(--gutter);
  }

  .gallery {
    &__item {
      border-radius: 0.5rem;
      aspect-ratio: 1 / 0.95;
      overflow: hidden;

      max-width: 15.9375rem;
      flex-basis: 9.4375rem;
      flex-grow: 1;
    }
  }
`;

export function Gallery(props) {
  return (
    <GalleryStyle className='gallery'>
      {props.srcArray.map((img, index) => (
        <li key={'img' + index} className='gallery__item'>
          <img className='gallery__img' src={img.src} alt={img.alt} />
        </li>
      ))}
    </GalleryStyle>
  );
}
