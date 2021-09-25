const icon = document.querySelector('.navbar-toggler')
const menu = document.querySelector('.navbar-collapse')

console.log(menu)
console.log(icon)


icon.addEventListener('click', ()=>{
	menu.classList.toggle("spread")  
}


window.addEventListener('click',e=>{
	if(menu.classList.contains('spread')
	&& e.target != menu && e.target != icon ){	


	menu.classList.toggle("spread")		
}
		
	} )