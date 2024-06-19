function handleFormSubmit(event) {
    event.preventDefault();
    
  const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    const user = {
      username,
      email,
      phone
    };
  
    localStorage.setItem('User Details', JSON.stringify(user));
  console.log(JSON.parse(localStorage.getItem("User Details")))
  }