describe ('go to application',()=>{
    
    it('title test', ()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/')
        // cy.contains('About')
        cy.contains('Log in').click()
        cy.url().should('include','/Account/Logon')
        
    })
})