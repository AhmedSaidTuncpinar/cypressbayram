describe ('login test',()=>{
    
    it('log in test', ()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/')
        // NOTE BELOW VERIFICATION IS NOT WORKING CHECK
        // cy.title().should('have','Crystalkey Hotels - Home')

        cy.contains('Log in').click()
        cy.get('#UserName').type('manager')
        // input[id='UserName']
        cy.get('#Password').type('Manager2!')
        cy.get('#btnSubmit').click()

        
        //    username.sendKeys("manager");
        // password.sendKeys("Manager2!");
        
    })
})