describe ('check element with get',()=>{
    
    it('get testing', ()=>{
        cy.visit('https://qa-environment.crystalkeyhotels.com/')
        // NOTE BELOW VERIFICATION IS NOT WORKING CHECK
        // cy.title().should('have','Crystalkey Hotels - Home')

        //contains will check if the element is there. If there it will click
        cy.contains('Log in').click()

        //asserting if url includes Logon. if so pass, if not fails
        cy.url().should('include','/Logon')

        //css og Logi in text : h2[class='mb-4'] or h2.mb-4 
        // we can write them in different lines buyt we can chain if we want o
        //        locator          visible on the page    should contain Log in   should be 1 mathcing element
         cy.get("h2[class='mb-4']").should('be.visible').and('contain','Log in').and('have.length',1)


         //find all links of li tags and assert if lenght is 29
         cy.get("li a").should('have.length',29)

         //2. Find method is used to find any click element ofter get
         //We are here finding all li's thehn 
         //finding child of li with that child css
         //and asserting if there is only one 

         cy.get('li').find("a[href*='Rooms/6']").should('have.length',1)


         //3. within means find specific element within that parent
         //within works with callback function
         //we are sayinh here find a[href='/Rooms/318'] element 
         //that is a child of div.categories
         cy.get('div.categories').within(()=>{
             
            cy.get("a[href='/Rooms/318']").click()
         })
        
      //summary
      //get
      //find is used to filter the search and put assertion
      //find a specific element inder a parent element. this works with callback fundtion
  
    })
})