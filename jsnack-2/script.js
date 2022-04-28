/*Jsnack 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const wrapper= document.getElementById("wrapper");

const cocurbitacee= [
    {
        varietà:"zucchina1",
        pesoInGrammi:"100",
        lunghezzaInCentimetri:"10",
    },
    {
        varietà:"zucchina2",
        pesoInGrammi:"110",
        lunghezzaInCentimetri:"11",
    },
    {
        varietà:"zucchina3",
        pesoInGrammi:"120",
        lunghezzaInCentimetri:"12",
    },
    {
        varietà:"zucchina4",
        pesoInGrammi:"130",
        lunghezzaInCentimetri:"13",
    },
    {
        varietà:"zucchina5",
        pesoInGrammi:"140",
        lunghezzaInCentimetri:"14",
    },
    {
        varietà:"zucchina6",
        pesoInGrammi:"150",
        lunghezzaInCentimetri:"15",
    },
    {
        varietà:"zucchina7",
        pesoInGrammi:"160",
        lunghezzaInCentimetri:"16",
    },
    {
        varietà:"zucchina8",
        pesoInGrammi:"170",
        lunghezzaInCentimetri:"17",
    },
    {
        varietà:"zucchina9",
        pesoInGrammi:"180",
        lunghezzaInCentimetri:"18",
    },
    {
        varietà:"zucchina10",
        pesoInGrammi:"190",
        lunghezzaInCentimetri:"19",
    },

];

const menoQuindiciCm=[];
const piùQuindiciCm=[];

for (const key in cocurbitacee) {
    const zucchina=cocurbitacee[key];
    if (zucchina.lunghezzaInCentimetri < 15) {
        menoQuindiciCm.push(zucchina);
        
    }else{
        piùQuindiciCm.push(zucchina);
    }
    //console.log(zucchina);
    
}

console.log("più", menoQuindiciCm);
console.log("meno", piùQuindiciCm);


let sumLunghe=0;

for (let zucchina  of piùQuindiciCm) {
    //console.log(zucchina);
    const pesoZucchinaLunga=parseInt(zucchina.pesoInGrammi);
    sumLunghe+=pesoZucchinaLunga;
    document.querySelector("#zucchine-lunghe h3").innerHTML=`${sumLunghe} gr`
    console.log(pesoZucchinaLunga);
}

let sumCorte=0;

for (let zucchina  of menoQuindiciCm) {
    //console.log(zucchina);
    const pesoZucchinaCorta=parseInt(zucchina.pesoInGrammi);
    sumCorte+=pesoZucchinaCorta;
    document.querySelector("#zucchine-corte h3").innerHTML=`${sumCorte} gr`
    console.log(pesoZucchinaCorta);
}
