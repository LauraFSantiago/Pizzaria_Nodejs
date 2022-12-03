const Pedidos = require('../models/pedidos')
const Home = require('../models/User')

module.exports = class homeController {
    static async showHome(req, res) {
        res.render('pedidos/home')
    }


static async dashboard(req, res) {

    res.render('pedidos/dashboard')
    }
}