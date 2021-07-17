
describe ('file upload',()=>{
   
    it.skip('file upload test', ()=>{

        cy.visit('http://automationpractice.com/index.php?controller=contact')

        const pathFile='image1.jpeg';
        cy.wait(1000)
        //attachFile accesp a path ONLY FROM FIXTURE folder
        cy.get('#fileUpload').attachFile(pathFile);

    })

    it.skip('file upload test using drag and drop', ()=>{

        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
 
        const pathFile='image1.jpeg';
        cy.wait(1000)
        //attachFile accesp a path ONLY FROM FIXTURE folder
        cy.get('#file').attachFile(pathFile);
        cy.get('.box__success').should('contain.text','Done!')


    })


    it.skip('multiple file upload', ()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
 
        const pathFile='image1.jpeg';
        const pathFile2='image2.jpeg';
        const pathFile3='image3.jpeg';

        cy.wait(1000)
        //attachFile accesp a path ONLY FROM FIXTURE folder
        cy.get('#filesToUpload')
        .attachFile(pathFile)
        .attachFile(pathFile2)
        .attachFile(pathFile3)
        //asserting if file attached 
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')


    })

    it.skip('multiple file upload', ()=>{

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
 
        const pathFile='image1.jpeg';
        const pathFile2='image2.jpeg';
        const pathFile3='image3.jpeg';

        cy.wait(1000)
        //attachFile accesp a path ONLY FROM FIXTURE folder
        cy.get('#filesToUpload')
        .attachFile(pathFile)
        .attachFile(pathFile2)
        .attachFile(pathFile3)
        //asserting if file attached 
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')


    })


    it('multiple file upload and name change', ()=>{

        //https://www.npmjs.com/package/cypress-file-upload
        //in this doc, we can also how to override
        //We can check all use cases in this docuement

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
 
        const pathFile='image1.jpeg';

        cy.wait(1000)
        //attachFile accesp a path ONLY FROM FIXTURE folder
        //and changing ht efile name whine I upload

        cy.get('#filesToUpload')
        .attachFile({ filePath: pathFile, fileName: 'customFileName.json' });
   
        //asserting if file attached 
        cy.get('p:nth-child(6) > strong').should('contain.text','Files You Selected:')




    })
})