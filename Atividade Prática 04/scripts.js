let quant50 = 0
let quant10 = 0
let quant5 = 0
let quant1 = 0
let saque = Number(prompt("Quanto deseja sacar?"))
let sobra = saque
if(sobra >= 50){
    quant50= Math.floor(saque/50)
    sobra = (saque - (quant50*50))
  }
if(sobra >= 10 && sobra < 50){
    quant10= Math.floor(sobra/10)
    sobra = sobra - (quant10*10)
  }
if(sobra >= 5 && sobra < 10){
    quant5= Math.floor(sobra/5)
    sobra = sobra - (quant5*5)
  }
if(sobra >= 1 && sobra < 5){
    quant1= Math.floor(sobra/1)
    sobra = sobra - (quant1*1)
  } 
 document.write(`Saque<br>`)   
 document.write(`GC$ 50,00 -> ${quant50}<br>`)
 document.write(`GC$ 10,00 -> ${quant10}<br>`)
 document.write(`GC$ 5,00 -> ${quant5}<br>`)
 document.write(`GC$ 1,00 -> ${quant1}<br>`)