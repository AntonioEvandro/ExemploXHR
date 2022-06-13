let xhr = new XMLHttpRequest(); // Criar
xhr.open('GET','/article/xmlhttprequest/example/load'); // Configurar conexão
xhr.send(); // Enviar

xhr.onload = function() { //Chama ao carregar
    if (xhr.status != 200){ //Verificar falha
        alert(`Houve um erro: ${xhr.status}: ${xhr.statusText}`);
    }else{ //Mostrar resultado
        alert(`Feito. Total $(xhr.response.length) bytes`);
    }
};

xhr.onprogress = function(event) { //Chama durante execução
    if(event.lengthComputable) {
        alert(`Received ${event.loaded} of &{event.total} bytes`);
    } else {
        alert(`Received ${event.loaded} bytes`); // Lenght não computado
    }
};

xhr.onerror = function() { // Mostar falha de rede
    alert('Request failed');
}
