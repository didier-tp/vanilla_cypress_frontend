const calcul2 = require('./calcul2');

describe('calcul2', () => {
  
  it('moyenne(5,7)==6', () => {
	  res=calcul2.moyenne_x_y(5,7)
	  console.log("moyenne(5,7)=" + res)
	  expect(res).toEqual(6)
  })
  
   it('moyenne(1,2,3,4,5,6,7)==4', () => {
	  res=calcul2.moyenne_array([1,2,3,4,5,6,7])
	  console.log("moyenne([1,2,3,4,5,6,7])=" + res)
	  expect(res).toEqual(4)
  })
})