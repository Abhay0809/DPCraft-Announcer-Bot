const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");


client.on('ready', () => {
  console.log('DPCraft Announcer bot is ready for making annoucements!');
});


//BOT STATUS
client.on('ready', () => {
client.user.setActivity(`${config.prefix}embedhelp`, { type: 'WATCHING' });
});


client.on('message', message => {
	//HELP COMMAND
	if (message.content.startsWith(config.prefix + "embedhelp")) {
		const about = new Discord.MessageEmbed()
		.setColor('#16ec50')
		.setTitle('EmbedBot')
		.setDescription('These are the current EmbedBot Commands!')
		.setAuthor('Coded by Abhay', 'https://i.imgur.com/lKuBaAt.png', '')
		.addFields(
			{ name: 'Send embed', value: `${config.prefix}embed Title_Message`},
			{ name: 'Send custom colour embed (In HEX or HTML Colour Names)', value: `${config.prefix}colourembed Colour_Title_Message`},
			{ name: 'Send rainbow embed', value: `${config.prefix}rainbowembed Title_Message`},
			{ name: 'Restart Bot', value: `${config.prefix}restartembedbot`})
			.setTimestamp()
		message.channel.send(about);
		}
		else
		//EMBED COMMAND
		if (message.content.startsWith(config.prefix + "embed")) {
			if(message.member.roles.cache.has(config.staffid)) {
				const command = config.prefix + "embed"
				const args = message.content.slice(command.length).trim().split(/ +/g);
				const announcement = args.slice(0).join(" ")
				var parts = announcement.split('_', 2);
				const announcementembed = new Discord.MessageEmbed()
				.setColor(`#00B0ED`)
				.addFields(
					{ name: parts[0], value: parts[1]},)
					.setTimestamp()
					.setFooter(`Sent by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
					message.delete()
					message.channel.send(announcementembed);
					//Console log
					console.log('----------------------------------------------------------------------------')
					console.log(`${message.author.username} embedded the following message: `)
					console.log(`Channel: ${message.channel}`)
					console.log(`Title: ${parts[0]}`)
					console.log(`Message: ${parts[1]}`);
					console.log('----------------------------------------------------------------------------')
					console.log('')   
			}
			else {
				message.channel.send(`Sorry, but you don't have the correct permissions to use this command :(`)
			}
		}
		else
			//CUSTOM COLOR COMMAND
			if (message.content.startsWith(config.prefix + "colourembed")) {
				if(message.member.roles.cache.has(config.staffid)) {
					const command = config.prefix + "colourembed"
					const args = message.content.slice(command.length).trim().split(/ +/g);
					const announcement = args.slice(0).join(" ")
					var parts = announcement.split('_', 3);
					const announcementembed = new Discord.MessageEmbed()
					.setColor(`${parts[0]}`)
					.addFields(
						{ name: parts[1], value: parts[2]},)
						.setTimestamp()
						.setFooter(`Sent by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
						message.delete()
						message.channel.send(announcementembed);
						//Console log
						console.log('----------------------------------------------------------------------------')
						console.log(`${message.author.username} embedded the following message: `)
						console.log(`Channel: ${message.channel}`)
						console.log(`Title: ${parts[1]}`)
						console.log(`Message: ${parts[2]}`);
						console.log('----------------------------------------------------------------------------')
						console.log('')   
				}
				else {
					message.channel.send(`Sorry, but you don't have the correct permissions to use this command :(`)
				}
			}
			else
				//RAINBOW COLOR COMMAND
				if (message.content.startsWith(config.prefix + "rainbowembed")) {
					if(message.member.roles.cache.has(config.staffid)) {
						const command = config.prefix + "rainbowembed"
						const args = message.content.slice(command.length).trim().split(/ +/g);
						const announcement = args.slice(0).join(" ")
						var parts = announcement.split('_', 2);
						var RandomColour = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
						const announcementembed = new Discord.MessageEmbed()
						.setColor(`${RandomColour}`)
						.addFields(
							{ name: parts[0], value: parts[1]},)
							.setTimestamp()
							.setFooter(`Sent by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
							message.delete()
							message.channel.send(announcementembed);
							//Console log
							console.log('----------------------------------------------------------------------------')
							console.log(`${message.author.username} embedded the following message: `)
							console.log(`Channel: ${message.channel}`)
							console.log(`Title: ${parts[0]}`)
							console.log(`Message: ${parts[1]}`);
							console.log('----------------------------------------------------------------------------')
							console.log('')   
					}
					else {
						message.channel.send(`Sorry, but you don't have the correct permissions to use this command :(`)
					}
				}
				else
					//RESTARTING THE BOT
					if (message.content.startsWith(config.prefix + "restartembedbot")) {
						if(message.member.roles.cache.has(config.staffid)) {
							console.log(`Embed Bot is restarting...`);
							message.channel.send('EmbedBot is restarting...').then(sentMessage =>  process.exit(0))
					}
					else {
						message.channel.send(`Sorry, but you don't have the correct permissions to use this command :(`)
					}
				}
});


client.login(config.token);
