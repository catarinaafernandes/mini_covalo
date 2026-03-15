package com.catarina.backend.model;


import jakarta.persistence.*;



@Entity
//represents a user in the DB and returned by the REST endpoints
public class User {
    //these will be columns in the DB table for users
    //db generates the id as an auto incrementing value and it is the primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @Column(unique = true)
    //because cannot have t2users with the same email, it is unique in the DB
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role;  
    
    //each user belongs to a company, many users can belong to the same company
    @ManyToOne
    @JoinColumn(name = "company_id")
    //foreign key column in the users table that references the company table
    private Company company;

    public User() {
    }

    public User(String name, String email, Role role, Company company) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.company = company;
    }

    //getters
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public Role getRole() {
        return role;
    }

    public Company getCompany() {
        return company;
    }

    //setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

}
