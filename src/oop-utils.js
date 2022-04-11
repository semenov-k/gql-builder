/**
 * Extend constructor (like class inheritance).
 * @param {Function} targetConstructor 
 * @param {Function} baseConstructor 
 */
export function extendConstructor(targetConstructor, baseConstructor) {
  targetConstructor.prototype = Object.create(baseConstructor.prototype, {
    constructor: targetConstructor
  });
}

/**
 * The function allows you to add method to an object prototype in a more convinient way.
 * It hides all added methods from enumerable fields.
 * @param {Function} targetPrototype 
 * @param {string} methodName 
 * @param {Function} methodFunc 
 */
export function addMethod(targetConstructor, methodName, methodFunc) {
  Object.defineProperty(targetConstructor.prototype, methodName, {
    value: methodFunc,
    enumerable: false
  });
}