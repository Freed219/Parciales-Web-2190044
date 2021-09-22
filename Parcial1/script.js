function EditRow(no)
{
 document.getElementById("edit_button"+no).style.display="none";
	
 var gustos=document.getElementById("gustos_row"+no);
 var porcentaje=document.getElementById("porcentaje_row"+no);
	
 var gustos_data=gustos.innerHTML;
 var porcentaje_data=porcentaje.innerHTML;
	
 gustos.innerHTML="<input type='text' name='gusto' id='gustos_text"+no+"' value='"+gustos_data+"'>";
 porcentaje.innerHTML="<input type='text' name='porcentaje' id='porcentaje_text"+no+"' value='"+porcentaje_data+"'>";
}

function AddRow()
{
 var new_gustos=document.getElementById("new_gustos").value;
 var new_porcentaje=0;

 var table=document.getElementById("data_table");
 var table_len=(table.rows.length);
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='gustos_row"+table_len+"'>"+new_gustos+"</td><td id='porcentaje_row"+table_len+"'>"+new_porcentaje+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='EditRow("+table_len+")'>  </td></tr>";
 document.getElementById("new_gustos").value="";
 document.getElementById("new_porcentaje").value="";
}