/**
 *
 * Asynchronously loads the component for Todo
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
