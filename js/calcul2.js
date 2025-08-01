function moyenne_x_y(x,y){ 
	return (x+y)/2;
}	

function moyenne_array(valeurs){ 
    somme=0
	for( v of valeurs){
		somme += v
	}
	return somme / valeurs.length;
}

try{
    module.exports = { moyenne_x_y , moyenne_array};
}catch(e) {
	//console.log("normal error , module.exports just for unit test (via jest)")
}