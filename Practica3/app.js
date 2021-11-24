$(document).ready(function(){
	console.log('JQuery funcionando...');
	$('#linkPractica1').click(function(){
		console.log("Presionó link Practica1");
		location.href = "../Practica1/index.php";
	});

	$('#linkPractica2').click(function(){
		console.log("Presionó link Practica2");
		location.href = "../Practica2/index.php";
	});

	$('#linkPractica3').click(function(){
		console.log("Presionó link Practica3");
		location.href = "index.php";
	});

	$('#linkInicio').click(function(){
		console.log("Presionó link Inicio");
		location.href = "../index.php";
	});
	
	$.ajax({//JSON HTTP-Request _POST
			type: 'post',
		 	data: {"leerBotones" : "true"},
			dataType: 'json',
			url: 'SQLFunctions.php',
			success:function(response){
			let jsonresponse = JSON.parse(JSON.stringify(response));
			let templateHtml = `
				<form>
		    		<fieldset>
					    <legend class="mt-4">Botones</legend>
			`;
			//console.log(jsonresponse);
			if(jsonresponse.boton1 == 0)
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton1" disabled>
					<label class="form-check-label" for="pushButton1">Botón 1</label>
				</div>
			`;
			else
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton1" disabled checked>
					<label class="form-check-label" for="pushButton1">Botón 1</label>
				</div>
			`;
			if(jsonresponse.boton2 == 0)
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton2" disabled>
					<label class="form-check-label" for="pushButton2">Botón 1</label>
				</div>
			`;
			else
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton2" disabled checked>
					<label class="form-check-label" for="pushButton2">Botón 1</label>
				</div>
			`;
			if(jsonresponse.boton3 == 0)
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton3" disabled>
					<label class="form-check-label" for="pushButton3">Botón 1</label>
				</div>
			`;
			else
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton3" disabled checked>
					<label class="form-check-label" for="pushButton3">Botón 1</label>
				</div>
			`;
			if(jsonresponse.boton4 == 0)
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton4" disabled>
					<label class="form-check-label" for="pushButton1">Botón 4</label>
				</div>
			`;
			else
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton4" disabled checked>
					<label class="form-check-label" for="pushButton4">Botón 1</label>
				</div>
			`;
			templateHtml += `
					</fieldset>
				</form>
			`;
			$('#card-body').html(templateHtml);
		}
	});

	setInterval(refrescar, 3000);//5 segundos
	$.ajaxSetup({ cache: false });

	function refrescar(){
		$.ajax({//JSON HTTP-Request _POST
			type: 'post',
		 	data: {"leerBotones" : "true"},
			dataType: 'json',
			url: 'SQLFunctions.php',
			success:function(response){
			let jsonresponse = JSON.parse(JSON.stringify(response));
			let templateHtml = `
				<form>
		    		<fieldset>
					    <legend class="mt-4">Botones</legend>
			`;
			//console.log(jsonresponse);
			if(jsonresponse.boton1 == 0)
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton1" disabled>
					<label class="form-check-label" for="pushButton1">Botón 1</label>
				</div>
			`;
			else
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton1" disabled checked>
					<label class="form-check-label" for="pushButton1">Botón 1</label>
				</div>
			`;
			if(jsonresponse.boton2 == 0)
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton2" disabled>
					<label class="form-check-label" for="pushButton2">Botón 1</label>
				</div>
			`;
			else
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton2" disabled checked>
					<label class="form-check-label" for="pushButton2">Botón 1</label>
				</div>
			`;
			if(jsonresponse.boton3 == 0)
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton3" disabled>
					<label class="form-check-label" for="pushButton3">Botón 1</label>
				</div>
			`;
			else
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton3" disabled checked>
					<label class="form-check-label" for="pushButton3">Botón 1</label>
				</div>
			`;
			if(jsonresponse.boton4 == 0)
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton4" disabled>
					<label class="form-check-label" for="pushButton1">Botón 4</label>
				</div>
			`;
			else
				templateHtml += `
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="pushButton4" disabled checked>
					<label class="form-check-label" for="pushButton4">Botón 1</label>
				</div>
			`;
			templateHtml += `
					</fieldset>
				</form>
			`;
			$('#card-body').html(templateHtml);
		}
	});
	}
  });