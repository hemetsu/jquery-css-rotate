/** 
  @license
  jQuery CSS Rotate
  https://github.com/hemetsu/jquery-css-rotate
  
  Copyright 2014 David Huang
  Released under the MIT license
 **/
jQuery.fn.cssRotate=function(degrees){var radians=degrees*(Math.PI/180),filter="progid:DXImageTransform.Microsoft.Matrix(M11 = "+Math.cos(radians)+",M12 = "+-Math.sin(radians)+",M21 = "+Math.sin(radians)+",M22 = "+Math.cos(radians)+',sizingMethod = "auto expand")';$(this).css({"-webkit-transform":"rotate("+degrees+"deg)","-moz-transform":"rotate("+degrees+"deg)","-ms-transform":"rotate("+degrees+"deg)","-ms-transform":"rotate("+degrees+"deg)",transform:"rotate("+degrees+"deg)"});if(!document.addEventListener){var w=192,h=192;var rad=degrees*Math.PI/180;rad%=2*Math.PI;if(rad<0)rad+=2*Math.PI;rad%=Math.PI;if(rad>Math.PI/2)rad=Math.PI-rad;var cos=Math.cos(rad),sin=Math.sin(-rad),offsetX=(w-w*cos+h*sin)/2,offsetY=(h-h*cos+w*sin)/2;$(this).css({position:"relative",filter:filter,"ms-filter":filter,top:offsetX,left:offsetY})}};