package com.catarina.backend.service;

import java.util.List;


import org.springframework.stereotype.Service;
import com.catarina.backend.repo.CompanyRepo;
import com.catarina.backend.model.Company;

//service repsponsible for comapny business logic
//a company can have many products, but a product belongs to only one company
//a company can have multiple users, but a user belongs to only one company
@Service
public class CompanyService {

    //repo used to access company data from DB
    private final CompanyRepo companyRepo;

    //constructor injection
    public CompanyService(CompanyRepo companyRepo) {
        this.companyRepo = companyRepo;
    }

    //returns all companies from the DB
    public List<Company> getAllCompanies() {
        return companyRepo.findAll();
    }   

    public Company getCompanyById(Long id) {
        return companyRepo.findById(id).orElse(null);
    }   

    //saves a company to the DB
    public Company saveCompany(Company company) {
        return companyRepo.save(company);
    }       

    //updates a company in the DB
    public Company updateCompany(Long id, Company updatedCompany) {
        Company existingCompany = companyRepo.findById(id).orElse(null);

        if (existingCompany != null) {
            existingCompany.setName(updatedCompany.getName());
            existingCompany.setDescription(updatedCompany.getDescription());
            return companyRepo.save(existingCompany);
        } else {
            return null;
        }
    }
}



