'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    // imageUrl: DataTypes.STRING,
  }, {});
  Album.associate = function (models) {
    // associations can be defined here
    Album.belongsTo(models.User, { foreignKey: 'userId' }),
    Album.hasMany(models.Photo, { foreignKey: 'albumId', onDelete: 'CASCADE', hooks: true });
  };
  return Album;
};
