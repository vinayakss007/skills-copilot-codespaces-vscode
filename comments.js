// create web server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const commentsPath = path.join(__dirname, 'comments.json');
const comments = require('./comments.json');
const uuid = require('uuid/v4');

// handle requests for static files
Router.get('/', CommentsController.comment_list);
Router.get('/:id', CommentsController.comment_detail);
Router.post('/', CommentsController.comment_create);
Router.put('/:id', CommentsController.comment_update);
Router.delete('/:id', CommentsController.comment_delete);


