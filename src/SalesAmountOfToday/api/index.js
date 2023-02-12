import faker from "@faker-js/faker";
export const getPrimaryData = async () => {
  return faker.random.number({ min: 1000, max: 50000 });
};
export const getSecondaryData = async () => {
  return faker.random.number({ min: 700, max: 5000 });
};
