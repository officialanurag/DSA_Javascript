/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
 var cancellable = function(fn, args, t) {
    fn(...args);
    const timeout = setInterval(fn, t, ...args);
    return function () {
        return clearInterval(timeout);
    }
};