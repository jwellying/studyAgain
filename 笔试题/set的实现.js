/**
 * 模拟实现第一版
 */
(function(global) {

    function Set(data) {
        this._values = [];
        this.size = 0;

        data && data.forEach(function(item) {
            this.add(item);
        }, this);
    }

    Set.prototype['add'] = function(value) {
        if (this._values.indexOf(value) == -1) {
            this._values.push(value);
            ++this.size;
        }
        return this;
    }

    Set.prototype['has'] = function(value) {
        return (this._values.indexOf(value) !== -1);
    }

    Set.prototype['delete'] = function(value) {
        var idx = this._values.indexOf(value);
        if (idx == -1) return false;
        this._values.splice(idx, 1);
        --this.size;
        return true;
    }

    Set.prototype['clear'] = function(value) {
        this._values = [];
        this.size = 0;
    }

    Set.prototype['forEach'] = function(callbackFn, thisArg) {
        thisArg = thisArg || global;
        for (var i = 0; i < this._values.length; i++) {
            callbackFn.call(thisArg, this._values[i], this._values[i], this);
        }
    }

    Set.length = 0;

    global.Set = Set;

})(this)