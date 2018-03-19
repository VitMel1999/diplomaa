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
  
  
  })();




