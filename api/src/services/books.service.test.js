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

// const mockSpyGetAll = jest.spyOn(Bookservice, 'getBooks').mockImplementation(() => fakeBooks);
const mockSpyGetAll = jest.fn();

const MongoLibStub = {
  getAll: mockSpyGetAll,
  create: () => {},
};

jest.mock('../lib/mongo.lib.js', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => {},
})));

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
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(2);
      // Si fue llamado
      expect(mockSpyGetAll).toHaveBeenCalled();
      // Cuantas veces fue llamado
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      // Si fue llamado con los parametros especificados
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return an array of books', async () => {
      // Arrange
      mockSpyGetAll.mockResolvedValue([
        {
          _id: 1,
          name: 'Harry potter 2',
        },
      ]);
      // Act
      const books = await service.getBooks();
      // Assert
      expect(books[0].name).toEqual('Harry potter 2');
    });
  });
});
