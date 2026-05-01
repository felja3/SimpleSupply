package com.euas.backend.service;

import com.euas.backend.Repository.ItemRepository;
import com.euas.backend.entity.Item;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashboardService {

    private final ItemRepository repository;

    public DashboardService(ItemRepository repository) {
        this.repository = repository;
    }
    public List<Item> getAllItems() {

        return repository.findAll();

    }


}
