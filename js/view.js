function mostrarPerguntaEco(){ //função que mostra na tela uma pergunta do eixo economico
	document.getElementById("tituloPergunta").innerHTML = obj.perguntas.perguntasEco[vetorEconomicas[ordem]].pergunta;
}

function mostrarPerguntaVal(){ //função que mostra na tela uma pergunta do eixo economico
	document.getElementById("tituloPergunta").innerHTML = obj.perguntas.perguntasVal[vetorValores[ordem]].pergunta;	
}

function resultadoFinal(){ //função mostra na tela o gráfico
    $('#'+obj.resultados[resultadoIndex].titulo).addClass('btn_sel');
    document.getElementById(obj.resultados[resultadoIndex].titulo).innerHTML = "Você está aqui";
    setarModal(resultadoIndex);
    $('#resultadoBotao').trigger('click');
}

function numeroPergunta(param){ //função mostra na tela a pergunta em curso
    if(param==true) totalPergunta++;
    else if(param==false) totalPergunta--;
	var num = totalPergunta.toString();
	num += "/10";
    document.getElementById("totalPerguntas").innerHTML = num;
}

function setarModal(index){ //função esconde a opção de compartilhar em resultados que não são o do usuário
	if(!(index==resultadoIndex)){
		$('#compartilharDiv').css('visibility', 'hidden');
	} else {
		$('#compartilharDiv').css('visibility', 'visible');
	} //abaixo é chamado o titulo e os textos do json
	document.getElementById("tituloResultado").innerHTML = obj.resultados[index].titulo; //o parametro index é enviado
	document.getElementById("textoResultado").innerHTML = obj.resultados[index].texto;   //através do onClick no html
}