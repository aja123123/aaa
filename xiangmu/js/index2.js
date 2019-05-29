// index2切换
function $(id){
    return document.getElementById(id);
  }
  var li1 = $("li1");
		var cright1 = $("cright1");
		li1.onclick = function(){
			cright1.style.display = "block";
			cright2.style.display = "none";
			cright3.style.display = "none";
			cright4.style.display = "none";
		}
		var li2 = $("li2");
		var cright2 = $("cright2");
		li2.onclick = function(){
			cright1.style.display = "none";
			cright2.style.display = "block";
			cright3.style.display = "none";
			cright4.style.display = "none";
		}
		var li3 = $("li3");
		var cright3 = $("cright3");
		li3.onclick = function(){
			cright1.style.display = "none";
			cright2.style.display = "none";
			cright3.style.display = "block";
			cright4.style.display = "none";
		}
		var li4 = $("li4");
		var cright4 = $("cright4");
		li4.onclick = function(){
			cright1.style.display = "none";
			cright2.style.display = "none";
			cright3.style.display = "none";
			cright4.style.display = "block";
		}
