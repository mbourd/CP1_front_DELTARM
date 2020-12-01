import faker from 'faker';
import { ISelectData } from 'Shared/components';

const data: Record<string, ISelectData> = {};
const selectedValues: Record<string, true> = {};

for (let i = 0; i < 12; i++) {
  const id = faker.random.uuid();

  data[id] = {
    id,
    label: faker.random.words(3),
    value: faker.random.word(),
  };

  if (faker.random.boolean()) {
    selectedValues[id] = true;
  }
}

export { data, selectedValues };
