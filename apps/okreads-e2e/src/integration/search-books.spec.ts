import {  by, element } from 'protractor';

describe('When: Use the search feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should be able to search books by title', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
  });

  it('Then: I should see search results as I am typing', () => {
    cy.visit('/your-page-url'); 

    
    cy.get('input[placeholder="Search for books to add to your reading list"]').as('inputElement');

    
    const newValue = 'New Search Term';
    cy.get('@inputElement').type(newValue).should('have.value', newValue);

    
  });
});
