/*
Jsnack 1
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const cocurbitacee= [
    {
        varietà:"zucchina1",
        pesoInGrammi:"100",
        lunghezzaInCentimetri:"20",
    },
    {
        varietà:"zucchina2",
        pesoInGrammi:"110",
        lunghezzaInCentimetri:"21",
    },
    {
        varietà:"zucchina3",
        pesoInGrammi:"120",
        lunghezzaInCentimetri:"22",
    },
    {
        varietà:"zucchina4",
        pesoInGrammi:"130",
        lunghezzaInCentimetri:"23",
    },
    {
        varietà:"zucchina5",
        pesoInGrammi:"140",
        lunghezzaInCentimetri:"24",
    },
    {
        varietà:"zucchina6",
        pesoInGrammi:"150",
        lunghezzaInCentimetri:"25",
    },
    {
        varietà:"zucchina7",
        pesoInGrammi:"160",
        lunghezzaInCentimetri:"26",
    },
    {
        varietà:"zucchina8",
        pesoInGrammi:"170",
        lunghezzaInCentimetri:"27",
    },
    {
        varietà:"zucchina9",
        pesoInGrammi:"180",
        lunghezzaInCentimetri:"28",
    },
    {
        varietà:"zucchina10",
        pesoInGrammi:"190",
        lunghezzaInCentimetri:"29",
    },

];

let sum=0;

for (let nomeZucchina  of cocurbitacee) {
    console.log(nomeZucchina);
    const pesoZucchina=parseInt(nomeZucchina.pesoInGrammi);
    sum+=pesoZucchina;
    document.querySelector("h1").innerHTML=`Il peso totale delle zucchine è: ${sum} gr`
    console.log(pesoZucchina);
}
