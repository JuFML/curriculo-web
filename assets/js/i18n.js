/* INTERNACIONALIZAÇÃO
----------------------------------------------------- */
const esAll = document.querySelectorAll('[data-lang=ES]');
const enAll = document.querySelectorAll('[data-lang=EN]');

const atualizaIdioma = (idioma) => {
  if(idioma == 'ES'){
    enAll.forEach(element => {
      element.classList.add('hide');
    });
    esAll.forEach(element => {
      element.classList.remove('hide');
    });
  } else if (idioma == 'EN'){
    esAll.forEach(element => {
      element.classList.add('hide');
    });
    enAll.forEach(element => {
      element.classList.remove('hide');
    });    
  }
};

atualizaIdioma('ES')