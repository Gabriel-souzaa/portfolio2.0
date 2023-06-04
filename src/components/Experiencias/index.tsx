import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="04 Anos" description="de experiência" />
      <section style={{ borderBottom: 'none', paddingBottom: '1rem' }}>
        <ExperienciaItem
          year="2023"
          title="Developer FullStack"
          company="Freelancer"
          description="Experiência com as tecnologias react, nodejs; Gerenciamento de atividades no trello; Design systems; Data science;"
        />
        <ExperienciaItem
          year="2022"
          title="Developer Júnior FullStack"
          company="Weef Interativa"
          description="Experiência com as tecnologias react, nodejs; Gerenciamento de atividades no trello; Design systems; Data science;"
        />
        <ExperienciaItem
          year="2021"
          title="Developer Júnior FullStack"
          company="FlipBox"
          description="Experiência com as tecnologias react, react-native, nodejs, angular e vuejs; Gerenciamento de atividades no trello;"
        />
        <ExperienciaItem
          year="2021"
          title="Developer Júnior FullStack"
          company="Business Integrator"
          description="PHP (framework Laravel), javascript (jQuery); Microsserviços utilizando a tecnologia NodeJs; Análise de códigos C#/.net;"
        />
      </section>
      <section>
        <ExperienciaItem
          year="2020"
          title="Suport (Estágio)"
          company="Business Integrator"
          description="Analista de suporte; Atendimento ao usuário; Consultas e análises utilizando o banco SQL server. Relatórios com base nas consultas do banco;"
        />
        <ExperienciaItem
          year="2019"
          title="Suporte (Estágio)"
          company="Business Integrator"
          description="Analista de suporte; Atendimento ao usuário; Consultas e análises utilizando o banco SQL server. Relatórios com base nas consultas do banco;"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
