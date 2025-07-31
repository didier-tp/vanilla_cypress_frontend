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