/**
 * Environmet definition ambient, escalable server deploy 
 */

let PROD = false;
if (process.env.NODE_ENV === 'production') {
    PROD = true;
}
const env = {
    server: PROD ? '' : 'http://localhost:3001',
    api:'/api',
    endpoint_items: '/items',
};
module.exports = env;