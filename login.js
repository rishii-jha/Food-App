



let click = document.getElementById('click')
        
 click.addEventListener('click',function(){
    let email = document.getElementById('email').value;
let password = document.getElementById('password').value;

    if( email == 'rishijha5555@gmail.com' && password == '123456'){
        alert('login')
       window.location.href = 'index.html'
         }else{
            alert('worng password')
        }
     
   

 })
 
 

