package com.catarina.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;


@Entity
//company represents a supplier company in the DB(that provides cosmetic ingredients) and returned by the REST endpoints
public class Company {

    //these will be columns in the DB table for companies
    //db generates the id as an auto incrementing value and it is the primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String description;


    //constructor
    public Company() {
    }
    
    public Company(Long id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }


    //getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    
    
}