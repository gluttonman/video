/* upload file*/
let log = console.log;

function $(str) {
    let a;
    if (typeof str === 'string') {
        a = document.querySelector(str);
    } else {
        a = str;
    }
    let b = function() {
        this.obj = a;
    }
    b.prototype = {
        ev(str, fn) {
            this.obj.addEventListener(str, fn);
        },
        s(obj) {
            for (let x in obj) {
                this.obj.style[x] = obj[x];
            }
        },
        html(h) {
            this.obj.innerHTML = h.innerHTML;
        },
        setA(attr, value) {
            this.obj.setAttribute(attr, value);
        }
    }
    return new b();
}
(() => {
    // let input = document.querySelector('#file');
    // file.addEventListener('change', function() {

    // });
    // let button = document.querySelector('.button');
    // button.addEventListener('click', () => {
    //     if (!input.files[0]) {
    //         return void alert('选择文件');
    //     };
    //     let formdata = new FormData();
    //     formdata.append(input.files[0].name, input.files[0]);
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('post', '/upload', true);
    //     xhr.upload.onloadstart = () => {
    //         window.onbeforeunload = (e) => {
    //             return void alert('uploading');
    //         }
    //     }
    //     xhr.upload.onprogress = (e) => {
    //         e = e || window.event;
    //         let percent = e.loaded / e.total;
    //     }
    //     xhr.send(formdata);
    // })
})();