import styled from 'styled-components';
import { breakpoint } from './globalStyles';

export const Title = styled.h1`
  color: ${(props) => (props.color ? `var(--clr-${props.color})` : 'var(--clr-neutral-500)')};
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.1;

  transition: font-size 0.2s;

  @media screen and (min-width: ${breakpoint.tablet}) {
    font-size: 3rem;
    line-height: 1;
  }

  @media screen and (min-width: ${breakpoint.desktop}) {
    font-size: 4rem;
  }
`;

export const TitleSmall = styled.h2`
  color: ${(props) => (props.color ? `var(--clr-${props.color})` : 'var(--clr-neutral-500)')};
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.125;

  transition: font-size 0.2s;

  @media screen and (min-width: ${breakpoint.tablet}) {
    font-size: 2.5rem;
    line-height: 1.1;
  }
`;

export const Subtitle = styled.p`
  color: ${(props) => (props.color ? `var(--clr-${props.color})` : 'var(--clr-primary-400)')};
  font-size: 1rem;
  font-weight: 900;
  line-height: 1.625;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  color: ${(props) => (props.color ? `var(--clr-${props.color})` : 'var(--clr-neutral-400)')};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: 500;
  line-height: 1.625;

  transition: font-size 0.2s;
`;

export const TextMedia = styled(Text)`
  @media screen and (min-width: ${breakpoint.tablet}) {
    font-size: 1.125rem;
    line-height: 1.4444;
  }
`;

export const Container = styled.div`
  --gutter: 0rem;
  --padding: 1rem;
  --num-columns: 12;
  --max-width: 69.375rem;
  --col-width: minmax(
    0,
    calc((var(--max-width) - (var(--num-columns) - 1) * var(--gutter)) / var(--num-columns))
  );

  display: grid;
  grid-template-columns:
    [full-start] minmax(calc(var(--padding) - var(--gutter)), 1fr) [center-start]
    repeat(var(--num-columns), [col-start] var(--col-width) [col-end])
    [center-end] minmax(calc(var(--padding) - var(--gutter)), 1fr) [full-end];
  gap: var(--gutter);

  & > * {
    grid-column: center;
  }

  @media screen and (min-width: ${breakpoint.tablet}) {
    --gutter: 0.625rem;
  }

  @media screen and (min-width: ${breakpoint.desktop}) {
    --gutter: 1.875rem;
  }
`;
