package com.catarina.backend.controller;

import com.catarina.backend.service.CompanyService;
import com.catarina.backend.model.Company;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;


import java.util.List;


@RestController
@RequestMapping("/companies")
public class CompanyController {

    private final CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    //returns all companies from the DB
    @GetMapping
    public List<Company> getAllCompanies() {
        return companyService.getAllCompanies();
    
    }

    //returns a company by its id
    @GetMapping("/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable Long id) {
        Company company = companyService.getCompanyById(id);
        if (company != null) {
            return ResponseEntity.ok(company);
        }
            return ResponseEntity.notFound().build();
        }
    

    //creation of new company that persists in the DB, using the saveCompany method from the service layer
    @PostMapping
    public ResponseEntity<Company> createCompany(@RequestBody Company company) {
        Company savedCompany = companyService.saveCompany(company);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedCompany);
    }

    //update an existing company by its id
    // TO DO: restrict updates ti company admins of the supplier company that owns the product
    //auth and auth not implemented yet
    @PutMapping("/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable Long id, @RequestBody Company updatedCompany) {
        Company updated = companyService.updateCompany(id, updatedCompany);

        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }


    // TO DO: add delete endpoint for companies, restrict to companies (not mentioned in stories)

        
        }

}



