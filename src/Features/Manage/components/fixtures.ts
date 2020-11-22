import faker from 'faker';
import { ICard, IData } from './Card/types';

const colors = ['#007E33', '#CC0000', '#FF8800', '#9D65C9'];

const cards: ICard[] = [];
const count = faker.random.number({ min: 5, max: 20 });

for (let i = 0; i < count; i++) {
  const data: IData[] = [];
  for (let k = 0; k < 6; k++) {
    const datum: IData = {
      label: faker.lorem.word(),
      value: faker.lorem.word(),
    };

    data.push(datum);
  }

  const card: ICard = {
    id: faker.random.uuid(),
    color: colors[faker.random.number({ min: 0, max: 3 })],
    comments: faker.random.number(50),
    data,
  };

  cards.push(card);
}

export { cards };
