// Create web server 

// Import modules
const express = require('express');
const router = express.Router();
const db = require('../models');

// Create routes
router.get('/', (req, res) => {
    db.Comment.findAll({
        include: [db.Post]
    }).then(comments => {
        res.json(comments);
    });
}
);
router.get('/:id', (req, res) => {
    db.Comment.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Post]
    }).then(comment => {
        res.json(comment);
    });
}
);
router.post('/', (req, res) => {
    db.Comment.create({
        title: req.body.title,
        body: req.body.body,
        PostId: req.body.PostId
    }).then(comment => {
        res.json(comment);
    });
}
);
router.put('/:id', (req, res) => {
    db.Comment.update({
        title: req.body.title,
        body: req.body.body,
        PostId: req.body.PostId
    }, {
        where: {
            id: req.params.id
        }
    }).then(comment => {
        res.json(comment);
    });
}
);
router.delete('/:id', (req, res) => {
    db.Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(comment => {
        res.json(comment);
    });
}
);
