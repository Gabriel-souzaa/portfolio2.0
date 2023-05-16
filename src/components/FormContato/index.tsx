import SectionTitle from '../SectionTitle';
// import Form from './Form';
import { Container } from './styles';

function FormContato() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos
            <br />
            meus serviços?
          </>
        }
        description={
          <>
            Envie um e-mail para gabrielfreitassouzaa@gmail.com
            <br />
            irei retornar em breve
          </>
        }
      />

      {/* <Form /> */}
    </Container>
  );
}

export default FormContato;
