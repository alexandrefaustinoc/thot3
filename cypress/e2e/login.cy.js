describe('Teste de Tela de login thot 3', () => {
  beforeEach(() => {
    cy.visit(`/login`);
  });
  it('Deve fazer login com credenciais válidas', () => {
    cy.get('input[placeholder="Login*"]').type('alexandre.costa');
    cy.get('input[type="password"]').type(Cypress.env('password'));
    cy.get('button[type="submit"]').click();

  });

  it('Deve exibir erro para credenciais inválidas', () => {
    cy.get('input[placeholder="Login*"]').type('usuarioInvalido'); // Usuário inválido
    cy.get('input[type="password"]').type('senhaInvalida'); // Senha inválida
    cy.get('button[type="submit"]').click(); // Clica no botão de login

    // Verifica se uma mensagem de erro aparece
    cy.contains('Erro no login: Verifique suas credenciais e tente novamente').should('be.visible');
    cy.url().should('include', '/login'); // Verifica se ainda está na página de login
  });

  it('Deve validar campos obrigatórios', () => {
    cy.get('button[type="submit"]').click(); // Tenta fazer login sem preencher nada

    // Verifica se as mensagens de erro aparecem para os campos
    cy.contains('Login é obrigatório').should('be.visible');
    cy.contains('A senha deve ter pelo menos 6 caracteres').should('be.visible');
  });
})