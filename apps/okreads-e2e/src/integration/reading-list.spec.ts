describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });
  it('Should change to finished',()=>{
    cy.visit('/your-page-url');
    cy.get('input[placeholder="Search for books to add to your reading list"]').as('inputElement');
    

    const newValue = 'Java'; 
    cy.get('@inputElement').type(newValue);
    cy.get('form').submit();
    cy.get('.wantToRead').eq(0).click();
    cy.get('[data-testing="toggle-reading-list"]').click();
    const finishedButton = cy.get('.finished-button');
    finishedButton.should('exist')
  })
});
