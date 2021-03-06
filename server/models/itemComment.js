module.exports = function ItemCommentFunc(sequelize, DataTypes) {
  const ItemComment = sequelize.define('ItemComment', {
    itemId: { type: DataTypes.BIGINT(8).ZEROFILL, autoIncrement: true, allowNull: false, primaryKey: true },
    commentId: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    likeCount: { type: DataTypes.INTEGER, defaultValue: 0 },
    dislikeCount: { type: DataTypes.INTEGER, defaultValue: 0 },
  }, {
    timestamps: true,
    freezeTableName: true,
  });
  return ItemComment;
};
