import thumbnail_project_1 from '../assets/thumbnail_project_1.jpg';

const PROJECTS = [
  {
    slug: 'projeto_1',
    title: 'Rastreamento de veículos',
    type: 'Website System',
    description:
      'Sistema de rastreamento de veículos. Construção do gateway (comunicação com o rastreador que se encontra instalado no veículo), tratamento (tratando informações que o rastreador manda para o gateway), backend (cadastro de usuários, veículos e informações de cada rastreador), aplicação frontend nível cliente e nível administrador..Tem como objetivo visualizar a localização do veículo em tempo real, cadastro de novos clientes, cadastro de novos veículos e relatório de posições e eventos do veículo.',
    link: '',
    thumbnail: thumbnail_project_1
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
