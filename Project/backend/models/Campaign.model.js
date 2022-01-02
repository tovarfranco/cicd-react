// =========== Require's ==============================
const path = require('path');                                                    // Manejo de rutas.

const db = require('../database/models');										 // Elemento de sequelize que tiene todos los modelos.
const Op = db.Sequelize.Op;														 // Para poder usar operadores.
const sequelize = require('sequelize')										     // Para algunos operadores especiales.

// =========== Modelo =================================
const Campaign = {

	/*** Todas las categorías ***/
	findAll: async function () {
		return await db.Campaign.findAll();
	},

	/*** Búsqueda de categoría por PK ***/
	findByPk: async function (id) {
		return await db.Campaign.findByPk(id);
	},

	joinAllProduct: async function () {
		return await db.Campaign.findAll({
			include: [{ association: "products" }]
		});
	}
}

// =========== Exporto Modelo =========================
module.exports = Campaign;