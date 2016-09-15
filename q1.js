/*
this.dict = {
    'alice': ['bob', ['alice']],
    'bob': ['bob', ['bob', 'alice', 'casper']],
    'caspar': ['bob', ['caspar']]
}
*/

function Dict() {} // Constructor

Dict.prototype.keys = function keys() {
    return Object.keys(this);
};

// Constructor
function NoName() {
    this.dict = new Dict();
}

NoName.prototype.helper_func = function helper_func(v) {
    if (!this.dict.keys().includes(v)) {
        this.dict[v] = [v, [v]];
    }

    while (v != this.dict[v][0]) {
        v = this.dict[v][0];
    }

    return v;
};

NoName.prototype.add = function add(items) {
    var self = this;

    if (items instanceof Array) {
        items.forEach(function(item) {
            var a = item[0];
            var b = item[1];
            var result_a = self.helper_func(a);
            var result_b = self.helper_func(b);

            if (result_a != result_b) {
                if (self.dict[result_a][1].length > self.dict[result_b][1].length) {
                    self.dict[result_a][1] = self.dict[result_a][1].concat(self.dict[result_b][1]);
                    self.dict[result_b][0] = a;
                } else {
                    self.dict[result_b][1] = self.dict[result_b][1].concat(self.dict[result_a][1]);
                    self.dict[result_a][0] = b;
                }
            }
        });
    }
};

NoName.prototype.print = function print() {
    var self = this;

    this.dict.keys().forEach(function(n) {
        var r = self.helper_func(self.dict[n][0]);
        console.log(n + ': ' + self.dict[r][1]);
    });
};

var instance = new NoName();
instance.add([
    ['alice', 'bob'],
    ['bob', 'caspar'],
    ['jasmine', 'oscar'],
    ['jasmine', 'steve'],
    ['oscar', 'zed'],
    ['oscar', 'steve'],
    ['steve', 'zed']
]);
instance.print();


/*
Output:

    alice: bob,alice,caspar
    bob: bob,alice,caspar
    caspar: bob,alice,caspar
    jasmine: oscar,jasmine,steve,zed
    oscar: oscar,jasmine,steve,zed
    steve: oscar,jasmine,steve,zed
    zed: oscar,jasmine,steve,zed

*/
