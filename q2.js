function no_name_one(a, b) {
  var x;

  if (a.length !== b.length) {
    return false;
  }

  for (x = 0; x < b.length; ++x) {
    if (a[0] === b[x]) {
      return no_name_one(no_name_two(a, 0), no_name_two(b, x));
    }
  }

  return b.length === 0;
}


function no_name_two(s, j) {
  var ret = new Array(s.length - 1);
  var d = 0;
  var k;

  for (k = 0; k < s.length; k++) {
    if (k === j) {
        d = 1;
    } else {
        ret[k - d] = s[k];
    }
  }

  return ret.join('');
}


function no_name_one1(a, b) {
  var x;
  var y;
  var len = b.length;

  if (a.length !== b.length) {
    return false;
  }

  for (x = 0, y = len - 1; x < len; ++x, y--) {
    if (a[x] !== b[y]) {
      return false;
    }
  }

  return true;
}


console.log(no_name_one('dad', 'bad'));  // false
console.log(no_name_one1('ameet', 'teema')); // true
console.log(no_name_one1('ameets', 'steema')); // true
console.log(no_name_one('malayalam', 'malayalam')); // true
console.log(no_name_one('sanghamitra', 'artimahgnas')); // true