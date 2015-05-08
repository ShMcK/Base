/**
 * Current users identity
 */
export default angular.module('app.identity', [])
  .value('identity', {
    id: 1,
    firstName: 'Name'
  });
