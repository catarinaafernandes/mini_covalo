package com.catarina.backend.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import com.catarina.backend.model.Product;


public interface ProductRepo extends JpaRepository<Product, Long> 
{
    
}
