package com.catarina.backend.dto;

public class CreateProductRequest {
    
    private String name;
    private String description;
    private String imageUrl;
    private Long companyID;



    public CreateProductRequest(){

    }

    public String getName(){
        return name;
    }
    

    public String getDescription(){
        return description;

    }


    public String getImageUrl() {
        return imageUrl;
    }

    public Long getCompanyId(){
        return companyID;
    }


}
