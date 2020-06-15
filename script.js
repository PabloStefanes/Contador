        function contar() {
        let ini = document.getElementById('txt1')
        let fim = document.getElementById('txtf')
        let passo = document.getElementById('txtp')
        let res = document.getElementById('res')
        if (ini.value =='' || fim.value =='' || passo.value == '') {
            window.alert('[ERRO] Faltam Dados!')
        } else {
            res.innerHTML = 'Contando:'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} 😊 `
            }          
        } else {
            // Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} 😊 `
            }      
        }
            res.innerHTML += `🏁`
    }
 }