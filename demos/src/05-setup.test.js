// describe() puede agrupar diferentes conjuto de pruebas
describe('Main group', () => {
  beforeAll(() => {});
  afterAll(() => {});
  beforeEach(() => {});
  afterEach(() => {});

  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    expect(1 + 3).toBe(4);
  });

  describe('2nd group', () => {
    test('case 3', () => {
      expect(1 + 1).toBe(2);
    });

    test('case 4', () => {
      expect(1 + 3).toBe(4);
    });
  });
});
