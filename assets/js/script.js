var tabs = document.querySelectorAll(".contPossib");
tabs.forEach(tab => {
    tab.style.display = 'none';
})

document.querySelector('.poss1').style.display = 'block';

function openTab(tabName) {
    var tabs = document.querySelectorAll(".contPossib");
    tabs.forEach(tab => {
        tab.style.display = 'none';
    })

    document.querySelector(`.${tabName}`).style.display = 'block';
}