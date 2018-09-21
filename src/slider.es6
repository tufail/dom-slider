"use strict";
import Utitlity from './utils.es6';

export default class Slider {

	constructor(sliderSelector, options = {}){
       this.sliderElement  = sliderSelector;
       this.init(options);
	}
 
	init(options){
	  this.title = options.title || null;
	  alert(this.title);
	}
}