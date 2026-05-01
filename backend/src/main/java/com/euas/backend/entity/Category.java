package com.euas.backend.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "categories")
@Getter
@Setter
@AllArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Long category_id;

    @Column(name = "category_name", length = 25, nullable = false, unique = true)
    private String category_name;


    @OneToMany(mappedBy = "category")
    private List<Item> items;

    public Category() {

    }
}
