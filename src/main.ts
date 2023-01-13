import newman from 'newman';
//const newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback

newman.run({
    collection: require('./collections/trello_dev_env.postman_collection.json'), 
    environment: require('./collections/trello_dev.postman_environment.json'), 
    reporters: 'junit',
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});