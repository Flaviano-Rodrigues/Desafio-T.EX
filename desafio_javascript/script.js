paises = [
    ['França', 'Catedral de Notre-Dame', '🇫🇷', 0],
    ['Noruega', 'Vikings', '🇳🇴', 0],
    ['Itália', 'Monalisa', '🇮🇹', 0],
    ['Chile', 'Cordilheira dos Andes', '🇨🇱', 0],
    ['Líbia', 'Deserto do Saara', '🇱🇾', 0],
    ['Grã-Bretanha', 'Big Ben', '🇬🇧', 0],
    ['Iraque', 'Islã', '🇮🇶', 0],
    ['Indonésia', 'Dragão de Komodo', '🇮🇩', 0],
    ['Egito', 'Rio Nilo', '🇪🇬', 0],
    ['Ucrânia', 'Chernobyl', '🇺🇦', 0]
]

const getRamd = () => {
    let paisSingle = paises[Math.floor(Math.random() * paises.length)]
    let div = document.getElementById('boxMensagem')
    paisSingle[3] += 1

    div.style.display = 'block'

    div.innerHTML = `
        <h1>${paisSingle[2]}</h1>
        <h1>País: ${paisSingle[0]}</h1>
        <h3>Descrição: ${paisSingle[1]}</h3>
        <h4>Vezes Sorteado:${paisSingle[3]}</h4>
    `

}