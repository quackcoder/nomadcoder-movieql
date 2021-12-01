export const people = [
  {
    id: 1,
    name: 'User1',
    age: 32,
    gender: 'male',
  },
  {
    id: 2,
    name: 'User2',
    age: 24,
    gender: 'female',
  },
  {
    id: 3,
    name: 'User3',
    age: 41,
    gender: 'female',
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
