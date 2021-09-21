/* eslint-disable strict */
/* eslint-disable no-undef */

'use strict';

describe('Login screen', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Should render Login screen', () => {
    cy.get('[data-testid=username-input]').should('be.visible');
    cy.get('[data-testid=password-input]').should('be.visible');
    cy.get('[data-testid=login-button]').should('be.visible');

    
  });

  it('Should login and then go to dashboard ', () => {

    cy.get('[data-testid=username-input]').type('userperron'); 
    cy.get('[data-testid=password-input]').type('password');
    
    cy.get('[data-testid=login-button]').click()
    cy.wait(6000);

    cy.url().should('include', '/dashboard');
    cy.get('[data-testid=dashboard-welcome]').should('be.visible');
    
  });
});