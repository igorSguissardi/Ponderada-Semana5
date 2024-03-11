//3) 
let resultado = 0;
for (let i = 10; i >= 0; i -= 2) {
    if (i === 4) {
        continue;
    }
    
    if (i === 6) {
        break;
    }
    resultado += i;
}

// No fim do algorítimo do resultado recebe 18
// resposta A)
