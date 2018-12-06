const express = require('express');

const Router = express.Router();

const models = require('../models');

Router.put('/', (req, res) => {
  const { MissionId, TraineeId } = req.body;
  models.Applications.findOne({
    where: { TraineeId, MissionId, statusAppli: true }
  }).then(applicationFound => {
    if (applicationFound) {
      applicationFound.update({
        statusAppli: false
      });
      // applicationFound.save();
      res.status(201).json({ messga: 'application deleted' });
    } else {
      res.status(404).json({ error: 'application already deleted ' });
    }
  });
});
Router.get('/', (req, res) => {
  res.status(200).json({ message: 'hello to my world' });
});

Router.post('/', (req, res) => {
  // get id_user and id_mission
  const { MissionId, TraineeId } = req.body;
  models.Applications.findOne({
    where: { TraineeId, MissionId }
  }).then(applicationFound => {
    if (!applicationFound) {
      const applicationForm = new models.Applications({
        statusAppli: true,
        MissionId,
        TraineeId
      });
      applicationForm.save();
      res.status(200).json({ messga: 'application created' });
    } else {
      res.status(404).json({ error: 'user already candidate' });
    }
  });
});

module.exports = Router;
