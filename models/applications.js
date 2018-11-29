module.exports = (sequelize, DataTypes) => {
  const applications = sequelize.define(
    'applications',
    {
      statusAppli: DataTypes.STRING,
      dateAppli: DataTypes.DATE,
      preselection: DataTypes.STRING,
      selection: DataTypes.BOOLEAN
    },
    {}
  );
  applications.associate = models => {
    // associations can be defined here
  };
  return applications;
};