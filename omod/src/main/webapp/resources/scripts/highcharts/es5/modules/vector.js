/*
 Highcharts JS v11.1.0 (2023-06-28)

 Vector plot series module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/vector",["highcharts"],function(d){b(d);b.Highcharts=d;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function d(b,f,d,e){b.hasOwnProperty(f)||(b[f]=e.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:f,module:b[f]}})))}b=b?b._modules:
{};d(b,"Series/Vector/VectorSeries.js",[b["Core/Animation/AnimationUtilities.js"],b["Core/Globals.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,f,d,e){var k=this&&this.__extends||function(){var b=function(c,a){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var g in b)Object.prototype.hasOwnProperty.call(b,g)&&(a[g]=b[g])};return b(c,a)};return function(c,a){function g(){this.constructor=c}if("function"!==typeof a&&
null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");b(c,a);c.prototype=null===a?Object.create(a):(g.prototype=a.prototype,new g)}}(),l=b.animObject,m=d.series,h=d.seriesTypes.scatter,n=e.arrayMax;b=e.extend;var p=e.merge,q=e.pick;e=function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;a.data=void 0;a.lengthMax=void 0;a.options=void 0;a.points=void 0;return a}k(c,b);c.prototype.animate=function(a){a?this.markerGroup.attr({opacity:.01}):this.markerGroup.animate({opacity:1},
l(this.options.animation))};c.prototype.arrow=function(a){a=a.length/this.lengthMax*this.options.vectorLength/20;var b={start:10*a,center:0,end:-10*a}[this.options.rotationOrigin]||0;return[["M",0,7*a+b],["L",-1.5*a,7*a+b],["L",0,10*a+b],["L",1.5*a,7*a+b],["L",0,7*a+b],["L",0,-10*a+b]]};c.prototype.drawPoints=function(){var b=this.chart;this.points.forEach(function(a){var c=a.plotX,d=a.plotY;!1===this.options.clip||b.isInsidePlot(c,d,{inverted:b.inverted})?(a.graphic||(a.graphic=this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-"+
q(a.colorIndex,a.series.colorIndex))),a.graphic.attr({d:this.arrow(a),translateX:c,translateY:d,rotation:a.direction}),this.chart.styledMode||a.graphic.attr(this.pointAttribs(a))):a.graphic&&(a.graphic=a.graphic.destroy())},this)};c.prototype.pointAttribs=function(a,b){var c=this.options;a=a.color||this.color;var d=this.options.lineWidth;b&&(a=c.states[b].color||a,d=(c.states[b].lineWidth||d)+(c.states[b].lineWidthPlus||0));return{stroke:a,"stroke-width":d}};c.prototype.translate=function(){m.prototype.translate.call(this);
this.lengthMax=n(this.lengthData)};c.defaultOptions=p(h.defaultOptions,{lineWidth:2,rotationOrigin:"center",states:{hover:{lineWidthPlus:1}},tooltip:{pointFormat:"<b>[{point.x}, {point.y}]</b><br/>Length: <b>{point.length}</b><br/>Direction: <b>{point.direction}\u00b0</b><br/>"},vectorLength:20},{marker:null});return c}(h);b(e.prototype,{drawGraph:f.noop,getSymbol:f.noop,markerAttribs:f.noop,parallelArrays:["x","y","length","direction"],pointArrayMap:["y","length","direction"]});d.registerSeriesType("vector",
e);"";return e});d(b,"masters/modules/vector.src.js",[],function(){})});
//# sourceMappingURL=vector.js.map