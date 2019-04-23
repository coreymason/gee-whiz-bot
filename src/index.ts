import Discord from 'discord.js'
import config from './config'

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

let number = -1;

client.on('message', message => {
	if (!message.content.startsWith(config.prefix)) return;

	const args = message.content.slice(config.prefix.length).split(/ +/);
	const command = args.shift()!.toLowerCase();

	if (command === 'ping') {
		message.channel.send('I am thinking of a number from 0 to 1');
        message.channel.send('Mwahahahaha!!!!');

        number = Math.random();
        console.log(number);
	} else if (command === 'pong' && args.length === 1) {
        const guessed = parseFloat(args[0]);
		if (guessed == number) {
            message.channel.send('You win!');
        } else {
            message.channel.send(guessed > number ? 'lower' : 'higher');
        }
	} else if(command === '!rename') {

    }
});


client.login(process.env.BOT_TOKEN);
