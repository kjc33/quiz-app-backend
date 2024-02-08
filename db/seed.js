const { sequelize } = require('./conn');
const { Topic } = require('../models/topicModel');
const { Reply } = require('../models/replyModel');
const { Post } = require('../models/postModel');

// seed the database
const seedDatabase = async () => {
    try {
        // clear the database
        await sequelize.sync({ force: true });

        // sync the models
        await Topic.sync({ force: true });
        await Reply.sync({ force: true });
        await Post.sync({ force: true });

        // create some starter topics
        const topics = await Topic.bulkCreate([
            {
                name: 'First Topic',
                body: 'This is the first topic.',
                user_id: 1,
                category_id: 1
            },
            {
                name: 'Second Topic',
                body: 'This is the second topic.',
                user_id: 2,
                category_id: 2
            },
            {
                name: 'Third Topic',
                body: 'This is the third topic.',
                user_id: 3,
                category_id: 3
            }
        ]);

        // add some starter posts
        const posts = await Post.bulkCreate([
            {
                topic_id: topics[0].id,
                body: 'This is the first post.'
            },
            {
                topic_id: topics[1].id,
                body: 'This is the second post.'
            },
            {
                topic_id: topics[2].id,
                body: 'This is the third post.'
            }
        ]);

        // add some starter replies
        await Reply.bulkCreate([
            {
                post_id: posts[0].id,
                body: 'This is a reply to the first post.'
            },
            {
                post_id: posts[1].id,
                body: 'This is a reply to the second post.'
            },
            {
                post_id: posts[2].id,
                body: 'This is a reply to the third post.'
            }
        ]);

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error(error);
    }
}

seedDatabase();