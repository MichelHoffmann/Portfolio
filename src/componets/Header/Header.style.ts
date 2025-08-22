import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: var(--white);
    text-decoration: none;
    font-size: 1rem;
    border-bottom: 3px solid var(--gray-300);
    transition: 200ms;

    &.active {
      border-bottom: 3px solid var(--purple-dark);
    }
  }
`

export const HeaderComponent = styled.header`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-inline: 30px;
`
