package com.euas.backend.controller;

import com.euas.backend.entity.Category;
import com.euas.backend.entity.Item;
import com.euas.backend.service.ItemService;
import org.springframework.web.bind.annotation.*;

    @RestController
    public class addItemController {
        public ItemService itemService;
        public addItemController(ItemService itemService) {
            this.itemService = itemService;
        }
        @PostMapping("/addItem")
        public Item addItem (
                @RequestParam String name,
                @RequestParam String categoryName,
                @RequestParam int stock){
            return itemService.addItem(name,categoryName,stock);
        }
        @PutMapping("/id/stock/")
        public Item updateStock(
            @RequestParam String name,
            @RequestParam int stock
        ){
            return itemService.updateStock();
        }
}

