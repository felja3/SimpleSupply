package com.euas.backend.controller;

import com.euas.backend.entity.Item;
import com.euas.backend.service.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
@CrossOrigin(origins = "http://localhost:5173",
            methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS})
public class ItemController {

    public final ItemService service;
    public  ItemController(ItemService service){
        this.service = service;
    }


    @GetMapping
    public List<Item> getAllItems(){
        return service.getAllItems();
    }
    @PostMapping("/addItem")
    public Item addItem (
            @RequestParam String name,
            @RequestParam String categoryName,
            @RequestParam int stock){
        return service.addItem(name,categoryName,stock);
    }
    @PutMapping("/updateItem/{id}")
    public Item updateItem(
            @PathVariable Long id,
            @RequestParam String name,
            @RequestParam String categoryName,
            @RequestParam int stock) {
        return service.updateItem(id, name, categoryName, stock);
    }
    @DeleteMapping("/deleteItem/{id}")
    public void deleteItem(@PathVariable Long id) {
         service.deleteItem(id);
    }
}
