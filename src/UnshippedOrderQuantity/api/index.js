import faker from "@faker-js/faker";
export const getPrimaryData = async () => {
  return faker.random.number({ min: 10, max: 500 });
};
export const getSecondaryData = async () => {
  return faker.random.number({ min: 0, max: 50 });
};
