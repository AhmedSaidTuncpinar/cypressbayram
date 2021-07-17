describe ('checkbox',()=>{
    
    it.skip('checkbox', ()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes')

        cy.get("input[type='checkbox']").first().click()

        cy.get("input[type='checkbox']").check()
    
    })


    it('checkbox check all', ()=>{
        cy.visit('https://the-internet.herokuapp.com/checkboxes')


        //check will make sure if any uncheck box, they all will be checked
        cy.get("input[type='checkbox']").check()

        


    
    })

    it('checkbox check all', ()=>{
        cy.visit('http://automationpractice.com/index.php')

        //first() means first element
        //clickin on women element
        cy.get('.sf-with-ul').first().click();
        //check will make sure if any uncheck box, they all will be checked
        cy.get(".checkbox").check()


        //checking if the elements checked
        //my loic is when a checkbox is checked class shouws up
        //but the parent element is chaning so write xpath for that
        //                                    means class property should have checekde value
        cy.get(".checkbox").check().parent().should('have.class','checked')
        //uncehckede all checkboxes. and asserting the checked class should not be there anymore
        cy.get(".checkbox").uncheck().parent().should('not.have.class','checked')
    
    })
})