package com.catarina.backend.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import com.catarina.backend.model.Product;

import java.util.List;


public interface ProductRepo extends JpaRepository<Product, Long> 
{
    List<Product> findByNameContainingIgnoreCase(String name);
    
}
