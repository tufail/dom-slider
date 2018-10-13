'use strict';

import Utils from "./utils";

export default class Slider {

	constructor(options) { 
    this.sourceMerge     = [];
    this.oldItems        = []; 
    this.clones          = []; 
    this.container       = document.createElement('div');   
    this.selector        = typeof options.selector  !== 'undefined' ? options.selector : '[es-slider]';
    this.slideItems      = Utils.toArray(document.querySelector(this.selector).children) ||  0;
    this.items           = Utils.map(this.slideItems, (item) => {
                                let div = document.createElement("div");
                                div.appendChild(item);
                                this.container.appendChild(div);
                                Utils.addClass(div, 'es-slider__item');
                                this.oldItems.push({opacity: 0, opacityInit: 0, view: 0});
                                return div;
                            }); 
    document.querySelector(this.selector).appendChild(this.container);  
    Utils.addClass(this.container, 'es-slider__wrap');
    Utils.addClass(this.container.children[0], 'active');
	}
  
}