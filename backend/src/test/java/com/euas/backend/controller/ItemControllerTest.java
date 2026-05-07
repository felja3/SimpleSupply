package com.euas.backend.controller;

import com.euas.backend.entity.Category;
import com.euas.backend.entity.Item;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import static org.junit.jupiter.api.Assertions.*;
@Transactional
@SpringBootTest
class ItemControllerTest {
    @Autowired
    private ItemController controller;
    @Test
    void addItemUran() {
        var category = new Category();
        category.setCategoryName("fuel");
        String name = "uran";
        int stock = 10;

        Item testItem = controller.addItem(name, category.getCategoryName(), stock);

        assertEquals(name,testItem.getItem_name());
        assertEquals(10, testItem.getStock());

        controller.deleteItem(testItem.getItem_id());

    }
    @Test
    void editItemKolbaska(){
        var category = new Category();
        category.setCategoryName("food");
        String kolbaska = "kolbaska";
        String sosiska = "sosiska";


        Item item = controller.addItem(kolbaska, category.getCategoryName(), 0);
        controller.updateItem(item.getItem_id(),sosiska, category.getCategoryName(), 1);

        sosiska = item.getItem_name();

        assertNotEquals(kolbaska,sosiska);

        controller.deleteItem(item.getItem_id());
    }
}