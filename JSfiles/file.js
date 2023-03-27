const studiesDataTotal = {row1: '',
                        row2:'',
                        row3:'', 
                        row4:'', 
                        row5:'', 
                        row6:'', 
                        row7:'', 
                        row8:'', }

        var count = 0;

        function addStudy(){
            document.getElementById("data").innerHTML ='';

            const studiesData = [];
            let row = '';

            studiesData.push(document.getElementById("iname").value);
            studiesData.push(document.getElementById("iplace").value);
            studiesData.push(document.getElementById("iserie").value);
            studiesData.push(document.getElementById("ivalue").value);

            switch(count){
                case 1:
                    studiesDataTotal.row1 = studiesData;
                    break;
                case 2:
                    studiesDataTotal.row2 = studiesData;
                    break;
                case 3:
                    studiesDataTotal.row4 = studiesData;
                    break;
                case 4:
                    studiesDataTotal.row4 = studiesData;
                    break;
                case 5:
                    studiesDataTotal.row5 = studiesData;
                    break;
                case 6:
                    studiesDataTotal.row6 = studiesData;
                    break;
                case 7:
                    studiesDataTotal.row7 = studiesData;
                    break;
            }

            for(let key in studiesDataTotal){
                if(studiesDataTotal[key]!=''){
                    for(let j=0; j<=4; j++){
                        let line = studiesDataTotal[key]
                        row+= "<td>" + line[j] +  "</td>";
                    }
                    document.getElementById("data").innerHTML += "<tr>" + row  + "</tr>";
                    row = '';
                }
            }

            count +=1;
            
        }