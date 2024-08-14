// Verifica se tem caracteres não permitidos
function verificar_condicao(texto_digitado) {
    let regex = /^[a-z\s]+$/;
    let alerta_span = document.getElementById("span_atencao");

  
    // Verifica se o texto contém caracteres não permitidos
    if (!regex.test(texto_digitado)) {
        // Se o texto contém caracteres não permitidos, limpa o campo de entrada
        document.getElementById("area_de_texto").value = "";
        // Altera a cor do texto de aviso para vermelho
        alerta_span.style.color = "red";
        alert("Apenas letras minusculas e sem acentos!")
        return 0; // Sai da função sem criptografar o texto
    }
    return 1
}

// Função para Criptografar
function criptografar() {
    // Obtém o valor do campo de entrada de texto
    let texto_digitado = document.getElementById("area_de_texto").value;
    let texto_criptografado = "";

    if (verificar_condicao(texto_digitado)) {
        texto_criptografado = texto_digitado.replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        pos_criptar_descriptar(texto_criptografado)
    }
}

// Função para Descriptografar
function descriptografar() {
    let texto_digitado = document.getElementById("area_de_texto").value;
    let texto_descriptografado = "";

    if (verificar_condicao(texto_digitado)) {
        texto_descriptografado = texto_digitado.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        pos_criptar_descriptar(texto_descriptografado)
    }
}

function pos_criptar_descriptar(texto_criptografado) {
    let ocultar_caixa_inicio = document.getElementById("divisoria_direita_caixa_inicio");
    let alerta_span = document.getElementById("span_atencao");
    let botao_copiar = document.getElementById("botao_copiar");


    ocultar_caixa_inicio.style.display = "none";
    divisoria_direita_caixa_oculta.style.display = "flex";
    alerta_span.style.color = "black";
    botao_copiar.style.display = "block";
    document.getElementById("texto_descriptografado").value = texto_criptografado;
    return
}

// Função para copiar o texto criptografado para a área de transferência
function copiar_texto() {
    let texto_descriptografado = document.getElementById("texto_descriptografado").value;
    navigator.clipboard.writeText(texto_descriptografado);
    document.getElementById("texto_descriptografado").value = "Nenhuma mensagem";
}