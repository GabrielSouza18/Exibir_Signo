var aDatas=[
    ["01-01","01-19","Capricornio","capricornio.jpg"],
    ["01-20","02-18","Aquario","aquario.jpg"],
    ["02-19","03-20","Peixes","peixes.jpg"],
    ["03-21","04-19","Aries","aries.jpg"],
    ["04-20","05-20","Touro","touro.jpg"],
    ["05-21","06-20","Gemeos","gemeos.jpg"],
    ["06-21","07-22","Cancer","cancer.jpg"],
    ["07-23","08-22","Leao","leao.jpg"],
    ["08-23","09-22","Virgem","virgem.jpg"],
    ["09-23","10-22","Libra","libra.jpg"],
    ["10-23","11-21","Escorpioao","escorpiao.jpg"],
    ["11-22","12-21","Sagitario","sagitario.jpg"],
    ["12-22","12-31","Capricornio","capricornio.jpg"],
]
var lLimpar = false;
function exibir(){
    if(lLimpar=!lLimpar){
        //se lLimpar for FALSE faz a ação do exibir.
        //pegar a data digitada.
        var dataDig = document.getElementById("data").value;
        //converte a string com a data para o tipo Date
        var data = new Date(dataDig);
        //Separando o dia, mês e o ano
        var dia = data.getDate();
        var mes = data.getMonth()+1;
        var ano = data.getFullYear();
        //cria ima nova data com hífens
        var novaData = new Date(mes+"-"+dia+"-"+ano);
        for(var i=0;i<aDatas.length;i++){
            //junta o ano digitado com as datas do vetor para comparação completa.
            var dataVetor = aDatas[i][0]+"-"+ano;
            var dataSig1 = new Date(dataVetor);
            var dataVetor = aDatas[i][1]+"-"+ano;
            var dataSig2 = new Date(dataVetor);
            //faz as comparações para saber o signo.
            if(novaData>=dataSig1 && novaData<=dataSig2){
                //exibir o nome do signo.
                document.getElementById("nomeSigno").innerHTML=aDatas[i][2];
                //exibir a imagem do signo.
                document.getElementById("signoimg").src="images/"+aDatas[i][3];
                //trocar o nome do botão para limpar 
                document.getElementById("botao").innerHTML="Limpar";
                //desabilitar a digitação da data
                document.getElementById("data").disabled=true;
            }
        }
    }
    else{
        //se lLimpar for TRUE faz a ação do limpar.
        document.getElementById("nomeSigno").innerHTML="";
        document.getElementById("signoimg").src="images/signos.jpg"
        document.getElementById("botao").innerHTML="Exibir";
        document.getElementById("data").value="";
        document.getElementById("data").focus();
        document.getElementById("data").disabled = false;
    }
}