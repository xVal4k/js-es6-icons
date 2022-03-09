/* Esercizio fatto granparte segguendo Gabriel e Mauro, voglio imparare a ragionare facendo più funzioni
e meno cicli for lunghi intere pagine, per cui ogni giorno mi rimetterò a farlo da capo il file js sperando
che mi entrino bene ste funzioni */


const areaBoxes = document.querySelector(".area_boxes");

createBox(icons, areaBoxes);



function createBox(iconsArray, iconsContainer) {

    iconsContainer.innerHTML = '';
    iconsArray.forEach(element => {
        const box =  document.createElement('div');
        box.classList.add('box');
    box.innerHTML = `<i class="${element.family} ${element.prefix}${element.name}" style ="color:${element.color}"></i>
    <p>${element.name}</p>`

    iconsContainer.append(box);

    });
}


const filterSelection = document.getElementById('pick_filter');

filterSelection.addEventListener('change', function() {
    const filterSelected = this.value;

    let iconsByFilter = [];

    if (filterSelected != 'all') {
        iconsByFilter = icons.filter((element) => {
            if (element.type == filterSelected) {
                return true
            }
        });
        createBox(iconsByFilter, areaBoxes)
    } else {
        createBox(icons, areaBoxes);
    }
});

