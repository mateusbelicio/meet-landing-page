import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: ${(props) =>
    props.color ? `var(--clr-${props.color}-400)` : 'var(--clr-primary-400)'};
  color: var(--clr-neutral-300);
  padding: ${(props) => (props.paddingSmall ? `1rem 1.8125rem` : '1rem 2.5rem')};
  border: none;
  border-radius: 2rem;
  cursor: pointer;

  font-weight: 900;
  font-size: 1rem;
  line-height: 1.625;
  text-decoration: none;

  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    background-color: ${(props) =>
      props.color ? `var(--clr-${props.color}-300)` : 'var(--clr-primary-300)'};
  }

  &:active {
    transform: scale(0.99);
  }

  span {
    color: ${(props) => (props.color ? `var(--clr-${props.color}-200)` : 'var(--clr-primary-200)')};
  }
`;

/**
 * @attribute {String} color - [primary | secondary | neutral]
 * @attribute {empty} paddingSmall - if it exists, the button will have a smaller inline padding
 * @returns Styling button element
 */
export function Button(props) {
  return <ButtonStyle {...props}>{props.children}</ButtonStyle>;
}
