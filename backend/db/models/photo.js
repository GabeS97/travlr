'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    content: DataTypes.STRING,
    tags: DataTypes.ARRAY(DataTypes.TEXT),
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.Album, { foreignKey: 'albumId' });
    Photo.belongsTo(models.User, { foreignKey: 'userId' });
    Photo.hasMany(models.Comment, { foreignKey: 'imageId', onDelete: 'CASCADE', hooks: true  });
  };
  return Photo;
};
