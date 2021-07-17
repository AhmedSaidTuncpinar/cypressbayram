describe ('custom methods',()=>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php')
        //using custom method that I created in commands.js
        cy.login('abc','12345')
    })

    it('log in', ()=>{
        cy.url().should('include','controller=authentication')
        cy.wait(1000)
       // cy.get('.alert alert-danger').should('be.visible')
        cy.contains('Invalid email address.').should('be.visible')

    })


    it('amazon search', ()=>{
        cy.visit('https://www.amazon.com/')

        //using custom method that I created in commands.js
   
        cy.search('teapot')

        //1-48 of over 2,000 results for "teapot" 
        //asserting if "teapot"  text is there

        cy.get('.a-color-state').should('have.text','"teapot"')

        //asserting if title includes teapot
        cy.title().should('include','teapot')

    })


})