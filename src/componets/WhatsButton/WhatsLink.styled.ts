import { styled } from 'styled-components'

export const WhatsLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  color: var(--purple-medium);
  border: 1.7px solid var(--purple-medium);
  border-radius: 7px;
  padding: 10px 17px;
  text-decoration: none;

  &:hover {
    color: var(--purple-dark);
    border-color: var(--purple-dark);
  }
`
