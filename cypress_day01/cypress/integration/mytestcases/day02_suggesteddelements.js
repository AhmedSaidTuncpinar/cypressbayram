describe ('suggested element',()=>{
    
   //We will click on succested element.
   //when user fsearch f=in google, 
   //then they ll click one of the succested options
    it.skip('succested element clicks', ()=>{
        cy.visit('https://www.google.com/')
        cy.get("[name='q']").type('usa')

        // We use select method to select dropdown element if dropdown comes from select class
        //we can assert like the value then should be 1 since html value=1
       // cy.get('.erkvQe').find('li span').contains('usa map').click()

       //OR SIMPLY
       cy.get('li span').contains('usa map').click()

        //cy.get('.erkvQe li span').contains('usa map').click()

    })

    it('succested element clicks 2', ()=>{
        //When user goes to the website and sa=earch for dress then click on suggested once
        //then teh next page should contain that value
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('dress')

       cy.get('.ac_results').contains('Printed Summer Dress').click()

       cy.get("h1[itemprop='name']").should('be.visible')

     

    })

    
})