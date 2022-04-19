$.support.cors = true;


$(document).ready(
function(){
$('#conteudo').load("pages/pagina01.html")
}
);



$('#btpagina2').click(
    function (){
        $('#conteudo').load("Pages/pagina02.html")
    }
)







$('#btpagina1').click(
    function (){
       $('#conteudo').load("pages/pagina01.html")
    }
)

