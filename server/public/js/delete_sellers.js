function deleteShopper(seller_id) {
  // Put our data we want to send in a javascript object
  let data = {
      seller_id: seller_id
  };
  // Setup our AJAX request
  var xhttp = new XMLHttpRequest();
  xhttp.open("DELETE", "/delete-sellers-ajax", true);
  xhttp.setRequestHeader("Content-type", "application/json");

  // Tell our AJAX request how to resolve
  xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 204) {

          // Add the new data to the table
          deleteRow(seller_id);

      }
      else if (xhttp.readyState == 4 && xhttp.status != 204) {
          console.log("There was an error with the input.")
      }
  }
  // Send the request and wait for the response
  xhttp.send(JSON.stringify(data));
}


function deleteRow(seller_id){

  let table = document.getElementById("seller-table");
  for (let i = 0, row; row = table.rows[i]; i++) {
     if (table.rows[i].getAttribute("data-value") == seller_id) {
          table.deleteRow(i);
          break;
     }
  }
}
