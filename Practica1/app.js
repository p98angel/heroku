$(document).ready(function(){
	setInterval(refrescar, 5000);//5 segundos
	$.ajaxSetup({ cache: true });
	$.ajax({//JSON Request _GET
		 	data: {"leerLeds" : "true"},
			dataType: 'json',
			url: 'SQLFunctions.php',
			success:function(response){
			let jsonresponse = JSON.parse(JSON.stringify(response));
			let templateHtml = '';
			console.log(jsonresponse);
			if(jsonresponse.led1 == 0){
				templateHtml += '<button type="button" class="btn btn-secondary m-2" id="led1">Led1 - Off</button>';
			}
			else
				templateHtml += '<button type="button" class="btn btn-success m-2" id="led1">Led1 - On</button>';
			if(jsonresponse.led2 == 0){
				templateHtml += '<button type="button" class="btn btn-secondary m-2" id="led2">Led2 - Off</button>';
			}
			else
				templateHtml += '<button type="button" class="btn btn-success m-2" id="led2">Led2 - On</button>';
			if(jsonresponse.led3 == 0){
				templateHtml += '<button type="button" class="btn btn-secondary m-2" id="led3">Led3 - Off</button>';
			}
			else
				templateHtml += '<button type="button" class="btn btn-success m-2" id="led3">Led3 - On</button>';
			if(jsonresponse.led4 == 0){
				templateHtml += '<button type="button" class="btn btn-secondary m-2" id="led4">Led4 - Off</button>';
			}
			else
				templateHtml += '<button type="button" class="btn btn-success m-2" id="led4">Led4 - On</button>';
			
			$('#card-body').html(templateHtml);
		}
	});

	$(document).on('click', '#led1', function() { 
		console.log('Se precionso el boton 1');
		let valor;
		if($('#led1').text() == "Led1 - Off"){
			document.getElementById("led1").setAttribute('class',"btn btn-success m-2");
	 		$('#led1').html("Led1 - On");
			valor = 1;
		} else{
			document.getElementById("led1").setAttribute('class',"btn btn-secondary m-2");
	 		$('#led1').html("Led1 - Off");
			valor = 0;
		}
		$.ajax({//JSON Request _GET
		 	data: {"escribirLeds" : "true", "led" : "1", "valor" : valor},
			dataType: 'json',
			url: 'SQLFunctions.php',
			success:function(response){
				console.log(response);
			}
		});
	});

	$(document).on('click', '#led2', function() { 
		console.log('Se precionso el boton 2');
		let valor;
		if($('#led2').text() == "Led2 - Off"){
			document.getElementById("led2").setAttribute('class',"btn btn-success m-2");
	 		document.getElementById("led2").innerHTML = "Led2 - On";
			valor = 1;
		} else{
			document.getElementById("led2").setAttribute('class',"btn btn-secondary m-2");
	 		document.getElementById("led2").innerHTML = "Led2 - Off";
			valor = 0;
		}
		$.ajax({//JSON Request _GET
		 	data: {"escribirLeds" : "true", "led" : "2", "valor" : valor},
			dataType: 'json',
			url: 'SQLFunctions.php',
			success:function(response){
				console.log(response);
			}
		});
	});

	$(document).on('click', '#led3', function() { 
		console.log('Se precionso el boton 3');
		let valor;
		if($('#led3').text() == "Led3 - Off"){
			document.getElementById("led3").setAttribute('class',"btn btn-success m-2");
	 		document.getElementById("led3").innerHTML = "Led3 - On";
			valor = 1;
		} else{
			document.getElementById("led3").setAttribute('class',"btn btn-secondary m-2");
	 		document.getElementById("led3").innerHTML = "Led3 - Off";
			valor = 0;
		}
		$.ajax({//JSON Request _GET
		 	data: {"escribirLeds" : "true", "led" : "3", "valor" : valor},
			dataType: 'json',
			url: 'SQLFunctions.php',
			success:function(response){
				console.log(response);
			}
		});
	});

	$(document).on('click', '#led4', function() { 
		console.log('Se precionso el boton 4');
		let valor;
		if($('#led4').text() == "Led4 - Off"){
			document.getElementById("led4").setAttribute('class',"btn btn-success m-2");
	 		document.getElementById("led4").innerHTML = "Led4 - On";
			valor = 1;
		} else{
			document.getElementById("led4").setAttribute('class',"btn btn-secondary m-2");
	 		document.getElementById("led4").innerHTML = "Led4 - Off";
			valor = 0;
		}
		$.ajax({//JSON Request _GET
		 	data: {"escribirLeds" : "true", "led" : "4", "valor" : valor},
			dataType: 'json',
			url: 'SQLFunctions.php',
			success:function(response){
				console.log(response);
			}
		});
	});
});
function refrescar(){
    //Actualiza la página
    $.ajax({//JSON Request _GET
		 	data: {"leerLeds" : "true"},
			dataType: 'json',
			url: 'SQLFunctions.php',
			success:function(response){
			let jsonresponse = JSON.parse(JSON.stringify(response));
			let templateHtml = '';
			console.log(jsonresponse);
			if(jsonresponse.led1 == 0){
				templateHtml += '<button type="button" class="btn btn-secondary m-2" id="led1">Led1 - Off</button>';
			}
			else
				templateHtml += '<button type="button" class="btn btn-success m-2" id="led1">Led1 - On</button>';
			if(jsonresponse.led2 == 0){
				templateHtml += '<button type="button" class="btn btn-secondary m-2" id="led2">Led2 - Off</button>';
			}
			else
				templateHtml += '<button type="button" class="btn btn-success m-2" id="led2">Led2 - On</button>';
			if(jsonresponse.led3 == 0){
				templateHtml += '<button type="button" class="btn btn-secondary m-2" id="led3">Led3 - Off</button>';
			}
			else
				templateHtml += '<button type="button" class="btn btn-success m-2" id="led3">Led3 - On</button>';
			if(jsonresponse.led4 == 0){
				templateHtml += '<button type="button" class="btn btn-secondary m-2" id="led4">Led4 - Off</button>';
			}
			else
				templateHtml += '<button type="button" class="btn btn-success m-2" id="led4">Led4 - On</button>';
			
			$('#card-body').html(templateHtml);
		}
	});
  }
