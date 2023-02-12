import faker from "@faker-js/faker";
export const getPrimaryData = async () => {
  return faker.random.number({ min: 10, max: 500 });
};
