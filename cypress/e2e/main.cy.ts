/// <reference types="cypress" />

describe('Main test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should render use state example component', () => {
    cy.get('[data-cy="counter-title"]').should('have.text', 'Count is: 0');
    cy.get('[data-cy="increment-button"]').should('have.text', 'Increment');
  });

  it('Should increment the counter', () => {
    cy.get('[data-cy="increment-button"]').click();
    cy.get('[data-cy="counter-title"]').should('have.text', 'Count is: 1');
  });

  it('Should render video player components', () => {
    cy.get('[data-cy="play-pause-button"]');
    cy.get('[data-cy="video-player"]');
  });

  it('Should play and pause the video', () => {
    cy.get('[data-cy="play-pause-button"]').click();
    cy.get('[data-cy="play-pause-button"]').should('have.text', 'Pause');
    cy.get('[data-cy="video-player"]').then($video => {
      cy.wrap($video).should($v => {
        expect(($v[0] as HTMLVideoElement).paused).to.be.false;
      });
    });

    cy.get('[data-cy="play-pause-button"]').click();
    cy.get('[data-cy="play-pause-button"]').should('have.text', 'Play');
    cy.get('[data-cy="video-player"]').then($video => {
      cy.wrap($video).should($v => {
        expect(($v[0] as HTMLVideoElement).paused).to.be.true;
      });
    });
  });
});
