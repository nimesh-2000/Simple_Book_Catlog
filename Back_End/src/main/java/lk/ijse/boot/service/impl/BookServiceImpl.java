package lk.ijse.boot.service.impl;

import lk.ijse.boot.dto.BookDTO;
import lk.ijse.boot.entity.Book;
import lk.ijse.boot.service.BookService;

import java.util.ArrayList;
import java.util.List;

/**
 * @author nimesh denuwana on 6/25/2023.
 * @project Back_End
 */
public class BookServiceImpl implements BookService {
    @Override
    public void addBook(BookDTO dto) {
        if (repo.existsById(dto.getBookId())) {
            throw new RuntimeException("Book "+dto.getBookId()+" Already Exist..!");
        }
        repo.save(mapper.map(dto, Book.class));
    }

    @Override
    public void deleteBook(String bookId) {
        if (!repo.existsById(bookId)){
            throw new RuntimeException("Book "+bookId+" Not Available to Delete..!");
        }
        repo.deleteById(bookId);
    }

    @Override
    public void updateBook(BookDTO dto) {
        if (!repo.existsById(dto.getBookId())){
            throw new RuntimeException("Book "+dto.getBookId()+" Not Available to Update..!");
        }
        repo.save( mapper.map(dto, Book.class));
    }

    @Override
    public ArrayList<BookDTO> getAllBooks() {
        return mapper.map(repo.findAll(), new TypeToken<ArrayList<BookDTO>>() {
        }.getType());
    }

    @Override
    public BookDTO searchBookByTitle(String title) {
        return mapper.map( repo.findBookByTitle(title),BookDTO.class);
    }

    public List<Book> searchByTitleOrAuthor(String searchTerm) {
        return repo.searchByTitleOrAuthor(searchTerm);
    }
}
