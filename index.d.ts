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
export declare function promisify(
  fn: (...args: any[]) => void,
  hasMultiBackParams?: boolean,
  noError?: boolean
): (...args: any[]) => Promise<any>;

/**
 * 数组可指定迭代的起始起位置与结束位置
 *
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} end
 * @yields {Number}
 * @since 1.0.0
 */
export declare function keys(
  arr?: any[],
  start?: number,
  end?: number
): Generator<number>;

/**
 *
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} end
 * @yields {Object}
 * @since 1.0.0
 */
export declare function values<T>(
  arr?: T[],
  start?: number,
  end?: number
): Generator<T>;

/**
 *
 *
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} end
 * @yields {{0: Number, 1: Object}} array
 * @since 1.0.0
 */
export declare function entries<T>(
  arr?: T[],
  start?: number,
  end?: number
): Generator<[number, T]>;

/**
 *
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} end
 * @yields {Object}
 * @since 1.0.0
 */
export declare function valuesRight<T>(
  arr?: T[],
  start?: number,
  end?: number
): Generator<T>;

/**
 *
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} end
 * @yields {{0: Number, 1: Object}} array
 * @since 1.0.0
 */
export declare function entriesRight<T>(
  arr?: T[],
  start?: number,
  end?: number
): Generator<[number, T]>;

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
export declare function iterate<T>(
  array: T[],
  step?: number,
  start?: number,
  end?: number
): Generator<T[]>;

/**
 *
 * @param {Number} min 包含
 * @param {Number} max 包含
 * @returns {Number} min ~ max
 */
export declare function range(min: number, max: number): number;

/**
 *
 * @param {Number} milliseconds
 * @returns
 */
export declare function sleep(milliseconds: number): Promise<void>;

/**
 * 迭代树
 *
 * @param {Array} array
 * @param {String} children
 * @yields {Object}
 * @since 1.0.0
 */
export declare function traverse<T>(
  array: T[],
  children?: keyof T
): Generator<T>;
