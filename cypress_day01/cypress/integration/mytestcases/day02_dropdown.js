describe ('dropdown',()=>{
    
    //reminder: we can skip by it.skip(   )
    it('dropdown from select class', ()=>{
        cy.visit('https://the-internet.herokuapp.com/dropdown')

        //   We use select method to select dropdown element if dropdown comes from select class
        //we can assert like the value then should be 1 since html value=1
        cy.get('#dropdown').select('Option 1').should('have.value','1')

        cy.get('#dropdown').select('Option 2').should('have.value','2')

        
    })

})