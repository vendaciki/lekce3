// tady je místo pro náš program

/*
- Vytvoř program, který se zeptá uživatele na jeho jméno, příjmení a rok narození. Na výstupu vypiš jeho jméno, příjmení a věk.
Filip Procházka 30

- Přidej do programu "vstup" uživatele s jeho oblíbenou barvou (anglicky) s tím, že celý výpis s úkolu č. 1 obarvíš danou barvou, ze vstupu uživatele.
*/




const jmeno = prompt("Zadej své jméno");
const prijmeni = prompt("Zadej své příjmení");
const rok = Number(prompt("Zadej svůj rok narození"));
const rokTed = 2023;

const vek = (rokTed - rok); 

document.body.innerHTML = (jmeno + " " + prijmeni + " " + vek);

const barva = prompt("Jaká je tvá oblíbená barva? (anglicky)");
let barva1 = document.querySelector("body");
barva1.style.color = (barva);
