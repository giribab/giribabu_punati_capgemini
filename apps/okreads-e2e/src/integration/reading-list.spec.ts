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
    const finished = true;
    cy.visit('/your-page-url'); 
    const finishedButton = cy.get('.finished-button');
    const finishedMessage = cy.get('.finished');
    if (!finished) {
      finishedButton.should('be.visible');
      finishedMessage.should('not.exist');
    } else { 
      finishedButton.should('not.exist');
    }
  })
});
