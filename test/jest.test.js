test('Devo conhecer as principais assertivas do jest', () => {
  let numero = null;
  expect(numero).toBeNull();
  number = 39;
  expect(number).not.toBeNull();
  expect(number).toBe(39);
  expect(number).toEqual(39);
  expect(number).toBeGreaterThan(30);
  expect(number).toBeLessThan(40);
});

test('Devo saber trabalhar com objetos', () => {
  const obj = {name: 'John', email: 'john@gmail.com'};
  expect(obj).toHaveProperty('name', 'John');
  expect(obj.email).toBe('john@gmail.com');

  const obj2 = {name: 'John', email: 'john@gmail.com'};
  expect(obj).toEqual(obj2);

  expect(obj).toBe(obj);
});