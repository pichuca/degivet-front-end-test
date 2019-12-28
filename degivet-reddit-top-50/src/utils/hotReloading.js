// Util functions.

/**
 * @hotReloading
 * @param {*} path 
 * @param {*} component
 * Enables hot realoding for development environment. 
 */
export default function hotReloading(path, component) {
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept(path, component);
    }
}