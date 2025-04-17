
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/jsx/bootstrap.bundle.min";
import  "./Navigation.css";
import React from "react";
import { useState } from "react";



function Nav() {
  
return(

<div> 



  
<nav  class="navbar navbar-expand-sm ">
<div  id = 'container'class="container-fluid " >


 <h2 id = 'title'>HISTORIA: AI</h2>

<div class="btn-group" id = 'login'>
  <button type="button" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#myModal">Login</button>
  <button type="button" class="btn btn-primary">About</button>
  <button type="button" class="btn btn-primary">Help</button>
  </div>
 </div>
</nav>



<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

    <div class="container-lg mt-7" id = 'login'>
  <h2>Login form</h2>
  <form action="/action_page.php">
    <div class="mb-3 mt-3">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
      </input>
    </div>
    <div class="mb-3">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
      </input>
    </div>
   <div>
    <button type="submit" class="btn btn-primary">Login</button>
    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
</div>

  </form>
</div>
     
</div>



</div>
</div>
</div>



);

}
export default Nav;
