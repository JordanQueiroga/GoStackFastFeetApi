module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'fastfeet',
  define: {
    timestemps: true,
    underscored: true,
    underscoredAll: true,
  },
};
