import { AiFillHtml5 } from 'react-icons/ai';
import {
  FaCss3Alt,
  FaReact,
  FaAws,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaGitSquare
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import ConhecimentoItem from './ConhecimentoItem';
import { Container } from './styles';

function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="Javascript" icon={<IoLogoJavascript />} />
        <ConhecimentoItem title="React" icon={<FaReact />} />
        <ConhecimentoItem title="Typescript" icon={<SiTypescript />} />
      </section>
      <section>
        <ConhecimentoItem title="Aws" icon={<FaAws />} />
        <ConhecimentoItem title="NodeJs" icon={<FaNodeJs />} />
        <ConhecimentoItem title="Php" icon={<FaPhp />} />
        <ConhecimentoItem title="Laravel" icon={<FaLaravel />} />
        <ConhecimentoItem title="Git" icon={<FaGitSquare />} />
      </section>
      <section>
        <ConhecimentoItem title="Mysql" icon={<SiMysql />} />
        <ConhecimentoItem title="Postgresql" icon={<SiPostgresql />} />
        <ConhecimentoItem title="Mongodb" icon={<SiMongodb />} />
        <ConhecimentoItem title="Redis" icon={<SiRedis />} />
      </section>
    </Container>
  );
}

export default Conhecimentos;
