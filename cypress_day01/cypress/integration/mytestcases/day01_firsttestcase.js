// we have to start with describe 
describe ('sample test',()=>{
    // it markes a method like a test case
    // this is similar to @test annotation
    // I can create multiple test cases using it annotation
    it('does not match', ()=>{
        expect(true).to.equal(true)
    })
})