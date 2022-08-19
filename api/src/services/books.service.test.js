const { generateManyBooks } = require('../fakes/book.fake');
const Bookservice = require('./books.service');

// const mockSpyGetAll = jest.spyOn(Bookservice, 'getBooks').mockImplementation(() => fakeBooks);
const mockSpyGetAll = jest.fn();

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
      const fakeBooks = generateManyBooks(20);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      // Si fue llamado
      expect(mockSpyGetAll).toHaveBeenCalled();
      // Cuantas veces fue llamado
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      // Si fue llamado con los parametros especificados
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return an array of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(4);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks();
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
