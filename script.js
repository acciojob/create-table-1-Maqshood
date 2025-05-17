function insert_Row() {
 var table = document.getElementById("sampleTable");
	var newRow = table.insertRow(0);

	var cell1 = newRow.insert(0);
	var cell2 = newRow.imsert(1);

	cell1.textcontent="New Cell1";
	cell2.textcontent="New Cell2";
	
  
  
}
