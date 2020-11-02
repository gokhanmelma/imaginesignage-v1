const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('/', '/')
routes.add('about', '/about')
routes.add('blog', '/blog')
routes.add('clients', '/clients')
routes.add('contact', '/contact')
routes.add('features', '/features')
routes.add('login', '/login')
routes.add('partners', '/partners')
routes.add('pricing', '/pricing')
routes.add('register', '/register')
routes.add('shop', '/shop')
routes.add('product', '/product/:slug')
routes.add('widgets', '/widgets')

routes.add('industries', '/industries/:slug')

routes.add('widget', '/widget/:slug')