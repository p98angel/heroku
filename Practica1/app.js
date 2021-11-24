$(document).ready(function(){
	setInterval(refrescar, 5000);
	$.ajaxSetup({ cache: false });
	refrescar();
	for(let i = 1; i < 5; i++){
		$(document).on('click', "#led" + i, function() { 
			console.log('Se precionso el boton ' + i);
			let valor;
			if($("#led" + i).text() == "Led"+ i + " - Off"){
				document.getElementById('led' + i).setAttribute('class',"btn btn-success m-2");
				 $("#led" + i).html("Led"+ i + " - On");
				valor = 1;
			} else{
				document.getElementById('led' + i).setAttribute('class',"btn btn-secondary m-2");
				 $("#led" + i).html("Led"+ i + " - Off");
				valor = 0;
			}
			$.ajax({
				data: {"escribirLeds" : "true", "led" : '' + i + '', "valor" : valor},
				dataType: 'json',
				url: 'SQLFunctions.php',
				success:function(response){
					console.log(response);
				}
			});
		});
	}	
});
function refrescar(){
	$.ajax({
		data: {"leerLeds" : "true"},
		dataType: 'json',
		url: 'SQLFunctions.php',
		success:function(response){
			let jsonresponse = JSON.parse(JSON.stringify(response));
			let templateHtml = '';
			let i = 1;
			for(const x in jsonresponse){
				if(jsonresponse[x] == 1 || jsonresponse[x] == 0){
					if(jsonresponse[x] == 0)
						templateHtml += '<button type="button" class="btn btn-secondary m-2" id="led' + i + '">Led' + i + ' - Off</button>';
					else
						templateHtml += '<button type="button" class="btn btn-success m-2" id="led' + i + '">Led' + i + ' - On</button>';
					i++;
				}
			}
			$('#card-body').html(templateHtml);
		}
	});
}