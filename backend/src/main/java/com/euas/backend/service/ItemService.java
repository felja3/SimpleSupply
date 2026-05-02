package com.euas.backend.service;

import com.euas.backend.Repository.CategoryRepository;
import com.euas.backend.Repository.ItemRepository;
import com.euas.backend.entity.Category;
import com.euas.backend.entity.Item;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemService {

    private final ItemRepository repository;
    private final CategoryRepository categoryRepository;



    public ItemService(ItemRepository repository, CategoryRepository categoryRepository) {
        this.repository = repository;
        this.categoryRepository = categoryRepository;
    }
    public List<Item> getAllItems() {

        return repository.findAll();

    }
    public Item addItem(String name, String categoryName, int stock){
        Item item = new Item();
        item.setItem_name(name);
        item.setStock(stock);

        Optional<Category> optionalCategory = categoryRepository.findByCategoryName(categoryName);
        Category category;

        if(optionalCategory.isPresent()){
           category = optionalCategory.get();
        }else {
            Category newCategory = new Category();
            newCategory.setCategoryName(categoryName);
            category = categoryRepository.save(newCategory);
        }

        item.setCategory(category);
        return repository.save(item);
    }


}
