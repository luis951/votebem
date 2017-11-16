var obj = JSON.parse(text);
		var vetorEconomicas = [];
		var vetorValores = [];
		var alternar; //0=Economicas 1=Valores
		var ordem; //ordem das perguntas sorteadas
		var y; // resultado do eixo vertical do resultado
		var x; // resultado do eixo horizontal do resultado
		var vetorHistoricoX = []; //historico dos resultados 
		var vetorHistoricoY = [];
		var resultadoIndex; //indice do resultado no json
		var totalPergunta; // numero total de perguntas realizadas

		function inicializarQuiz(){ //função que reseta todas as variaveis e sorteia as perguntas
			vetorEconomicas = [];
			vetorValores = [];
			alternar = 0;
			ordem = 0
			x = 0;
			y = 0;
			vetorHistoricoX = [0];
			vetorHistoricoY = [0];
			totalPergunta = 0;
			while(vetorEconomicas.length<5){
				var random = Math.ceil(Math.random()*obj.perguntas.perguntasEco.length-1);
				if(vetorEconomicas.indexOf(random) > -1) continue;
				vetorEconomicas[vetorEconomicas.length] = random;
			}
			while(vetorValores.length<5){
				var random = Math.ceil(Math.random()*obj.perguntas.perguntasVal.length-1);
				if(vetorValores.indexOf(random) > -1) continue;
				vetorValores[vetorValores.length] = random;
			}
		}

		window.onload = function iniciarAuto(){ //a função acima é executada na inicialização da página
			inicializarQuiz();
		}

		//ao clicar no botão iniciar é chamada a função de mostrar a primeira pergunta
		//e a função que mostra o número da pergunta atual
		$(function(){
    		$("#iniciar").click(function(){
    			mostrarPerguntaEco();
			   	numeroPergunta(true);
			});
    	});

		$(document).on('click', '.btn_escolhas', function() { //função usada para captar a resposta dada pelo usuário
		   $('.btn_escolhas').removeClass('active');
		   $(this).addClass('active');
		});

		$(function(){ //função chamada quando o usuário avança para a proxima pergunta
    		$("#avancar").click(function(){
				var ponto = 0; 
				//abaixo a verificação do botão clicado pelo usuário
				if($('.btn_escolhas.active').attr('id')=="concordo_m") ponto = 4;
				else if($('.btn_escolhas.active').attr('id')=="concordo") ponto = 2;
				else if($('.btn_escolhas.active').attr('id')=="discordo") ponto = -2;
				else if($('.btn_escolhas.active').attr('id')=="discordo_m") ponto = -4;
				else alert("Preencha uma das opções");
				if(ponto!=0){ //abaixo o cálculo do resultado da resposta dada pelo usuário
					if(alternar==1 && ordem==4){ //na última pergunta é chamada a função que finaliza o quiz
						y += ponto*obj.perguntas.perguntasVal[vetorValores[ordem]].multiplicador;
						finalizar(); 
					} else if(alternar==0){
						x += ponto*obj.perguntas.perguntasEco[vetorEconomicas[ordem]].multiplicador;
						vetorHistoricoX[vetorHistoricoX.length] = x;
						mostrarPerguntaVal(); //função que mostra a próxima pergunta
						alternar++;
					} else if(alternar==1){
						y += ponto*obj.perguntas.perguntasVal[vetorValores[ordem]].multiplicador;
						vetorHistoricoY[vetorHistoricoY.length] = y;
						alternar--;
						ordem++;
	    				mostrarPerguntaEco(); //função que mostra a próxima pergunta 
	    			}
                    if (totalPergunta<10) numeroPergunta(true); //função incrementa o número da pergunta através do parametro true
				}
		   	$('.btn_escolhas').removeClass('active'); //desseleciona o botão pressionado na pergunta anterior
	   		});
		});

		$(function(){ //função chamada quando o usuário retorna para a pergunta anterior
    		$("#voltar").click(function(){
    				if(alternar==0 && ordem==0){ //caso seja executado na primeira pergunta o quiz retorna    					
						$('#linkInicio').trigger('click'); //para a página inicial e reseta as variáveis
						inicializarQuiz();
    				} else {
    					if(alternar==0){
    						ordem--;
    						alternar++;
    						mostrarPerguntaVal();
    						vetorHistoricoY.splice(vetorHistoricoY.length-1,1); //o último resultado do histórico é excluido
    						y = vetorHistoricoY[vetorHistoricoY.length-1];
							} else if(alternar==1){
    						alternar--;
    						mostrarPerguntaEco();
    						vetorHistoricoX.splice(vetorHistoricoX.length-1,1);
    						x = vetorHistoricoX[vetorHistoricoX.length-1];
    					}
                        if (totalPergunta>1) numeroPergunta(false); //função decrementa o número da pergunta através do parametro false
    				}
	   			});
			});

		function finalizar(){ //função chamada ao final do quiz para o cálculo do resultado final e atribuição da ideologia;
			console.log(x,y); //o resultado é printado no console para verificação de bugs
			if(x<-16){
				//Anarcocoletivismo
				if(y<-12) resultadoIndex = 19;
				//Socialismo Libertário	
				else if(y>-8 && y<=0) resultadoIndex = 18;
				//Socialismo
				else if(y<=8 && y>0) resultadoIndex = 17;
				//Comunismo 
				else if(y>=12) resultadoIndex = 16;
			}
			else if(x<-4 && x>=-12){
				//Social democracia	
				if(y<-8) resultadoIndex = 15;
				//Sindicalismo
				else if(y>-8 && y<=0) resultadoIndex = 14;
				//Corporativismo
				else if(y<=8 && y>0) resultadoIndex = 13;
				//Nacionalismo
				else if(y>=8) resultadoIndex = 12;
			} 
			else if(x<4 && x>=-4){
				//Anarquismo	
				if(y<-12) resultadoIndex = 11;
				//Ativismo
				else if(y<-4 && y>=-12) resultadoIndex = 10;
				//Centro
				else if(y>=-4 && y<4) resultadoIndex = 9;
				//Autoritarismo	
				else if(y>=4) resultadoIndex = 8;
			} else if(x>=4 && x<12){
				//Mutualismo
				if(y<-8) resultadoIndex = 7;
				//Liberalismo	
				else if(y>-8 && y<=0) resultadoIndex = 6;
				//Conservadorismo
				else if(y<=8 && y>0) resultadoIndex = 5;
				//Paleoconservadorismo
				else if(y>=8) resultadoIndex = 4;
			} else if(x>=12){
				//Anarcocapitalismo		
				if(y<-8) resultadoIndex = 3;
				//Capitalismo libertário
				else if(y>-8 && y<=0) resultadoIndex = 2;
				//Neoconservadorismo
				else if(y<=8 && y>0) resultadoIndex = 1;
				//Fundamentalismo
				else if(y>=8) resultadoIndex = 0;
			}
			resultadoFinal(); //ao final é chamada a função que mostra os resultados na tela
		}

		$(function(){
			$("#refazer").click(function(){ //função reinicializa o quiz e reseta as variáveis
				$('#linkInicio').trigger('click');
                $('#'+obj.resultados[resultadoIndex].titulo).removeClass('btn_sel');
				inicializarQuiz();
			});
        });