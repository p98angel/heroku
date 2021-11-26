$(document).ready(function(){
	var banderaMenu = false;
	$('#dropBoton').click(function(){
		if(banderaMenu){
			$('#dropdown-menu').removeClass('show');
			banderaMenu = false;
		}else{
			$('#dropdown-menu').addClass('show');
			banderaMenu = true;
		}
	});

	$('#item1').click(function(){
		$('#dropdown-menu').removeClass('show');
		$('#entrada1').attr('placeholder', 'Fecha de busqueda...');
		$('#entrada2').attr('placeholder', '');
		$('#entrada2').addClass('d-none');
		$('#entrada1').val('');
		$('#entrada2').val('');
		banderaMenu = false;
	});

	$('#item2').click(function(){
		$('#dropdown-menu').removeClass('show');
		$('#entrada1').attr('placeholder', 'Fecha inicial...');
		$('#entrada2').attr('placeholder', 'Fecha final...');
		$('#entrada2').removeClass('d-none');
		$('#entrada1').val('');
		$('#entrada2').val('');
		banderaMenu = false;
	});

	$('#item3').click(function(){
		$('#dropdown-menu').removeClass('show');
		$('#entrada1').attr('placeholder', 'Hora inicial...');
		$('#entrada2').attr('placeholder', 'Hora final...');
		$('#entrada2').removeClass('d-none');
		$('#entrada1').val('');
		$('#entrada2').val('');
		banderaMenu = false;
	});

	$('#item4').click(function(){
		$('#dropdown-menu').removeClass('show');
		$('#entrada1').attr('placeholder', 'Nombre del sensor...');
		$('#entrada2').attr('placeholder', '');
		$('#entrada2').addClass('d-none');
		$('#entrada1').val('');
		$('#entrada2').val('');
		banderaMenu = false;
	});

	$('#item5').click(function(){
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
			for (const key in jsonresponse.values) {//for-each
				if(par){
					templateHtml += `
					<tr class="table-primary">
				      <td scope="row">`+jsonresponse.values[key].Fecha+`</td>
				      <td>`+jsonresponse.values[key].Hora+`</td>
				      <td>`+jsonresponse.values[key].Sensor+`</td>
				      <td>`+jsonresponse.values[key].Valor+`</td>
				    </tr>
					`;
					par = false;
				}else{
					templateHtml += `
					<tr class="table-secondary">
						<td scope="row">`+jsonresponse.values[key].Fecha+`</td>
						<td>`+jsonresponse.values[key].Hora+`</td>
						<td>`+jsonresponse.values[key].Sensor+`</td>
						<td>`+jsonresponse.values[key].Valor+`</td>
				    </tr>
					`;
					par = true;
				}
			}
			$('#table-body').html(templateHtml);
		}
	});

	$('#botonBuscar').click(function(e){
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
		e.preventDefault();//bloquea el form del html
		$.ajax({//JSON Request
			dataType: 'json',
			url: 'SQLFunctions.php' + parametros,
			success:function(response){
			let jsonresponse = JSON.parse(JSON.stringify(response));
			let templateHtml = '';
			let par = 0;
			for (const key in jsonresponse.values) {//for-each
				if(par){
					templateHtml += `
					<tr class="table-primary">
				      <td scope="row">`+jsonresponse.values[key].Fecha+`</td>
				      <td>`+jsonresponse.values[key].Hora+`</td>
				      <td>`+jsonresponse.values[key].Sensor+`</td>
				      <td>`+jsonresponse.values[key].Valor+`</td>
				    </tr>
					`;
					par = false;
				}else{
					templateHtml += `
					<tr class="table-secondary">
						<td scope="row">`+jsonresponse.values[key].Fecha+`</td>
						<td>`+jsonresponse.values[key].Hora+`</td>
						<td>`+jsonresponse.values[key].Sensor+`</td>
						<td>`+jsonresponse.values[key].Valor+`</td>
				    </tr>
					`;
					par = true;
				}
			}
			$('#table-body').html(templateHtml);
		}
	});
	});
});