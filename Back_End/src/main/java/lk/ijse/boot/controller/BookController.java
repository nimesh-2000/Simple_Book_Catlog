package lk.ijse.boot.controller;

import lk.ijse.boot.dto.BookDTO;
import lk.ijse.boot.entity.Book;
import lk.ijse.boot.service.BookService;
import lk.ijse.boot.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * @author nimesh denuwana on 6/25/2023.
 * @project Back_End
 */
@RestController
@RequestMapping("/book")
@CrossOrigin
public class BookController {
    @Autowired
    private BookService service;


    @PostMapping
    public ResponseUtil saveBook(@ModelAttribute BookDTO dto){
        service.addBook(dto);
        return new ResponseUtil("200",dto.getBookId()+ " Added.!",null);
    }

    @PutMapping
    public ResponseUtil updateBook(@RequestBody BookDTO dto){
        service.updateBook(dto);
        return new ResponseUtil("200",dto.getBookId()+": Updated.!",null);
    }

    @DeleteMapping(params = "id")
    public ResponseUtil deleteBook(String id){
        service.deleteBook(id);
        return new ResponseUtil("200",id+" : Deleted.!",null);
    }

    @GetMapping
    public ResponseUtil getAllBook(){
        ArrayList<BookDTO> allBooks = service.getAllBooks();
        return new ResponseUtil("200"," Success.!",allBooks);
    }

    //    @GetMapping(params = "title")
//    public ResponseUtil searchBookByTitle(String title){
//        BookDTO book = service.searchBookByTitle(title);
//        return new ResponseUtil("200"," Success.!",book);
//    }
    @GetMapping(params = "title")
    public ResponseUtil searchBookId(String title){
        BookDTO bookDTO = service.searchBookTitle(title);
        return new ResponseUtil("200","Success",bookDTO);
    }
}
