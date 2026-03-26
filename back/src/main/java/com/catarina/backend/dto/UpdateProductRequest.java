package com.catarina.backend.dto;

public class UpdateProductRequest {
    
    private String name;
    private String description;
    private String imageUrl;
    private Long companyID;


    public UpdateProductRequest() {
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




    public void setName( String name) {
        this.name=name;
    }


    public void setDescription( String description) {
        this.description=description;
    }


    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }


    public void setCompanyId(Long companyId) {
        this.companyID = companyId;
    }
}
    


