function servicesMenu() {
    let items = document.getElementById('items');

    if (items.style.left != '0%') {
        items.style.left = '0%'
    }
    
    else {
        items.style.left = '-90%'
    }
}

function toggleMenu() {
    let nv = document.getElementById('navigation');

    if (nv.style.height != '60px') {
        nv.style.height = '60px'
    }
    
    else {
        nv.style.height = '339px'
    }
}