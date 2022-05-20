const uuid = () => Cypress._.random(0, 1e6);

describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Gestion Stock');
    cy.contains('Gérer votre stock efficacement !');

    cy.get('button').contains('Voir le stock').click();

    cy.get('button[title="Ajouter"]').click();

    cy.contains("Ajout d'un article");

    const id = uuid();
    cy.get('input[formcontrolname="name"]').clear().type(`Machine ${id}`);
    cy.get('input[formcontrolname="price"]').clear().type('12');
    cy.get('input[formcontrolname="qty"]').clear().type('13');

    cy.get('button').click();

    cy.get('table tbody tr:last-child').contains(
      `Machine ${id}`.substring(0, 13)
    );
  });
});
