/// <reference types="cypress" />

describe('Main test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should render use state example components', () => {
    cy.get('[data-cy="counter-title"]').should('have.text', 'Count is: 0');
    cy.get('[data-cy="increment-button"]').should('have.text', 'Increment');
  });

  it('Should increment counter', () => {
    cy.get('[data-cy="increment-button"]').click();
    cy.get('[data-cy="counter-title"]').should('have.text', 'Count is: 1');
  });
});
