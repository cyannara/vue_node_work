const boards = require('./sqls/boards.js');
const comments = require('./sqls/comments.js');

module.exports = {
  ...boards,
  ...comments
}