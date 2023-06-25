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
    @Query(value = "select * from Book where author=?",nativeQuery = true)
    List<Book> searchBookAuthor(String author);
}
