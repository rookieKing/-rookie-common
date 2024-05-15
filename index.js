/**!
 * rookieKing@github
 */

/**
 * 
 * @param {Function} fn 
 * @param {Boolean} hasMultiBackParams 指定多个参数返回数组，默认 false
 * @param {Boolean} noError 指定回调参数不返回错误，默认 false
 * @returns {Promise}
 * @since 1.0.0
 */
export function promisify(fn, hasMultiBackParams = false, noError = false) {
  return (...args) => {
    return new Promise((rs, rj) => {
      args.push((err, ...backParams) => {
        if (err && !noError) {
          rj(err);
        } else {
          if (noError) {
            backParams.unshift(err);
          }
          // 指定有多个回调参数时 返回数组
          rs(hasMultiBackParams ? backParams : backParams[0]);
        }
      });
      try {
        fn(...args);
      } catch (e) {
        rj(e);
      }
    });
  }
}

/**
 * 数组可指定迭代的起始起位置与结束位置
 * 
 * @param {Array} arr 
 * @param {Number} start 
 * @param {Number} end 
 * @yields {Number}
 * @since 1.0.0
 */
export function* keys(arr = [], start = 0, end = arr.length) {
  while (start < end) {
    yield start++;
  }
}

/**
 * 
 * @param {Array} arr 
 * @param {Number} start 
 * @param {Number} end 
 * @yields {Object}
 * @since 1.0.0
 */
export function* values(arr = [], start = 0, end = arr.length) {
  while (start < end) {
    yield arr[start++];
  }
}

/**
 * 
 * 
 * @param {Array} arr 
 * @param {Number} start 
 * @param {Number} end 
 * @yields {{0: Number, 1: Object}} array
 * @since 1.0.0
 */
export function* entries(arr = [], start = 0, end = arr.length) {
  while (start < end) {
    yield [start, arr[start++]];
  }
}

/**
 * 
 * @param {Array} arr 
 * @param {Number} start 
 * @param {Number} end 
 * @yields {Object}
 * @since 1.0.0
 */
export function* valuesRight(arr = [], start = arr.length - 1, end = 0) {
  while (start >= end) {
    yield arr[start--];
  }
}

/**
 * 
 * @param {Array} arr 
 * @param {Number} start 
 * @param {Number} end 
 * @yields {{0: Number, 1: Object}} array
 * @since 1.0.0
 */
export function* entriesRight(arr = [], start = arr.length - 1, end = 0) {
  while (start >= end) {
    yield [start, arr[start--]];
  }
}

/**
 * 使用数组代替对象时，方便迭代数组，效率不高但美观。。。
 * @example
 * // 对象
 * [
 *   { x: 1, y: 2, z: 3 },
 *   { x: 4, y: 5, z: 6 },
 *   { x: 7, y: 8, z: 9 },
 * ]
 * // 用数组方式表示对象
 * arr = [
 *   1, 2, 3,
 *   4, 5, 6,
 *   7, 8, 9,
 * ]
 * // 效率迭代
 * for (let x, y, z, start = 0, end = arr.length; start < end;) {
 *   x = arr[start++];
 *   y = arr[start++];
 *   z = arr[start++];
 *   console.log(x, y, z);
 * }
 * // 美观迭代
 * for (let [x, y, z] of iterate(arr, 3)) {
 *   console.log(x, y, z);
 * }
 * 
 * @param {Array} array 
 * @param {Number} step 
 * @param {Number} start 
 * @param {Number} end 
 * @yields {Array}
 * @since 1.0.0
 */
export function* iterate(array, step = 1, start = 0, end = array.length) {
  while (start < end) {
    let out = [];
    let count = step;
    while (count--) {
      out.push(array[start++]);
    }
    yield out;
  }
}

/**
 * 
 * @param {Number} min 包含
 * @param {Number} max 包含
 * @returns {Number} min ~ max
 */
export function range(min, max) {
  // min > max 时交换
  min > max && (min = [max, max = min][0]);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 
 * @param {Number} milliseconds 
 * @returns 
 */
export function sleep(milliseconds) {
  return new Promise(rs => {
    setTimeout(rs, milliseconds);
  });
}

/**
 * 迭代树
 * 
 * @param {Array} array 
 * @param {String} children 
 * @yields {Object}
 * @since 1.0.0
 */
export function* traverse(array, children = 'children') {
  for (const item of array) {
    yield item;

    if (item[children]) {
      yield* traverse(item[children], children);
    }
  }
}
