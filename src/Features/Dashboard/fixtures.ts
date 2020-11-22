import faker from 'faker';
import { ICard, ICardBodyRow } from './components/Card/types';

const data = [
  {
    title: '10 dossiers à traiter',
    color: '#007E33',
    footer: 'Tous les dossiers à traiter',
  },
  {
    title: '6 dossiers rejetés',
    color: '#CC0000',
    footer: 'Tous les dossiers rejetés',
  },
  {
    title: '5 dossiers en validation',
    color: '#FF8800',
    footer: 'Tous les dossiers en validation',
  },
  {
    title: '5 dossiers à valider',
    color: '#9D65C9',
    footer: 'Tous les dossiers à valider',
  },
];

const cards: ICard[] = [];

data.map((datum) => {
  const bodyRows: ICardBodyRow[] = [];

  for (let i = 0; i < 4; i += 1) {
    bodyRows.push({
      color: datum.color,
      count: faker.random.number(99),
      text: faker.lorem.words(),
      stageName: faker.lorem.words(3),
      stage: faker.random.number(3),
    });
  }

  const card: ICard = {
    header: {
      children: datum.title,
      color: datum.color,
    },
    body: {
      data: bodyRows,
    },
    footer: {
      color: datum.color,
      children: datum.footer,
      state: 2,
      role: 0,
    },
  };

  cards.push(card);

  return datum;
});

export { cards };
