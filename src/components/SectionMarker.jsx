import styled from 'styled-components';

const SectionMarkerStyle = styled.span`
  --clr-line: #87879d40;

  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  width: 3.5rem;
  border-radius: 50%;
  border: 1px solid var(--clr-line);

  font-weight: 900;
  font-size: 1rem;
  color: var(--clr-neutral-400);
  background-color: var(--clr-neutral-300);

  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);

  &::before {
    content: '';
    width: 1px;
    background-color: var(--clr-line);
    height: 5.25rem;

    position: absolute;
    left: 50%;
    bottom: 100%;
    transform: translateX(-50%);
  }
`;

export function SectionMarker(props) {
  return (
    <SectionMarkerStyle className='section-marker'>
      {String(props.number).padStart(2, '0') || '00'}
    </SectionMarkerStyle>
  );
}
