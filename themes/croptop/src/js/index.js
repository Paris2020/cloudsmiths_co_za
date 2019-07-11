/*

-  index.js file will serve as a file to create all jquery animations
- Plugins used are:
-- jqFloat.js
-- 

*/

// Make footer elephant image float
$(function(){
	$('.big-elephant').jqFloat(

		width: 300,
        height: 300,
        speed: 100
	);
});