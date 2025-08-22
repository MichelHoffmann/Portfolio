import { Container } from './AllProjects.style'
import styllar from '../../assets/styllar-moveis.png'

export function AllProjects() {
  return (
    <Container>
      <div className="gallery-wrapper">
        <div className="gallery">
          <div className="item">
            <h3>Styllar Móveis 1</h3>
            <p>
              Projeto freelancer feito para uma marcenaria servindo como um
              portfolio online contendo todos os seus projetos de forma
              acessivel, facilitando o trabalho com os seus clientes.
            </p>
            <div className="techs">
              <p>Typescript</p>
              <p>Tailwind</p>
            </div>
            <img src={styllar} alt="" />
          </div>
          <div className="item">
            <h3>Styllar Móveis 2</h3>
            <p>
              Projeto freelancer feito para uma marcenaria com o objetivo de
              fazer com que o cliente tivesse um portifolio online contendo
              todos os seus projetos, facilitando seu trabalho com os seus
              clientes.
            </p>
            <div className="techs">
              <p>Typescript</p>
              <p>Tailwind</p>
            </div>
            <img src={styllar} alt="" />
          </div>
          <div className="item">
            <h3>Styllar Móveis 3</h3>
            <p>
              Projeto freelancer feito para uma marcenaria com o objetivo de
              fazer com que o cliente tivesse um portifolio online contendo
              todos os seus projetos, facilitando seu trabalho com os seus
              clientes.
            </p>
            <div className="techs">
              <p>Typescript</p>
              <p>Tailwind</p>
            </div>
            <img src={styllar} alt="" />
          </div>
          <div className="item">
            <h3>Styllar Móveis 4</h3>
            <p>
              Projeto freelancer feito para uma marcenaria com o objetivo de
              fazer com que o cliente tivesse um portifolio online contendo
              todos os seus projetos, facilitando seu trabalho com os seus
              clientes.
            </p>
            <div className="techs">
              <p>Typescript</p>
              <p>Tailwind</p>
            </div>
            <img src={styllar} alt="" />
          </div>
          <div className="item">
            <h3>Styllar Móveis 5</h3>
            <p>
              Projeto freelancer feito para uma marcenaria com o objetivo de
              fazer com que o cliente tivesse um portifolio online contendo
              todos os seus projetos, facilitando seu trabalho com os seus
              clientes.
            </p>
            <div className="techs">
              <p>Typescript</p>
              <p>Tailwind</p>
            </div>
            <img src={styllar} alt="" />
          </div>
        </div>
      </div>
    </Container>
  )
}
