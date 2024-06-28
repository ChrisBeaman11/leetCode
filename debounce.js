var debounce = function(fn, t) {
    this.called = false;
    let time;
    return function(...args) {
        if(this.called){
            clearTimeout(time);
            this.called = false;
    }
            time = setTimeout(() => {
            fn(...args);
}, t);
        this.called = true;
    }
};
//debounce
