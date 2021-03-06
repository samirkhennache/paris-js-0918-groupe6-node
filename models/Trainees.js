module.exports = (sequelize, DataTypes) => {
  const Trainee = sequelize.define(
    'Trainee',
    {
      lastname: DataTypes.STRING,
      firstname: DataTypes.STRING,
      email: DataTypes.STRING,
      pictures: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
      town: DataTypes.STRING,
      postalCode: DataTypes.INTEGER,
      dateBirth: DataTypes.DATE,
      password: DataTypes.STRING,
      isClosed: DataTypes.BOOLEAN,
      isActived: DataTypes.BOOLEAN,
      reasonclosed: DataTypes.STRING,
      description: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      school: DataTypes.STRING,
      titre: DataTypes.STRING,
      dateStart: DataTypes.DATE,
      dateEnd: DataTypes.DATE
    },
    {}
  );
  Trainee.associate = models => {
    // associations can be defined here
    Trainee.belongsToMany(models.Missions, { through: 'Applications' });
    Trainee.belongsTo(models.Schools);
    Trainee.belongsTo(models.LevelStudies);
  };
  return Trainee;
};
