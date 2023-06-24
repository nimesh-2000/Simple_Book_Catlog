package lk.ijse.boot.repo;

import lk.ijse.boot.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * @author nimesh denuwana on 6/25/2023.
 * @project Back_End
 */
public interface BookRepo extends JpaRepository<Book,String> {
    Book findBookByTitle(String title);

    @Query(value = "SELECT * FROM book WHERE title LIKE %:searchTerm% OR author LIKE %:searchTerm%", nativeQuery = true)
    List<Book> searchByTitleOrAuthor(@Param("searchTerm") String searchTerm);
}
