package com.euas.backend.controller;

import com.euas.backend.entity.Item;
import com.euas.backend.service.ItemService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
@CrossOrigin(origins = "http://localhost:5173",
            methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
public class ItemController {

    public final ItemService dashboard;
    public  ItemController(ItemService dashboard){
        this.dashboard = dashboard;
    }


    @GetMapping
    public List<Item> getAllItems(){
        return dashboard.getAllItems();
    }
    @PostMapping("/addItem")
    public Item addItem (
            @RequestParam String name,
            @RequestParam String categoryName,
            @RequestParam int stock){
        return dashboard.addItem(name,categoryName,stock);
    }
    @PutMapping("/updateItem/{id}")
    public Item updateItem(
            @PathVariable Long id,
            @RequestParam String name,
            @RequestParam String categoryName,
            @RequestParam int stock) {
        return dashboard.updateItem(id, name, categoryName, stock);
    }
}
