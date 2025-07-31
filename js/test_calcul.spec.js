describe('calculs', () => {
  it('5+6==11 en direct', () => {
	  res=5+6
	  expect(res).toEqual(11)
  })
  
  it('5+6==11 via fonction calculerOp de calcul.js', () => {
	  res=calculerOp(5,6)
	  expect(res).toEqual(11)
  })
})