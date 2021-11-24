$(document).ready(function(){
	setInterval(refrescar, 3000);//5 segundos
	$.ajaxSetup({ cache: false });
	refrescar();
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
				let i = 1;
				for(const x in jsonresponse){
					if(jsonresponse[x] == 1 || jsonresponse[x] == 0){
						templateHtml += '<div class="form-check form-switch">';
						if(jsonresponse[x] == 0)
							templateHtml += '<input class="form-check-input" type="checkbox" id="pushButton' + i +'" disabled>'
						else
							templateHtml += '<input class="form-check-input" type="checkbox" id="pushButton' + i + '" disabled checked>';		
						templateHtml += '<label class="form-check-label" for="pushButton' + i +'">Botón ' + i+ '</label>';
						templateHtml += '</div>';
					}
				}
				templateHtml += `
						</fieldset>
					</form>
				`;
				$('#card-body').html(templateHtml);
			}
		});
	}
});