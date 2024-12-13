describe('Teste de Tela de login thot 3', () => {
  beforeEach(() => {
    cy.visit('/login');
  });
  it('Deve fazer login com credenciais válidas', () => {
    cy.get('input[placeholder="Login*"]').type('alexandre.costa');
    cy.get('input[type="password"]').type(Cypress.env('password'));
    cy.get('button[type="submit"]').click();
    cy.get('ul > :nth-child(4)').click();
    cy.get('.default-1').click();
    cy.get('.grid > :nth-child(2) > .sn-input-field').type('Travis Ball');
    cy.get(':nth-child(3) > .sn-input-field').type('190.607.456-98');
    cy.get(':nth-child(4) > .sn-input-field').type('tiwam@eri.my');
    cy.get(':nth-child(5) > .sn-input-field').type('(31)98904-8952');
    cy.get(':nth-child(2) > .sn-input-container > .sn-input-field').type('58028-700');
    cy.get(':nth-child(12) > .sn-input-field').type('563');
    cy.get('#FormCliente > .justify-end > .sn-button > .sn-button-label').click();
  });
});