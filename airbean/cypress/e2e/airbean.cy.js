describe('template spec', () => {

  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
    cy.get('.menuitem__img').first().click();
    cy.get('.menuitem__img').last().click();
  })
  //Som en användare vill jag kunna se alla kaffesorter som går att beställa
  it('should display menu items', () =>{
    cy.get('.menuitem__title').should('have.length.greaterThan', 1)
  })

  //Som användare vill jag kunna lägga en kaffesort i en varukorg

  it('should add clicked items to shoppingcart', ()=>{
    cy.get('.header__Cart').click();
    cy.get(':nth-child(1) > .cart__text').should('have.text', 'Bryggkaffe')
    cy.get(':nth-child(2) > .cart__text').should('have.text', 'Semla')
  })

  //Som en användare vill jag kunna läsa mer om företaget och dess kaffe
  it('should be able to navigate to about us-page', ()=> {
    cy.get('.header__Nav').click();
    cy.get('[href="/about"]').click();
    cy.get('.about > :nth-child(4)').contains('Que dark fair trade')
    //man kan också byta ut texten till en variabel som hämtar API-texten om den skulle ändras.
  })

  //Som användare vill jag se min varukorg 
  //testar detta ovan så jag testar SUMMAN nu
  it('should display total costs of items', () => {
    cy.get('.header__Cart').click();
    cy.get(':nth-child(1) > .cart__text').should('have.text', 'Bryggkaffe')
    cy.get(':nth-child(1) > .cart__price').should('have.text', '39')
    cy.get(':nth-child(2) > .cart__price').should('have.text', '50')
    cy.get('.cart__total').contains('89 kr')
    //man kan göra samma sak här, att man hämtar priserna och dubblar dem i en variabel.
  })

  //Som användare vill jag att det ska finnas en navigering

  it('should have a navigation page', ()=> {
    cy.get('.header__Nav').click();
    cy.get('.navigation').contains('Meny');
    cy.get('.navigation').contains('Vårt kaffe');
    cy.get('.navigation').contains('Orderstatus');
  })

  //Som användare vill jag kunna gå till bekräftelsesidan
  //och se 1) tid 2) om den är klar

  it('should have an orderstatus page', ()=> {
    cy.get('.header__Nav').click();
    cy.get('[href="/orderstatus"]').click();
    cy.get('.order__heading').contains('beställning')
  }) //den visar inte ordern, det är en bugg från när vi gjorde programmet...
})

/*
  SKIPPADE USERSTORIES:

    Som användare vill jag kunna ta bort en kaffesort i min varukorg 
    så jag kan ändra mig ifall jag la till något av misstag eller inte längre vill ha det jag la till.
    ---> Vår Airbean har inte ta bort-funktionen.
    ---> men jag SKULLE klicka "ta bort" och sedan kontrollera 
    ---> att antalet produkter är en mindre än innan.

    */