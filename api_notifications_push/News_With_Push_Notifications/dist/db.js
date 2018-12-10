"use strict";

var _sequelize = _interopRequireDefault(require("sequelize"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = null;

module.exports = function (app) {
  var config = app.libs.config;

  if (!db) {
    var sequelize = new _sequelize.default(config.database, config.username, config.password, config.params);
    db = {
      sequelize: sequelize,
      Sequelize: _sequelize.default,
      models: {}
    };

    var dir = _path.default.join(__dirname, 'models');

    _fs.default.readdirSync(dir).forEach(function (filename) {
      console.log("---------------->Adding model: ", filename);

      var modelDir = _path.default.join(dir, filename);

      var model = sequelize.import(modelDir);
      db.models[model.name] = model;
    });

    console.log("////////////////>All Models charged:", db.models);
    Object.keys(db.models).forEach(function (key) {
      console.log("****************assosiating: ", db.models[key].name);
      db.models[key].associate(db.models);
    });
  }

  return db;
};