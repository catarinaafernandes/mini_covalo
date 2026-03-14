package com.catarina.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
//jpa entity used in the API
//represents a product in DB and returned by the REST endpoints
public class Product {

    //these will be columns in the DB table for products
    //db generates the id as an auto incrementing value and it is the primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    //stored as url instead of a file to be simpler
    private String imageUrl;


    //constructor
    public Product() {
    }

    public Product(String name, String description, String imageUrl) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }   


    //getters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    //setters
    public void setId(Long id) {
        this.id = id;

    }
    public void setName(String name) {
        this.name = name;
    }       

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

}