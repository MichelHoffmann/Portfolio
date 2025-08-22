import { styled } from 'styled-components'

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 30px;

  .h1 {
    width: 100%;
    padding-inline: 30;
    text-align: left;
  }

  h1 {
    font-size: 1.7rem;
    margin-bottom: 30px;
  }

  .vejaMais {
    margin-top: 25px;
    display: flex;
    align-items: center;
    gap: 7px;
    justify-content: flex-end;
    color: rgba(114, 66, 179, 0.7);
  }

  .divWhats {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
`
