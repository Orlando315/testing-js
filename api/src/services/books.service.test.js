const Bookservice = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry potter',
  },
  {
    _id: 2,
    name: 'Lord of the rings',
  },
];

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for Bookservice', () => {
  let service;

  beforeEach(() => {
    service = new Bookservice();
    // Eliminar toda la informacion de mocks generada por otras pruebas
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('should return an array of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      // Assert
      expect(books.length).toEqual(2);
    });

    test('should return an array of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      // Assert
      expect(books[2].name).toEqual('Lord of the rings');
    });
  });
});
