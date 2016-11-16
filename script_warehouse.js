// Declaration of arrays containing the items and their respective quantities
        var items= new Array("Pane","Gelato");
        var quantity=new Array(2,5);

// Function that controls if the item inserted on the form does exist or not, and if exists it creates a new row on the table
// inserting the new item
function insertItem(newForm){
    
    document.getElementById("storeItem").style.visibility="hidden";
    
    var form=document.getElementById(newForm);
   
    
    var table = document.getElementById("mytab");

    var i;
    var sum=0;
    for(i=0;i<(items.length);i++){
        
        if(form.item.value==items[i]){
            break;
        }

    }
    if(i==items.length){
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var txt = document.createTextNode(form.item.value);

    td.appendChild(txt);
    tr.appendChild(td);

    var td = document.createElement("td");
    var txt2 = document.createTextNode(form.quantity.value);

    td.appendChild(txt2);
    tr.appendChild(td);
    table.appendChild(tr);
    }
        else{
            quantity[i]+=parseInt(form.quantity.value);

            table.rows[i+1].cells[1].innerHTML=quantity[i];
        }
    form.quantity.value="";
    form.item.value="";
    }


// Function that is called when body is load to insert the first rows of the table and insert the existing/first(static) items on the list
function displayTable(){
        
        var length=items.length;
        document.getElementById("storeItem").style.visibility="hidden";
    
        var table = document.getElementById("mytab")
        
        for(i=0;i<length;i++){
                var newTR = table.insertRow(i+1);
                var newTD1 = newTR.insertCell(0);
                var newTD2 = newTR.insertCell(1);
                newTD1.innerHTML = items[i];
                newTD2.innerHTML = quantity[i];
            };
     
}

function addItem(){
    document.getElementById("storeItem").style.visibility="visible";
    
    
    
}


    
