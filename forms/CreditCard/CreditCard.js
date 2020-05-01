
BtnSubmit.onclick=function(){
  let amount = InpAmount.value
  let firstName = InpFirstName.value
  let lastName = InpLastName.value
  let address = InpAddress.value
  let city = InpCity.value
  let state = InpState.value
  let zipcode = InpZipcode.value
  let email = InpEmail.value
  let ccNumber = InpCardNumber.value
  let expirationDate = InpExpDate.value
  let cvv = InpCVV.value
  let pw = "Oakley99!"
  let query1 = "INSERT INTO customer (first_name,last_name,address,city,state,zipcode,email) VALUES ('" + firstName + "', '" + lastName + "', '" + address + "', '" + city + "', '" + state + "', '" + zipcode + "', '" + email + "');"
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jtk76873&pass=" + pw + "&database=jtk76873&query=" + query1)
  
  let query2 ="INSERT INTO payment_info (cc_number,expiration_date,donation_amount,email) VALUES ('" + ccNumber + "', '" + expirationDate + "', '" + cvv + "', '" + email + "')"
  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=jtk76873&pass=" + pw + "&database=jtk76873&query=" + query2)
//alert(query1 + query2)}

  if (req1.status == 200) { // it worked
    if (req1.status == 500) { //insert succeeded
} else 
    ChangeForm(Validation)
} else {
  // transit error
  NSB.MsgBox("Error: " + req1.status)
  }
}

BtnGoBackCC.onclick=function(){
  ChangeForm(Donate)
}