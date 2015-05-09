/**
 * Basic Re-Usable Layout Components
 * - navbar, footer, hero, bullets
 * @type {string}
 */
const prefix = 'bourbon';

export default angular.module('app.layout', [])
  .directive(`${prefix}Navbar`, require('./nav/nav'))
  .directive(`${prefix}Footer`, require('./footer/footer'))
  .directive(`${prefix}Hero`, require('./hero/hero'))
  .directive(`${prefix}Bullets`, require('./bullets/bullets'))
  .directive(`${prefix}Grid`, require('./grid/grid'));