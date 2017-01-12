describe('Bubble Sort', function(){
  before(function() {
  	spyOn('swap').and.callThrough();
  	spyOn('compare').and.callThrough();
  })

  // var swapCounter, comparisonCounter;

  // beforeEach(function) {
  // 	swapCounter = 0;
  // 	comparisonCounter = 0;
  // }

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

   it('handles a non-empty array', function(){
    expect( bubbleSort([5,4,3,2,1]) ).toEqual([1,2,3,4,5]);
  });
});
