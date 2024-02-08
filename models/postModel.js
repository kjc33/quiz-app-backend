const { sequelize } = require('../db/conn');
const { DataTypes } = require('sequelize');
const { Topic } = require('./topicModel');
const { Reply } = require('./replyModel');

// define the "post" model
const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    topic_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'topics',
            key: 'id'
        }
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'posts',
    timestamps: false
});

// set up associations
Topic.hasMany(Post, {
    foreignKey: 'topic_id'
});
Post.belongsTo(Topic, {
    foreignKey: 'topic_id'
});
Post.hasMany(Reply, {
    foreignKey: 'post_id'
});
Reply.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = { Post };