describe ('hover over tests',()=>{
    
    it.skip('amazon hover over', ()=>{
        cy.visit('https://www.amazon.com/')
        // NOTE BELOW VERIFICATION IS NOT WORKING CHECK
        // cy.title().should('have','Crystalkey Hotels - Home')

        //contains will check if the element is there. If there it will click
        // cy.contains('Account & Lists').trigger('mouseover')
        // cy.wait(2000)
        // cy.contains('Create a List').click()

        cy.get('.icp-nav-link-inner').trigger('mouseover')
        cy.wait(2000)

        cy.contains('Change country/region').click()

        //Below I have to add {force: true} to interact like a rea user
        //otherwise I got exception
        cy.get('select#icp-selected-country').select('Canada',{force: true})

    })


    //NOTE BELOW 2 CODE IS NOT WOKRING
    it.skip('practice test', ()=>{
        cy.visit('http://automationpractice.com/index.php')
        // NOTE BELOW VERIFICATION IS NOT WORKING CHECK
        // cy.title().should('have','Crystalkey Hotels - Home')

        //contains will check if the element is there. If there it will click
        // cy.contains('Account & Lists').trigger('mouseover')
        // cy.wait(2000)
        cy.get(".sfHover > .sf-with-ul").trigger('mouseover',{force: true})
        //cy.contains('Women').trigger('mouseover')
        cy.wait(5000)

        cy.contains('Casual Dresses').click()

        //Below I have to add {force: true} to interact like a rea user
        //otherwise I got exception
        // cy.get('a[class='sf-with-ul']:nth-of-type(1)').select('Canada',{force: true})

    })



    it('practice test', ()=>{
        cy.visit('https://the-internet.herokuapp.com/hovers')
        // NOTE BELOW VERIFICATION IS NOT WORKING CHECK
        // cy.title().should('have','Crystalkey Hotels - Home')

        //contains will check if the element is there. If there it will click
        cy.contains('Hovers').click()
        // cy.wait(2000)
        //.example .figure:nth-of-type(3)
        
         //cy.get(':nth-child(5) > img').click().trigger('mouseover',{force: true})
         cy.get(':nth-child(5) > img').should('be.hidden').invoke('show')
        //cy.contains('Women').trigger('mouseover')
        cy.wait(5000)
        cy.contains('name: user3').should('be.visible')
        //cy.contains('Casual Dresses').click()

        //Below I have to add {force: true} to interact like a rea user
        //otherwise I got exception
        // cy.get('a[class='sf-with-ul']:nth-of-type(1)').select('Canada',{force: true})

    })
})