<script>

	var val_totale = 0;
    var prix = ;
    

    function myFunction() {

		document.getElementById("valeur_totale").innerHTML = val_totale;
      
    }
    
    function addToCart() {
    	val_totale = val_totale + prix;
        document.getElementById("valeur_totale").innerHTML = val_totale;
    }
    
    function removeFromCart() {
    	
        if ( val_totale > 0 ){
        	val_totale = val_totale - prix;
        	document.getElementById("valeur_totale").innerHTML = val_totale;
        }
        
    	
    }
</script>
