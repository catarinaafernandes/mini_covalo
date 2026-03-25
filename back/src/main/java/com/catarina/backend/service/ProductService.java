package com.catarina.backend.service;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.catarina.backend.repo.ProductRepo;
import com.catarina.backend.model.Product;




//service responsible for product business logic
@Service
public class ProductService {
    
    //repo used to acess product data from DB
    private final ProductRepo productRepo;

    //constructor injection
    public ProductService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    //returns all products from the DB
    public List<Product> getAllProducts() {
        return productRepo.findAll();
    
    }

    //returns a product by its id
    public Optional<Product> getProductById(Long id) {
        return productRepo.findById(id);
    }  


    //search for product
    public List<Product> searchProductsByName(String search) {
        return productRepo.findByNameContainingIgnoreCase(search);
    }


    //saves a product to the DB
    public Product saveProduct(Product product) {
        validateProductRules(product);
    
        return productRepo.save(product);
    
    }


    //updates a product in the DB
    public  Optional<Product> updateProduct(Long id, Product updatedProduct) {
        return productRepo.findById(id).map(existingProduct -> {

            validateProductRules(updatedProduct);
        

            existingProduct.setName(updatedProduct.getName());
            existingProduct.setDescription(updatedProduct.getDescription());
            existingProduct.setImageUrl(updatedProduct.getImageUrl());
            existingProduct.setCompany(updatedProduct.getCompany());

            return productRepo.save(existingProduct);
    
    
        } )  ; 
                
    }   

    private void validateProductRules(Product product) {
        if (product.getCompany() == null) {
            throw new IllegalArgumentException("Product has to be associated with a Company");
        }

    }

    
     


}



