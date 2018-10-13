'use strict';

export default class Utils {

	// Array map
  static map(arr, callback) {
		var i, outputs = [], length = arr ? arr.length : 0;
		for (i = 0; i < length; i += 1) {
		  outputs[i] = callback(arr[i], i, arr);
		}
		return outputs;
  }
  
  // Variable To Array
  static toArray(source) {
    var i, length = source ? source.length : 0, output = [];
    for (i = 0; i < length; i += 1) {
        output[i] = source[i];
    }
    return output;
  }
  
  // Add ClassName
  static addClass(elm, className) {
    if (!className) {return; }
    var i, classList;
    if (/\s/.test(className)) {
      classList = className.replace(/(^\s+)|(\s+$)/g, "").split(/\s+/);
      for (i = 0; i < classList.length; i += 1) {
        addClass(elm, classList[i]);
      }
      return;
    }
    if (elm.classList && elm.classList.add) {return elm.classList.add(className); }
    classList = elm.className.replace(/(^\s+)|(\s+$)/g, "").split(/\s+/);
    i = indexOf(classList, className);
    if (i === -1) {
      classList.push(className);
      elm.className = classList.join(" ");
    }
  }

}