package com.euas.backend.controller;

import com.euas.backend.entity.Item;
import com.euas.backend.service.DashboardService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
public class ItemController {

    public final DashboardService dashboard;
    public  ItemController(DashboardService dashboard){
        this.dashboard = dashboard;
    }


    @GetMapping
    public List<Item> getAllItems(){
        return dashboard.getAllItems();
    }
}
