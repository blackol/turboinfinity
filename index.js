/*================= Mehdi ====================*/

function setOption(dep, desc, select){
    var option = document.createElement('option');
    option.value = dep+"-"+desc;
    option.text = dep+" - "+desc;
    select.appendChild(option);
}

function createSelect(td){
    var select = document.createElement('select');
    var option = document.createElement('option');
    
    option.value = "";
    option.text = "";

    select.appendChild(option);
    setOption("971", "DPLSH", select);
    setOption("971", "DOSIP", select);
    setOption("971", "IUFC", select);
    setOption("971", "IUFM", select);
    setOption("971", "IUT", select);
    setOption("971", "MEDECINE", select);
    setOption("971", "SEN", select);
    setOption("971", "SJE", select);

    setOption("971", "STAPS", select);
    setOption("971", "SUAPS", select);
    setOption("972", "DOSIP", select)
    setOption("972", "DSI (SEN)", select);
    setOption("972", "FDE", select);
    setOption("972", "IUFC", select);
    setOption("972", "IUFM", select);
    option.value = "";
    option.txt = "";
    select.appendChild(option);
    setOption("972", "IUT", select);
    setOption("972", "MEDECINE", select);
    setOption("972", "LSH", select);
    setOption("972", "SUAPS", select);
    setOption("973", "IESG", select);
    setOption("973", "IUFC", select);
    setOption("973", "IUFM", select);
    setOption("973", "IUT", select);
    setOption("973", "SUAPS", select);

    select.style = "width: 100%; height: 100%;border:none;";
    td.appendChild(select);
}

for (var j = 0; j < 15; j++) {
  var table = document.createElement('div');
  table.className='d-flex';
  table.style = "height: 26px;";

  //création des lignes avec les cellules
  for (var i = 0; i < 12; i++) {
    var td = document.createElement('div');
    td.style = 'width: 10%;border: 1px solid black;';
    //première cellule
    if (i == 0) {
        createSelect(td);
        if (j == 14) {
            td.style = 'width: 10%;border: 1px solid black;border-bottom: 2px solid black;';
        }
    }else if (i == 4) {//5ème cellule avec bords gras
        if (j ==14) {
            td.style = 'width: 10%;border:1px solid black;border-left: 2px solid black;border-bottom: 3px solid black;';
        
        }else {
            td.style = 'width: 10%;border: 1px solid black;border-left: 2px solid black;';
        
        }
        var input = document.createElement('input');
        input.style = "width: 100%;border: none;";
        td.appendChild(input);
    }
    else if (i ==5) {
        if (j ==14) {
            td.style = 'width: 10%;border: 1px solid black;border-bottom: 3px solid black;';
        
        }else {
            td.style = 'width: 10%;border: 1px solid black;';
        
        }
        var input = document.createElement('input');
        input.style = "width: 100%;border: none;";
        td.appendChild(input);
    }
    else if (i == 6) {
        if (j ==14) {
            td.style = 'width: 10%;border: 1px solid black;border-bottom: 3px solid black;border-right: 2px solid black;';
        
        }else {
            td.style = 'width: 10%;border: 1px solid black;border-right: 2px solid black;';
        
        }
        var input = document.createElement('input');
        input.style = "width: 100%;border: none;";
        td.appendChild(input);
    }
    else if (i == 8) { //9ème cellule avec bords pointillés
        if(j == 14){
            td.style = 'width: 10%;border-left: 2px dashed black;border-bottom: 3px dashed black;border-right: 2px dashed black;border-top: 1px solid black;';
        }else {
            td.style = 'width: 10%;border-left: 2px dashed black;border-bottom: 1px solid black;border-right: 2px dashed black;border-top: 1px solid black;';
            
        }
        var input = document.createElement('input');
        input.style = "width: 100%;border: none;";
        td.appendChild(input);
    }
    else if (i == 9) { //cellule bleu avec 0,0
        td.style = 'width: 7%;border-bottom: 1px solid white;border-top: 1px solid white;';
        td.className = 'bleu d-flex justify-content-end px-1';
        var input = document.createElement('i');
        input.innerHTML = "0,00";
        td.appendChild(input);
    }
    else if (i == 10) {
        if (j == 14) {
            td.style = 'width: 13%;border: 1px solid black;border-left:2px solid black;border-bottom: 2px solid black;';
        } else {
            td.style = 'width: 13%;border: 1px solid black;border-left:2px solid black';
        }
        var input = document.createElement('input');
        input.style = "width: 100%;border: none;";
        td.appendChild(input);
    }
    else if (i == 11) {
        if (j == 14) {
            td.style = 'width: 10%;border: 1px solid black;border-bottom: 2px solid black;';
        }
        td.className = 'bleu';
        var input = document.createElement('input');
        input.style = "width: 100%;border: none;";
        input.className = "bleu";
        td.appendChild(input);
        
    }
    else {
        if(j == 14){
            td.style = 'width: 10%;border: 1px solid black;border-bottom: 2px solid black;';
        }
        var input = document.createElement('input');
        input.style = "width: 100%;border: none;";
        td.appendChild(input);
    }   
    table.appendChild(td);
  }
  document.querySelector("#master").appendChild(table);
}

/*================= Mehdi ====================*/
