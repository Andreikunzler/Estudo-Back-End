const nota01 = Number(prompt('Digite a primeira nota'))
const nota02 = Number(prompt('Digite a segunda nota'))
const nota03 = Number(prompt('Digite a terceira nota'))
let rec = 0

const media = (nota01+nota02+nota03)/3

if (media >= 8.0 && media <= 10.0) {
    document.write(`Aprovado com nota excelente, nota: ${media.toFixed(2).replace('.', ',')} `)
} else if(media >= 7.0){
    document.write(`Aprovado com uma nota boa, nota: ${media.toFixed(2).replace('.', ',')} `)
} else {
    rec = parseFloat(prompt('Nota de recuperação'))
    if (rec >= 6.0) {
        document.write(`Aprovado na recuperação, nota: ${rec.toFixed(2).replace('.', ',')} `)
    } else {
        document.write(`Reprovado, estude e pratique mais, nota: ${rec.toFixed(2).replace('.', ',')}`)
    }
    
    
}


