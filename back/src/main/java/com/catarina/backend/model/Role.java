package com.catarina.backend.model;

public enum Role {
    SUPER_ADMIN,
    COMPANY_ADMIN,
    USER
}
//add more if needed

/*notes:
SUPER_ADMIN -create companies, 
            -create users, 
            - assign users to companies, 
            -promote users to company admins, 
            -manage all products and companies
            - can exist without a company association


COMPANY_ADMIN - add products to their company, 
              -edit products of their company, 
              -manage users of their company but cannot create users or promote users
             - cannot exist without a company association

USER- can only view products, cannot manage anything
*/




