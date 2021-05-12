function pesquisar() {
    let cep = document.querySelector('#cep')
    if (cep.value.length != 8) {
        document.querySelector('.endResp').innerHTML = "Tamanho do CEP inválido! Verifique o CEP."
        console.log(cep.value.length)
    } else {
        let requestURL = `https://viacep.com.br/ws/${cep.value}/json/`
        let request = new XMLHttpRequest()

        request.open('GET', requestURL)
        request.responseType = 'json'
        request.send()

        request.onload = function(){
            let dados = request.response
            let endereco = ''

            if (dados['erro'] == true) {
                document.querySelector('.endResp').innerHTML = "CEP inválido! Digite um CEP válido."
            } else {            
                endereco = `${dados['logradouro']}, ${dados['bairro']}, ${dados['localidade']}, ${dados['uf']}`

                document.querySelector('.endResp').innerHTML = endereco
            }

        }
    }
}