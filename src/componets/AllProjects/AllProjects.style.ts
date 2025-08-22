import { styled } from 'styled-components'

export const Container = styled.div`
  position: relative;
  max-width: 100%;

  .gallery {
    display: flex;
    flex-flow: row nowrap;
    gap: 12px;
    width: max-content;
  }

  .gallery-wrapper {
    overflow-x: auto;
    padding-bottom: 10px;

    &::-webkit-scrollbar {
      height: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--purple-dark);
      border-radius: 7px;
    }
  }

  .item {
    width: 290px;
    padding: 15px 25px;
    background-color: var(--blue-gray);
    border-radius: 7px;
    border: 2px solid var(--purple-medium);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 17px;
    opacity: 70%;
    transition: 100ms;

    h3 {
      font-size: 1.2rem;
      color: var(--purple-ligth);
    }

    p {
      color: var(--gray-200);
      text-align: center;
      margin: 0;
    }

    .techs {
      display: flex;
      gap: 10px;
      align-items: center;
      justify-content: center;
    }

    .techs p {
      display: block;
      min-width: 100px;
      max-width: 170px;
      padding: 5px;
      color: var(--purple-dark);
      background-color: var(--tech);
      border-radius: 7px;
      font-weight: bold;
      text-align: center;
    }

    img {
      width: 100%;
      max-width: 350px;
      aspect-ratio: 16/9;
      border-radius: 10px;
    }
  }

  .item:hover {
    opacity: 100%;
    border-color: var(--purple-dark);

    h3 {
      color: var(--gray-100);
    }
  }
`
