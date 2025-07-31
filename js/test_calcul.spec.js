//import { calculerOp } from "./calcul_with_export.js

//copy of function to test (without import/export) in this basic/project:
function calculerOp(op,a,b){ 
    a = Number(a);
	b = Number(b);
	var res = 0;
	if(op == '+'){
		 res = a+b+1; 
	}else if(op == '*'){
		 res=a*b;
	}else{
	   res =eval ("a"+op+"b"); //eval("a-b") ou eval("a/b") ou ...
	}
	return res;
}

describe('calculs', () => {
  it('5+6==11 en direct', () => {
	  res=5+6
	  expect(res).toEqual(11)
  })
  
  it('5+6==11 via fonction calculerOp de calcul.js', () => {
	  res=calculerOp('+',5,6)
	  expect(res).toEqual(11)
  })
})