// test('Testing 2 + 2 to be 4', () => {
//     expect(2 + 2).toBe(4);
// });

// test('The best flavor is grapefruit', () => {
//     function bestLacroixFlavor() {
//         return 'grapefruit'
//     }
//     expect(bestLacroixFlavor()).toBe('grapefruit');
// });



describe('Testing Jack and Diane array', () => {

    const values = ['Jack', 'Diane']
    
    it('Passes array1 containing expected values', () => {
        expect(['Jack', 'Diane', 'George']).toEqual(expect.arrayContaining(values));
    })
    
    it('Array 2 will pass our containing test', () => {
        expect(['Jack']).not.toEqual(expect.arrayContaining(values))
    })
    
    it('Array 2 will pass our containing test', () => {
        expect(['bill']).not.toEqual(expect.arrayContaining(values))
    })

})