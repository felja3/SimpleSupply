package com.euas.backend.Repository;
import com.euas.backend.entity.Category;
import com.euas.backend.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ItemRepository extends JpaRepository<Item, Long> {
}
