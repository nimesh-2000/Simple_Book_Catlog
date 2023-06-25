package lk.ijse.boot.service;

import lk.ijse.boot.dto.BookDTO;
import lk.ijse.boot.entity.Book;

import java.util.ArrayList;
import java.util.List;

/**
 * @author nimesh denuwana on 6/25/2023.
 * @project Back_End
 */
public interface BookService {
    public void addBook(BookDTO dto);

    public void deleteBook(String bookId);

    public void updateBook(BookDTO dto);

    public ArrayList<BookDTO> getAllBooks();

    public ArrayList<BookDTO> searchBookAuthor(String author);
}
