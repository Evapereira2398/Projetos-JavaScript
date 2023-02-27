/* Definindo configurações para a animação do jogo */
const mario = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')

/* Função para definir o salto */ 
const pulo = () => {
    mario.classList.add('pulo') 

    /* Comando para remover o pulo para iniciar novamente, após os 500ms definidos na animação */ 
    setTimeout(() => {
        mario.classList.remove('pulo')

    }, 700)
}

/* Definindo um loop durante o jogo */
const loop = setInterval(() => {
    const posicaoTubo = tubo.offsetLeft
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '') /* A posição do mario está sendo retornada como string. Utilizamos o 'replace' para remover uma parte do texto (px) e o operador aritmetico no começo do retorno realiza a conversão da String para número */
     
    /* Condição, para verificar se o Mario encostou no tubo e se a altura do pulo foi suficiente para continuar o jogo */
    if(posicaoTubo <= 120 && posicaoTubo > 0 && posicaoMario <= 100){
        tubo.style.animation = 'none'
        tubo.style.left = `${posicaoTubo}px`

        /* Condição para que o Mario pare exatamente onde ele bateu no tubo */
        mario.style.animation = 'none'
        mario.style.bottom = `${posicaoMario}px`

        /* Alterando e definindo  uma imagem para quando o jogo for finalizado */ 
        mario.src = 'Imagens/Game-over-vermelho.png'
        mario.style.width = '600px'
        mario.style.left = '700px'
        mario.style.position = 'relative'
        mario.style.top = '200px'

        /* Reiniciando o loop quando o jogo for encerrado */ 
        clearInterval(loop)
    } 

}, 10);

/* Evento criado para realizar a animação de pulo assim que qualquer tecla do teclado for ativada */
document.addEventListener('keydown', pulo)