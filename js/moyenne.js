
 
 window.addEventListener("load",function(){
	var btn_moyenne_x_y = document.getElementById("btn_moyenne_x_y");
	btn_moyenne_x_y.addEventListener("click",calculerMoyenneXetY);
	
	var btn_moyenne_valeurs = document.getElementById("btn_moyenne_valeurs");
	btn_moyenne_valeurs.addEventListener("click",calculerMoyenneValeurs);
});


function calculerMoyenneXetY(){
	var x =  Number(document.getElementById("x").value);
	var y =  Number(document.getElementById("y").value);
	var res =moyenne_x_y(x,y);
	document.getElementById("spanRes").innerHTML="<b>"+res+"</b>";
}


function calculerMoyenneValeurs(){
	var valeurs = document.getElementById("valeurs").value;
	var tab_valeurs = valeurs.split(";")
	var tab_valeurs_num = []
	for(sv of tab_valeurs) 
		tab_valeurs_num.push(Number(sv))
	var res =moyenne_array(tab_valeurs_num);
	document.getElementById("spanRes2").innerHTML="<b>"+res+"</b>";
}



	

		
