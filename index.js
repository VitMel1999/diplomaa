(function(){
  window.addEventListener('load', function(){
	
  var timer = setTimeout(show, 10000);
	
  document.querySelector('.open')
	.addEventListener('click', function(){
		clearTimeout(timer);
		show();
	});
	
  var closes = document.getElementsByClassName('close');
	
  for(i in closes){
    	closes[i].addEventListener('click', function(){
			this.closest('#modal').style.display = 'none';
		});
 	 }
  })

  function show(){
	  document.getElementById('modal')
	  .style.display = 'block'
  }
	
  function exe(){
    
   var x = document.getElementById('e-mail').value;
   var z = document.getElementById('password').value;
  
    if (x == 'e-mail'){
      document.getElementById('tx').innerHTML = x;
      document.location.href = 'main.html';
      if( z == 'password'){
      document.getElementById('txV').innerHTML = z;
      document.location.href = 'main.html';
      }
    }
    
    else{
      document.location.href = 'index.html';
      document.getElementById('tx').innerHTML='orevuar!';
    }
  }
  
 
  
  })();




