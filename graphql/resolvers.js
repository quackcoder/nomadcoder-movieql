const quackCoder = {
  name: 'Quack Coder',
  age: 32,
  gender: 'male',
};

const resolvers = {
  Query: {
    person: () => quackCoder,
  },
};

export default resolvers;
