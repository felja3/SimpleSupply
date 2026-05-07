package com.euas.backend.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "items")
@Data
@Getter
@Setter
@AllArgsConstructor

public class Item {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "item_id")
    private Long item_id;

    @Column(name = "item_name", length = 25, nullable = false, unique = true)
    private String item_name;

    @Column(name = "item_stock")
    private int stock;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;



    public Item() {

    }
}
