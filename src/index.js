'use strict';

const riot = require('riot');
require('./tags/my-timer.tag');

document.addEventListener('DOMContentLoaded', () => {
    riot.mount('my-timer');
})
