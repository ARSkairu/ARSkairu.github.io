var total = 0;
function call(){
var q=document.getElementById("txt1").value;
var w=parseInt(document.getElementById("txt2").value);
var z=parseFloat(document.getElementById("txt3").value);
var result=q+w;
   if(isNaN(w)||isNaN(z)){
          alert("please enter a number");
     }
     else

        {

         var result=w*z;
         document.getElementById("tabb").innerHTML += '<td>' + q + '</td>' + '<td>' + w + '</td>' + '<td>' + z + '</td>' + '<td>' + result + '</td>';
		 total += result;
		 document.getElementById("total").innerHTML = total;
       }

}

function putar(){
	var y=parseFloat(document.getElementById("total").value);
	var x=document.getElementById("amount").value;
	var d=document.getElementById("discount").value;
	
	document.getElementById("dikasih").innerHTML = x;
	var disco = total - (total*d/100);
	var kemb = x - disco;
	document.getElementById("kembalian").innerHTML = kemb;
}
