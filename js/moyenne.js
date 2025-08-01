
 
 window.addEventListener("load",function(){
	var btn_moyenne_x_y = document.getElementById("btn_moyenne_x_y");
	btn_moyenne_x_y.addEventListener("click",calculerMoyenneXetY);
});


function calculerMoyenneXetY(){
	var x =  Number(document.getElementById("x").value);
	var y =  Number(document.getElementById("y").value);
	var res =moyenne_x_y(x,y);
	document.getElementById("spanRes").innerHTML="<b>"+res+"</b>";
}




	

		
