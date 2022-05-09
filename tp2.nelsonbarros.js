console.log('Iniciando o algoritmo Nr 01')
let lista =[]
for(let i=1;i<1000000;i++)
{
  if(i%2==0 && i%3 ==0)
  {
    lista.push(i)
  }
}
console.log(lista.length)
console.log(lista)


console.log('Iniciando o algoritmo Nr 02')
let fat = 53
let total =fat
let inicio = new Date()
for(let j=fat;j>1;j--)
{
    
  total = total* (fat-1)
  fat = fat -1
}  
let final = new Date()
let tempo = final- inicio
console.log(`53!= ${total} (${tempo})`)

console.log("Iniciando o algoritmo Nr 03")
let alunos= []
let x = 0
let reprovados = 0
while(x < 20)
{
  alunos.push(Math.floor((Math.random() * 101)))
  x++
}  
console.log("Relatório das notas da turma")
for(nota in alunos)
{
  if(alunos[nota]< 50)
    {
      console.log(`Aluno nr ${nota} - Nota ${alunos[nota]} REPROVADO`)
      reprovados++
    }
  else
    {
      console.log(`Aluno nr ${nota} - Nota ${alunos[nota]} APROVADO`)
    }
  }  
console.log(`APROVADOS: ${20-reprovados}(${((20-reprovados)/20)*100}%) | REPROVADOS: ${reprovados}(${((reprovados)/20)*100}%) `)

console.log("Iniciando o algoritmo Nr 04")
let numeros =[]
let k = 1000
while(k>0)
{
  numeros.push(Math.floor((Math.random() * 5001)))
  k--
}  
numeros.sort(function(a, b) {
  return a - b;
});

console.log(numeros)

console.log("Iniciando o algoritmo Nr 05")
function descobreTriangulo(a,b,c)
{
  if(a==b && b== c)
    {
      return "equilatero"
    }
  else if(a!= b && b!= c)
    {
      return "escaleno"
    }
  else
    {
      return "isosceles"
    }
}  

console.log(descobreTriangulo(5,5,5))
console.log(descobreTriangulo(45,45,90))  
console.log(descobreTriangulo(25,35,45))