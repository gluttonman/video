(() => {
    let html = document.getElementsByTagName('html')[0];
    let width = window.innerWidth;
    window.addEventListener('resize', () => {
        width = window.innerWidth;
        html.style.fontSize = width / 10 + 'px';
    })
    html.style.fontSize = width / 10 + 'px';
    //不允许托选
    document.onselectstart = () => false;
})()