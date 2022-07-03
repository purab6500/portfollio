

name="";
mail="";


    function submit(){

      name= document.getElementById("name").value;
      mail= document.getElementById("email").value;
      
      
      console.log(name)
      console.log(mail)
      sessionStorage.setItem("user_name", name);
      sessionStorage.setItem("user_email", mail);
        

    }



   




