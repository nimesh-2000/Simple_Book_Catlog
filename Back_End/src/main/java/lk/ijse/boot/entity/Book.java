package lk.ijse.boot.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.math.BigDecimal;

/**
 * @author nimesh denuwana on 6/25/2023.
 * @project Back_End
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Book {
    @Id
    private String bookId;
    private String category;
    private String title;
    private String author;
    private BigDecimal price;
}
