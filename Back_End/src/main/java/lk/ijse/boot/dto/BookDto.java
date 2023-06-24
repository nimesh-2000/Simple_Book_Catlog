package lk.ijse.boot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


import java.math.BigDecimal;

/**
 * @author nimesh denuwana on 6/25/2023.
 * @project Back_End
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class BookDto {
        private String bookId;
        private String category;
        private String title;
        private String author;
        private BigDecimal price;
    }

