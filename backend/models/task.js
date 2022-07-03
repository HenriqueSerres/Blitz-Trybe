const Task = (sequelize, DataTypes) => {
	const Task = sequelize.define('Task', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
	}, {
		timestamps: true,
	});

	Task.associate = (models) => {
		Task.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
	};

	return Task;
};

module.exports = Task;