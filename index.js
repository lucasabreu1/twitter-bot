var Twit = require('twit')
var config = require('./config')

const [,,greeting,name] = process.argv

function Tweet(){
	var T = new Twit(config)
	var content = {
		status: `${greeting} ${name}!`
	}	

	T.post('statuses/update', content,  function(err, data, responde){
		if(err)
			console.log(err)
		else
			console.log("Post successfully!")
		
	})

	console.log(greeting, name)
}

Tweet()