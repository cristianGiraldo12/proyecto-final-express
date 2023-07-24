module.exports = (sequelize, dataTypes) => {
    let alias = "Generos";

    let colums = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "generos",
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    }

    const Genero = sequelize.define(alias, colums, config);
    
    Genero.associate = function(modelos){
        Genero.hasMany(modelos.Canciones, {
            as: "canciones",
            foreignKey: "genero_id"
        })
    }
    
    return Genero;
}