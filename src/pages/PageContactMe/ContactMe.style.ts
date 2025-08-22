import { styled } from 'styled-components'

export const ContactContainer = styled.div`
  margin-block: 50px;
  width: 350px;
  height: 500px;
  background-color: var(--blue-gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 50px;

  border: 2px solid var(--purple-dark);
  border-radius: 7px;

  h1 {
    color: var(--purple-medium);
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    a {
      width: 207px;
      text-align: center;
      padding-block: 13px;
      font-size: 1.125rem;
      font-weight: bold;
      text-decoration: none;
      color: var(--purple-dark);
      background-color: var(--tech);
      border-radius: 7px;
      transition: 250ms;
    }

    a:hover {
      scale: 1.1;
    }
  }
`

export const ContactLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 120px);
  }
`
