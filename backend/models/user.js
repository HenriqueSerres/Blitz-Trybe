const User = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
	}, {
		timestamps: false
	});

	User.associate = (models) => {
		User.hasMany(models.Task, { as: 'tasks', foreignKey: 'userId' });
	};

	return User;
};

module.exports = User;