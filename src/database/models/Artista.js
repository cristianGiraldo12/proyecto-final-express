module.exports = (sequelize, dataTypes) => {
    let alias = "Artistas";

    let colums = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "artistas",
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }

    const Artista = sequelize.define(alias, colums, config);

    Artista.associate = function(modelos){
        Artista.hasMany(modelos.Canciones, {
            as: "canciones",
            foreignKey: "artista_id"
        })
    }

    return Artista;
 }