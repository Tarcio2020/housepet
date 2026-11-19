export type Rescue = {
  slug: string
  name: string
  species: 'Cão' | 'Gato'
  age: string
  city: string
  state: string
  need: string
  raised: number
  goal: number
  status: 'Urgente' | 'Em tratamento' | 'Novo caso'
  image: string
  description: string
  updates: { date: string; title: string; body: string }[]
}

export const rescues: Rescue[] = [
  { slug: 'bento', name: 'Bento', species: 'Cão', age: '3 meses', city: 'São Paulo', state: 'SP', need: 'Cirurgia e recuperação', raised: 1840, goal: 2800, status: 'Urgente', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85', description: 'Bento foi encontrado por uma protetora após ser atropelado. Agora está seguro e precisa de uma cirurgia ortopédica para voltar a correr e brincar.', updates: [{ date: 'Hoje', title: 'Bento está estável', body: 'A equipe veterinária confirmou que ele está respondendo bem aos cuidados iniciais.' }, { date: 'Ontem', title: 'Resgate concluído', body: 'Bento foi levado para uma clínica parceira e passou pela primeira avaliação.' }] },
  { slug: 'luna', name: 'Luna', species: 'Cão', age: '2 anos', city: 'São Paulo', state: 'SP', need: 'Tratamento de pele', raised: 620, goal: 1200, status: 'Em tratamento', image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1000&q=85', description: 'Luna está recebendo cuidados de uma rede de protetores. O tratamento dermatológico e uma alimentação adequada vão ajudar na sua recuperação.', updates: [{ date: 'Hoje', title: 'Primeira consulta', body: 'A veterinária iniciou o protocolo de tratamento e recomendou acompanhamento semanal.' }] },
  { slug: 'thor', name: 'Thor', species: 'Cão', age: '1 ano', city: 'Osasco', state: 'SP', need: 'Vacinas e lar temporário', raised: 970, goal: 1500, status: 'Novo caso', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=85', description: 'Thor foi acolhido por voluntários e agora precisa completar o calendário de vacinação enquanto aguarda uma família temporária.', updates: [{ date: 'Ontem', title: 'Thor foi acolhido', body: 'Um voluntário ofereceu um espaço seguro para os primeiros dias de recuperação.' }] },
  { slug: 'mel', name: 'Mel', species: 'Gato', age: '8 meses', city: 'Santo André', state: 'SP', need: 'Exames e alimentação', raised: 430, goal: 950, status: 'Novo caso', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1000&q=85', description: 'Mel foi encontrada perto de uma estação e precisa de exames, alimentação especial e um lar temporário para se recuperar.', updates: [{ date: 'Hoje', title: 'Em lar temporário', body: 'Mel está em um ambiente protegido aguardando a avaliação veterinária.' }] },
  { slug: 'nina', name: 'Nina', species: 'Cão', age: '4 anos', city: 'Guarulhos', state: 'SP', need: 'Reabilitação e fisioterapia', raised: 2100, goal: 3600, status: 'Em tratamento', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=85', description: 'Nina está fazendo fisioterapia depois de um período de abandono. O acompanhamento contínuo é essencial para sua mobilidade.', updates: [{ date: 'Esta semana', title: 'Mais um passo', body: 'Nina já consegue caminhar alguns minutos com apoio da equipe.' }] },
  { slug: 'pingo', name: 'Pingo', species: 'Gato', age: '1 ano', city: 'São Paulo', state: 'SP', need: 'Tratamento e castração', raised: 780, goal: 1400, status: 'Urgente', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=85', description: 'Pingo precisa de tratamento veterinário e castração. A rede local está organizando os cuidados e a recuperação.', updates: [{ date: 'Hoje', title: 'Acolhido pela rede', body: 'Pingo está em segurança e foi encaminhado para avaliação.' }] },
]
