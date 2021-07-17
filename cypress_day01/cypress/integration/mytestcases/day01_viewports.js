describe ('different view ports',()=>{
    before(
        ()=>{
            console.log('This is before method');
            
        }
    )

    beforeEach(
        ()=>{
            cy.visit('https://qa-environment.crystalkeyhotels.com/Account/Logon')

        }
    )
    // Checking macbook 15 view and taking screenshots
    //THe screenshots will be generated in screenshots folder in VS Code
    //NOTE: When there is a change or added a new code in the scripts, 
    //the execution will immediatelly happens we don't need to run the script again
    it('open with macbook-15', ()=>{
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
        
    })
    // Checking phone 6 view
    it('open with iphone-6', ()=>{
        //cy.viewport('iphone-x')
        cy.viewport(375, 812)
        cy.screenshot()
        cy.wait(200)
        
    })
    // Checking ipad mini view
    it('open with ipad-mini', ()=>{
        cy.viewport('ipad-mini')
        cy.screenshot()
        cy.wait(200)
        
    })
})