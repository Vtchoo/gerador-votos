function votar() {
    const tipos = [
        { nome: 'prefeito', digitos: 2 },
        { nome: 'vereador', digitos: 5 },
    ]
  
    const votos = tipos.reduce((resultado, tipo) => {
        resultado[tipo.nome] = Math.floor(Math.random() * (10 ** tipo.digitos))
            .toString()
            .padStart(tipo.digitos, '0')
        return resultado
    }, {})
  
    return votos
}
  
votar()