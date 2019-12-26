/**
 *
 * Asynchronously loads the component for Todos
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
