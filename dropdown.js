try {
	(function(w){
		this.Dropdown= {
			init: function(){
				var els= document.getElementsByClassName('dropdown-io');
				for(i=0;i< els.length;i++)
				{
					this.populate(els[i]);
				}
			},
			onload: function(){
				w.onload = function(){
					Dropdown.init();
				};
			},
			populate: function(el){
				this.placeholder(el);
				request= this.request();
				request.onreadystatechange = function() {
				    if (request.readyState == 4 && request.status == 200) {
				        var ob= JSON.parse(request.responseText);
				        ob= Dropdown.sort(ob);
				        Dropdown.select(el, ob);
				    }
				}
				var t= el.getAttribute("data-type");
				request.open("GET", this.url[t], true);
				request.send();
			},
			placeholder: function(el){
				el.disabled=true;
				var o = document.createElement("option");
					o.text= "Fetching data...";
					el.add(o);
			},
			request: function(){
				return new XMLHttpRequest();
			},
			select: function(el,ob){
				el.length=0;
				el.disabled=false;
				for(i in ob){
					var o = document.createElement("option");
					o.text= ob[i].name;
					el.add(o);
				}
			},
			sort: function(ob){
				ob.sort(function(a,b){ 
    					var x = a.name< b.name? -1:1; 
    					return x; 
				});
			return ob;
			},
			url: {
				countries: "https://s3-ap-southeast-1.amazonaws.com/dropdown/countries.json"
			}
		};
		Dropdown.onload();
	}(window));
}catch(e){
	console.log(e);
}
