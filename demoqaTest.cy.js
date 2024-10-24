describe('Automation Practice Form Test', () => {

    it('Fills out the form', () => {

      cy.visit('https://demoqa.com/automation-practice-form');

      cy.get('#firstName').type('Edgar');
      cy.get('#lastName').type('Khachatryan');
      cy.get('#userEmail').type('khachatryanedgar97@gmail.com');
      cy.get('#gender-radio-1').click({force:true})
      cy.get('#userNumber').type('10000000');
      cy.get('#currentAddress').type('Pushkin 3');
      cy.get("#submit").click()
      cy.contains('Thanks for submitting the form').should('be.visible')
      cy.get('#closeLargeModal').click({force : true})
      
   
    });
  });