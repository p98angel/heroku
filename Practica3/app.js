$(document).ready(function(){
	var banderaMenu = false;
	$('#dropBoton').click(function(){
		console.log("presiono el boton dropdown");
		if(banderaMenu){
			$('#dropdown-menu').removeClass('show');
			banderaMenu = false;
		}else{
			$('#dropdown-menu').addClass('show');
			banderaMenu = true;
		}
	});

	$('#item1').click(function(){
		console.log("presiono el boton Fecha");
		$('#dropdown-menu').removeClass('show');
		$('#entrada1').attr('placeholder', 'Fecha de busqueda...');
		$('#entrada2').attr('placeholder', '');
		$('#entrada2').addClass('d-none');
		$('#entrada1').val('');
		$('#entrada2').val('');
		banderaMenu = false;
	});

	$('#item2').click(function(){
		console.log("presiono el boton Rango de fechas");
		$('#dropdown-menu').removeClass('show');
		$('#entrada1').attr('placeholder', 'Fecha inicial...');
		$('#entrada2').attr('placeholder', 'Fecha final...');
		$('#entrada2').removeClass('d-none');
		$('#entrada1').val('');
		$('#entrada2').val('');
		banderaMenu = false;
	});

	$('#item3').click(function(){
		console.log("presiono el boton Rango de horas");
		$('#dropdown-menu').removeClass('show');
		$('#entrada1').attr('placeholder', 'Hora inicial...');
		$('#entrada2').attr('placeholder', 'Hora final...');
		$('#entrada2').removeClass('d-none');
		$('#entrada1').val('');
		$('#entrada2').val('');
		banderaMenu = false;
	});

	$('#item4').click(function(){
		console.log("presiono el boton Nombre de sensor");
		$('#dropdown-menu').removeClass('show');
		$('#entrada1').attr('placeholder', 'Nombre del sensor...');
		$('#entrada2').attr('placeholder', '');
		$('#entrada2').addClass('d-none');
		$('#entrada1').val('');
		$('#entrada2').val('');
		banderaMenu = false;
	});

	$('#item5').click(function(){
		console.log("presiono el boton Valor de sensor");
		$('#dropdown-menu').removeClass('show');
		$('#entrada1').attr('placeholder', 'Valor del sensor...');
		$('#entrada2').attr('placeholder', '');
		$('#entrada2').addClass('d-none');
		$('#entrada1').val('');
		$('#entrada2').val('');
		banderaMenu = false;
	});
	$.ajaxSetup({ cache: true });


	$.ajax({//JSON Request
			dataType: 'json',
			url: 'SQLFunctions.php?web=true',
			success:function(response){
			let jsonresponse = JSON.parse(JSON.stringify(response));
			let templateHtml = '';
			let par = false;
			console.log("Conexion: " + jsonresponse.conexion);
			console.log("Error: " + jsonresponse.error);
			for (key in jsonresponse.values) {//for-each
				if(par){
					templateHtml += `
					<tr class="table-primary">
				      <td scope="row">`+jsonresponse.values[key].date+`</td>
				      <td>`+jsonresponse.values[key].time+`</td>
				      <td>`+jsonresponse.values[key].sensor+`</td>
				      <td>`+jsonresponse.values[key].value+`</td>
				    </tr>
					`;
					par = false;
				}else{
					templateHtml += `
					<tr class="table-secondary">
				      <td scope="row">`+jsonresponse.values[key].date+`</td>
				      <td>`+jsonresponse.values[key].time+`</td>
				      <td>`+jsonresponse.values[key].sensor+`</td>
				      <td>`+jsonresponse.values[key].value+`</td>
				    </tr>
					`;
					par = true;
				}
			}
			$('#table-body').html(templateHtml);
		}
	});

	$('#botonBuscar').click(function(e){
		console.log("presiono el boton buscar:");
		var parametros = '';
		if($('#entrada1').attr('placeholder') == 'Fecha de busqueda...'){
			parametros = '?web=true&fecha='+$('#entrada1').val();
		} else if($('#entrada1').attr('placeholder') == 'Fecha inicial...'){
			parametros = '?web=true&fechainicial='+$('#entrada1').val()+'&fechafinal='+$('#entrada2').val();
		} else if($('#entrada1').attr('placeholder') == 'Hora inicial...'){
			parametros = '?web=true&horainicial='+$('#entrada1').val()+'&horafinal='+$('#entrada2').val();
		} else if($('#entrada1').attr('placeholder') == 'Nombre del sensor...'){
			parametros = '?web=true&nombresensor='+$('#entrada1').val();
		} else if($('#entrada1').attr('placeholder') == 'Valor del sensor...'){
			parametros = '?web=true&valorsensor='+$('#entrada1').val();
		}
		console.log(parametros);
		e.preventDefault();//bloquea el form del html
		$.ajax({//JSON Request
			dataType: 'json',
			url: 'SQLFunctions.php' + parametros,
			success:function(response){
			let jsonresponse = JSON.parse(JSON.stringify(response));
			let templateHtml = '';
			console.log("Conexion: " + jsonresponse.conexion);
			console.log("Error: " + jsonresponse.error);
			for (key in jsonresponse.values) {//for-each
				templateHtml += `
				<tr class="table-primary">
			      <td scope="row">`+jsonresponse.values[key].date+`</td>
			      <td>`+jsonresponse.values[key].time+`</td>
			      <td>`+jsonresponse.values[key].sensor+`</td>
			      <td>`+jsonresponse.values[key].value+`</td>
			    </tr>
				`;
			}
			$('#table-body').html(templateHtml);
		}
	});
	});
});
