import thumbnail_project_1 from '../assets/thumbnail_project_1.jpg';
import thumbnail_project_2 from '../assets/thumbnail_project_2.jpg';
import thumbnail_project_3 from '../assets/thumbnail_project_3.jpg';
import thumbnail_project_4 from '../assets/thumbnail_project_4.png';
import thumbnail_project_5 from '../assets/thumbnail_project_5.jpg';
import thumbnail_project_6 from '../assets/thumbnail_project_6.jpg';
import thumbnail_project_7 from '../assets/thumbnail_project_7.jpg';
import thumbnail_project_8 from '../assets/thumbnail_project_8.jpg';

const PROJECTS = [
  {
    slug: 'projeto_1',
    title: 'Rastreamento de veículos',
    type: 'Website System',
    description:
      'Sistema de rastreamento de veículos. Construção do gateway (comunicação com o rastreador que se encontra instalado no veículo), tratamento (tratando informações que o rastreador manda para o gateway), backend (cadastro de usuários, veículos e informações de cada rastreador), aplicação frontend nível cliente e nível administrador..Tem como objetivo visualizar a localização do veículo em tempo real, cadastro de novos clientes, cadastro de novos veículos e relatório de posições e eventos do veículo.',
    link: '',
    thumbnail: thumbnail_project_1
  },
  {
    slug: 'projeto_3',
    title: 'Be the Hero (Omnisstack 11)',
    type: 'Application System',
    description:
      'Aplicação para conectar ONGs e outras instituições a pessoas que tem disponibilidade para ajudar.',
    link: 'https://github.com/Gabriel-souzaa/omnisstack11',
    thumbnail: thumbnail_project_3
  },
  {
    slug: 'projeto_4',
    title: 'Meu Portfólio (antigo)',
    type: 'Application System',
    description: 'Primeiro portfólio.',
    link: 'https://github.com/Gabriel-souzaa/Portif-lio-react',
    thumbnail: thumbnail_project_4
  },
  {
    slug: 'projeto_5',
    title: 'ConvertCsvToJson',
    type: 'Service system',
    description: 'Serviço para conversão de arquivos csv para JSON.',
    link: 'https://github.com/Gabriel-souzaa/convertCsvToJson',
    thumbnail: thumbnail_project_5
  },
  {
    slug: 'projeto_6',
    title: 'Bot Zé',
    type: 'Application system',
    description: 'Bot Zé para ações no discord.',
    link: 'https://github.com/Gabriel-souzaa/bot_ze',
    thumbnail: thumbnail_project_6
  },
  {
    slug: 'projeto_2',
    title: 'Spacetime (nlw)',
    type: 'Website System',
    description:
      'Aplicação para registro de memórias. Website utilizando as tecnologias mais atualizadas do mercado como: Next13, React, NodeJs, Next Auth, Expo, Typescript e Fastify',
    link: 'https://github.com/Gabriel-souzaa/nlw_spacetime',
    thumbnail: thumbnail_project_2
  },
  {
    slug: 'projeto_7',
    title: 'Node together (nlw)',
    type: 'Application system',
    description: 'Bot Zé para ações no discord.',
    link: 'https://github.com/Gabriel-souzaa/nlw_node_together',
    thumbnail: thumbnail_project_7
  },
  {
    slug: 'projeto_8',
    title: 'NodeJs (nlw 5)',
    type: 'Application system',
    description:
      'Aplicação backend (CRUD) utilizando express, typeorm, typescript e autenticação JWT.',
    link: 'https://github.com/Gabriel-souzaa/nlw_node_5',
    thumbnail: thumbnail_project_8
  }
];

export const getProjects = () => PROJECTS;
export const getProjectBySlug = (slug: string | string[]) => {
  const project = PROJECTS.find(data => data.slug === slug);
  return project;
};
export const getSlugs = () =>
  PROJECTS.map(data => ({
    params: {
      slug: data.slug
    }
  }));
