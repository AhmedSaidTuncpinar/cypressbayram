describe ('navigations',()=>{
    
    it('go back and foward', ()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/')

        // cy.contains('About')
        cy.contains('Log in').click()

        //going back to previous page
        cy.go('back')//or use below -1 meand back
        //cy.go('back',{timeout:4000})//I can pass parameter . For example I can overwrite the wait using timeout
        //cy.go(-1)
        cy.wait(1000)

        //going forward to the page
        cy.go('forward')//or use below 1 means forward
        //cy.go(1)

        //or WE CAN CHAIN LIKE BELOW
         //cy.visit('https://qa-environment.crystalkeyhotels.com/')
        //cy.contains('Log in').click().go('back').go('forward')

        //We can reload or refresh a page
        cy.reload()
        
        //OR Forse to reload
        cy.reload(true)
        
        //we can do assertions after reload. In selenium, we would get slate element exception after refresh
        cy.reload(true).contains('Log in').should('be.visible')
    
    })
})