function pesquisar() {
    let cep = document.querySelector('#cep')
    let requestURL = `https://viacep.com.br/ws/${cep.value}/json/`
    let request = new XMLHttpRequest()

    request.open('GET', requestURL)
    request.responseType = 'json'
    request.send()

    request.onload = function(){
        let dados = request.response
        let endereco = ''

        if (dados == null){
            document.querySelector('.endResp').textContent = "Cep inválido! Tente novamente."
        } else {            
            endereco = `${dados['logradouro']}, ${dados['bairro']}, ${dados['localidade']}, ${dados['uf']}`
        }

        document.querySelector('.endResp').innerHTML = endereco
    }
}