import { styled } from 'styled-components'

export const AboutMeMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 120px);
    width: 100%;
    flex-direction: row;
    gap: 180px;
  }
`

export const HeaderInformations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;

  color: white;
  font-weight: 400;
  text-align: center;

  img {
    width: 340px;
  }

  h1 {
    font-size: 2.3rem;
    line-height: 0.9;
    font-weight: 600;
    span {
      color: var(--purple-medium);
    }
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--gray-200);
  }

  @media screen and (min-width: 768px) {
    height: 280px;
    img {
      width: 280px;
    }
  }
`

export const MyInformations = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  div.baixar-cv {
    margin-block: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    transition: 250ms;

    .curriculo {
      color: var(--purple-medium);
      font-size: 1rem;
      font-weight: 400;
      text-decoration: none;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    .curriculo:hover {
      color: var(--purple-dark);
    }
  }

  .animation {
    animation: motion 25s;

    @keyframes motion {
      0% {
        letter-spacing: 3px;
      }
      5% {
        letter-spacing: 0px;
      }
      10% {
        letter-spacing: 3px;
      }
      15% {
        letter-spacing: 0px;
      }
      20% {
        letter-spacing: 3px;
      }
      25% {
        letter-spacing: 0px;
      }
      30% {
        letter-spacing: 3px;
      }
      35% {
        letter-spacing: 0px;
      }
      40% {
        letter-spacing: 3px;
      }
      45% {
        letter-spacing: 0px;
      }
      50% {
        letter-spacing: 3px;
      }
      55% {
        letter-spacing: 0px;
      }
      60% {
        letter-spacing: 3px;
      }
      65% {
        letter-spacing: 0px;
      }
      70% {
        letter-spacing: 3px;
      }
      75% {
        letter-spacing: 0px;
      }
      80% {
        letter-spacing: 3px;
      }
      85% {
        letter-spacing: 0px;
      }
      90% {
        letter-spacing: 3px;
      }
      95% {
        letter-spacing: 0px;
      }
    }
  }

  p.text {
    width: 80%;
    color: white;
    text-align: center;
  }

  .projects {
    margin-block: 23px;
    font-size: 1.1rem;
    color: white;
    text-decoration: none;
    border: 2px solid var(--purple-dark);
    border-radius: 30px;
    padding: 10px 20px;
    transition: 150ms;
    box-shadow: 0px 0px 39px -5px rgba(114, 66, 179, 0.85);
    background-color: var(--purple-dark);
  }

  a.projects:hover {
    /* box-shadow: 0px 0px 23px -2px rgba(114, 66, 179, 1); */
    background-color: var(--gray-300);
  }

  @media screen and (min-width: 768px) {
    p {
      width: 380px;
    }
  }

  @media screen and (min-width: 768px) {
    p.text {
      width: 500px;
    }
  }
`

export const TechContainer = styled.article`
  display: flex;
  gap: 25px;
`

export const TechIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 7px;
  border: 1.7px solid var(--purple-dark);
  background-color: var(--blue-gray);

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;

  img {
    width: 75%;
  }
`
