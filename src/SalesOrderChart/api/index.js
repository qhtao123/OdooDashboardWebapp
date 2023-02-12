import faker from "@faker-js/faker";
export const getSalesOrderChartDataOfMonth = async (unit) => {
  // unit === "amount" || "quantity"
  if (unit === "amount") {
    return Array.from({ length: 28 }).map((d, index) => {
      let date = new Date();
      date.setDate(index + 1);
      date.setHours(0, 0, 0, 0);
      return {
        date: date,
        amount: faker.random.number({ min: 700, max: 5000 }),
      };
    });
  }
  if (unit === "quantity") {
    return Array.from({ length: 28 }).map((d, index) => {
      let date = new Date();
      date.setDate(index + 1);
      date.setHours(0, 0, 0, 0);
      return {
        date: date,
        quantity: faker.random.number({ min: 700, max: 5000 }),
      };
    });
  }
};

export const getSalesOrderChartDataOfYear = async (unit) => {
  if (unit === "amount") {
    return Array.from({ length: 12 }).map((d, index) => {
      let date = new Date();
      date.setMonth(index, 1);
      date.setHours(0, 0, 0, 0);
      return {
        date: date,
        amount: faker.random.number({ min: 10000, max: 50000 }),
      };
    });
  }
  if (unit === "quantity") {
    return Array.from({ length: 12 }).map((d, index) => {
      let date = new Date();
      date.setMonth(index, 1);
      date.setHours(0, 0, 0, 0);
      return {
        date: date,
        quantity: faker.random.number({ min: 100, max: 500 }),
      };
    });
  }
};
