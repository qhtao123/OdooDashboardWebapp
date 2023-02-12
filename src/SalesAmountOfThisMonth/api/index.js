import faker from "@faker-js/faker";
export const getPrimaryData = async () => {
  return faker.random.number({ min: 10000, max: 500000 });
};
export const getSecondaryData = async () => {
  return faker.random.number({ min: 7000, max: 50000 });
};
