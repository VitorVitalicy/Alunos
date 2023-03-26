const studiesDataTotal = {row1: 'teste'}

        function addStudy(){
            const studiesData = [];

            studiesData.push(document.getElementById("iname").value);
            studiesData.push(document.getElementById("iplace").value);
            studiesData.push(document.getElementById("iserie").value);
            studiesData.push(document.getElementById("ivalue").value);

            studiesDataTotal.row2 = studiesData;

            document.getElementById("00").innerHTML = studiesDataTotal.row2[0];
            document.getElementById("01").innerHTML = studiesDataTotal.row2[1];
            document.getElementById("02").innerHTML = studiesDataTotal.row2[2];
            document.getElementById("03").innerHTML = studiesDataTotal.row2[3];


            document.getElementById("iname").value ='';
            document.getElementById("iplace").value ='';
            document.getElementById("iserie").value ='';
            document.getElementById("ivalue").value ='';
        }


