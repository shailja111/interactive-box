function toggleBox(selectedBox) {
    document.querySelectorAll('.box').forEach(box => {
        if (box !== selectedBox) {
            box.classList.remove('active');
            box.querySelector('.content').style.display = 'none';
        }
    });

    if (!selectedBox.classList.contains('active')) {
        selectedBox.classList.add('active');
        selectedBox.querySelector('.content').style.display = 'block';
    } else {
        selectedBox.classList.remove('active');
        selectedBox.querySelector('.content').style.display = 'none';
    }
}


document.querySelectorAll('.content select').forEach(select => {
    select.addEventListener('click', event => {
        event.stopPropagation(); 
    });
});
