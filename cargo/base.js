/**
 * @fileoverview The entry point.
 *
 * @author joseph@cs.utexas.edu (Joe Tessler)
 */

goog.provide('cargo.base');

goog.require('cargo.model.Bot');
goog.require('cargo.model.Cargo');
goog.require('goog.graphics');


/**
 * Sets up the UI and initializes all game code.
 */
cargo.base.main = function() {
  var canvas = new goog.graphics.CanvasGraphics(500, 500);
  var font = new goog.graphics.Font(40, 'Arial');
  var stroke = new goog.graphics.Stroke(1, 'black');
  var fill = new goog.graphics.SolidFill('black');
  canvas.render();
  canvas.drawText(
      'Hello, World!', 200, 240, 100, 20, 'left', 'top', font, stroke, fill);

  var bot = new cargo.model.Bot();
  bot.cargo = new cargo.model.Cargo([0, 0, 0]);
};
goog.exportSymbol('main', cargo.base.main);