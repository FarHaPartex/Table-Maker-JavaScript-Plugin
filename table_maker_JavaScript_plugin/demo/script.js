let table = {
	name: "",
	id: "",
	class:"",
	working_function: function(table_id){
	    this.id = table_id;
	    let table_node = document.getElementById(table_id);
            document.getElementById(this.id).classList.add("example_table");
        //document.getElementById("select_row_amount").value;
            let select = document.createElement("select");
            select.setAttribute("id","select_row_amount");
            select.setAttribute("onchange","table.present_num_row()");
            let total_option = this.showing_row();
            for (var i = 5; i <= total_option; i+=5) {
        	let option = document.createElement("option");
        	option.setAttribute("value",i);
        	option.innerHTML = i;
        	select.appendChild(option);
                if((i+5)>total_option){
                      option = document.createElement("option");
                      option.setAttribute("value",total_option);
                      option.innerHTML = total_option;
                      select.appendChild(option);  
                }
            }
            let parentNode = document.getElementById(this.id).parentNode ;
            parentNode.insertBefore(select, table_node);

               // let search_div = document.createElement("div");
               // search_div.setAttribute("class","table_search");
               // let search_input = document.createElement("input");
               // search_input.setAttribute("type","text");
               // search_input.setAttribute("placeholder","Search...");
               // search_input.setAttribute("id","search_elem");
               // search_input.setAttribute("onkeyup","table.getSearchText()");
               // search_div.appendChild(search_input);
               // select_node = document.getElementById("select_row_amount");
               // parentNode.insertBefore(search_div,select_node) ;

            this.present_num_row();

	  },
    search_box : function(table_id){
          this.id = table_id;
               let parentNode = document.getElementById(this.id).parentNode ;
               let search_div = document.createElement("div");
               search_div.setAttribute("class","table_search");
               let search_input = document.createElement("input");
               search_input.setAttribute("type","text");
               search_input.setAttribute("placeholder","Search...");
               search_input.setAttribute("id","search_elem");
               search_input.setAttribute("onkeyup","table.getSearchText()");
               search_div.appendChild(search_input);
               select_node = document.getElementById("select_row_amount");
               parentNode.insertBefore(search_div,select_node) ;
    },
	  showing_row: function(id_name){
		let count = document.querySelectorAll("tr").length;
		//document.getElementById("demo").innerHTML = count;
		return count;
	  },
      present_num_row : function(){
           let num_rows = document.getElementById("select_row_amount").value ;
           let all_row = document.querySelectorAll("tr");
           let count = this.showing_row();
           for(let i =1 ; i<=Number(num_rows) ; i++){
                   all_row[i].style.display = "";
           }
           for(let i = Number(num_rows)+1 ; i<count ; i++){
                   all_row[i].style.display = "none";
           }
                //document.getElementById("demo2").innerHTML = num_rows ;
     },
     getSearchText : function(){
      let search_query = document.getElementById("search_elem").value ;
      let len_query = search_query.length;
      if(len_query == 0){
        this.present_num_row();
        return;
      }
      let row_number = [];
     	let row_list = document.querySelectorAll("tr");
      let getOne = false;
      document.getElementById("demo").innerHTML = "";
     	for(let i =0 ; i<row_list.length ; i++){ //single row
     		let single_row = row_list[i];
     		let td_list = single_row.children ;
     		for(let j =0 ; j<td_list.length ; j++){ //colums of a row
     			let txtContent = td_list[j].innerHTML ;
          if(txtContent.length >= len_query){
            let subString = txtContent.substring(0,len_query);
            if(search_query == subString){
              row_number.push(i);
              break;
            }
          }
     			
     		}
     	}

       if(row_number.length > 0){
          for(let i=1 ; i<row_list.length ; i++){
            for(let j =0 ; j<row_number.length ; j++){
               if(i == Number(row_number[j])){
                 row_list[i].style.display = "";
                 break;
               }else{
                  row_list[i].style.display = "none";
              //break;
               }  
            }
         }
       }else{
        for (let i = 1; i < row_list.length; i++) {
             row_list[i].style.display = "none";
        }
       }
       
      row_number = [];

     }
};

