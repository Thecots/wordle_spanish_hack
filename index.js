const sect1 = document.querySelector('.flettersgp div'),
      sect2 = document.querySelector('.flettersbp input'),
      sect3 = document.querySelector('.flettersb input'),
      lista = document.querySelector('.list');

async function doit(){
  palabra = await load();

  for(let i = 0; i < sect1.childElementCount; i++){
    if(sect1.children[i].value != ''){
      palabra = palabra.filter(n => {
        if(n[i].includes(sect1.children[i].value)){
          return n;
        }
      })
    }
  }

  for(let i = 0; i < sect2.value.length; i++){
    palabra = palabra.filter(n => {
      if(n.includes(sect2.value[i])){
        return n;
      }
    })
  }

  for(let i = 0; i < sect3.value.length; i++){
    palabra = palabra.filter(n => {
      if(!n.includes(sect3.value[i])){
        return n;
      }
    })
  }

  let template = '';
  palabra.forEach((n,i) => {
    template += i == palabra.length-1 ? `<p>${n}.</p>` :  `<p>${n},</p> `;
  });

  let t = `${palabra.length} Palabras encontradas`;
  if(palabra.length == 1){
    t = '1 Palabra encontrada';
  };

  lista.innerHTML = `<header><h1>${t}</h1></header><div>${template}</div>`;
}

/* load json */
async function load() {
  palabra =  await (await fetch('./palabras.json')).json();
  return palabra;
}

/* info */

function info(){
  document.querySelector('.info').classList.toggle('active');
}

document.querySelector('.info').addEventListener('click', () => {
  info()
})

