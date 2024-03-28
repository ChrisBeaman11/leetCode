function memoize(fn) {
    this.memoize = {};
    return function(...args) {
        if(!this.memoize[args]){
        this.memoize[args] = [true, fn(...args)];
            return this.memoize[args][1];
        }
        return this.memoize[args][1];
    }
}
