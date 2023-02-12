import faker from "@faker-js/faker";
export const getPrimaryData = async () => {
  return faker.random.number({ min: 1000, max: 50000 });
};
