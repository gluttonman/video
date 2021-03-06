/*
 * 404路由 
 */

const path = require('path');
const fs = require('fs');
const mime = require('mime');
const func = async (soc, next) => {
    soc.response.status = 200;
    let p = path.join(__dirname, '..', '..', 'views/404.html');
    soc.response.type = 'text/html;charset=utf-8';
    console.log(p, ': nofound.js 12');
    soc.response.body = fs.createReadStream(p, 'utf-8');
};

module.exports = {
    pathName: '/404',
    get: func
};
