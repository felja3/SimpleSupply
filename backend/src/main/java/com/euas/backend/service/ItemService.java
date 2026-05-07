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
        item.setCategory(imjacategorii(categoryName));
        return repository.save(item);
    }
    public Item updateItem(Long id, String name, String categoryName, int stock) {
        Item item = repository.getById(id);
        item.setItem_name(name);
        item.setCategory(imjacategorii(categoryName));
        item.setStock(stock);
        return repository.save(item);
    }
    public void deleteItem(Long id) {
        Item item = repository.getById(id);
        repository.delete(item);
    }
    public Category imjacategorii(String categoryName){
        Category category;
        Optional<Category> optionalCategory = categoryRepository.findByCategoryName(categoryName);

        if(optionalCategory.isPresent()){
            category = optionalCategory.get();
        }else {
            Category newCategory = new Category();
            newCategory.setCategoryName(categoryName);
            category = categoryRepository.save(newCategory);
        }
        return category;
    }
}
