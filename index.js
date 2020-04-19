const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzAxMDYzNjkzMzI0MjU1MjYy.Xpy7gw.OOmqP843zDPdWUi_GWtZRmgZEDI';
const prefix = '!';
const RichEmbed = require('discord.js');

bot.on('ready', () => { console.log('O BOT ESTÁ ATIVO')
	bot.user.setActivity(": TIBIAME!", { 
	type: 'PLAYING'
})

})

bot.on('message', msg => {
    if (msg.content === '!sets'){
        msg.reply('https://2.bp.blogspot.com/-xciIU9hrTdw/W5MJYoVP0HI/AAAAAAAAQdw/FMRt8p-qrHgzBJuoSFTBVVTAsZaZn43PQCLcBGAs/s1600/wpon%2Bwar.gif' + '\n' + '!warwpn = armas de warrior' + '\n' + '!warhlm = capacetes de warrior' + '\n' + '!warleg = calças de warrior' + '\n' + '!warshd = escudo de warrior' + '\n' + '!wararm = armaduras de warrior' + '\n' + '!wizwpn = armas de wizard' + '\n' + '!wizhlm = capacetes de wizard' + '\n' + '!wizleg = calças de wizard' + '\n' + '!wizshd = escudo de wizard' + '\n' + '!wizarm = armaduras de wizard')}
    if (msg.content === '!instagram'){
        msg.reply('https://www.instagram.com/tibiamebrasilbr' + '\n' + 'https://www.instagram.com/lincoln_oliveira03/')}
        
    if (msg.content === '!help'){msg.reply('\n' + '!sets' + '\n' + '!stamina'+ '\n' + '!instagram'+ '\n' + '!youtube')}

	if (msg.content === '!stamina'){msg.reply('coloque sua stamina igual está no jogo ex:>>> !21:35')}
	if (msg.content === '!00:00'){msg.reply('Sua stamina ficara cheia em 4 Dia, 16h e 12min')} 
	if (msg.content === '!00:01'){msg.reply('Sua stamina ficara cheia em 4 Dia, 16h e 10min')} 
	if (msg.content === '!00:02'){msg.reply('Sua stamina ficara cheia em 4 Dia, 16h e 8min')} 
	if (msg.content === '!00:03'){msg.reply('Sua stamina ficara cheia em 4 Dia, 16h e 4min')} 
	if (msg.content === '!00:04'){msg.reply('Sua stamina ficara cheia em 4 Dia, 16h e 2min')} 
	if (msg.content === '!00:05'){msg.reply('Sua stamina ficara cheia em 4 Dia, 16h e 0min')} 
	if (msg.content === '!00:06'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 58min')} 
	if (msg.content === '!00:07'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 56min')} 
	if (msg.content === '!00:08'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 54min')} 
	if (msg.content === '!00:09'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 52min')} 
	if (msg.content === '!00:10'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 50min')} 
	if (msg.content === '!00:11'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 48min')} 
	if (msg.content === '!00:12'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 46min')} 
	if (msg.content === '!00:13'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 44min')} 
	if (msg.content === '!00:14'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 42min')} 
	if (msg.content === '!00:15'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 40min')} 
	if (msg.content === '!00:16'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 38min')} 
	if (msg.content === '!00:17'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 36min')} 
	if (msg.content === '!00:18'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 34min')} 
	if (msg.content === '!00:19'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 32min')} 
	if (msg.content === '!00:20'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 30min')} 
	if (msg.content === '!00:21'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 28min')} 
	if (msg.content === '!00:22'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 26min')} 
	if (msg.content === '!00:23'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 24min')} 
	if (msg.content === '!00:24'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 22min')} 
	if (msg.content === '!00:25'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 20min')} 
	if (msg.content === '!00:26'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 18min')} 
	if (msg.content === '!00:27'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 16min')} 
	if (msg.content === '!00:28'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 14min')} 
	if (msg.content === '!00:29'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 12min')} 
	if (msg.content === '!00:30'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 10min')} 
	if (msg.content === '!00:31'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 8min')} 
	if (msg.content === '!00:32'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 6min')} 
	if (msg.content === '!00:33'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 4min')} 
	if (msg.content === '!00:34'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 2min')} 
	if (msg.content === '!00:35'){msg.reply('Sua stamina ficara cheia em 4 Dia, 15h e 0min')} 
	if (msg.content === '!00:36'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 58min')} 
	if (msg.content === '!00:37'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 56min')} 
	if (msg.content === '!00:38'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 54min')} 
	if (msg.content === '!00:39'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 52min')} 
	if (msg.content === '!00:40'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 50min')} 
	if (msg.content === '!00:41'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 48min')} 
	if (msg.content === '!00:42'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 46min')} 
	if (msg.content === '!00:43'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 44min')} 
	if (msg.content === '!00:44'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 42min')} 
	if (msg.content === '!00:45'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 40min')} 
	if (msg.content === '!00:46'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 38min')} 
	if (msg.content === '!00:47'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 36min')} 
	if (msg.content === '!00:48'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 34min')} 
	if (msg.content === '!00:49'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 32min')} 
	if (msg.content === '!00:50'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 30min')} 
	if (msg.content === '!00:51'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 28min')} 
	if (msg.content === '!00:52'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 26min')} 
	if (msg.content === '!00:53'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 24min')} 
	if (msg.content === '!00:54'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 22min')} 
	if (msg.content === '!00:55'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 20min')} 
	if (msg.content === '!00:56'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 18min')} 
	if (msg.content === '!00:57'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 16min')} 
	if (msg.content === '!00:58'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 14min')} 
	if (msg.content === '!00:59'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 12min')} 
	if (msg.content === '!01:00'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 10min')} 
	if (msg.content === '!01:01'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 8min')} 
	if (msg.content === '!01:02'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 6min')} 
	if (msg.content === '!01:03'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 4min')} 
	if (msg.content === '!01:04'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 2min')} 
	if (msg.content === '!01:05'){msg.reply('Sua stamina ficara cheia em 4 Dia, 14h e 0min')} 
	if (msg.content === '!01:06'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 58min')} 
	if (msg.content === '!01:07'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 56min')} 
	if (msg.content === '!01:08'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 54min')} 
	if (msg.content === '!01:09'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 52min')} 
	if (msg.content === '!01:10'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 50min')} 
	if (msg.content === '!01:11'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 48min')} 
	if (msg.content === '!01:12'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 46min')} 
	if (msg.content === '!01:13'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 44min')} 
	if (msg.content === '!01:14'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 42min')} 
	if (msg.content === '!01:15'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 40min')} 
	if (msg.content === '!01:16'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 38min')} 
	if (msg.content === '!01:17'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 36min')} 
	if (msg.content === '!01:18'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 34min')} 
	if (msg.content === '!01:19'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 32min')} 
	if (msg.content === '!01:20'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 30min')} 
	if (msg.content === '!01:21'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 28min')} 
	if (msg.content === '!01:22'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 26min')} 
	if (msg.content === '!01:23'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 24min')} 
	if (msg.content === '!01:24'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 22min')} 
	if (msg.content === '!01:25'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 20min')} 
	if (msg.content === '!01:26'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 18min')} 
	if (msg.content === '!01:27'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 16min')} 
	if (msg.content === '!01:28'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 14min')} 
	if (msg.content === '!01:29'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 12min')} 
	if (msg.content === '!01:30'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 10min')} 
	if (msg.content === '!01:31'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 8min')} 
	if (msg.content === '!01:32'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 6min')} 
	if (msg.content === '!01:33'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 4min')} 
	if (msg.content === '!01:34'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 2min')} 
	if (msg.content === '!01:35'){msg.reply('Sua stamina ficara cheia em 4 Dia, 13h e 0min')} 
	if (msg.content === '!01:36'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 58min')} 
	if (msg.content === '!01:37'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 56min')} 
	if (msg.content === '!01:38'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 54min')} 
	if (msg.content === '!01:39'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 52min')} 
	if (msg.content === '!01:40'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 50min')} 
	if (msg.content === '!01:41'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 48min')} 
	if (msg.content === '!01:42'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 46min')} 
	if (msg.content === '!01:43'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 44min')} 
	if (msg.content === '!01:44'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 42min')} 
	if (msg.content === '!01:45'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 40min')} 
	if (msg.content === '!01:46'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 38min')} 
	if (msg.content === '!01:47'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 36min')} 
	if (msg.content === '!01:48'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 34min')} 
	if (msg.content === '!01:49'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 32min')} 
	if (msg.content === '!01:50'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 30min')} 
	if (msg.content === '!01:51'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 28min')} 
	if (msg.content === '!01:52'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 26min')} 
	if (msg.content === '!01:53'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 24min')} 
	if (msg.content === '!01:54'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 22min')} 
	if (msg.content === '!01:55'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 20min')} 
	if (msg.content === '!01:56'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 18min')} 
	if (msg.content === '!01:57'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 16min')} 
	if (msg.content === '!01:58'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 14min')} 
	if (msg.content === '!02:59'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 12min')} 
	if (msg.content === '!02:00'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 10min')} 
	if (msg.content === '!02:01'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 8min')} 
	if (msg.content === '!02:02'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 6min')} 
	if (msg.content === '!02:03'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 4min')} 
	if (msg.content === '!02:04'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 2min')} 
	if (msg.content === '!02:05'){msg.reply('Sua stamina ficara cheia em 4 Dia, 12h e 0min')} 
	if (msg.content === '!02:06'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 58min')} 
	if (msg.content === '!02:07'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 56min')} 
	if (msg.content === '!02:08'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 54min')} 
	if (msg.content === '!02:09'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 52min')} 
	if (msg.content === '!02:10'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 50min')} 
	if (msg.content === '!02:11'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 48min')} 
	if (msg.content === '!02:12'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 46min')} 
	if (msg.content === '!02:13'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 44min')} 
	if (msg.content === '!02:14'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 42min')} 
	if (msg.content === '!02:15'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 40min')} 
	if (msg.content === '!02:16'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 38min')} 
	if (msg.content === '!02:17'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 36min')} 
	if (msg.content === '!02:18'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 34min')} 
	if (msg.content === '!02:19'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 32min')} 
	if (msg.content === '!02:20'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 30min')} 
	if (msg.content === '!02:21'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 28min')} 
	if (msg.content === '!02:22'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 26min')} 
	if (msg.content === '!02:23'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 24min')} 
	if (msg.content === '!02:24'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 22min')} 
	if (msg.content === '!02:25'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 20min')} 
	if (msg.content === '!02:26'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 18min')} 
	if (msg.content === '!02:27'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 16min')} 
	if (msg.content === '!02:28'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 14min')} 
	if (msg.content === '!02:29'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 12min')} 
	if (msg.content === '!02:30'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 10min')} 
	if (msg.content === '!02:31'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 8min')} 
	if (msg.content === '!02:32'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 6min')} 
	if (msg.content === '!02:33'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 4min')} 
	if (msg.content === '!02:34'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 2min')} 
	if (msg.content === '!02:35'){msg.reply('Sua stamina ficara cheia em 4 Dia, 11h e 0min')} 
	if (msg.content === '!02:36'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 58min')} 
	if (msg.content === '!02:37'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 56min')} 
	if (msg.content === '!02:38'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 54min')} 
	if (msg.content === '!02:39'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 52min')} 
	if (msg.content === '!02:40'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 50min')} 
	if (msg.content === '!02:41'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 48min')} 
	if (msg.content === '!02:42'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 46min')} 
	if (msg.content === '!02:43'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 44min')} 
	if (msg.content === '!02:44'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 42min')} 
	if (msg.content === '!02:45'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 40min')} 
	if (msg.content === '!02:46'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 38min')} 
	if (msg.content === '!02:47'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 36min')} 
	if (msg.content === '!02:48'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 34min')} 
	if (msg.content === '!02:49'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 32min')} 
	if (msg.content === '!02:50'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 30min')} 
	if (msg.content === '!02:51'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 28min')} 
	if (msg.content === '!02:52'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 26min')} 
	if (msg.content === '!02:53'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 24min')} 
	if (msg.content === '!02:54'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 22min')} 
	if (msg.content === '!02:55'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 20min')} 
	if (msg.content === '!02:56'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 18min')} 
	if (msg.content === '!02:57'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 16min')} 
	if (msg.content === '!02:58'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 14min')} 
	if (msg.content === '!02:59'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 12min')} 
	if (msg.content === '!03:00'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 10min')} 
	if (msg.content === '!03:01'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 8min')} 
	if (msg.content === '!03:02'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 6min')} 
	if (msg.content === '!03:03'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 4min')} 
	if (msg.content === '!03:04'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 2min')} 
	if (msg.content === '!03:05'){msg.reply('Sua stamina ficara cheia em 4 Dia, 10h e 0min')} 
	if (msg.content === '!03:06'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 58min')} 
	if (msg.content === '!03:07'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 56min')} 
	if (msg.content === '!03:08'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 54min')} 
	if (msg.content === '!03:09'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 52min')} 
	if (msg.content === '!03:10'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 50min')} 
	if (msg.content === '!03:11'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 48min')} 
	if (msg.content === '!03:12'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 46min')} 
	if (msg.content === '!03:13'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 44min')} 
	if (msg.content === '!03:14'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 42min')} 
	if (msg.content === '!03:15'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 40min')} 
	if (msg.content === '!03:16'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 38min')} 
	if (msg.content === '!03:17'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 36min')} 
	if (msg.content === '!03:18'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 34min')} 
	if (msg.content === '!03:19'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 32min')} 
	if (msg.content === '!03:20'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 30min')} 
	if (msg.content === '!03:21'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 28min')} 
	if (msg.content === '!03:22'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 26min')} 
	if (msg.content === '!03:23'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 24min')} 
	if (msg.content === '!03:24'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 22min')} 
	if (msg.content === '!03:25'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 20min')} 
	if (msg.content === '!03:26'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 18min')} 
	if (msg.content === '!03:27'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 16min')} 
	if (msg.content === '!03:28'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 14min')} 
	if (msg.content === '!03:29'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 12min')} 
	if (msg.content === '!03:30'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 10min')} 
	if (msg.content === '!03:31'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 8min')} 
	if (msg.content === '!03:32'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 6min')} 
	if (msg.content === '!03:33'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 4min')} 
	if (msg.content === '!03:34'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 2min')} 
	if (msg.content === '!03:35'){msg.reply('Sua stamina ficara cheia em 4 Dia, 9h e 0min')} 
	if (msg.content === '!03:36'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 58min')} 
	if (msg.content === '!03:37'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 56min')} 
	if (msg.content === '!03:38'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 54min')} 
	if (msg.content === '!03:39'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 52min')} 
	if (msg.content === '!03:40'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 50min')} 
	if (msg.content === '!03:41'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 48min')} 
	if (msg.content === '!03:42'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 46min')} 
	if (msg.content === '!03:43'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 44min')} 
	if (msg.content === '!03:44'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 42min')} 
	if (msg.content === '!03:45'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 40min')} 
	if (msg.content === '!03:46'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 38min')} 
	if (msg.content === '!03:47'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 36min')} 
	if (msg.content === '!03:48'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 34min')} 
	if (msg.content === '!03:49'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 32min')} 
	if (msg.content === '!03:50'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 30min')} 
	if (msg.content === '!03:51'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 28min')} 
	if (msg.content === '!03:52'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 26min')} 
	if (msg.content === '!03:53'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 24min')} 
	if (msg.content === '!03:54'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 22min')} 
	if (msg.content === '!03:55'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 20min')} 
	if (msg.content === '!03:56'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 18min')} 
	if (msg.content === '!03:57'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 16min')} 
	if (msg.content === '!03:58'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 14min')} 
	if (msg.content === '!03:59'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 12min')} 
	if (msg.content === '!04:00'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 10min')} 
	if (msg.content === '!04:01'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 8min')} 
	if (msg.content === '!04:02'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 6min')} 
	if (msg.content === '!04:03'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 4min')} 
	if (msg.content === '!04:04'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 2min')} 
	if (msg.content === '!04:05'){msg.reply('Sua stamina ficara cheia em 4 Dia, 8h e 0min')} 
	if (msg.content === '!04:06'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 58min')} 
	if (msg.content === '!04:07'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 56min')} 
	if (msg.content === '!04:08'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 54min')} 
	if (msg.content === '!04:09'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 52min')} 
	if (msg.content === '!04:10'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 50min')} 
	if (msg.content === '!04:11'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 48min')} 
	if (msg.content === '!04:12'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 46min')} 
	if (msg.content === '!04:13'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 44min')} 
	if (msg.content === '!04:14'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 42min')} 
	if (msg.content === '!04:15'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 40min')} 
	if (msg.content === '!04:16'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 38min')} 
	if (msg.content === '!04:17'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 36min')} 
	if (msg.content === '!04:18'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 34min')} 
	if (msg.content === '!04:19'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 32min')} 
	if (msg.content === '!04:20'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 30min')} 
	if (msg.content === '!04:21'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 28min')} 
	if (msg.content === '!04:22'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 26min')} 
	if (msg.content === '!04:23'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 24min')} 
	if (msg.content === '!04:24'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 22min')} 
	if (msg.content === '!04:25'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 20min')} 
	if (msg.content === '!04:26'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 18min')} 
	if (msg.content === '!04:27'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 16min')} 
	if (msg.content === '!04:28'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 14min')} 
	if (msg.content === '!04:29'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 12min')} 
	if (msg.content === '!04:30'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 10min')} 
	if (msg.content === '!04:31'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 8min')} 
	if (msg.content === '!04:32'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 6min')} 
	if (msg.content === '!04:33'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 4min')} 
	if (msg.content === '!04:34'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 2min')} 
	if (msg.content === '!04:35'){msg.reply('Sua stamina ficara cheia em 4 Dia, 7h e 0min')} 
	if (msg.content === '!04:36'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 58min')} 
	if (msg.content === '!04:37'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 56min')} 
	if (msg.content === '!04:38'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 54min')} 
	if (msg.content === '!04:39'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 52min')} 
	if (msg.content === '!04:40'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 50min')} 
	if (msg.content === '!04:41'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 48min')} 
	if (msg.content === '!04:42'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 46min')} 
	if (msg.content === '!04:43'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 44min')} 
	if (msg.content === '!04:44'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 42min')} 
	if (msg.content === '!04:45'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 40min')} 
	if (msg.content === '!04:46'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 38min')} 
	if (msg.content === '!04:47'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 36min')} 
	if (msg.content === '!04:48'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 34min')} 
	if (msg.content === '!04:49'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 32min')} 
	if (msg.content === '!04:50'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 30min')} 
	if (msg.content === '!04:51'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 28min')} 
	if (msg.content === '!04:52'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 26min')} 
	if (msg.content === '!04:53'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 24min')} 
	if (msg.content === '!04:54'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 22min')} 
	if (msg.content === '!04:55'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 20min')} 
	if (msg.content === '!04:56'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 18min')} 
	if (msg.content === '!04:57'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 16min')} 
	if (msg.content === '!04:58'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 14min')} 
	if (msg.content === '!04:59'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 12min')} 
	if (msg.content === '!05:00'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 10min')} 
	if (msg.content === '!05:01'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 8min')} 
	if (msg.content === '!05:02'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 6min')} 
	if (msg.content === '!05:03'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 4min')} 
	if (msg.content === '!05:04'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 2min')} 
	if (msg.content === '!05:05'){msg.reply('Sua stamina ficara cheia em 4 Dia, 6h e 0min')} 
	if (msg.content === '!05:06'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 58min')} 
	if (msg.content === '!05:07'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 56min')} 
	if (msg.content === '!05:08'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 54min')} 
	if (msg.content === '!05:09'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 52min')} 
	if (msg.content === '!05:10'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 50min')} 
	if (msg.content === '!05:11'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 48min')} 
	if (msg.content === '!05:12'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 46min')} 
	if (msg.content === '!05:13'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 44min')} 
	if (msg.content === '!05:14'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 42min')} 
	if (msg.content === '!05:15'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 40min')} 
	if (msg.content === '!05:16'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 38min')} 
	if (msg.content === '!05:17'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 36min')} 
	if (msg.content === '!05:18'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 34min')} 
	if (msg.content === '!05:19'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 32min')} 
	if (msg.content === '!05:20'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 30min')} 
	if (msg.content === '!05:21'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 28min')} 
	if (msg.content === '!05:22'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 26min')} 
	if (msg.content === '!05:23'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 24min')} 
	if (msg.content === '!05:24'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 22min')} 
	if (msg.content === '!05:25'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 20min')} 
	if (msg.content === '!05:26'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 18min')} 
	if (msg.content === '!05:27'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 16min')} 
	if (msg.content === '!05:28'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 14min')} 
	if (msg.content === '!05:29'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 12min')} 
	if (msg.content === '!05:30'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 10min')} 
	if (msg.content === '!05:31'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 8min')} 
	if (msg.content === '!05:32'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 6min')} 
	if (msg.content === '!05:33'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 4min')} 
	if (msg.content === '!05:34'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 2min')} 
	if (msg.content === '!05:35'){msg.reply('Sua stamina ficara cheia em 4 Dia, 5h e 0min')} 
	if (msg.content === '!05:36'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 58min')} 
	if (msg.content === '!05:37'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 56min')} 
	if (msg.content === '!05:38'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 54min')} 
	if (msg.content === '!05:39'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 52min')} 
	if (msg.content === '!05:40'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 50min')} 
	if (msg.content === '!05:41'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 48min')} 
	if (msg.content === '!05:42'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 46min')} 
	if (msg.content === '!05:43'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 44min')} 
	if (msg.content === '!05:44'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 42min')} 
	if (msg.content === '!05:45'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 40min')} 
	if (msg.content === '!05:46'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 38min')} 
	if (msg.content === '!05:47'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 36min')} 
	if (msg.content === '!05:48'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 34min')} 
	if (msg.content === '!05:49'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 32min')} 
	if (msg.content === '!05:50'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 30min')} 
	if (msg.content === '!05:51'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 28min')} 
	if (msg.content === '!05:52'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 26min')} 
	if (msg.content === '!05:53'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 24min')} 
	if (msg.content === '!05:54'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 22min')} 
	if (msg.content === '!05:55'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 20min')} 
	if (msg.content === '!05:56'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 18min')} 
	if (msg.content === '!05:57'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 16min')} 
	if (msg.content === '!05:58'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 14min')} 
	if (msg.content === '!05:59'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 12min')} 
	if (msg.content === '!06:00'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 10min')} 
	if (msg.content === '!06:01'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 8min')} 
	if (msg.content === '!06:02'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 6min')} 
	if (msg.content === '!06:03'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 4min')} 
	if (msg.content === '!06:04'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 2min')} 
	if (msg.content === '!06:05'){msg.reply('Sua stamina ficara cheia em 4 Dia, 4h e 0min')} 
	if (msg.content === '!06:06'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 58min')} 
	if (msg.content === '!06:07'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 56min')} 
	if (msg.content === '!06:08'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 54min')} 
	if (msg.content === '!06:09'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 52min')} 
	if (msg.content === '!06:10'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 50min')} 
	if (msg.content === '!06:11'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 48min')} 
	if (msg.content === '!06:12'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 46min')} 
	if (msg.content === '!06:13'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 44min')} 
	if (msg.content === '!06:14'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 42min')} 
	if (msg.content === '!06:15'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 40min')} 
	if (msg.content === '!06:16'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 38min')} 
	if (msg.content === '!06:17'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 36min')} 
	if (msg.content === '!06:18'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 34min')} 
	if (msg.content === '!06:19'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 32min')} 
	if (msg.content === '!06:20'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 30min')} 
	if (msg.content === '!06:21'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 28min')} 
	if (msg.content === '!06:22'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 26min')} 
	if (msg.content === '!06:23'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 24min')} 
	if (msg.content === '!06:24'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 22min')} 
	if (msg.content === '!06:25'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 20min')} 
	if (msg.content === '!06:26'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 18min')} 
	if (msg.content === '!06:27'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 16min')} 
	if (msg.content === '!06:28'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 14min')} 
	if (msg.content === '!06:29'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 12min')} 
	if (msg.content === '!06:30'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 10min')} 
	if (msg.content === '!06:31'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 8min')} 
	if (msg.content === '!06:32'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 6min')} 
	if (msg.content === '!06:33'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 4min')} 
	if (msg.content === '!06:34'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 2min')} 
	if (msg.content === '!06:35'){msg.reply('Sua stamina ficara cheia em 4 Dia, 3h e 0min')} 
	if (msg.content === '!06:36'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 58min')} 
	if (msg.content === '!06:37'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 56min')} 
	if (msg.content === '!06:38'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 54min')} 
	if (msg.content === '!06:39'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 52min')} 
	if (msg.content === '!06:40'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 50min')} 
	if (msg.content === '!06:41'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 48min')} 
	if (msg.content === '!06:42'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 46min')} 
	if (msg.content === '!06:43'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 44min')} 
	if (msg.content === '!06:44'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 42min')} 
	if (msg.content === '!06:45'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 40min')} 
	if (msg.content === '!06:46'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 38min')} 
	if (msg.content === '!06:47'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 36min')} 
	if (msg.content === '!06:48'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 34min')} 
	if (msg.content === '!06:49'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 32min')} 
	if (msg.content === '!06:50'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 30min')} 
	if (msg.content === '!06:51'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 28min')} 
	if (msg.content === '!06:52'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 26min')} 
	if (msg.content === '!06:53'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 24min')} 
	if (msg.content === '!06:54'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 22min')} 
	if (msg.content === '!06:55'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 20min')} 
	if (msg.content === '!06:56'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 18min')} 
	if (msg.content === '!06:57'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 16min')} 
	if (msg.content === '!06:58'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 14min')} 
	if (msg.content === '!06:59'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 12min')} 
	if (msg.content === '!07:00'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 10min')} 
	if (msg.content === '!07:01'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 8min')} 
	if (msg.content === '!07:02'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 6min')} 
	if (msg.content === '!07:03'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 4min')} 
	if (msg.content === '!07:04'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 2min')} 
	if (msg.content === '!07:05'){msg.reply('Sua stamina ficara cheia em 4 Dia, 2h e 0min')} 
	if (msg.content === '!07:06'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 58min')} 
	if (msg.content === '!07:07'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 56min')} 
	if (msg.content === '!07:08'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 54min')} 
	if (msg.content === '!07:09'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 52min')} 
	if (msg.content === '!07:10'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 50min')} 
	if (msg.content === '!07:11'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 48min')} 
	if (msg.content === '!07:12'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 46min')} 
	if (msg.content === '!07:13'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 44min')} 
	if (msg.content === '!07:14'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 42min')} 
	if (msg.content === '!07:15'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 40min')} 
	if (msg.content === '!07:16'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 38min')} 
	if (msg.content === '!07:17'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 36min')} 
	if (msg.content === '!07:18'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 34min')} 
	if (msg.content === '!07:19'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 32min')} 
	if (msg.content === '!07:20'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 30min')} 
	if (msg.content === '!07:21'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 28min')} 
	if (msg.content === '!07:22'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 26min')} 
	if (msg.content === '!07:23'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 24min')} 
	if (msg.content === '!07:24'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 22min')} 
	if (msg.content === '!07:25'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 20min')} 
	if (msg.content === '!07:26'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 18min')} 
	if (msg.content === '!07:27'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 16min')} 
	if (msg.content === '!07:28'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 14min')} 
	if (msg.content === '!07:29'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 12min')} 
	if (msg.content === '!07:30'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 10min')} 
	if (msg.content === '!07:31'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 8min')} 
	if (msg.content === '!07:32'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 6min')} 
	if (msg.content === '!07:33'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 4min')} 
	if (msg.content === '!07:34'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 2min')} 
	if (msg.content === '!07:35'){msg.reply('Sua stamina ficara cheia em 4 Dia, 1h e 0min')} 
	if (msg.content === '!07:36'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 58min')} 
	if (msg.content === '!07:37'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 56min')} 
	if (msg.content === '!07:38'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 54min')} 
	if (msg.content === '!07:39'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 52min')} 
	if (msg.content === '!07:40'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 50min')} 
	if (msg.content === '!07:41'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 48min')} 
	if (msg.content === '!07:42'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 46min')} 
	if (msg.content === '!07:43'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 44min')} 
	if (msg.content === '!07:44'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 42min')} 
	if (msg.content === '!07:45'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 40min')} 
	if (msg.content === '!07:46'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 38min')} 
	if (msg.content === '!07:47'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 36min')} 
	if (msg.content === '!07:48'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 34min')} 
	if (msg.content === '!07:49'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 32min')} 
	if (msg.content === '!07:50'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 30min')} 
	if (msg.content === '!07:51'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 28min')} 
	if (msg.content === '!07:52'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 26min')} 
	if (msg.content === '!07:53'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 24min')} 
	if (msg.content === '!07:54'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 22min')} 
	if (msg.content === '!07:55'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 20min')} 
	if (msg.content === '!07:56'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 18min')} 
	if (msg.content === '!07:57'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 16min')} 
	if (msg.content === '!07:58'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 14min')} 
	if (msg.content === '!07:59'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 12min')} 
	if (msg.content === '!08:00'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 10min')} 
	if (msg.content === '!08:01'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 8min')} 
	if (msg.content === '!08:02'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 6min')} 
	if (msg.content === '!08:03'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 4min')} 
	if (msg.content === '!08:04'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 2min')} 
	if (msg.content === '!08:05'){msg.reply('Sua stamina ficara cheia em 4 Dia, e 0min')} 
	if (msg.content === '!08:06'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 58min')} 
	if (msg.content === '!08:07'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 56min')} 
	if (msg.content === '!08:08'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 54min')} 
	if (msg.content === '!08:09'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 52min')} 
	if (msg.content === '!08:10'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 50min')} 
	if (msg.content === '!08:11'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 48min')} 
	if (msg.content === '!08:12'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 46min')} 
	if (msg.content === '!08:13'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 44min')} 
	if (msg.content === '!08:14'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 42min')} 
	if (msg.content === '!08:15'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 40min')} 
	if (msg.content === '!08:16'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 38min')} 
	if (msg.content === '!08:17'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 36min')} 
	if (msg.content === '!08:18'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 34min')} 
	if (msg.content === '!08:19'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 32min')} 
	if (msg.content === '!08:20'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 30min')} 
	if (msg.content === '!08:21'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 28min')} 
	if (msg.content === '!08:22'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 26min')} 
	if (msg.content === '!08:23'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 24min')} 
	if (msg.content === '!08:24'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 22min')} 
	if (msg.content === '!08:25'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 20min')} 
	if (msg.content === '!08:26'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 18min')} 
	if (msg.content === '!08:27'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 16min')} 
	if (msg.content === '!08:28'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 14min')} 
	if (msg.content === '!08:29'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 12min')} 
	if (msg.content === '!08:30'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 10min')} 
	if (msg.content === '!08:31'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 8min')} 
	if (msg.content === '!08:32'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 6min')} 
	if (msg.content === '!08:33'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 4min')} 
	if (msg.content === '!08:34'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 2min')} 
	if (msg.content === '!08:35'){msg.reply('Sua stamina ficara cheia em 3 Dia, 23h e 0min')} 
	if (msg.content === '!08:36'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 58min')} 
	if (msg.content === '!08:37'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 56min')} 
	if (msg.content === '!08:38'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 54min')} 
	if (msg.content === '!08:39'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 52min')} 
	if (msg.content === '!08:40'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 50min')} 
	if (msg.content === '!08:41'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 48min')} 
	if (msg.content === '!08:42'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 46min')} 
	if (msg.content === '!08:43'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 44min')} 
	if (msg.content === '!08:44'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 42min')} 
	if (msg.content === '!08:45'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 40min')} 
	if (msg.content === '!08:46'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 38min')} 
	if (msg.content === '!08:47'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 36min')} 
	if (msg.content === '!08:48'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 34min')} 
	if (msg.content === '!08:49'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 32min')} 
	if (msg.content === '!08:50'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 30min')} 
	if (msg.content === '!08:51'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 28min')} 
	if (msg.content === '!08:52'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 26min')} 
	if (msg.content === '!08:53'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 24min')} 
	if (msg.content === '!08:54'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 22min')} 
	if (msg.content === '!08:55'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 20min')} 
	if (msg.content === '!08:56'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 18min')} 
	if (msg.content === '!08:57'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 16min')} 
	if (msg.content === '!08:58'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 14min')} 
	if (msg.content === '!08:59'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 12min')} 
	if (msg.content === '!09:00'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 10min')} 
	if (msg.content === '!09:01'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 8min')} 
	if (msg.content === '!09:02'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 6min')} 
	if (msg.content === '!09:03'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 4min')} 
	if (msg.content === '!09:04'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 2min')} 
	if (msg.content === '!09:05'){msg.reply('Sua stamina ficara cheia em 3 Dia, 22h e 0min')} 
	if (msg.content === '!09:06'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 58min')} 
	if (msg.content === '!09:07'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 56min')} 
	if (msg.content === '!09:08'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 54min')} 
	if (msg.content === '!09:09'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 52min')} 
	if (msg.content === '!09:10'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 50min')} 
	if (msg.content === '!09:11'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 48min')} 
	if (msg.content === '!09:12'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 46min')} 
	if (msg.content === '!09:13'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 44min')} 
	if (msg.content === '!09:14'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 42min')} 
	if (msg.content === '!09:15'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 40min')} 
	if (msg.content === '!09:16'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 38min')} 
	if (msg.content === '!09:17'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 36min')} 
	if (msg.content === '!09:18'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 34min')} 
	if (msg.content === '!09:19'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 32min')} 
	if (msg.content === '!09:20'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 30min')} 
	if (msg.content === '!09:21'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 28min')} 
	if (msg.content === '!09:22'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 26min')} 
	if (msg.content === '!09:23'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 24min')} 
	if (msg.content === '!09:24'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 22min')} 
	if (msg.content === '!09:25'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 20min')} 
	if (msg.content === '!09:26'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 18min')} 
	if (msg.content === '!09:27'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 16min')} 
	if (msg.content === '!09:28'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 14min')} 
	if (msg.content === '!09:29'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 12min')} 
	if (msg.content === '!09:30'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 10min')} 
	if (msg.content === '!09:31'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 8min')} 
	if (msg.content === '!09:32'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 6min')} 
	if (msg.content === '!09:33'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 4min')} 
	if (msg.content === '!09:34'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 2min')} 
	if (msg.content === '!09:35'){msg.reply('Sua stamina ficara cheia em 3 Dia, 21h e 0min')} 
	if (msg.content === '!09:36'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 58min')} 
	if (msg.content === '!09:37'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 56min')} 
	if (msg.content === '!09:38'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 54min')} 
	if (msg.content === '!09:39'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 52min')} 
	if (msg.content === '!09:40'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 50min')} 
	if (msg.content === '!09:41'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 48min')} 
	if (msg.content === '!09:42'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 46min')} 
	if (msg.content === '!09:43'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 44min')} 
	if (msg.content === '!09:44'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 42min')} 
	if (msg.content === '!09:45'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 40min')} 
	if (msg.content === '!09:46'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 38min')} 
	if (msg.content === '!09:47'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 36min')} 
	if (msg.content === '!09:48'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 34min')} 
	if (msg.content === '!09:49'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 32min')} 
	if (msg.content === '!09:50'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 30min')} 
	if (msg.content === '!09:51'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 28min')} 
	if (msg.content === '!09:52'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 26min')} 
	if (msg.content === '!09:53'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 24min')} 
	if (msg.content === '!09:54'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 22min')} 
	if (msg.content === '!09:55'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 20min')} 
	if (msg.content === '!09:56'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 18min')} 
	if (msg.content === '!09:57'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 16min')} 
	if (msg.content === '!09:58'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 14min')} 
	if (msg.content === '!09:59'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 12min')} 
	if (msg.content === '!10:00'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 10min')} 
	if (msg.content === '!10:01'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 8min')} 
	if (msg.content === '!10:02'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 6min')} 
	if (msg.content === '!10:03'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 4min')} 
	if (msg.content === '!10:04'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 2min')} 
	if (msg.content === '!10:05'){msg.reply('Sua stamina ficara cheia em 3 Dia, 20h e 0min')} 
	if (msg.content === '!10:06'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 58min')} 
	if (msg.content === '!10:07'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 56min')} 
	if (msg.content === '!10:08'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 54min')} 
	if (msg.content === '!10:09'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 52min')} 
	if (msg.content === '!10:10'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 50min')} 
	if (msg.content === '!10:11'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 48min')} 
	if (msg.content === '!10:12'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 46min')} 
	if (msg.content === '!10:13'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 44min')} 
	if (msg.content === '!10:14'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 42min')} 
	if (msg.content === '!10:15'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 40min')} 
	if (msg.content === '!10:16'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 38min')} 
	if (msg.content === '!10:17'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 36min')} 
	if (msg.content === '!10:18'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 34min')} 
	if (msg.content === '!10:19'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 32min')} 
	if (msg.content === '!10:20'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 30min')} 
	if (msg.content === '!10:21'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 28min')} 
	if (msg.content === '!10:22'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 26min')} 
	if (msg.content === '!10:23'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 24min')} 
	if (msg.content === '!10:24'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 22min')} 
	if (msg.content === '!10:25'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 20min')} 
	if (msg.content === '!10:26'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 18min')} 
	if (msg.content === '!10:27'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 16min')} 
	if (msg.content === '!10:28'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 14min')} 
	if (msg.content === '!10:29'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 12min')} 
	if (msg.content === '!10:30'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 10min')} 
	if (msg.content === '!10:31'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 8min')} 
	if (msg.content === '!10:32'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 6min')} 
	if (msg.content === '!10:33'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 4min')} 
	if (msg.content === '!10:34'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 2min')} 
	if (msg.content === '!10:35'){msg.reply('Sua stamina ficara cheia em 3 Dia, 19h e 0min')} 
	if (msg.content === '!10:36'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 58min')} 
	if (msg.content === '!10:37'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 56min')} 
	if (msg.content === '!10:38'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 54min')} 
	if (msg.content === '!10:39'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 52min')} 
	if (msg.content === '!10:40'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 50min')} 
	if (msg.content === '!10:41'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 48min')} 
	if (msg.content === '!10:42'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 46min')} 
	if (msg.content === '!10:43'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 44min')} 
	if (msg.content === '!10:44'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 42min')} 
	if (msg.content === '!10:45'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 40min')} 
	if (msg.content === '!10:46'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 38min')} 
	if (msg.content === '!10:47'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 36min')} 
	if (msg.content === '!10:48'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 34min')} 
	if (msg.content === '!10:49'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 32min')} 
	if (msg.content === '!10:50'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 30min')} 
	if (msg.content === '!10:51'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 28min')} 
	if (msg.content === '!10:52'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 26min')} 
	if (msg.content === '!10:53'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 24min')} 
	if (msg.content === '!10:54'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 22min')} 
	if (msg.content === '!10:55'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 20min')} 
	if (msg.content === '!10:56'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 18min')} 
	if (msg.content === '!10:57'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 16min')} 
	if (msg.content === '!10:58'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 14min')} 
	if (msg.content === '!10:59'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 12min')} 
	if (msg.content === '!11:00'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 10min')} 
	if (msg.content === '!11:01'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 8min')} 
	if (msg.content === '!11:02'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 6min')} 
	if (msg.content === '!11:03'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 4min')} 
	if (msg.content === '!11:04'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 2min')} 
	if (msg.content === '!11:05'){msg.reply('Sua stamina ficara cheia em 3 Dia, 18h e 0min')} 
	if (msg.content === '!11:06'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 58min')} 
	if (msg.content === '!11:07'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 56min')} 
	if (msg.content === '!11:08'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 54min')} 
	if (msg.content === '!11:09'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 52min')} 
	if (msg.content === '!11:10'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 50min')} 
	if (msg.content === '!11:11'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 48min')} 
	if (msg.content === '!11:12'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 46min')} 
	if (msg.content === '!11:13'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 44min')} 
	if (msg.content === '!11:14'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 42min')} 
	if (msg.content === '!11:15'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 40min')} 
	if (msg.content === '!11:16'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 38min')} 
	if (msg.content === '!11:17'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 36min')} 
	if (msg.content === '!11:18'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 34min')} 
	if (msg.content === '!11:19'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 32min')} 
	if (msg.content === '!11:20'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 30min')} 
	if (msg.content === '!11:21'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 28min')} 
	if (msg.content === '!11:22'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 26min')} 
	if (msg.content === '!11:23'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 24min')} 
	if (msg.content === '!11:24'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 22min')} 
	if (msg.content === '!11:25'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 20min')} 
	if (msg.content === '!11:26'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 18min')} 
	if (msg.content === '!11:27'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 16min')} 
	if (msg.content === '!11:28'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 14min')} 
	if (msg.content === '!11:29'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 12min')} 
	if (msg.content === '!11:30'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 10min')} 
	if (msg.content === '!11:31'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 8min')} 
	if (msg.content === '!11:32'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 6min')} 
	if (msg.content === '!11:33'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 4min')} 
	if (msg.content === '!11:34'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 2min')} 
	if (msg.content === '!11:35'){msg.reply('Sua stamina ficara cheia em 3 Dia, 17h e 0min')} 
	if (msg.content === '!11:36'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 58min')} 
	if (msg.content === '!11:37'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 56min')} 
	if (msg.content === '!11:38'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 54min')} 
	if (msg.content === '!11:39'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 52min')} 
	if (msg.content === '!11:40'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 50min')} 
	if (msg.content === '!11:41'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 48min')} 
	if (msg.content === '!11:42'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 46min')} 
	if (msg.content === '!11:43'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 44min')} 
	if (msg.content === '!11:44'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 42min')} 
	if (msg.content === '!11:45'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 40min')} 
	if (msg.content === '!11:46'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 38min')} 
	if (msg.content === '!11:47'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 36min')} 
	if (msg.content === '!11:48'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 34min')} 
	if (msg.content === '!11:49'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 32min')} 
	if (msg.content === '!11:50'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 30min')} 
	if (msg.content === '!11:51'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 28min')} 
	if (msg.content === '!11:52'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 26min')} 
	if (msg.content === '!11:53'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 24min')} 
	if (msg.content === '!11:54'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 22min')} 
	if (msg.content === '!11:55'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 20min')} 
	if (msg.content === '!11:56'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 18min')} 
	if (msg.content === '!11:57'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 16min')} 
	if (msg.content === '!11:58'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 14min')} 
	if (msg.content === '!11:59'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 12min')} 
	if (msg.content === '!12:00'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 10min')} 
	if (msg.content === '!12:01'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 8min')} 
	if (msg.content === '!12:02'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 6min')} 
	if (msg.content === '!12:03'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 4min')} 
	if (msg.content === '!12:04'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 2min')} 
	if (msg.content === '!12:05'){msg.reply('Sua stamina ficara cheia em 3 Dia, 16h e 0min')} 
	if (msg.content === '!12:06'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 58min')} 
	if (msg.content === '!12:07'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 56min')} 
	if (msg.content === '!12:08'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 54min')} 
	if (msg.content === '!12:09'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 52min')} 
	if (msg.content === '!12:10'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 50min')} 
	if (msg.content === '!12:11'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 48min')} 
	if (msg.content === '!12:12'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 46min')} 
	if (msg.content === '!12:13'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 44min')} 
	if (msg.content === '!12:14'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 42min')} 
	if (msg.content === '!12:15'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 40min')} 
	if (msg.content === '!12:16'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 38min')} 
	if (msg.content === '!12:17'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 36min')} 
	if (msg.content === '!12:18'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 34min')} 
	if (msg.content === '!12:19'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 32min')} 
	if (msg.content === '!12:20'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 30min')} 
	if (msg.content === '!12:21'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 28min')} 
	if (msg.content === '!12:22'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 26min')} 
	if (msg.content === '!12:23'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 24min')} 
	if (msg.content === '!12:24'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 22min')} 
	if (msg.content === '!12:25'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 20min')} 
	if (msg.content === '!12:26'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 18min')} 
	if (msg.content === '!12:27'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 16min')} 
	if (msg.content === '!12:28'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 14min')} 
	if (msg.content === '!12:29'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 12min')} 
	if (msg.content === '!12:30'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 10min')} 
	if (msg.content === '!12:31'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 8min')} 
	if (msg.content === '!12:32'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 6min')} 
	if (msg.content === '!12:33'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 4min')} 
	if (msg.content === '!12:34'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 2min')} 
	if (msg.content === '!12:35'){msg.reply('Sua stamina ficara cheia em 3 Dia, 15h e 0min')} 
	if (msg.content === '!12:36'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 58min')} 
	if (msg.content === '!12:37'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 56min')} 
	if (msg.content === '!12:38'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 54min')} 
	if (msg.content === '!12:39'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 52min')} 
	if (msg.content === '!12:40'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 50min')} 
	if (msg.content === '!12:41'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 48min')} 
	if (msg.content === '!12:42'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 46min')} 
	if (msg.content === '!12:43'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 44min')} 
	if (msg.content === '!12:44'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 42min')} 
	if (msg.content === '!12:45'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 40min')} 
	if (msg.content === '!12:46'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 38min')} 
	if (msg.content === '!12:47'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 36min')} 
	if (msg.content === '!12:48'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 34min')} 
	if (msg.content === '!12:49'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 32min')} 
	if (msg.content === '!12:50'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 30min')} 
	if (msg.content === '!12:51'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 28min')} 
	if (msg.content === '!12:52'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 26min')} 
	if (msg.content === '!12:53'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 24min')} 
	if (msg.content === '!12:54'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 22min')} 
	if (msg.content === '!12:55'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 20min')} 
	if (msg.content === '!12:56'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 18min')} 
	if (msg.content === '!12:57'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 16min')} 
	if (msg.content === '!12:58'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 14min')} 
	if (msg.content === '!13:59'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 12min')} 
	if (msg.content === '!13:00'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 10min')} 
	if (msg.content === '!13:01'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 8min')} 
	if (msg.content === '!13:02'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 6min')} 
	if (msg.content === '!13:03'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 4min')} 
	if (msg.content === '!13:04'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 2min')} 
	if (msg.content === '!13:05'){msg.reply('Sua stamina ficara cheia em 3 Dia, 14h e 0min')} 
	if (msg.content === '!13:06'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 58min')} 
	if (msg.content === '!13:07'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 56min')} 
	if (msg.content === '!13:08'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 54min')} 
	if (msg.content === '!13:09'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 52min')} 
	if (msg.content === '!13:10'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 50min')} 
	if (msg.content === '!13:11'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 48min')} 
	if (msg.content === '!13:12'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 46min')} 
	if (msg.content === '!13:13'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 44min')} 
	if (msg.content === '!13:14'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 42min')} 
	if (msg.content === '!13:15'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 40min')} 
	if (msg.content === '!13:16'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 38min')} 
	if (msg.content === '!13:17'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 36min')} 
	if (msg.content === '!13:18'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 34min')} 
	if (msg.content === '!13:19'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 32min')} 
	if (msg.content === '!13:20'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 30min')} 
	if (msg.content === '!13:21'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 28min')} 
	if (msg.content === '!13:22'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 26min')} 
	if (msg.content === '!13:23'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 24min')} 
	if (msg.content === '!13:24'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 22min')} 
	if (msg.content === '!13:25'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 20min')} 
	if (msg.content === '!13:26'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 18min')} 
	if (msg.content === '!13:27'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 16min')} 
	if (msg.content === '!13:28'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 14min')} 
	if (msg.content === '!13:29'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 12min')} 
	if (msg.content === '!13:30'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 10min')} 
	if (msg.content === '!13:31'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 8min')} 
	if (msg.content === '!13:32'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 6min')} 
	if (msg.content === '!13:33'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 4min')} 
	if (msg.content === '!13:34'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 2min')} 
	if (msg.content === '!13:35'){msg.reply('Sua stamina ficara cheia em 3 Dia, 13h e 0min')} 
	if (msg.content === '!13:36'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 58min')} 
	if (msg.content === '!13:37'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 56min')} 
	if (msg.content === '!13:38'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 54min')} 
	if (msg.content === '!13:39'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 52min')} 
	if (msg.content === '!13:40'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 50min')} 
	if (msg.content === '!13:41'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 48min')} 
	if (msg.content === '!13:42'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 46min')} 
	if (msg.content === '!13:43'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 44min')} 
	if (msg.content === '!13:44'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 42min')} 
	if (msg.content === '!13:45'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 40min')} 
	if (msg.content === '!13:46'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 38min')} 
	if (msg.content === '!13:47'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 36min')} 
	if (msg.content === '!13:48'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 34min')} 
	if (msg.content === '!13:49'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 32min')} 
	if (msg.content === '!13:50'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 30min')} 
	if (msg.content === '!13:51'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 28min')} 
	if (msg.content === '!13:52'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 26min')} 
	if (msg.content === '!13:53'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 24min')} 
	if (msg.content === '!13:54'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 22min')} 
	if (msg.content === '!13:55'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 20min')} 
	if (msg.content === '!13:56'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 18min')} 
	if (msg.content === '!13:57'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 16min')} 
	if (msg.content === '!13:58'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 14min')} 
	if (msg.content === '!13:59'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 12min')} 
	if (msg.content === '!14:00'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 10min')} 
	if (msg.content === '!14:01'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 8min')} 
	if (msg.content === '!14:02'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 6min')} 
	if (msg.content === '!14:03'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 4min')} 
	if (msg.content === '!14:04'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 2min')} 
	if (msg.content === '!14:05'){msg.reply('Sua stamina ficara cheia em 3 Dia, 12h e 0min')} 
	if (msg.content === '!14:06'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 58min')} 
	if (msg.content === '!14:07'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 56min')} 
	if (msg.content === '!14:08'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 54min')} 
	if (msg.content === '!14:09'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 52min')} 
	if (msg.content === '!14:10'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 50min')} 
	if (msg.content === '!14:11'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 48min')} 
	if (msg.content === '!14:12'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 46min')} 
	if (msg.content === '!14:13'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 44min')} 
	if (msg.content === '!14:14'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 42min')} 
	if (msg.content === '!14:15'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 40min')} 
	if (msg.content === '!14:16'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 38min')} 
	if (msg.content === '!14:17'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 36min')} 
	if (msg.content === '!14:18'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 34min')} 
	if (msg.content === '!14:19'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 32min')} 
	if (msg.content === '!14:20'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 30min')} 
	if (msg.content === '!14:21'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 28min')} 
	if (msg.content === '!14:22'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 26min')} 
	if (msg.content === '!14:23'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 24min')} 
	if (msg.content === '!14:24'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 22min')} 
	if (msg.content === '!14:25'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 20min')} 
	if (msg.content === '!14:26'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 18min')} 
	if (msg.content === '!14:27'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 16min')} 
	if (msg.content === '!14:28'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 14min')} 
	if (msg.content === '!14:29'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 12min')} 
	if (msg.content === '!14:30'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 10min')} 
	if (msg.content === '!14:31'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 8min')} 
	if (msg.content === '!14:32'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 6min')} 
	if (msg.content === '!14:33'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 4min')} 
	if (msg.content === '!14:34'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 2min')} 
	if (msg.content === '!14:35'){msg.reply('Sua stamina ficara cheia em 3 Dia, 11h e 0min')} 
	if (msg.content === '!14:36'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 58min')} 
	if (msg.content === '!14:37'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 56min')} 
	if (msg.content === '!14:38'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 54min')} 
	if (msg.content === '!14:39'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 52min')} 
	if (msg.content === '!14:40'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 50min')} 
	if (msg.content === '!14:41'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 48min')} 
	if (msg.content === '!14:42'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 46min')} 
	if (msg.content === '!14:43'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 44min')} 
	if (msg.content === '!14:44'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 42min')} 
	if (msg.content === '!14:45'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 40min')} 
	if (msg.content === '!14:46'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 38min')} 
	if (msg.content === '!14:47'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 36min')} 
	if (msg.content === '!14:48'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 34min')} 
	if (msg.content === '!14:49'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 32min')} 
	if (msg.content === '!14:50'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 30min')} 
	if (msg.content === '!14:51'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 28min')} 
	if (msg.content === '!14:52'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 26min')} 
	if (msg.content === '!14:53'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 24min')} 
	if (msg.content === '!14:54'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 22min')} 
	if (msg.content === '!14:55'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 20min')} 
	if (msg.content === '!14:56'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 18min')} 
	if (msg.content === '!14:57'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 16min')} 
	if (msg.content === '!14:58'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 14min')} 
	if (msg.content === '!14:59'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 12min')} 
	if (msg.content === '!15:00'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 10min')} 
	if (msg.content === '!15:01'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 8min')} 
	if (msg.content === '!15:02'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 6min')} 
	if (msg.content === '!15:03'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 4min')} 
	if (msg.content === '!15:04'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 2min')} 
	if (msg.content === '!15:05'){msg.reply('Sua stamina ficara cheia em 3 Dia, 10h e 0min')} 
	if (msg.content === '!15:06'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 58min')} 
	if (msg.content === '!15:07'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 56min')} 
	if (msg.content === '!15:08'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 54min')} 
	if (msg.content === '!15:09'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 52min')} 
	if (msg.content === '!15:10'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 50min')} 
	if (msg.content === '!15:11'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 48min')} 
	if (msg.content === '!15:12'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 46min')} 
	if (msg.content === '!15:13'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 44min')} 
	if (msg.content === '!15:14'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 42min')} 
	if (msg.content === '!15:15'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 40min')} 
	if (msg.content === '!15:16'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 38min')} 
	if (msg.content === '!15:17'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 36min')} 
	if (msg.content === '!15:18'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 34min')} 
	if (msg.content === '!15:19'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 32min')} 
	if (msg.content === '!15:20'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 30min')} 
	if (msg.content === '!15:21'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 28min')} 
	if (msg.content === '!15:22'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 26min')} 
	if (msg.content === '!15:23'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 24min')} 
	if (msg.content === '!15:24'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 22min')} 
	if (msg.content === '!15:25'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 20min')} 
	if (msg.content === '!15:26'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 18min')} 
	if (msg.content === '!15:27'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 16min')} 
	if (msg.content === '!15:28'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 14min')} 
	if (msg.content === '!15:29'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 12min')} 
	if (msg.content === '!15:30'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 10min')} 
	if (msg.content === '!15:31'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 8min')} 
	if (msg.content === '!15:32'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 6min')} 
	if (msg.content === '!15:33'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 4min')} 
	if (msg.content === '!15:34'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 2min')} 
	if (msg.content === '!15:35'){msg.reply('Sua stamina ficara cheia em 3 Dia, 9h e 0min')} 
	if (msg.content === '!15:36'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 58min')} 
	if (msg.content === '!15:37'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 56min')} 
	if (msg.content === '!15:38'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 54min')} 
	if (msg.content === '!15:39'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 52min')} 
	if (msg.content === '!15:40'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 50min')} 
	if (msg.content === '!15:41'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 48min')} 
	if (msg.content === '!15:42'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 46min')} 
	if (msg.content === '!15:43'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 44min')} 
	if (msg.content === '!15:44'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 42min')} 
	if (msg.content === '!15:45'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 40min')} 
	if (msg.content === '!15:46'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 38min')} 
	if (msg.content === '!15:47'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 36min')} 
	if (msg.content === '!15:48'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 34min')} 
	if (msg.content === '!15:49'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 32min')} 
	if (msg.content === '!15:50'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 30min')} 
	if (msg.content === '!15:51'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 28min')} 
	if (msg.content === '!15:52'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 26min')} 
	if (msg.content === '!15:53'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 24min')} 
	if (msg.content === '!15:54'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 22min')} 
	if (msg.content === '!15:55'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 20min')} 
	if (msg.content === '!15:56'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 18min')} 
	if (msg.content === '!15:57'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 16min')} 
	if (msg.content === '!15:58'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 14min')} 
	if (msg.content === '!15:59'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 12min')} 
	if (msg.content === '!16:00'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 10min')} 
	if (msg.content === '!16:01'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 8min')} 
	if (msg.content === '!16:02'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 6min')} 
	if (msg.content === '!16:03'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 4min')} 
	if (msg.content === '!16:04'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 2min')} 
	if (msg.content === '!16:05'){msg.reply('Sua stamina ficara cheia em 3 Dia, 8h e 0min')} 
	if (msg.content === '!16:06'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 58min')} 
	if (msg.content === '!16:07'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 56min')} 
	if (msg.content === '!16:08'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 54min')} 
	if (msg.content === '!16:09'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 52min')} 
	if (msg.content === '!16:10'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 50min')} 
	if (msg.content === '!16:11'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 48min')} 
	if (msg.content === '!16:12'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 46min')} 
	if (msg.content === '!16:13'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 44min')} 
	if (msg.content === '!16:14'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 42min')} 
	if (msg.content === '!16:15'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 40min')} 
	if (msg.content === '!16:16'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 38min')} 
	if (msg.content === '!16:17'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 36min')} 
	if (msg.content === '!16:18'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 34min')} 
	if (msg.content === '!16:19'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 32min')} 
	if (msg.content === '!16:20'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 30min')} 
	if (msg.content === '!16:21'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 28min')} 
	if (msg.content === '!16:22'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 26min')} 
	if (msg.content === '!16:23'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 24min')} 
	if (msg.content === '!16:24'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 22min')} 
	if (msg.content === '!16:25'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 20min')} 
	if (msg.content === '!16:26'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 18min')} 
	if (msg.content === '!16:27'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 16min')} 
	if (msg.content === '!16:28'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 14min')} 
	if (msg.content === '!16:29'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 12min')} 
	if (msg.content === '!16:30'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 10min')} 
	if (msg.content === '!16:31'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 8min')} 
	if (msg.content === '!16:32'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 6min')} 
	if (msg.content === '!16:33'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 4min')} 
	if (msg.content === '!16:34'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 2min')} 
	if (msg.content === '!16:35'){msg.reply('Sua stamina ficara cheia em 3 Dia, 7h e 0min')} 
	if (msg.content === '!16:36'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 58min')} 
	if (msg.content === '!16:37'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 56min')} 
	if (msg.content === '!16:38'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 54min')} 
	if (msg.content === '!16:39'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 52min')} 
	if (msg.content === '!16:40'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 50min')} 
	if (msg.content === '!16:41'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 48min')} 
	if (msg.content === '!16:42'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 46min')} 
	if (msg.content === '!16:43'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 44min')} 
	if (msg.content === '!16:44'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 42min')} 
	if (msg.content === '!16:45'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 40min')} 
	if (msg.content === '!16:46'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 38min')} 
	if (msg.content === '!16:47'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 36min')} 
	if (msg.content === '!16:48'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 34min')} 
	if (msg.content === '!16:49'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 32min')} 
	if (msg.content === '!16:50'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 30min')} 
	if (msg.content === '!16:51'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 28min')} 
	if (msg.content === '!16:52'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 26min')} 
	if (msg.content === '!16:53'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 24min')} 
	if (msg.content === '!16:54'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 22min')} 
	if (msg.content === '!16:55'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 20min')} 
	if (msg.content === '!16:56'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 18min')} 
	if (msg.content === '!16:57'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 16min')} 
	if (msg.content === '!16:58'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 14min')} 
	if (msg.content === '!16:59'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 12min')} 
	if (msg.content === '!17:00'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 10min')} 
	if (msg.content === '!17:01'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 8min')} 
	if (msg.content === '!17:02'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 6min')} 
	if (msg.content === '!17:03'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 4min')} 
	if (msg.content === '!17:04'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 2min')} 
	if (msg.content === '!17:05'){msg.reply('Sua stamina ficara cheia em 3 Dia, 6h e 0min')} 
	if (msg.content === '!17:06'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 58min')} 
	if (msg.content === '!17:07'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 56min')} 
	if (msg.content === '!17:08'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 54min')} 
	if (msg.content === '!17:09'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 52min')} 
	if (msg.content === '!17:10'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 50min')} 
	if (msg.content === '!17:11'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 48min')} 
	if (msg.content === '!17:12'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 46min')} 
	if (msg.content === '!17:13'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 44min')} 
	if (msg.content === '!17:14'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 42min')} 
	if (msg.content === '!17:15'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 40min')} 
	if (msg.content === '!17:16'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 38min')} 
	if (msg.content === '!17:17'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 36min')} 
	if (msg.content === '!17:18'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 34min')} 
	if (msg.content === '!17:19'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 32min')} 
	if (msg.content === '!17:20'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 30min')} 
	if (msg.content === '!17:21'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 28min')} 
	if (msg.content === '!17:22'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 26min')} 
	if (msg.content === '!17:23'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 24min')} 
	if (msg.content === '!17:24'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 22min')} 
	if (msg.content === '!17:25'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 20min')} 
	if (msg.content === '!17:26'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 18min')} 
	if (msg.content === '!17:27'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 16min')} 
	if (msg.content === '!17:28'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 14min')} 
	if (msg.content === '!17:29'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 12min')} 
	if (msg.content === '!17:30'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 10min')} 
	if (msg.content === '!17:31'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 8min')} 
	if (msg.content === '!17:32'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 6min')} 
	if (msg.content === '!17:33'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 4min')} 
	if (msg.content === '!17:34'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 2min')} 
	if (msg.content === '!17:35'){msg.reply('Sua stamina ficara cheia em 3 Dia, 5h e 0min')} 
	if (msg.content === '!17:36'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 58min')} 
	if (msg.content === '!17:37'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 56min')} 
	if (msg.content === '!17:38'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 54min')} 
	if (msg.content === '!17:39'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 52min')} 
	if (msg.content === '!17:40'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 50min')} 
	if (msg.content === '!17:41'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 48min')} 
	if (msg.content === '!17:42'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 46min')} 
	if (msg.content === '!17:43'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 44min')} 
	if (msg.content === '!17:44'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 42min')} 
	if (msg.content === '!17:45'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 40min')} 
	if (msg.content === '!17:46'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 38min')} 
	if (msg.content === '!17:47'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 36min')} 
	if (msg.content === '!17:48'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 34min')} 
	if (msg.content === '!17:49'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 32min')} 
	if (msg.content === '!17:50'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 30min')} 
	if (msg.content === '!17:51'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 28min')} 
	if (msg.content === '!17:52'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 26min')} 
	if (msg.content === '!17:53'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 24min')} 
	if (msg.content === '!17:54'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 22min')} 
	if (msg.content === '!17:55'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 20min')} 
	if (msg.content === '!17:56'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 18min')} 
	if (msg.content === '!17:57'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 16min')} 
	if (msg.content === '!17:58'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 14min')} 
	if (msg.content === '!17:59'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 12min')} 
	if (msg.content === '!18:00'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 10min')} 
	if (msg.content === '!18:01'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 8min')} 
	if (msg.content === '!18:02'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 6min')} 
	if (msg.content === '!18:03'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 4min')} 
	if (msg.content === '!18:04'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 2min')} 
	if (msg.content === '!18:05'){msg.reply('Sua stamina ficara cheia em 3 Dia, 4h e 0min')} 
	if (msg.content === '!18:06'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 58min')} 
	if (msg.content === '!18:07'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 56min')} 
	if (msg.content === '!18:08'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 54min')} 
	if (msg.content === '!18:09'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 52min')} 
	if (msg.content === '!18:10'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 50min')} 
	if (msg.content === '!18:11'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 48min')} 
	if (msg.content === '!18:12'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 46min')} 
	if (msg.content === '!18:13'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 44min')} 
	if (msg.content === '!18:14'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 42min')} 
	if (msg.content === '!18:15'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 40min')} 
	if (msg.content === '!18:16'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 38min')} 
	if (msg.content === '!18:17'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 36min')} 
	if (msg.content === '!18:18'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 34min')} 
	if (msg.content === '!18:19'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 32min')} 
	if (msg.content === '!18:20'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 30min')} 
	if (msg.content === '!18:21'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 28min')} 
	if (msg.content === '!18:22'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 26min')} 
	if (msg.content === '!18:23'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 24min')} 
	if (msg.content === '!18:24'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 22min')} 
	if (msg.content === '!18:25'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 20min')} 
	if (msg.content === '!18:26'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 18min')} 
	if (msg.content === '!18:27'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 16min')} 
	if (msg.content === '!18:28'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 14min')} 
	if (msg.content === '!18:29'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 12min')} 
	if (msg.content === '!18:30'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 10min')} 
	if (msg.content === '!18:31'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 8min')} 
	if (msg.content === '!18:32'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 6min')} 
	if (msg.content === '!18:33'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 4min')} 
	if (msg.content === '!18:34'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 2min')} 
	if (msg.content === '!18:35'){msg.reply('Sua stamina ficara cheia em 3 Dia, 3h e 0min')} 
	if (msg.content === '!18:36'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 58min')} 
	if (msg.content === '!18:37'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 56min')} 
	if (msg.content === '!18:38'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 54min')} 
	if (msg.content === '!18:39'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 52min')} 
	if (msg.content === '!18:40'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 50min')} 
	if (msg.content === '!18:41'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 48min')} 
	if (msg.content === '!18:42'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 46min')} 
	if (msg.content === '!18:43'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 44min')} 
	if (msg.content === '!18:44'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 42min')} 
	if (msg.content === '!18:45'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 40min')} 
	if (msg.content === '!18:46'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 38min')} 
	if (msg.content === '!18:47'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 36min')} 
	if (msg.content === '!18:48'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 34min')} 
	if (msg.content === '!18:49'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 32min')} 
	if (msg.content === '!18:50'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 30min')} 
	if (msg.content === '!18:51'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 28min')} 
	if (msg.content === '!18:52'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 26min')} 
	if (msg.content === '!18:53'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 24min')} 
	if (msg.content === '!18:54'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 22min')} 
	if (msg.content === '!18:55'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 20min')} 
	if (msg.content === '!18:56'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 18min')} 
	if (msg.content === '!18:57'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 16min')} 
	if (msg.content === '!18:58'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 14min')} 
	if (msg.content === '!18:59'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 12min')} 
	if (msg.content === '!19:00'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 10min')} 
	if (msg.content === '!19:01'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 8min')} 
	if (msg.content === '!19:02'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 6min')} 
	if (msg.content === '!19:03'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 4min')} 
	if (msg.content === '!19:04'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 2min')} 
	if (msg.content === '!19:05'){msg.reply('Sua stamina ficara cheia em 3 Dia, 2h e 0min')} 
	if (msg.content === '!19:06'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 58min')} 
	if (msg.content === '!19:07'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 56min')} 
	if (msg.content === '!19:08'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 54min')} 
	if (msg.content === '!19:09'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 52min')} 
	if (msg.content === '!19:10'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 50min')} 
	if (msg.content === '!19:11'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 48min')} 
	if (msg.content === '!19:12'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 46min')} 
	if (msg.content === '!19:13'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 44min')} 
	if (msg.content === '!19:14'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 42min')} 
	if (msg.content === '!19:15'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 40min')} 
	if (msg.content === '!19:16'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 38min')} 
	if (msg.content === '!19:17'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 36min')} 
	if (msg.content === '!19:18'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 34min')} 
	if (msg.content === '!19:19'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 32min')} 
	if (msg.content === '!19:20'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 30min')} 
	if (msg.content === '!19:21'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 28min')} 
	if (msg.content === '!19:22'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 26min')} 
	if (msg.content === '!19:23'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 24min')} 
	if (msg.content === '!19:24'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 22min')} 
	if (msg.content === '!19:25'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 20min')} 
	if (msg.content === '!19:26'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 18min')} 
	if (msg.content === '!19:27'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 16min')} 
	if (msg.content === '!19:28'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 14min')} 
	if (msg.content === '!19:29'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 12min')} 
	if (msg.content === '!19:30'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 10min')} 
	if (msg.content === '!19:31'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 8min')} 
	if (msg.content === '!19:32'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 6min')} 
	if (msg.content === '!19:33'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 4min')} 
	if (msg.content === '!19:34'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 2min')} 
	if (msg.content === '!19:35'){msg.reply('Sua stamina ficara cheia em 3 Dia, 1h e 0min')} 
	if (msg.content === '!19:36'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 58min')} 
	if (msg.content === '!19:37'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 56min')} 
	if (msg.content === '!19:38'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 54min')} 
	if (msg.content === '!19:39'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 52min')} 
	if (msg.content === '!19:40'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 50min')} 
	if (msg.content === '!19:41'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 48min')} 
	if (msg.content === '!19:42'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 46min')} 
	if (msg.content === '!19:43'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 44min')} 
	if (msg.content === '!19:44'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 42min')} 
	if (msg.content === '!19:45'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 40min')} 
	if (msg.content === '!19:46'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 38min')} 
	if (msg.content === '!19:47'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 36min')} 
	if (msg.content === '!19:48'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 34min')} 
	if (msg.content === '!19:49'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 32min')} 
	if (msg.content === '!19:50'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 30min')} 
	if (msg.content === '!19:51'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 28min')} 
	if (msg.content === '!19:52'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 26min')} 
	if (msg.content === '!19:53'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 24min')} 
	if (msg.content === '!19:54'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 22min')} 
	if (msg.content === '!19:55'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 20min')} 
	if (msg.content === '!19:56'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 18min')} 
	if (msg.content === '!19:57'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 16min')} 
	if (msg.content === '!19:58'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 14min')} 
	if (msg.content === '!19:59'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 12min')} 
	if (msg.content === '!20:00'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 10min')} 
	if (msg.content === '!20:01'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 8min')} 
	if (msg.content === '!20:02'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 6min')} 
	if (msg.content === '!20:03'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 4min')} 
	if (msg.content === '!20:04'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 2min')} 
	if (msg.content === '!20:05'){msg.reply('Sua stamina ficara cheia em 3 Dia, e 0min')} 
	if (msg.content === '!20:06'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 58min')} 
	if (msg.content === '!20:07'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 56min')} 
	if (msg.content === '!20:08'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 54min')} 
	if (msg.content === '!20:09'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 52min')} 
	if (msg.content === '!20:10'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 50min')} 
	if (msg.content === '!20:11'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 48min')} 
	if (msg.content === '!20:12'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 46min')} 
	if (msg.content === '!20:13'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 44min')} 
	if (msg.content === '!20:14'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 42min')} 
	if (msg.content === '!20:15'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 40min')} 
	if (msg.content === '!20:16'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 38min')} 
	if (msg.content === '!20:17'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 36min')} 
	if (msg.content === '!20:18'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 34min')} 
	if (msg.content === '!20:19'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 32min')} 
	if (msg.content === '!20:20'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 30min')} 
	if (msg.content === '!20:21'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 28min')} 
	if (msg.content === '!20:22'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 26min')} 
	if (msg.content === '!20:23'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 24min')} 
	if (msg.content === '!20:24'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 22min')} 
	if (msg.content === '!20:25'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 20min')} 
	if (msg.content === '!20:26'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 18min')} 
	if (msg.content === '!20:27'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 16min')} 
	if (msg.content === '!20:28'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 14min')} 
	if (msg.content === '!20:29'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 12min')} 
	if (msg.content === '!20:30'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 10min')} 
	if (msg.content === '!20:31'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 8min')} 
	if (msg.content === '!20:32'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 6min')} 
	if (msg.content === '!20:33'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 4min')} 
	if (msg.content === '!20:34'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 2min')} 
	if (msg.content === '!20:35'){msg.reply('Sua stamina ficara cheia em 2 Dia, 23h e 0min')} 
	if (msg.content === '!20:36'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 58min')} 
	if (msg.content === '!20:37'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 56min')} 
	if (msg.content === '!20:38'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 54min')} 
	if (msg.content === '!20:39'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 52min')} 
	if (msg.content === '!20:40'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 50min')} 
	if (msg.content === '!20:41'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 48min')} 
	if (msg.content === '!20:42'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 46min')} 
	if (msg.content === '!20:43'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 44min')} 
	if (msg.content === '!20:44'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 42min')} 
	if (msg.content === '!20:45'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 40min')} 
	if (msg.content === '!20:46'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 38min')} 
	if (msg.content === '!20:47'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 36min')} 
	if (msg.content === '!20:48'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 34min')} 
	if (msg.content === '!20:49'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 32min')} 
	if (msg.content === '!20:50'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 30min')} 
	if (msg.content === '!20:51'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 28min')} 
	if (msg.content === '!20:52'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 26min')} 
	if (msg.content === '!20:53'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 24min')} 
	if (msg.content === '!20:54'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 22min')} 
	if (msg.content === '!20:55'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 20min')} 
	if (msg.content === '!20:56'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 18min')} 
	if (msg.content === '!20:57'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 16min')} 
	if (msg.content === '!20:58'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 14min')} 
	if (msg.content === '!20:59'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 12min')} 
	if (msg.content === '!21:00'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 10min')} 
	if (msg.content === '!21:01'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 8min')} 
	if (msg.content === '!21:02'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 6min')} 
	if (msg.content === '!21:03'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 4min')} 
	if (msg.content === '!21:04'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 2min')} 
	if (msg.content === '!21:05'){msg.reply('Sua stamina ficara cheia em 2 Dia, 22h e 0min')} 
	if (msg.content === '!21:06'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 58min')} 
	if (msg.content === '!21:07'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 56min')} 
	if (msg.content === '!21:08'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 54min')} 
	if (msg.content === '!21:09'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 52min')} 
	if (msg.content === '!21:10'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 50min')} 
	if (msg.content === '!21:11'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 48min')} 
	if (msg.content === '!21:12'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 46min')} 
	if (msg.content === '!21:13'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 44min')} 
	if (msg.content === '!21:14'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 42min')} 
	if (msg.content === '!21:15'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 40min')} 
	if (msg.content === '!21:16'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 38min')} 
	if (msg.content === '!21:17'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 36min')} 
	if (msg.content === '!21:18'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 34min')} 
	if (msg.content === '!21:19'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 32min')} 
	if (msg.content === '!21:20'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 30min')} 
	if (msg.content === '!21:21'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 28min')} 
	if (msg.content === '!21:22'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 26min')} 
	if (msg.content === '!21:23'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 24min')} 
	if (msg.content === '!21:24'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 22min')} 
	if (msg.content === '!21:25'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 20min')} 
	if (msg.content === '!21:26'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 18min')} 
	if (msg.content === '!21:27'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 16min')} 
	if (msg.content === '!21:28'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 14min')} 
	if (msg.content === '!21:29'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 12min')} 
	if (msg.content === '!21:30'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 10min')} 
	if (msg.content === '!21:31'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 8min')} 
	if (msg.content === '!21:32'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 6min')} 
	if (msg.content === '!21:33'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 4min')} 
	if (msg.content === '!21:34'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 2min')} 
	if (msg.content === '!21:35'){msg.reply('Sua stamina ficara cheia em 2 Dia, 21h e 0min')} 
	if (msg.content === '!21:36'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 58min')} 
	if (msg.content === '!21:37'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 56min')} 
	if (msg.content === '!21:38'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 54min')} 
	if (msg.content === '!21:39'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 52min')} 
	if (msg.content === '!21:40'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 50min')} 
	if (msg.content === '!21:41'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 48min')} 
	if (msg.content === '!21:42'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 46min')} 
	if (msg.content === '!21:43'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 44min')} 
	if (msg.content === '!21:44'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 42min')} 
	if (msg.content === '!21:45'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 40min')} 
	if (msg.content === '!21:46'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 38min')} 
	if (msg.content === '!21:47'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 36min')} 
	if (msg.content === '!21:48'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 34min')} 
	if (msg.content === '!21:49'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 32min')} 
	if (msg.content === '!21:50'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 30min')} 
	if (msg.content === '!21:51'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 28min')} 
	if (msg.content === '!21:52'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 26min')} 
	if (msg.content === '!21:53'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 24min')} 
	if (msg.content === '!21:54'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 22min')} 
	if (msg.content === '!21:55'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 20min')} 
	if (msg.content === '!21:56'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 18min')} 
	if (msg.content === '!21:57'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 16min')} 
	if (msg.content === '!21:58'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 14min')} 
	if (msg.content === '!21:59'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 12min')} 
	if (msg.content === '!22:00'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 10min')} 
	if (msg.content === '!22:01'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 8min')} 
	if (msg.content === '!22:02'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 6min')} 
	if (msg.content === '!22:03'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 4min')} 
	if (msg.content === '!22:04'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 2min')} 
	if (msg.content === '!22:05'){msg.reply('Sua stamina ficara cheia em 2 Dia, 20h e 0min')} 
	if (msg.content === '!22:06'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 58min')} 
	if (msg.content === '!22:07'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 56min')} 
	if (msg.content === '!22:08'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 54min')} 
	if (msg.content === '!22:09'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 52min')} 
	if (msg.content === '!22:10'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 50min')} 
	if (msg.content === '!22:11'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 48min')} 
	if (msg.content === '!22:12'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 46min')} 
	if (msg.content === '!22:13'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 44min')} 
	if (msg.content === '!22:14'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 42min')} 
	if (msg.content === '!22:15'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 40min')} 
	if (msg.content === '!22:16'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 38min')} 
	if (msg.content === '!22:17'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 36min')} 
	if (msg.content === '!22:18'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 34min')} 
	if (msg.content === '!22:19'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 32min')} 
	if (msg.content === '!22:20'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 30min')} 
	if (msg.content === '!22:21'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 28min')} 
	if (msg.content === '!22:22'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 26min')} 
	if (msg.content === '!22:23'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 24min')} 
	if (msg.content === '!22:24'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 22min')} 
	if (msg.content === '!22:25'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 20min')} 
	if (msg.content === '!22:26'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 18min')} 
	if (msg.content === '!22:27'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 16min')} 
	if (msg.content === '!22:28'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 14min')} 
	if (msg.content === '!22:29'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 12min')} 
	if (msg.content === '!22:30'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 10min')} 
	if (msg.content === '!22:31'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 8min')} 
	if (msg.content === '!22:32'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 6min')} 
	if (msg.content === '!22:33'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 4min')} 
	if (msg.content === '!22:34'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 2min')} 
	if (msg.content === '!22:35'){msg.reply('Sua stamina ficara cheia em 2 Dia, 19h e 0min')} 
	if (msg.content === '!22:36'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 58min')} 
	if (msg.content === '!22:37'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 56min')} 
	if (msg.content === '!22:38'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 54min')} 
	if (msg.content === '!22:39'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 52min')} 
	if (msg.content === '!22:40'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 50min')} 
	if (msg.content === '!22:41'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 48min')} 
	if (msg.content === '!22:42'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 46min')} 
	if (msg.content === '!22:43'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 44min')} 
	if (msg.content === '!22:44'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 42min')} 
	if (msg.content === '!22:45'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 40min')} 
	if (msg.content === '!22:46'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 38min')} 
	if (msg.content === '!22:47'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 36min')} 
	if (msg.content === '!22:48'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 34min')} 
	if (msg.content === '!22:49'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 32min')} 
	if (msg.content === '!22:50'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 30min')} 
	if (msg.content === '!22:51'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 28min')} 
	if (msg.content === '!22:52'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 26min')} 
	if (msg.content === '!22:53'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 24min')} 
	if (msg.content === '!22:54'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 22min')} 
	if (msg.content === '!22:55'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 20min')} 
	if (msg.content === '!22:56'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 18min')} 
	if (msg.content === '!22:57'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 16min')} 
	if (msg.content === '!22:58'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 14min')} 
	if (msg.content === '!22:59'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 12min')} 
	if (msg.content === '!23:00'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 10min')} 
	if (msg.content === '!23:01'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 8min')} 
	if (msg.content === '!23:02'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 6min')} 
	if (msg.content === '!23:03'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 4min')} 
	if (msg.content === '!23:04'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 2min')} 
	if (msg.content === '!23:05'){msg.reply('Sua stamina ficara cheia em 2 Dia, 18h e 0min')} 
	if (msg.content === '!23:06'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 58min')} 
	if (msg.content === '!23:07'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 56min')} 
	if (msg.content === '!23:08'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 54min')} 
	if (msg.content === '!23:09'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 52min')} 
	if (msg.content === '!23:10'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 50min')} 
	if (msg.content === '!23:11'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 48min')} 
	if (msg.content === '!23:12'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 46min')} 
	if (msg.content === '!23:13'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 44min')} 
	if (msg.content === '!23:14'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 42min')} 
	if (msg.content === '!23:15'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 40min')} 
	if (msg.content === '!23:16'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 38min')} 
	if (msg.content === '!23:17'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 36min')} 
	if (msg.content === '!23:18'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 34min')} 
	if (msg.content === '!23:19'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 32min')} 
	if (msg.content === '!23:20'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 30min')} 
	if (msg.content === '!23:21'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 28min')} 
	if (msg.content === '!23:22'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 26min')} 
	if (msg.content === '!23:23'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 24min')} 
	if (msg.content === '!23:24'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 22min')} 
	if (msg.content === '!23:25'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 20min')} 
	if (msg.content === '!23:26'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 18min')} 
	if (msg.content === '!23:27'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 16min')} 
	if (msg.content === '!23:28'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 14min')} 
	if (msg.content === '!23:29'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 12min')} 
	if (msg.content === '!23:30'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 10min')} 
	if (msg.content === '!23:31'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 8min')} 
	if (msg.content === '!23:32'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 6min')} 
	if (msg.content === '!23:33'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 4min')} 
	if (msg.content === '!23:34'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 2min')} 
	if (msg.content === '!23:35'){msg.reply('Sua stamina ficara cheia em 2 Dia, 17h e 0min')} 
	if (msg.content === '!23:36'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 58min')} 
	if (msg.content === '!23:37'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 56min')} 
	if (msg.content === '!23:38'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 54min')} 
	if (msg.content === '!23:39'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 52min')} 
	if (msg.content === '!23:40'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 50min')} 
	if (msg.content === '!23:41'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 48min')} 
	if (msg.content === '!23:42'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 46min')} 
	if (msg.content === '!23:43'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 44min')} 
	if (msg.content === '!23:44'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 42min')} 
	if (msg.content === '!23:45'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 40min')} 
	if (msg.content === '!23:46'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 38min')} 
	if (msg.content === '!23:47'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 36min')} 
	if (msg.content === '!23:48'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 34min')} 
	if (msg.content === '!23:49'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 32min')} 
	if (msg.content === '!23:50'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 30min')} 
	if (msg.content === '!23:51'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 28min')} 
	if (msg.content === '!23:52'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 26min')} 
	if (msg.content === '!23:53'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 24min')} 
	if (msg.content === '!23:54'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 22min')} 
	if (msg.content === '!23:55'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 20min')} 
	if (msg.content === '!23:56'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 18min')} 
	if (msg.content === '!23:57'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 16min')} 
	if (msg.content === '!23:58'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 14min')} 
	if (msg.content === '!24:59'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 12min')} 
	if (msg.content === '!24:00'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 10min')} 
	if (msg.content === '!24:01'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 8min')} 
	if (msg.content === '!24:02'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 6min')} 
	if (msg.content === '!24:03'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 4min')} 
	if (msg.content === '!24:04'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 2min')} 
	if (msg.content === '!24:05'){msg.reply('Sua stamina ficara cheia em 2 Dia, 16h e 0min')} 
	if (msg.content === '!24:06'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 58min')} 
	if (msg.content === '!24:07'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 56min')} 
	if (msg.content === '!24:08'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 54min')} 
	if (msg.content === '!24:09'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 52min')} 
	if (msg.content === '!24:10'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 50min')} 
	if (msg.content === '!24:11'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 48min')} 
	if (msg.content === '!24:12'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 46min')} 
	if (msg.content === '!24:13'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 44min')} 
	if (msg.content === '!24:14'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 42min')} 
	if (msg.content === '!24:15'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 40min')} 
	if (msg.content === '!24:16'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 38min')} 
	if (msg.content === '!24:17'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 36min')} 
	if (msg.content === '!24:18'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 34min')} 
	if (msg.content === '!24:19'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 32min')} 
	if (msg.content === '!24:20'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 30min')} 
	if (msg.content === '!24:21'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 28min')} 
	if (msg.content === '!24:22'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 26min')} 
	if (msg.content === '!24:23'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 24min')} 
	if (msg.content === '!24:24'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 22min')} 
	if (msg.content === '!24:25'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 20min')} 
	if (msg.content === '!24:26'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 18min')} 
	if (msg.content === '!24:27'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 16min')} 
	if (msg.content === '!24:28'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 14min')} 
	if (msg.content === '!24:29'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 12min')} 
	if (msg.content === '!24:30'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 10min')} 
	if (msg.content === '!24:31'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 8min')} 
	if (msg.content === '!24:32'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 6min')} 
	if (msg.content === '!24:33'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 4min')} 
	if (msg.content === '!24:34'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 2min')} 
	if (msg.content === '!24:35'){msg.reply('Sua stamina ficara cheia em 2 Dia, 15h e 0min')} 
	if (msg.content === '!24:36'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 58min')} 
	if (msg.content === '!24:37'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 56min')} 
	if (msg.content === '!24:38'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 54min')} 
	if (msg.content === '!24:39'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 52min')} 
	if (msg.content === '!24:40'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 50min')} 
	if (msg.content === '!24:41'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 48min')} 
	if (msg.content === '!24:42'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 46min')} 
	if (msg.content === '!24:43'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 44min')} 
	if (msg.content === '!24:44'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 42min')} 
	if (msg.content === '!24:45'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 40min')} 
	if (msg.content === '!24:46'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 38min')} 
	if (msg.content === '!24:47'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 36min')} 
	if (msg.content === '!24:48'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 34min')} 
	if (msg.content === '!24:49'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 32min')} 
	if (msg.content === '!24:50'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 30min')} 
	if (msg.content === '!24:51'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 28min')} 
	if (msg.content === '!24:52'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 26min')} 
	if (msg.content === '!24:53'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 24min')} 
	if (msg.content === '!24:54'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 22min')} 
	if (msg.content === '!24:55'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 20min')} 
	if (msg.content === '!24:56'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 18min')} 
	if (msg.content === '!24:57'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 16min')} 
	if (msg.content === '!24:58'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 14min')} 
	if (msg.content === '!24:59'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 12min')} 
	if (msg.content === '!25:00'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 10min')} 
	if (msg.content === '!25:01'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 8min')} 
	if (msg.content === '!25:02'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 6min')} 
	if (msg.content === '!25:03'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 4min')} 
	if (msg.content === '!25:04'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 2min')} 
	if (msg.content === '!25:05'){msg.reply('Sua stamina ficara cheia em 2 Dia, 14h e 0min')} 
	if (msg.content === '!25:06'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 58min')} 
	if (msg.content === '!25:07'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 56min')} 
	if (msg.content === '!25:08'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 54min')} 
	if (msg.content === '!25:09'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 52min')} 
	if (msg.content === '!25:10'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 50min')} 
	if (msg.content === '!25:11'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 48min')} 
	if (msg.content === '!25:12'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 46min')} 
	if (msg.content === '!25:13'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 44min')} 
	if (msg.content === '!25:14'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 42min')} 
	if (msg.content === '!25:15'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 40min')} 
	if (msg.content === '!25:16'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 38min')} 
	if (msg.content === '!25:17'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 36min')} 
	if (msg.content === '!25:18'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 34min')} 
	if (msg.content === '!25:19'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 32min')} 
	if (msg.content === '!25:20'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 30min')} 
	if (msg.content === '!25:21'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 28min')} 
	if (msg.content === '!25:22'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 26min')} 
	if (msg.content === '!25:23'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 24min')} 
	if (msg.content === '!25:24'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 22min')} 
	if (msg.content === '!25:25'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 20min')} 
	if (msg.content === '!25:26'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 18min')} 
	if (msg.content === '!25:27'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 16min')} 
	if (msg.content === '!25:28'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 14min')} 
	if (msg.content === '!25:29'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 12min')} 
	if (msg.content === '!25:30'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 10min')} 
	if (msg.content === '!25:31'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 8min')} 
	if (msg.content === '!25:32'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 6min')} 
	if (msg.content === '!25:33'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 4min')} 
	if (msg.content === '!25:34'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 2min')} 
	if (msg.content === '!25:35'){msg.reply('Sua stamina ficara cheia em 2 Dia, 13h e 0min')} 
	if (msg.content === '!25:36'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 58min')} 
	if (msg.content === '!25:37'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 56min')} 
	if (msg.content === '!25:38'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 54min')} 
	if (msg.content === '!25:39'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 52min')} 
	if (msg.content === '!25:40'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 50min')} 
	if (msg.content === '!25:41'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 48min')} 
	if (msg.content === '!25:42'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 46min')} 
	if (msg.content === '!25:43'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 44min')} 
	if (msg.content === '!25:44'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 42min')} 
	if (msg.content === '!25:45'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 40min')} 
	if (msg.content === '!25:46'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 38min')} 
	if (msg.content === '!25:47'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 36min')} 
	if (msg.content === '!25:48'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 34min')} 
	if (msg.content === '!25:49'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 32min')} 
	if (msg.content === '!25:50'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 30min')} 
	if (msg.content === '!25:51'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 28min')} 
	if (msg.content === '!25:52'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 26min')} 
	if (msg.content === '!25:53'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 24min')} 
	if (msg.content === '!25:54'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 22min')} 
	if (msg.content === '!25:55'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 20min')} 
	if (msg.content === '!25:56'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 18min')} 
	if (msg.content === '!25:57'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 16min')} 
	if (msg.content === '!25:58'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 14min')} 
	if (msg.content === '!25:59'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 12min')} 
	if (msg.content === '!26:00'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 10min')} 
	if (msg.content === '!26:01'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 8min')} 
	if (msg.content === '!26:02'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 6min')} 
	if (msg.content === '!26:03'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 4min')} 
	if (msg.content === '!26:04'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 2min')} 
	if (msg.content === '!26:05'){msg.reply('Sua stamina ficara cheia em 2 Dia, 12h e 0min')} 
	if (msg.content === '!26:06'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 58min')} 
	if (msg.content === '!26:07'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 56min')} 
	if (msg.content === '!26:08'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 54min')} 
	if (msg.content === '!26:09'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 52min')} 
	if (msg.content === '!26:10'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 50min')} 
	if (msg.content === '!26:11'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 48min')} 
	if (msg.content === '!26:12'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 46min')} 
	if (msg.content === '!26:13'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 44min')} 
	if (msg.content === '!26:14'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 42min')} 
	if (msg.content === '!26:15'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 40min')} 
	if (msg.content === '!26:16'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 38min')} 
	if (msg.content === '!26:17'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 36min')} 
	if (msg.content === '!26:18'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 34min')} 
	if (msg.content === '!26:19'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 32min')} 
	if (msg.content === '!26:20'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 30min')} 
	if (msg.content === '!26:21'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 28min')} 
	if (msg.content === '!26:22'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 26min')} 
	if (msg.content === '!26:23'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 24min')} 
	if (msg.content === '!26:24'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 22min')} 
	if (msg.content === '!26:25'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 20min')} 
	if (msg.content === '!26:26'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 18min')} 
	if (msg.content === '!26:27'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 16min')} 
	if (msg.content === '!26:28'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 14min')} 
	if (msg.content === '!26:29'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 12min')} 
	if (msg.content === '!26:30'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 10min')} 
	if (msg.content === '!26:31'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 8min')} 
	if (msg.content === '!26:32'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 6min')} 
	if (msg.content === '!26:33'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 4min')} 
	if (msg.content === '!26:34'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 2min')} 
	if (msg.content === '!26:35'){msg.reply('Sua stamina ficara cheia em 2 Dia, 11h e 0min')} 
	if (msg.content === '!26:36'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 58min')} 
	if (msg.content === '!26:37'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 56min')} 
	if (msg.content === '!26:38'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 54min')} 
	if (msg.content === '!26:39'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 52min')} 
	if (msg.content === '!26:40'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 50min')} 
	if (msg.content === '!26:41'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 48min')} 
	if (msg.content === '!26:42'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 46min')} 
	if (msg.content === '!26:43'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 44min')} 
	if (msg.content === '!26:44'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 42min')} 
	if (msg.content === '!26:45'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 40min')} 
	if (msg.content === '!26:46'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 38min')} 
	if (msg.content === '!26:47'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 36min')} 
	if (msg.content === '!26:48'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 34min')} 
	if (msg.content === '!26:49'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 32min')} 
	if (msg.content === '!26:50'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 30min')} 
	if (msg.content === '!26:51'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 28min')} 
	if (msg.content === '!26:52'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 26min')} 
	if (msg.content === '!26:53'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 24min')} 
	if (msg.content === '!26:54'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 22min')} 
	if (msg.content === '!26:55'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 20min')} 
	if (msg.content === '!26:56'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 18min')} 
	if (msg.content === '!26:57'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 16min')} 
	if (msg.content === '!26:58'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 14min')} 
	if (msg.content === '!26:59'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 12min')} 
	if (msg.content === '!27:00'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 10min')} 
	if (msg.content === '!27:01'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 8min')} 
	if (msg.content === '!27:02'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 6min')} 
	if (msg.content === '!27:03'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 4min')} 
	if (msg.content === '!27:04'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 2min')} 
	if (msg.content === '!27:05'){msg.reply('Sua stamina ficara cheia em 2 Dia, 10h e 0min')} 
	if (msg.content === '!27:06'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 58min')} 
	if (msg.content === '!27:07'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 56min')} 
	if (msg.content === '!27:08'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 54min')} 
	if (msg.content === '!27:09'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 52min')} 
	if (msg.content === '!27:10'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 50min')} 
	if (msg.content === '!27:11'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 48min')} 
	if (msg.content === '!27:12'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 46min')} 
	if (msg.content === '!27:13'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 44min')} 
	if (msg.content === '!27:14'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 42min')} 
	if (msg.content === '!27:15'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 40min')} 
	if (msg.content === '!27:16'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 38min')} 
	if (msg.content === '!27:17'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 36min')} 
	if (msg.content === '!27:18'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 34min')} 
	if (msg.content === '!27:19'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 32min')} 
	if (msg.content === '!27:20'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 30min')} 
	if (msg.content === '!27:21'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 28min')} 
	if (msg.content === '!27:22'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 26min')} 
	if (msg.content === '!27:23'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 24min')} 
	if (msg.content === '!27:24'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 22min')} 
	if (msg.content === '!27:25'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 20min')} 
	if (msg.content === '!27:26'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 18min')} 
	if (msg.content === '!27:27'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 16min')} 
	if (msg.content === '!27:28'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 14min')} 
	if (msg.content === '!27:29'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 12min')} 
	if (msg.content === '!27:30'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 10min')} 
	if (msg.content === '!27:31'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 8min')} 
	if (msg.content === '!27:32'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 6min')} 
	if (msg.content === '!27:33'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 4min')} 
	if (msg.content === '!27:34'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 2min')} 
	if (msg.content === '!27:35'){msg.reply('Sua stamina ficara cheia em 2 Dia, 9h e 0min')} 
	if (msg.content === '!27:36'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 58min')} 
	if (msg.content === '!27:37'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 56min')} 
	if (msg.content === '!27:38'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 54min')} 
	if (msg.content === '!27:39'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 52min')} 
	if (msg.content === '!27:40'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 50min')} 
	if (msg.content === '!27:41'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 48min')} 
	if (msg.content === '!27:42'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 46min')} 
	if (msg.content === '!27:43'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 44min')} 
	if (msg.content === '!27:44'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 42min')} 
	if (msg.content === '!27:45'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 40min')} 
	if (msg.content === '!27:46'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 38min')} 
	if (msg.content === '!27:47'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 36min')} 
	if (msg.content === '!27:48'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 34min')} 
	if (msg.content === '!27:49'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 32min')} 
	if (msg.content === '!27:50'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 30min')} 
	if (msg.content === '!27:51'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 28min')} 
	if (msg.content === '!27:52'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 26min')} 
	if (msg.content === '!27:53'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 24min')} 
	if (msg.content === '!27:54'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 22min')} 
	if (msg.content === '!27:55'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 20min')} 
	if (msg.content === '!27:56'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 18min')} 
	if (msg.content === '!27:57'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 16min')} 
	if (msg.content === '!27:58'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 14min')} 
	if (msg.content === '!27:59'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 12min')} 
	if (msg.content === '!28:00'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 10min')} 
	if (msg.content === '!28:01'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 8min')} 
	if (msg.content === '!28:02'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 6min')} 
	if (msg.content === '!28:03'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 4min')} 
	if (msg.content === '!28:04'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 2min')} 
	if (msg.content === '!28:05'){msg.reply('Sua stamina ficara cheia em 2 Dia, 8h e 0min')} 
	if (msg.content === '!28:06'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 58min')} 
	if (msg.content === '!28:07'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 56min')} 
	if (msg.content === '!28:08'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 54min')} 
	if (msg.content === '!28:09'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 52min')} 
	if (msg.content === '!28:10'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 50min')} 
	if (msg.content === '!28:11'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 48min')} 
	if (msg.content === '!28:12'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 46min')} 
	if (msg.content === '!28:13'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 44min')} 
	if (msg.content === '!28:14'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 42min')} 
	if (msg.content === '!28:15'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 40min')} 
	if (msg.content === '!28:16'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 38min')} 
	if (msg.content === '!28:17'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 36min')} 
	if (msg.content === '!28:18'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 34min')} 
	if (msg.content === '!28:19'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 32min')} 
	if (msg.content === '!28:20'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 30min')} 
	if (msg.content === '!28:21'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 28min')} 
	if (msg.content === '!28:22'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 26min')} 
	if (msg.content === '!28:23'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 24min')} 
	if (msg.content === '!28:24'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 22min')} 
	if (msg.content === '!28:25'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 20min')} 
	if (msg.content === '!28:26'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 18min')} 
	if (msg.content === '!28:27'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 16min')} 
	if (msg.content === '!28:28'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 14min')} 
	if (msg.content === '!28:29'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 12min')} 
	if (msg.content === '!28:30'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 10min')} 
	if (msg.content === '!28:31'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 8min')} 
	if (msg.content === '!28:32'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 6min')} 
	if (msg.content === '!28:33'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 4min')} 
	if (msg.content === '!28:34'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 2min')} 
	if (msg.content === '!28:35'){msg.reply('Sua stamina ficara cheia em 2 Dia, 7h e 0min')} 
	if (msg.content === '!28:36'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 58min')} 
	if (msg.content === '!28:37'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 56min')} 
	if (msg.content === '!28:38'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 54min')} 
	if (msg.content === '!28:39'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 52min')} 
	if (msg.content === '!28:40'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 50min')} 
	if (msg.content === '!28:41'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 48min')} 
	if (msg.content === '!28:42'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 46min')} 
	if (msg.content === '!28:43'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 44min')} 
	if (msg.content === '!28:44'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 42min')} 
	if (msg.content === '!28:45'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 40min')} 
	if (msg.content === '!28:46'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 38min')} 
	if (msg.content === '!28:47'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 36min')} 
	if (msg.content === '!28:48'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 34min')} 
	if (msg.content === '!28:49'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 32min')} 
	if (msg.content === '!28:50'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 30min')} 
	if (msg.content === '!28:51'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 28min')} 
	if (msg.content === '!28:52'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 26min')} 
	if (msg.content === '!28:53'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 24min')} 
	if (msg.content === '!28:54'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 22min')} 
	if (msg.content === '!28:55'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 20min')} 
	if (msg.content === '!28:56'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 18min')} 
	if (msg.content === '!28:57'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 16min')} 
	if (msg.content === '!28:58'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 14min')} 
	if (msg.content === '!28:59'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 12min')} 
	if (msg.content === '!29:00'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 10min')} 
	if (msg.content === '!29:01'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 8min')} 
	if (msg.content === '!29:02'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 6min')} 
	if (msg.content === '!29:03'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 4min')} 
	if (msg.content === '!29:04'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 2min')} 
	if (msg.content === '!29:05'){msg.reply('Sua stamina ficara cheia em 2 Dia, 6h e 0min')} 
	if (msg.content === '!29:06'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 58min')} 
	if (msg.content === '!29:07'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 56min')} 
	if (msg.content === '!29:08'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 54min')} 
	if (msg.content === '!29:09'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 52min')} 
	if (msg.content === '!29:10'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 50min')} 
	if (msg.content === '!29:11'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 48min')} 
	if (msg.content === '!29:12'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 46min')} 
	if (msg.content === '!29:13'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 44min')} 
	if (msg.content === '!29:14'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 42min')} 
	if (msg.content === '!29:15'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 40min')} 
	if (msg.content === '!29:16'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 38min')} 
	if (msg.content === '!29:17'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 36min')} 
	if (msg.content === '!29:18'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 34min')} 
	if (msg.content === '!29:19'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 32min')} 
	if (msg.content === '!29:20'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 30min')} 
	if (msg.content === '!29:21'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 28min')} 
	if (msg.content === '!29:22'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 26min')} 
	if (msg.content === '!29:23'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 24min')} 
	if (msg.content === '!29:24'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 22min')} 
	if (msg.content === '!29:25'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 20min')} 
	if (msg.content === '!29:26'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 18min')} 
	if (msg.content === '!29:27'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 16min')} 
	if (msg.content === '!29:28'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 14min')} 
	if (msg.content === '!29:29'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 12min')} 
	if (msg.content === '!29:30'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 10min')} 
	if (msg.content === '!29:31'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 8min')} 
	if (msg.content === '!29:32'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 6min')} 
	if (msg.content === '!29:33'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 4min')} 
	if (msg.content === '!29:34'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 2min')} 
	if (msg.content === '!29:35'){msg.reply('Sua stamina ficara cheia em 2 Dia, 5h e 0min')} 
	if (msg.content === '!29:36'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 58min')} 
	if (msg.content === '!29:37'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 56min')} 
	if (msg.content === '!29:38'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 54min')} 
	if (msg.content === '!29:39'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 52min')} 
	if (msg.content === '!29:40'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 50min')} 
	if (msg.content === '!29:41'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 48min')} 
	if (msg.content === '!29:42'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 46min')} 
	if (msg.content === '!29:43'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 44min')} 
	if (msg.content === '!29:44'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 42min')} 
	if (msg.content === '!29:45'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 40min')} 
	if (msg.content === '!29:46'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 38min')} 
	if (msg.content === '!29:47'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 36min')} 
	if (msg.content === '!29:48'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 34min')} 
	if (msg.content === '!29:49'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 32min')} 
	if (msg.content === '!29:50'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 30min')} 
	if (msg.content === '!29:51'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 28min')} 
	if (msg.content === '!29:52'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 26min')} 
	if (msg.content === '!29:53'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 24min')} 
	if (msg.content === '!29:54'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 22min')} 
	if (msg.content === '!29:55'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 20min')} 
	if (msg.content === '!29:56'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 18min')} 
	if (msg.content === '!29:57'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 16min')} 
	if (msg.content === '!29:58'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 14min')} 
	if (msg.content === '!29:59'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 12min')} 
	if (msg.content === '!30:00'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 10min')} 
	if (msg.content === '!30:01'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 8min')} 
	if (msg.content === '!30:02'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 6min')} 
	if (msg.content === '!30:03'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 4min')} 
	if (msg.content === '!30:04'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 2min')} 
	if (msg.content === '!30:05'){msg.reply('Sua stamina ficara cheia em 2 Dia, 4h e 0min')} 
	if (msg.content === '!30:06'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 58min')} 
	if (msg.content === '!30:07'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 56min')} 
	if (msg.content === '!30:08'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 54min')} 
	if (msg.content === '!30:09'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 52min')} 
	if (msg.content === '!30:10'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 50min')} 
	if (msg.content === '!30:11'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 48min')} 
	if (msg.content === '!30:12'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 46min')} 
	if (msg.content === '!30:13'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 44min')} 
	if (msg.content === '!30:14'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 42min')} 
	if (msg.content === '!30:15'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 40min')} 
	if (msg.content === '!30:16'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 38min')} 
	if (msg.content === '!30:17'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 36min')} 
	if (msg.content === '!30:18'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 34min')} 
	if (msg.content === '!30:19'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 32min')} 
	if (msg.content === '!30:20'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 30min')} 
	if (msg.content === '!30:21'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 28min')} 
	if (msg.content === '!30:22'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 26min')} 
	if (msg.content === '!30:23'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 24min')} 
	if (msg.content === '!30:24'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 22min')} 
	if (msg.content === '!30:25'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 20min')} 
	if (msg.content === '!30:26'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 18min')} 
	if (msg.content === '!30:27'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 16min')} 
	if (msg.content === '!30:28'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 14min')} 
	if (msg.content === '!30:29'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 12min')} 
	if (msg.content === '!30:30'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 10min')} 
	if (msg.content === '!30:31'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 8min')} 
	if (msg.content === '!30:32'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 6min')} 
	if (msg.content === '!30:33'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 4min')} 
	if (msg.content === '!30:34'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 2min')} 
	if (msg.content === '!30:35'){msg.reply('Sua stamina ficara cheia em 2 Dia, 3h e 0min')} 
	if (msg.content === '!30:36'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 58min')} 
	if (msg.content === '!30:37'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 56min')} 
	if (msg.content === '!30:38'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 54min')} 
	if (msg.content === '!30:39'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 52min')} 
	if (msg.content === '!30:40'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 50min')} 
	if (msg.content === '!30:41'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 48min')} 
	if (msg.content === '!30:42'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 46min')} 
	if (msg.content === '!30:43'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 44min')} 
	if (msg.content === '!30:44'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 42min')} 
	if (msg.content === '!30:45'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 40min')} 
	if (msg.content === '!30:46'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 38min')} 
	if (msg.content === '!30:47'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 36min')} 
	if (msg.content === '!30:48'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 34min')} 
	if (msg.content === '!30:49'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 32min')} 
	if (msg.content === '!30:50'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 30min')} 
	if (msg.content === '!30:51'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 28min')} 
	if (msg.content === '!30:52'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 26min')} 
	if (msg.content === '!30:53'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 24min')} 
	if (msg.content === '!30:54'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 22min')} 
	if (msg.content === '!30:55'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 20min')} 
	if (msg.content === '!30:56'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 18min')} 
	if (msg.content === '!30:57'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 16min')} 
	if (msg.content === '!30:58'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 14min')} 
	if (msg.content === '!30:59'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 12min')} 
	if (msg.content === '!31:00'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 10min')} 
	if (msg.content === '!31:01'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 8min')} 
	if (msg.content === '!31:02'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 6min')} 
	if (msg.content === '!31:03'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 4min')} 
	if (msg.content === '!31:04'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 2min')} 
	if (msg.content === '!31:05'){msg.reply('Sua stamina ficara cheia em 2 Dia, 2h e 0min')} 
	if (msg.content === '!31:06'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 58min')} 
	if (msg.content === '!31:07'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 56min')} 
	if (msg.content === '!31:08'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 54min')} 
	if (msg.content === '!31:09'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 52min')} 
	if (msg.content === '!31:10'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 50min')} 
	if (msg.content === '!31:11'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 48min')} 
	if (msg.content === '!31:12'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 46min')} 
	if (msg.content === '!31:13'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 44min')} 
	if (msg.content === '!31:14'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 42min')} 
	if (msg.content === '!31:15'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 40min')} 
	if (msg.content === '!31:16'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 38min')} 
	if (msg.content === '!31:17'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 36min')} 
	if (msg.content === '!31:18'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 34min')} 
	if (msg.content === '!31:19'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 32min')} 
	if (msg.content === '!31:20'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 30min')} 
	if (msg.content === '!31:21'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 28min')} 
	if (msg.content === '!31:22'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 26min')} 
	if (msg.content === '!31:23'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 24min')} 
	if (msg.content === '!31:24'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 22min')} 
	if (msg.content === '!31:25'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 20min')} 
	if (msg.content === '!31:26'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 18min')} 
	if (msg.content === '!31:27'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 16min')} 
	if (msg.content === '!31:28'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 14min')} 
	if (msg.content === '!31:29'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 12min')} 
	if (msg.content === '!31:30'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 10min')} 
	if (msg.content === '!31:31'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 8min')} 
	if (msg.content === '!31:32'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 6min')} 
	if (msg.content === '!31:33'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 4min')} 
	if (msg.content === '!31:34'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 2min')} 
	if (msg.content === '!31:35'){msg.reply('Sua stamina ficara cheia em 2 Dia, 1h e 0min')} 
	if (msg.content === '!31:36'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 58min')} 
	if (msg.content === '!31:37'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 56min')} 
	if (msg.content === '!31:38'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 54min')} 
	if (msg.content === '!31:39'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 52min')} 
	if (msg.content === '!31:40'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 50min')} 
	if (msg.content === '!31:41'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 48min')} 
	if (msg.content === '!31:42'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 46min')} 
	if (msg.content === '!31:43'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 44min')} 
	if (msg.content === '!31:44'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 42min')} 
	if (msg.content === '!31:45'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 40min')} 
	if (msg.content === '!31:46'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 38min')} 
	if (msg.content === '!31:47'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 36min')} 
	if (msg.content === '!31:48'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 34min')} 
	if (msg.content === '!31:49'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 32min')} 
	if (msg.content === '!31:50'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 30min')} 
	if (msg.content === '!31:51'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 28min')} 
	if (msg.content === '!31:52'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 26min')} 
	if (msg.content === '!31:53'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 24min')} 
	if (msg.content === '!31:54'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 22min')} 
	if (msg.content === '!31:55'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 20min')} 
	if (msg.content === '!31:56'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 18min')} 
	if (msg.content === '!31:57'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 16min')} 
	if (msg.content === '!31:58'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 14min')} 
	if (msg.content === '!31:59'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 12min')} 
	if (msg.content === '!32:00'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 10min')} 
	if (msg.content === '!32:01'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 8min')} 
	if (msg.content === '!32:02'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 6min')} 
	if (msg.content === '!32:03'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 4min')} 
	if (msg.content === '!32:04'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 2min')} 
	if (msg.content === '!32:05'){msg.reply('Sua stamina ficara cheia em 2 Dia, e 0min')} 
	if (msg.content === '!32:06'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 58min')} 
	if (msg.content === '!32:07'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 56min')} 
	if (msg.content === '!32:08'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 54min')} 
	if (msg.content === '!32:09'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 52min')} 
	if (msg.content === '!32:10'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 50min')} 
	if (msg.content === '!32:11'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 48min')} 
	if (msg.content === '!32:12'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 46min')} 
	if (msg.content === '!32:13'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 44min')} 
	if (msg.content === '!32:14'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 42min')} 
	if (msg.content === '!32:15'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 40min')} 
	if (msg.content === '!32:16'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 38min')} 
	if (msg.content === '!32:17'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 36min')} 
	if (msg.content === '!32:18'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 34min')} 
	if (msg.content === '!32:19'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 32min')} 
	if (msg.content === '!32:20'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 30min')} 
	if (msg.content === '!32:21'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 28min')} 
	if (msg.content === '!32:22'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 26min')} 
	if (msg.content === '!32:23'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 24min')} 
	if (msg.content === '!32:24'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 22min')} 
	if (msg.content === '!32:25'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 20min')} 
	if (msg.content === '!32:26'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 18min')} 
	if (msg.content === '!32:27'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 16min')} 
	if (msg.content === '!32:28'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 14min')} 
	if (msg.content === '!32:29'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 12min')} 
	if (msg.content === '!32:30'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 10min')} 
	if (msg.content === '!32:31'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 8min')} 
	if (msg.content === '!32:32'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 6min')} 
	if (msg.content === '!32:33'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 4min')} 
	if (msg.content === '!32:34'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 2min')} 
	if (msg.content === '!32:35'){msg.reply('Sua stamina ficara cheia em 1 Dia, 23h e 0min')} 
	if (msg.content === '!32:36'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 58min')} 
	if (msg.content === '!32:37'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 56min')} 
	if (msg.content === '!32:38'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 54min')} 
	if (msg.content === '!32:39'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 52min')} 
	if (msg.content === '!32:40'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 50min')} 
	if (msg.content === '!32:41'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 48min')} 
	if (msg.content === '!32:42'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 46min')} 
	if (msg.content === '!32:43'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 44min')} 
	if (msg.content === '!32:44'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 42min')} 
	if (msg.content === '!32:45'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 40min')} 
	if (msg.content === '!32:46'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 38min')} 
	if (msg.content === '!32:47'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 36min')} 
	if (msg.content === '!32:48'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 34min')} 
	if (msg.content === '!32:49'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 32min')} 
	if (msg.content === '!32:50'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 30min')} 
	if (msg.content === '!32:51'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 28min')} 
	if (msg.content === '!32:52'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 26min')} 
	if (msg.content === '!32:53'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 24min')} 
	if (msg.content === '!32:54'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 22min')} 
	if (msg.content === '!32:55'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 20min')} 
	if (msg.content === '!32:56'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 18min')} 
	if (msg.content === '!32:57'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 16min')} 
	if (msg.content === '!32:58'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 14min')} 
	if (msg.content === '!32:59'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 12min')} 
	if (msg.content === '!33:00'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 10min')} 
	if (msg.content === '!33:01'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 8min')} 
	if (msg.content === '!33:02'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 6min')} 
	if (msg.content === '!33:03'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 4min')} 
	if (msg.content === '!33:04'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 2min')} 
	if (msg.content === '!33:05'){msg.reply('Sua stamina ficara cheia em 1 Dia, 22h e 0min')} 
	if (msg.content === '!33:06'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 58min')} 
	if (msg.content === '!33:07'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 56min')} 
	if (msg.content === '!33:08'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 54min')} 
	if (msg.content === '!33:09'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 52min')} 
	if (msg.content === '!33:10'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 50min')} 
	if (msg.content === '!33:11'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 48min')} 
	if (msg.content === '!33:12'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 46min')} 
	if (msg.content === '!33:13'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 44min')} 
	if (msg.content === '!33:14'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 42min')} 
	if (msg.content === '!33:15'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 40min')} 
	if (msg.content === '!33:16'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 38min')} 
	if (msg.content === '!33:17'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 36min')} 
	if (msg.content === '!33:18'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 34min')} 
	if (msg.content === '!33:19'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 32min')} 
	if (msg.content === '!33:20'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 30min')} 
	if (msg.content === '!33:21'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 28min')} 
	if (msg.content === '!33:22'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 26min')} 
	if (msg.content === '!33:23'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 24min')} 
	if (msg.content === '!33:24'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 22min')} 
	if (msg.content === '!33:25'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 20min')} 
	if (msg.content === '!33:26'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 18min')} 
	if (msg.content === '!33:27'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 16min')} 
	if (msg.content === '!33:28'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 14min')} 
	if (msg.content === '!33:29'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 12min')} 
	if (msg.content === '!33:30'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 10min')} 
	if (msg.content === '!33:31'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 8min')} 
	if (msg.content === '!33:32'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 6min')} 
	if (msg.content === '!33:33'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 4min')} 
	if (msg.content === '!33:34'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 2min')} 
	if (msg.content === '!33:35'){msg.reply('Sua stamina ficara cheia em 1 Dia, 21h e 0min')} 
	if (msg.content === '!33:36'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 58min')} 
	if (msg.content === '!33:37'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 56min')} 
	if (msg.content === '!33:38'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 54min')} 
	if (msg.content === '!33:39'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 52min')} 
	if (msg.content === '!33:40'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 50min')} 
	if (msg.content === '!33:41'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 48min')} 
	if (msg.content === '!33:42'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 46min')} 
	if (msg.content === '!33:43'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 44min')} 
	if (msg.content === '!33:44'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 42min')} 
	if (msg.content === '!33:45'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 40min')} 
	if (msg.content === '!33:46'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 38min')} 
	if (msg.content === '!33:47'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 36min')} 
	if (msg.content === '!33:48'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 34min')} 
	if (msg.content === '!33:49'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 32min')} 
	if (msg.content === '!33:50'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 30min')} 
	if (msg.content === '!33:51'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 28min')} 
	if (msg.content === '!33:52'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 26min')} 
	if (msg.content === '!33:53'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 24min')} 
	if (msg.content === '!33:54'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 22min')} 
	if (msg.content === '!33:55'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 20min')} 
	if (msg.content === '!33:56'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 18min')} 
	if (msg.content === '!33:57'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 16min')} 
	if (msg.content === '!33:58'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 14min')} 
	if (msg.content === '!33:59'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 12min')} 
	if (msg.content === '!34:00'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 10min')} 
	if (msg.content === '!34:01'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 8min')} 
	if (msg.content === '!34:02'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 6min')} 
	if (msg.content === '!34:03'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 4min')} 
	if (msg.content === '!34:04'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 2min')} 
	if (msg.content === '!34:05'){msg.reply('Sua stamina ficara cheia em 1 Dia, 20h e 0min')} 
	if (msg.content === '!34:06'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 58min')} 
	if (msg.content === '!34:07'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 56min')} 
	if (msg.content === '!34:08'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 54min')} 
	if (msg.content === '!34:09'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 52min')} 
	if (msg.content === '!34:10'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 50min')} 
	if (msg.content === '!34:11'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 48min')} 
	if (msg.content === '!34:12'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 46min')} 
	if (msg.content === '!34:13'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 44min')} 
	if (msg.content === '!34:14'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 42min')} 
	if (msg.content === '!34:15'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 40min')} 
	if (msg.content === '!34:16'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 38min')} 
	if (msg.content === '!34:17'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 36min')} 
	if (msg.content === '!34:18'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 34min')} 
	if (msg.content === '!34:19'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 32min')} 
	if (msg.content === '!34:20'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 30min')} 
	if (msg.content === '!34:21'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 28min')} 
	if (msg.content === '!34:22'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 26min')} 
	if (msg.content === '!34:23'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 24min')} 
	if (msg.content === '!34:24'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 22min')} 
	if (msg.content === '!34:25'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 20min')} 
	if (msg.content === '!34:26'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 18min')} 
	if (msg.content === '!34:27'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 16min')} 
	if (msg.content === '!34:28'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 14min')} 
	if (msg.content === '!34:29'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 12min')} 
	if (msg.content === '!34:30'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 10min')} 
	if (msg.content === '!34:31'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 8min')} 
	if (msg.content === '!34:32'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 6min')} 
	if (msg.content === '!34:33'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 4min')} 
	if (msg.content === '!34:34'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 2min')} 
	if (msg.content === '!34:35'){msg.reply('Sua stamina ficara cheia em 1 Dia, 19h e 0min')} 
	if (msg.content === '!34:36'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 58min')} 
	if (msg.content === '!34:37'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 56min')} 
	if (msg.content === '!34:38'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 54min')} 
	if (msg.content === '!34:39'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 52min')} 
	if (msg.content === '!34:40'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 50min')} 
	if (msg.content === '!34:41'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 48min')} 
	if (msg.content === '!34:42'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 46min')} 
	if (msg.content === '!34:43'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 44min')} 
	if (msg.content === '!34:44'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 42min')} 
	if (msg.content === '!34:45'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 40min')} 
	if (msg.content === '!34:46'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 38min')} 
	if (msg.content === '!34:47'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 36min')} 
	if (msg.content === '!34:48'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 34min')} 
	if (msg.content === '!34:49'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 32min')} 
	if (msg.content === '!34:50'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 30min')} 
	if (msg.content === '!34:51'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 28min')} 
	if (msg.content === '!34:52'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 26min')} 
	if (msg.content === '!34:53'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 24min')} 
	if (msg.content === '!34:54'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 22min')} 
	if (msg.content === '!34:55'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 20min')} 
	if (msg.content === '!34:56'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 18min')} 
	if (msg.content === '!34:57'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 16min')} 
	if (msg.content === '!34:58'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 14min')} 
	if (msg.content === '!35:59'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 12min')} 
	if (msg.content === '!35:00'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 10min')} 
	if (msg.content === '!35:01'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 8min')} 
	if (msg.content === '!35:02'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 6min')} 
	if (msg.content === '!35:03'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 4min')} 
	if (msg.content === '!35:04'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 2min')} 
	if (msg.content === '!35:05'){msg.reply('Sua stamina ficara cheia em 1 Dia, 18h e 0min')} 
	if (msg.content === '!35:06'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 58min')} 
	if (msg.content === '!35:07'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 56min')} 
	if (msg.content === '!35:08'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 54min')} 
	if (msg.content === '!35:09'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 52min')} 
	if (msg.content === '!35:10'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 50min')} 
	if (msg.content === '!35:11'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 48min')} 
	if (msg.content === '!35:12'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 46min')} 
	if (msg.content === '!35:13'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 44min')} 
	if (msg.content === '!35:14'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 42min')} 
	if (msg.content === '!35:15'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 40min')} 
	if (msg.content === '!35:16'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 38min')} 
	if (msg.content === '!35:17'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 36min')} 
	if (msg.content === '!35:18'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 34min')} 
	if (msg.content === '!35:19'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 32min')} 
	if (msg.content === '!35:20'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 30min')} 
	if (msg.content === '!35:21'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 28min')} 
	if (msg.content === '!35:22'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 26min')} 
	if (msg.content === '!35:23'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 24min')} 
	if (msg.content === '!35:24'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 22min')} 
	if (msg.content === '!35:25'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 20min')} 
	if (msg.content === '!35:26'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 18min')} 
	if (msg.content === '!35:27'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 16min')} 
	if (msg.content === '!35:28'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 14min')} 
	if (msg.content === '!35:29'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 12min')} 
	if (msg.content === '!35:30'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 10min')} 
	if (msg.content === '!35:31'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 8min')} 
	if (msg.content === '!35:32'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 6min')} 
	if (msg.content === '!35:33'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 4min')} 
	if (msg.content === '!35:34'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 2min')} 
	if (msg.content === '!35:35'){msg.reply('Sua stamina ficara cheia em 1 Dia, 17h e 0min')} 
	if (msg.content === '!35:36'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 58min')} 
	if (msg.content === '!35:37'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 56min')} 
	if (msg.content === '!35:38'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 54min')} 
	if (msg.content === '!35:39'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 52min')} 
	if (msg.content === '!35:40'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 50min')} 
	if (msg.content === '!35:41'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 48min')} 
	if (msg.content === '!35:42'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 46min')} 
	if (msg.content === '!35:43'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 44min')} 
	if (msg.content === '!35:44'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 42min')} 
	if (msg.content === '!35:45'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 40min')} 
	if (msg.content === '!35:46'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 38min')} 
	if (msg.content === '!35:47'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 36min')} 
	if (msg.content === '!35:48'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 34min')} 
	if (msg.content === '!35:49'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 32min')} 
	if (msg.content === '!35:50'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 30min')} 
	if (msg.content === '!35:51'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 28min')} 
	if (msg.content === '!35:52'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 26min')} 
	if (msg.content === '!35:53'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 24min')} 
	if (msg.content === '!35:54'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 22min')} 
	if (msg.content === '!35:55'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 20min')} 
	if (msg.content === '!35:56'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 18min')} 
	if (msg.content === '!35:57'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 16min')} 
	if (msg.content === '!35:58'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 14min')} 
	if (msg.content === '!35:59'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 12min')} 
	if (msg.content === '!36:00'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 10min')} 
	if (msg.content === '!36:01'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 8min')} 
	if (msg.content === '!36:02'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 6min')} 
	if (msg.content === '!36:03'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 4min')} 
	if (msg.content === '!36:04'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 2min')} 
	if (msg.content === '!36:05'){msg.reply('Sua stamina ficara cheia em 1 Dia, 16h e 0min')} 
	if (msg.content === '!36:06'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 58min')} 
	if (msg.content === '!36:07'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 56min')} 
	if (msg.content === '!36:08'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 54min')} 
	if (msg.content === '!36:09'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 52min')} 
	if (msg.content === '!36:10'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 50min')} 
	if (msg.content === '!36:11'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 48min')} 
	if (msg.content === '!36:12'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 46min')} 
	if (msg.content === '!36:13'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 44min')} 
	if (msg.content === '!36:14'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 42min')} 
	if (msg.content === '!36:15'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 40min')} 
	if (msg.content === '!36:16'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 38min')} 
	if (msg.content === '!36:17'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 36min')} 
	if (msg.content === '!36:18'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 34min')} 
	if (msg.content === '!36:19'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 32min')} 
	if (msg.content === '!36:20'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 30min')} 
	if (msg.content === '!36:21'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 28min')} 
	if (msg.content === '!36:22'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 26min')} 
	if (msg.content === '!36:23'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 24min')} 
	if (msg.content === '!36:24'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 22min')} 
	if (msg.content === '!36:25'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 20min')} 
	if (msg.content === '!36:26'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 18min')} 
	if (msg.content === '!36:27'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 16min')} 
	if (msg.content === '!36:28'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 14min')} 
	if (msg.content === '!36:29'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 12min')} 
	if (msg.content === '!36:30'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 10min')} 
	if (msg.content === '!36:31'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 8min')} 
	if (msg.content === '!36:32'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 6min')} 
	if (msg.content === '!36:33'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 4min')} 
	if (msg.content === '!36:34'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 2min')} 
	if (msg.content === '!36:35'){msg.reply('Sua stamina ficara cheia em 1 Dia, 15h e 0min')} 
	if (msg.content === '!36:36'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 58min')} 
	if (msg.content === '!36:37'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 56min')} 
	if (msg.content === '!36:38'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 54min')} 
	if (msg.content === '!36:39'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 52min')} 
	if (msg.content === '!36:40'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 50min')} 
	if (msg.content === '!36:41'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 48min')} 
	if (msg.content === '!36:42'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 46min')} 
	if (msg.content === '!36:43'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 44min')} 
	if (msg.content === '!36:44'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 42min')} 
	if (msg.content === '!36:45'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 40min')} 
	if (msg.content === '!36:46'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 38min')} 
	if (msg.content === '!36:47'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 36min')} 
	if (msg.content === '!36:48'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 34min')} 
	if (msg.content === '!36:49'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 32min')} 
	if (msg.content === '!36:50'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 30min')} 
	if (msg.content === '!36:51'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 28min')} 
	if (msg.content === '!36:52'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 26min')} 
	if (msg.content === '!36:53'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 24min')} 
	if (msg.content === '!36:54'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 22min')} 
	if (msg.content === '!36:55'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 20min')} 
	if (msg.content === '!36:56'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 18min')} 
	if (msg.content === '!36:57'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 16min')} 
	if (msg.content === '!36:58'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 14min')} 
	if (msg.content === '!36:59'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 12min')} 
	if (msg.content === '!37:00'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 10min')} 
	if (msg.content === '!37:01'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 8min')} 
	if (msg.content === '!37:02'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 6min')} 
	if (msg.content === '!37:03'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 4min')} 
	if (msg.content === '!37:04'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 2min')} 
	if (msg.content === '!37:05'){msg.reply('Sua stamina ficara cheia em 1 Dia, 14h e 0min')} 
	if (msg.content === '!37:06'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 58min')} 
	if (msg.content === '!37:07'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 56min')} 
	if (msg.content === '!37:08'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 54min')} 
	if (msg.content === '!37:09'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 52min')} 
	if (msg.content === '!37:10'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 50min')} 
	if (msg.content === '!37:11'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 48min')} 
	if (msg.content === '!37:12'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 46min')} 
	if (msg.content === '!37:13'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 44min')} 
	if (msg.content === '!37:14'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 42min')} 
	if (msg.content === '!37:15'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 40min')} 
	if (msg.content === '!37:16'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 38min')} 
	if (msg.content === '!37:17'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 36min')} 
	if (msg.content === '!37:18'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 34min')} 
	if (msg.content === '!37:19'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 32min')} 
	if (msg.content === '!37:20'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 30min')} 
	if (msg.content === '!37:21'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 28min')} 
	if (msg.content === '!37:22'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 26min')} 
	if (msg.content === '!37:23'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 24min')} 
	if (msg.content === '!37:24'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 22min')} 
	if (msg.content === '!37:25'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 20min')} 
	if (msg.content === '!37:26'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 18min')} 
	if (msg.content === '!37:27'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 16min')} 
	if (msg.content === '!37:28'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 14min')} 
	if (msg.content === '!37:29'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 12min')} 
	if (msg.content === '!37:30'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 10min')} 
	if (msg.content === '!37:31'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 8min')} 
	if (msg.content === '!37:32'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 6min')} 
	if (msg.content === '!37:33'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 4min')} 
	if (msg.content === '!37:34'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 2min')} 
	if (msg.content === '!37:35'){msg.reply('Sua stamina ficara cheia em 1 Dia, 13h e 0min')} 
	if (msg.content === '!37:36'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 58min')} 
	if (msg.content === '!37:37'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 56min')} 
	if (msg.content === '!37:38'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 54min')} 
	if (msg.content === '!37:39'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 52min')} 
	if (msg.content === '!37:40'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 50min')} 
	if (msg.content === '!37:41'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 48min')} 
	if (msg.content === '!37:42'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 46min')} 
	if (msg.content === '!37:43'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 44min')} 
	if (msg.content === '!37:44'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 42min')} 
	if (msg.content === '!37:45'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 40min')} 
	if (msg.content === '!37:46'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 38min')} 
	if (msg.content === '!37:47'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 36min')} 
	if (msg.content === '!37:48'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 34min')} 
	if (msg.content === '!37:49'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 32min')} 
	if (msg.content === '!37:50'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 30min')} 
	if (msg.content === '!37:51'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 28min')} 
	if (msg.content === '!37:52'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 26min')} 
	if (msg.content === '!37:53'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 24min')} 
	if (msg.content === '!37:54'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 22min')} 
	if (msg.content === '!37:55'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 20min')} 
	if (msg.content === '!37:56'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 18min')} 
	if (msg.content === '!37:57'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 16min')} 
	if (msg.content === '!37:58'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 14min')} 
	if (msg.content === '!37:59'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 12min')} 
	if (msg.content === '!38:00'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 10min')} 
	if (msg.content === '!38:01'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 8min')} 
	if (msg.content === '!38:02'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 6min')} 
	if (msg.content === '!38:03'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 4min')} 
	if (msg.content === '!38:04'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 2min')} 
	if (msg.content === '!38:05'){msg.reply('Sua stamina ficara cheia em 1 Dia, 12h e 0min')} 
	if (msg.content === '!38:06'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 58min')} 
	if (msg.content === '!38:07'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 56min')} 
	if (msg.content === '!38:08'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 54min')} 
	if (msg.content === '!38:09'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 52min')} 
	if (msg.content === '!38:10'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 50min')} 
	if (msg.content === '!38:11'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 48min')} 
	if (msg.content === '!38:12'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 46min')} 
	if (msg.content === '!38:13'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 44min')} 
	if (msg.content === '!38:14'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 42min')} 
	if (msg.content === '!38:15'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 40min')} 
	if (msg.content === '!38:16'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 38min')} 
	if (msg.content === '!38:17'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 36min')} 
	if (msg.content === '!38:18'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 34min')} 
	if (msg.content === '!38:19'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 32min')} 
	if (msg.content === '!38:20'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 30min')} 
	if (msg.content === '!38:21'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 28min')} 
	if (msg.content === '!38:22'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 26min')} 
	if (msg.content === '!38:23'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 24min')} 
	if (msg.content === '!38:24'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 22min')} 
	if (msg.content === '!38:25'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 20min')} 
	if (msg.content === '!38:26'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 18min')} 
	if (msg.content === '!38:27'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 16min')} 
	if (msg.content === '!38:28'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 14min')} 
	if (msg.content === '!38:29'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 12min')} 
	if (msg.content === '!38:30'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 10min')} 
	if (msg.content === '!38:31'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 8min')} 
	if (msg.content === '!38:32'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 6min')} 
	if (msg.content === '!38:33'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 4min')} 
	if (msg.content === '!38:34'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 2min')} 
	if (msg.content === '!38:35'){msg.reply('Sua stamina ficara cheia em 1 Dia, 11h e 0min')} 
	if (msg.content === '!38:36'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 58min')} 
	if (msg.content === '!38:37'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 56min')} 
	if (msg.content === '!38:38'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 54min')} 
	if (msg.content === '!38:39'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 52min')} 
	if (msg.content === '!38:40'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 50min')} 
	if (msg.content === '!38:41'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 48min')} 
	if (msg.content === '!38:42'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 46min')} 
	if (msg.content === '!38:43'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 44min')} 
	if (msg.content === '!38:44'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 42min')} 
	if (msg.content === '!38:45'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 40min')} 
	if (msg.content === '!38:46'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 38min')} 
	if (msg.content === '!38:47'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 36min')} 
	if (msg.content === '!38:48'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 34min')} 
	if (msg.content === '!38:49'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 32min')} 
	if (msg.content === '!38:50'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 30min')} 
	if (msg.content === '!38:51'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 28min')} 
	if (msg.content === '!38:52'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 26min')} 
	if (msg.content === '!38:53'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 24min')} 
	if (msg.content === '!38:54'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 22min')} 
	if (msg.content === '!38:55'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 20min')} 
	if (msg.content === '!38:56'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 18min')} 
	if (msg.content === '!38:57'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 16min')} 
	if (msg.content === '!38:58'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 14min')} 
	if (msg.content === '!38:59'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 12min')} 
	if (msg.content === '!39:00'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 10min')} 
	if (msg.content === '!39:01'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 8min')} 
	if (msg.content === '!39:02'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 6min')} 
	if (msg.content === '!39:03'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 4min')} 
	if (msg.content === '!39:04'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 2min')} 
	if (msg.content === '!39:05'){msg.reply('Sua stamina ficara cheia em 1 Dia, 10h e 0min')} 
	if (msg.content === '!39:06'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 58min')} 
	if (msg.content === '!39:07'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 56min')} 
	if (msg.content === '!39:08'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 54min')} 
	if (msg.content === '!39:09'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 52min')} 
	if (msg.content === '!39:10'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 50min')} 
	if (msg.content === '!39:11'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 48min')} 
	if (msg.content === '!39:12'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 46min')} 
	if (msg.content === '!39:13'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 44min')} 
	if (msg.content === '!39:14'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 42min')} 
	if (msg.content === '!39:15'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 40min')} 
	if (msg.content === '!39:16'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 38min')} 
	if (msg.content === '!39:17'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 36min')} 
	if (msg.content === '!39:18'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 34min')} 
	if (msg.content === '!39:19'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 32min')} 
	if (msg.content === '!39:20'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 30min')} 
	if (msg.content === '!39:21'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 28min')} 
	if (msg.content === '!39:22'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 26min')} 
	if (msg.content === '!39:23'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 24min')} 
	if (msg.content === '!39:24'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 22min')} 
	if (msg.content === '!39:25'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 20min')} 
	if (msg.content === '!39:26'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 18min')} 
	if (msg.content === '!39:27'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 16min')} 
	if (msg.content === '!39:28'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 14min')} 
	if (msg.content === '!39:29'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 12min')} 
	if (msg.content === '!39:30'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 10min')} 
	if (msg.content === '!39:31'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 8min')} 
	if (msg.content === '!39:32'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 6min')} 
	if (msg.content === '!39:33'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 4min')} 
	if (msg.content === '!39:34'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 2min')} 
	if (msg.content === '!39:35'){msg.reply('Sua stamina ficara cheia em 1 Dia, 9h e 0min')} 
	if (msg.content === '!39:36'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 58min')} 
	if (msg.content === '!39:37'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 56min')} 
	if (msg.content === '!39:38'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 54min')} 
	if (msg.content === '!39:39'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 52min')} 
	if (msg.content === '!39:40'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 50min')} 
	if (msg.content === '!39:41'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 48min')} 
	if (msg.content === '!39:42'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 46min')} 
	if (msg.content === '!39:43'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 44min')} 
	if (msg.content === '!39:44'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 42min')} 
	if (msg.content === '!39:45'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 40min')} 
	if (msg.content === '!39:46'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 38min')} 
	if (msg.content === '!39:47'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 36min')} 
	if (msg.content === '!39:48'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 34min')} 
	if (msg.content === '!39:49'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 32min')} 
	if (msg.content === '!39:50'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 30min')} 
	if (msg.content === '!39:51'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 28min')} 
	if (msg.content === '!39:52'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 26min')} 
	if (msg.content === '!39:53'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 24min')} 
	if (msg.content === '!39:54'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 22min')} 
	if (msg.content === '!39:55'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 20min')} 
	if (msg.content === '!39:56'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 18min')} 
	if (msg.content === '!39:57'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 16min')} 
	if (msg.content === '!39:58'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 14min')} 
	if (msg.content === '!39:59'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 12min')} 
	if (msg.content === '!40:00'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 10min')} 
	if (msg.content === '!40:01'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 8min')} 
	if (msg.content === '!40:02'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 6min')} 
	if (msg.content === '!40:03'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 4min')} 
	if (msg.content === '!40:04'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 2min')} 
	if (msg.content === '!40:05'){msg.reply('Sua stamina ficara cheia em 1 Dia, 8h e 0min')} 
	if (msg.content === '!40:06'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 58min')} 
	if (msg.content === '!40:07'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 56min')} 
	if (msg.content === '!40:08'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 54min')} 
	if (msg.content === '!40:09'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 52min')} 
	if (msg.content === '!40:10'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 50min')} 
	if (msg.content === '!40:11'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 48min')} 
	if (msg.content === '!40:12'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 46min')} 
	if (msg.content === '!40:13'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 44min')} 
	if (msg.content === '!40:14'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 42min')} 
	if (msg.content === '!40:15'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 40min')} 
	if (msg.content === '!40:16'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 38min')} 
	if (msg.content === '!40:17'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 36min')} 
	if (msg.content === '!40:18'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 34min')} 
	if (msg.content === '!40:19'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 32min')} 
	if (msg.content === '!40:20'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 30min')} 
	if (msg.content === '!40:21'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 28min')} 
	if (msg.content === '!40:22'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 26min')} 
	if (msg.content === '!40:23'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 24min')} 
	if (msg.content === '!40:24'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 22min')} 
	if (msg.content === '!40:25'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 20min')} 
	if (msg.content === '!40:26'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 18min')} 
	if (msg.content === '!40:27'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 16min')} 
	if (msg.content === '!40:28'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 14min')} 
	if (msg.content === '!40:29'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 12min')} 
	if (msg.content === '!40:30'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 10min')} 
	if (msg.content === '!40:31'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 8min')} 
	if (msg.content === '!40:32'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 6min')} 
	if (msg.content === '!40:33'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 4min')} 
	if (msg.content === '!40:34'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 2min')} 
	if (msg.content === '!40:35'){msg.reply('Sua stamina ficara cheia em 1 Dia, 7h e 0min')} 
	if (msg.content === '!40:36'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 58min')} 
	if (msg.content === '!40:37'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 56min')} 
	if (msg.content === '!40:38'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 54min')} 
	if (msg.content === '!40:39'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 52min')} 
	if (msg.content === '!40:40'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 50min')} 
	if (msg.content === '!40:41'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 48min')} 
	if (msg.content === '!40:42'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 46min')} 
	if (msg.content === '!40:43'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 44min')} 
	if (msg.content === '!40:44'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 42min')} 
	if (msg.content === '!40:45'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 40min')} 
	if (msg.content === '!40:46'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 38min')} 
	if (msg.content === '!40:47'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 36min')} 
	if (msg.content === '!40:48'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 34min')} 
	if (msg.content === '!40:49'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 32min')} 
	if (msg.content === '!40:50'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 30min')} 
	if (msg.content === '!40:51'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 28min')} 
	if (msg.content === '!40:52'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 26min')} 
	if (msg.content === '!40:53'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 24min')} 
	if (msg.content === '!40:54'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 22min')} 
	if (msg.content === '!40:55'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 20min')} 
	if (msg.content === '!40:56'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 18min')} 
	if (msg.content === '!40:57'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 16min')} 
	if (msg.content === '!40:58'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 14min')} 
	if (msg.content === '!40:59'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 12min')} 
	if (msg.content === '!41:00'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 10min')} 
	if (msg.content === '!41:01'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 8min')} 
	if (msg.content === '!41:02'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 6min')} 
	if (msg.content === '!41:03'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 4min')} 
	if (msg.content === '!41:04'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 2min')} 
	if (msg.content === '!41:05'){msg.reply('Sua stamina ficara cheia em 1 Dia, 6h e 0min')} 
	if (msg.content === '!41:06'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 58min')} 
	if (msg.content === '!41:07'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 56min')} 
	if (msg.content === '!41:08'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 54min')} 
	if (msg.content === '!41:09'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 52min')} 
	if (msg.content === '!41:10'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 50min')} 
	if (msg.content === '!41:11'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 48min')} 
	if (msg.content === '!41:12'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 46min')} 
	if (msg.content === '!41:13'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 44min')} 
	if (msg.content === '!41:14'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 42min')} 
	if (msg.content === '!41:15'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 40min')} 
	if (msg.content === '!41:16'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 38min')} 
	if (msg.content === '!41:17'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 36min')} 
	if (msg.content === '!41:18'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 34min')} 
	if (msg.content === '!41:19'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 32min')} 
	if (msg.content === '!41:20'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 30min')} 
	if (msg.content === '!41:21'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 28min')} 
	if (msg.content === '!41:22'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 26min')} 
	if (msg.content === '!41:23'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 24min')} 
	if (msg.content === '!41:24'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 22min')} 
	if (msg.content === '!41:25'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 20min')} 
	if (msg.content === '!41:26'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 18min')} 
	if (msg.content === '!41:27'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 16min')} 
	if (msg.content === '!41:28'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 14min')} 
	if (msg.content === '!41:29'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 12min')} 
	if (msg.content === '!41:30'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 10min')} 
	if (msg.content === '!41:31'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 8min')} 
	if (msg.content === '!41:32'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 6min')} 
	if (msg.content === '!41:33'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 4min')} 
	if (msg.content === '!41:34'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 2min')} 
	if (msg.content === '!41:35'){msg.reply('Sua stamina ficara cheia em 1 Dia, 5h e 0min')} 
	if (msg.content === '!41:36'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 58min')} 
	if (msg.content === '!41:37'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 56min')} 
	if (msg.content === '!41:38'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 54min')} 
	if (msg.content === '!41:39'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 52min')} 
	if (msg.content === '!41:40'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 50min')} 
	if (msg.content === '!41:41'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 48min')} 
	if (msg.content === '!41:42'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 46min')} 
	if (msg.content === '!41:43'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 44min')} 
	if (msg.content === '!41:44'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 42min')} 
	if (msg.content === '!41:45'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 40min')} 
	if (msg.content === '!41:46'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 38min')} 
	if (msg.content === '!41:47'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 36min')} 
	if (msg.content === '!41:48'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 34min')} 
	if (msg.content === '!41:49'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 32min')} 
	if (msg.content === '!41:50'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 30min')} 
	if (msg.content === '!41:51'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 28min')} 
	if (msg.content === '!41:52'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 26min')} 
	if (msg.content === '!41:53'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 24min')} 
	if (msg.content === '!41:54'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 22min')} 
	if (msg.content === '!41:55'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 20min')} 
	if (msg.content === '!41:56'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 18min')} 
	if (msg.content === '!41:57'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 16min')} 
	if (msg.content === '!41:58'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 14min')} 
	if (msg.content === '!41:59'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 12min')} 
	if (msg.content === '!42:00'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 10min')} 
	if (msg.content === '!42:01'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 8min')} 
	if (msg.content === '!42:02'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 6min')} 
	if (msg.content === '!42:03'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 4min')} 
	if (msg.content === '!42:04'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 2min')} 
	if (msg.content === '!42:05'){msg.reply('Sua stamina ficara cheia em 1 Dia, 4h e 0min')} 
	if (msg.content === '!42:06'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 58min')} 
	if (msg.content === '!42:07'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 56min')} 
	if (msg.content === '!42:08'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 54min')} 
	if (msg.content === '!42:09'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 52min')} 
	if (msg.content === '!42:10'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 50min')} 
	if (msg.content === '!42:11'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 48min')} 
	if (msg.content === '!42:12'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 46min')} 
	if (msg.content === '!42:13'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 44min')} 
	if (msg.content === '!42:14'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 42min')} 
	if (msg.content === '!42:15'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 40min')} 
	if (msg.content === '!42:16'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 38min')} 
	if (msg.content === '!42:17'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 36min')} 
	if (msg.content === '!42:18'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 34min')} 
	if (msg.content === '!42:19'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 32min')} 
	if (msg.content === '!42:20'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 30min')} 
	if (msg.content === '!42:21'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 28min')} 
	if (msg.content === '!42:22'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 26min')} 
	if (msg.content === '!42:23'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 24min')} 
	if (msg.content === '!42:24'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 22min')} 
	if (msg.content === '!42:25'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 20min')} 
	if (msg.content === '!42:26'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 18min')} 
	if (msg.content === '!42:27'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 16min')} 
	if (msg.content === '!42:28'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 14min')} 
	if (msg.content === '!42:29'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 12min')} 
	if (msg.content === '!42:30'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 10min')} 
	if (msg.content === '!42:31'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 8min')} 
	if (msg.content === '!42:32'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 6min')} 
	if (msg.content === '!42:33'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 4min')} 
	if (msg.content === '!42:34'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 2min')} 
	if (msg.content === '!42:35'){msg.reply('Sua stamina ficara cheia em 1 Dia, 3h e 0min')} 
	if (msg.content === '!42:36'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 58min')} 
	if (msg.content === '!42:37'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 56min')} 
	if (msg.content === '!42:38'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 54min')} 
	if (msg.content === '!42:39'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 52min')} 
	if (msg.content === '!42:40'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 50min')} 
	if (msg.content === '!42:41'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 48min')} 
	if (msg.content === '!42:42'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 46min')} 
	if (msg.content === '!42:43'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 44min')} 
	if (msg.content === '!42:44'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 42min')} 
	if (msg.content === '!42:45'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 40min')} 
	if (msg.content === '!42:46'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 38min')} 
	if (msg.content === '!42:47'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 36min')} 
	if (msg.content === '!42:48'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 34min')} 
	if (msg.content === '!42:49'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 32min')} 
	if (msg.content === '!42:50'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 30min')} 
	if (msg.content === '!42:51'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 28min')} 
	if (msg.content === '!42:52'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 26min')} 
	if (msg.content === '!42:53'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 24min')} 
	if (msg.content === '!42:54'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 22min')} 
	if (msg.content === '!42:55'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 20min')} 
	if (msg.content === '!42:56'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 18min')} 
	if (msg.content === '!42:57'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 16min')} 
	if (msg.content === '!42:58'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 14min')} 
	if (msg.content === '!42:59'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 12min')} 
	if (msg.content === '!43:00'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 10min')} 
	if (msg.content === '!43:01'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 8min')} 
	if (msg.content === '!43:02'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 6min')} 
	if (msg.content === '!43:03'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 4min')} 
	if (msg.content === '!43:04'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 2min')} 
	if (msg.content === '!43:05'){msg.reply('Sua stamina ficara cheia em 1 Dia, 2h e 0min')} 
	if (msg.content === '!43:06'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 58min')} 
	if (msg.content === '!43:07'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 56min')} 
	if (msg.content === '!43:08'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 54min')} 
	if (msg.content === '!43:09'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 52min')} 
	if (msg.content === '!43:10'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 50min')} 
	if (msg.content === '!43:11'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 48min')} 
	if (msg.content === '!43:12'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 46min')} 
	if (msg.content === '!43:13'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 44min')} 
	if (msg.content === '!43:14'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 42min')} 
	if (msg.content === '!43:15'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 40min')} 
	if (msg.content === '!43:16'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 38min')} 
	if (msg.content === '!43:17'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 36min')} 
	if (msg.content === '!43:18'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 34min')} 
	if (msg.content === '!43:19'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 32min')} 
	if (msg.content === '!43:20'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 30min')} 
	if (msg.content === '!43:21'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 28min')} 
	if (msg.content === '!43:22'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 26min')} 
	if (msg.content === '!43:23'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 24min')} 
	if (msg.content === '!43:24'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 22min')} 
	if (msg.content === '!43:25'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 20min')} 
	if (msg.content === '!43:26'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 18min')} 
	if (msg.content === '!43:27'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 16min')} 
	if (msg.content === '!43:28'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 14min')} 
	if (msg.content === '!43:29'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 12min')} 
	if (msg.content === '!43:30'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 10min')} 
	if (msg.content === '!43:31'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 8min')} 
	if (msg.content === '!43:32'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 6min')} 
	if (msg.content === '!43:33'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 4min')} 
	if (msg.content === '!43:34'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 2min')} 
	if (msg.content === '!43:35'){msg.reply('Sua stamina ficara cheia em 1 Dia, 1h e 0min')} 
	if (msg.content === '!43:36'){msg.reply('Sua stamina ficara cheia em 1 Dia e 58min')} 
	if (msg.content === '!43:37'){msg.reply('Sua stamina ficara cheia em 1 Dia e 56min')} 
	if (msg.content === '!43:38'){msg.reply('Sua stamina ficara cheia em 1 Dia e 54min')} 
	if (msg.content === '!43:39'){msg.reply('Sua stamina ficara cheia em 1 Dia e 52min')} 
	if (msg.content === '!43:40'){msg.reply('Sua stamina ficara cheia em 1 Dia e 50min')} 
	if (msg.content === '!43:41'){msg.reply('Sua stamina ficara cheia em 1 Dia e 48min')} 
	if (msg.content === '!43:42'){msg.reply('Sua stamina ficara cheia em 1 Dia e 46min')} 
	if (msg.content === '!43:43'){msg.reply('Sua stamina ficara cheia em 1 Dia e 44min')} 
	if (msg.content === '!43:44'){msg.reply('Sua stamina ficara cheia em 1 Dia e 42min')} 
	if (msg.content === '!43:45'){msg.reply('Sua stamina ficara cheia em 1 Dia e 40min')} 
	if (msg.content === '!43:46'){msg.reply('Sua stamina ficara cheia em 1 Dia e 38min')} 
	if (msg.content === '!43:47'){msg.reply('Sua stamina ficara cheia em 1 Dia e 36min')} 
	if (msg.content === '!43:48'){msg.reply('Sua stamina ficara cheia em 1 Dia e 34min')} 
	if (msg.content === '!43:49'){msg.reply('Sua stamina ficara cheia em 1 Dia e 32min')} 
	if (msg.content === '!43:50'){msg.reply('Sua stamina ficara cheia em 1 Dia e 30min')} 
	if (msg.content === '!43:51'){msg.reply('Sua stamina ficara cheia em 1 Dia e 28min')} 
	if (msg.content === '!43:52'){msg.reply('Sua stamina ficara cheia em 1 Dia e 26min')} 
	if (msg.content === '!43:53'){msg.reply('Sua stamina ficara cheia em 1 Dia e 24min')} 
	if (msg.content === '!43:54'){msg.reply('Sua stamina ficara cheia em 1 Dia e 22min')} 
	if (msg.content === '!43:55'){msg.reply('Sua stamina ficara cheia em 1 Dia e 20min')} 
	if (msg.content === '!43:56'){msg.reply('Sua stamina ficara cheia em 1 Dia e 18min')} 
	if (msg.content === '!43:57'){msg.reply('Sua stamina ficara cheia em 1 Dia e 16min')} 
	if (msg.content === '!43:58'){msg.reply('Sua stamina ficara cheia em 1 Dia e 14min')} 
	if (msg.content === '!43:59'){msg.reply('Sua stamina ficara cheia em 1 Dia e 12min')} 
	if (msg.content === '!44:00'){msg.reply('Sua stamina ficara cheia em 1 Dia e 10min')} 
	if (msg.content === '!44:01'){msg.reply('Sua stamina ficara cheia em 1 Dia e 8min')} 
	if (msg.content === '!44:02'){msg.reply('Sua stamina ficara cheia em 1 Dia e 6min')} 
	if (msg.content === '!44:03'){msg.reply('Sua stamina ficara cheia em 1 Dia e 4min')} 
	if (msg.content === '!44:04'){msg.reply('Sua stamina ficara cheia em 1 Dia e 2min')} 
	if (msg.content === '!44:05'){msg.reply('Sua stamina ficara cheia em 1 Dia e 0min')} 
	if (msg.content === '!44:06'){msg.reply('Sua stamina ficara cheia em 23h e 58min')} 
	if (msg.content === '!44:07'){msg.reply('Sua stamina ficara cheia em 23h e 56min')} 
	if (msg.content === '!44:08'){msg.reply('Sua stamina ficara cheia em 23h e 54min')} 
	if (msg.content === '!44:09'){msg.reply('Sua stamina ficara cheia em 23h e 52min')} 
	if (msg.content === '!44:10'){msg.reply('Sua stamina ficara cheia em 23h e 50min')} 
	if (msg.content === '!44:11'){msg.reply('Sua stamina ficara cheia em 23h e 48min')} 
	if (msg.content === '!44:12'){msg.reply('Sua stamina ficara cheia em 23h e 46min')} 
	if (msg.content === '!44:13'){msg.reply('Sua stamina ficara cheia em 23h e 44min')} 
	if (msg.content === '!44:14'){msg.reply('Sua stamina ficara cheia em 23h e 42min')} 
	if (msg.content === '!44:15'){msg.reply('Sua stamina ficara cheia em 23h e 40min')} 
	if (msg.content === '!44:16'){msg.reply('Sua stamina ficara cheia em 23h e 38min')} 
	if (msg.content === '!44:17'){msg.reply('Sua stamina ficara cheia em 23h e 36min')} 
	if (msg.content === '!44:18'){msg.reply('Sua stamina ficara cheia em 23h e 34min')} 
	if (msg.content === '!44:19'){msg.reply('Sua stamina ficara cheia em 23h e 32min')} 
	if (msg.content === '!44:20'){msg.reply('Sua stamina ficara cheia em 23h e 30min')} 
	if (msg.content === '!44:21'){msg.reply('Sua stamina ficara cheia em 23h e 28min')} 
	if (msg.content === '!44:22'){msg.reply('Sua stamina ficara cheia em 23h e 26min')} 
	if (msg.content === '!44:23'){msg.reply('Sua stamina ficara cheia em 23h e 24min')} 
	if (msg.content === '!44:24'){msg.reply('Sua stamina ficara cheia em 23h e 22min')} 
	if (msg.content === '!44:25'){msg.reply('Sua stamina ficara cheia em 23h e 20min')} 
	if (msg.content === '!44:26'){msg.reply('Sua stamina ficara cheia em 23h e 18min')} 
	if (msg.content === '!44:27'){msg.reply('Sua stamina ficara cheia em 23h e 16min')} 
	if (msg.content === '!44:28'){msg.reply('Sua stamina ficara cheia em 23h e 14min')} 
	if (msg.content === '!44:29'){msg.reply('Sua stamina ficara cheia em 23h e 12min')} 
	if (msg.content === '!44:30'){msg.reply('Sua stamina ficara cheia em 23h e 10min')} 
	if (msg.content === '!44:31'){msg.reply('Sua stamina ficara cheia em 23h e 8min')} 
	if (msg.content === '!44:32'){msg.reply('Sua stamina ficara cheia em 23h e 6min')} 
	if (msg.content === '!44:33'){msg.reply('Sua stamina ficara cheia em 23h e 4min')} 
	if (msg.content === '!44:34'){msg.reply('Sua stamina ficara cheia em 23h e 2min')} 
	if (msg.content === '!44:35'){msg.reply('Sua stamina ficara cheia em 23h e 0min')} 
	if (msg.content === '!44:36'){msg.reply('Sua stamina ficara cheia em 22h e 58min')} 
	if (msg.content === '!44:37'){msg.reply('Sua stamina ficara cheia em 22h e 56min')} 
	if (msg.content === '!44:38'){msg.reply('Sua stamina ficara cheia em 22h e 54min')} 
	if (msg.content === '!44:39'){msg.reply('Sua stamina ficara cheia em 22h e 52min')} 
	if (msg.content === '!44:40'){msg.reply('Sua stamina ficara cheia em 22h e 50min')} 
	if (msg.content === '!44:41'){msg.reply('Sua stamina ficara cheia em 22h e 48min')} 
	if (msg.content === '!44:42'){msg.reply('Sua stamina ficara cheia em 22h e 46min')} 
	if (msg.content === '!44:43'){msg.reply('Sua stamina ficara cheia em 22h e 44min')} 
	if (msg.content === '!44:44'){msg.reply('Sua stamina ficara cheia em 22h e 42min')} 
	if (msg.content === '!44:45'){msg.reply('Sua stamina ficara cheia em 22h e 40min')} 
	if (msg.content === '!44:46'){msg.reply('Sua stamina ficara cheia em 22h e 38min')} 
	if (msg.content === '!44:47'){msg.reply('Sua stamina ficara cheia em 22h e 36min')} 
	if (msg.content === '!44:48'){msg.reply('Sua stamina ficara cheia em 22h e 34min')} 
	if (msg.content === '!44:49'){msg.reply('Sua stamina ficara cheia em 22h e 32min')} 
	if (msg.content === '!44:50'){msg.reply('Sua stamina ficara cheia em 22h e 30min')} 
	if (msg.content === '!44:51'){msg.reply('Sua stamina ficara cheia em 22h e 28min')} 
	if (msg.content === '!44:52'){msg.reply('Sua stamina ficara cheia em 22h e 26min')} 
	if (msg.content === '!44:53'){msg.reply('Sua stamina ficara cheia em 22h e 24min')} 
	if (msg.content === '!44:54'){msg.reply('Sua stamina ficara cheia em 22h e 22min')} 
	if (msg.content === '!44:55'){msg.reply('Sua stamina ficara cheia em 22h e 20min')} 
	if (msg.content === '!44:56'){msg.reply('Sua stamina ficara cheia em 22h e 18min')} 
	if (msg.content === '!44:57'){msg.reply('Sua stamina ficara cheia em 22h e 16min')} 
	if (msg.content === '!44:58'){msg.reply('Sua stamina ficara cheia em 22h e 14min')} 
	if (msg.content === '!44:59'){msg.reply('Sua stamina ficara cheia em 22h e 12min')} 
	if (msg.content === '!45:00'){msg.reply('Sua stamina ficara cheia em 22h e 10min')} 
	if (msg.content === '!45:01'){msg.reply('Sua stamina ficara cheia em 22h e 8min')} 
	if (msg.content === '!45:02'){msg.reply('Sua stamina ficara cheia em 22h e 6min')} 
	if (msg.content === '!45:03'){msg.reply('Sua stamina ficara cheia em 22h e 4min')} 
	if (msg.content === '!45:04'){msg.reply('Sua stamina ficara cheia em 22h e 2min')} 
	if (msg.content === '!45:05'){msg.reply('Sua stamina ficara cheia em 22h e 0min')} 
	if (msg.content === '!45:06'){msg.reply('Sua stamina ficara cheia em 21h e 58min')} 
	if (msg.content === '!45:07'){msg.reply('Sua stamina ficara cheia em 21h e 56min')} 
	if (msg.content === '!45:08'){msg.reply('Sua stamina ficara cheia em 21h e 54min')} 
	if (msg.content === '!45:09'){msg.reply('Sua stamina ficara cheia em 21h e 52min')} 
	if (msg.content === '!45:10'){msg.reply('Sua stamina ficara cheia em 21h e 50min')} 
	if (msg.content === '!45:11'){msg.reply('Sua stamina ficara cheia em 21h e 48min')} 
	if (msg.content === '!45:12'){msg.reply('Sua stamina ficara cheia em 21h e 46min')} 
	if (msg.content === '!45:13'){msg.reply('Sua stamina ficara cheia em 21h e 44min')} 
	if (msg.content === '!45:14'){msg.reply('Sua stamina ficara cheia em 21h e 42min')} 
	if (msg.content === '!45:15'){msg.reply('Sua stamina ficara cheia em 21h e 40min')} 
	if (msg.content === '!45:16'){msg.reply('Sua stamina ficara cheia em 21h e 38min')} 
	if (msg.content === '!45:17'){msg.reply('Sua stamina ficara cheia em 21h e 36min')} 
	if (msg.content === '!45:18'){msg.reply('Sua stamina ficara cheia em 21h e 34min')} 
	if (msg.content === '!45:19'){msg.reply('Sua stamina ficara cheia em 21h e 32min')} 
	if (msg.content === '!45:20'){msg.reply('Sua stamina ficara cheia em 21h e 30min')} 
	if (msg.content === '!45:21'){msg.reply('Sua stamina ficara cheia em 21h e 28min')} 
	if (msg.content === '!45:22'){msg.reply('Sua stamina ficara cheia em 21h e 26min')} 
	if (msg.content === '!45:23'){msg.reply('Sua stamina ficara cheia em 21h e 24min')} 
	if (msg.content === '!45:24'){msg.reply('Sua stamina ficara cheia em 21h e 22min')} 
	if (msg.content === '!45:25'){msg.reply('Sua stamina ficara cheia em 21h e 20min')} 
	if (msg.content === '!45:26'){msg.reply('Sua stamina ficara cheia em 21h e 18min')} 
	if (msg.content === '!45:27'){msg.reply('Sua stamina ficara cheia em 21h e 16min')} 
	if (msg.content === '!45:28'){msg.reply('Sua stamina ficara cheia em 21h e 14min')} 
	if (msg.content === '!45:29'){msg.reply('Sua stamina ficara cheia em 21h e 12min')} 
	if (msg.content === '!45:30'){msg.reply('Sua stamina ficara cheia em 21h e 10min')} 
	if (msg.content === '!45:31'){msg.reply('Sua stamina ficara cheia em 21h e 8min')} 
	if (msg.content === '!45:32'){msg.reply('Sua stamina ficara cheia em 21h e 6min')} 
	if (msg.content === '!45:33'){msg.reply('Sua stamina ficara cheia em 21h e 4min')} 
	if (msg.content === '!45:34'){msg.reply('Sua stamina ficara cheia em 21h e 2min')} 
	if (msg.content === '!45:35'){msg.reply('Sua stamina ficara cheia em 21h e 0min')} 
	if (msg.content === '!45:36'){msg.reply('Sua stamina ficara cheia em 20h e 58min')} 
	if (msg.content === '!45:37'){msg.reply('Sua stamina ficara cheia em 20h e 56min')} 
	if (msg.content === '!45:38'){msg.reply('Sua stamina ficara cheia em 20h e 54min')} 
	if (msg.content === '!45:39'){msg.reply('Sua stamina ficara cheia em 20h e 52min')} 
	if (msg.content === '!45:40'){msg.reply('Sua stamina ficara cheia em 20h e 50min')} 
	if (msg.content === '!45:41'){msg.reply('Sua stamina ficara cheia em 20h e 48min')} 
	if (msg.content === '!45:42'){msg.reply('Sua stamina ficara cheia em 20h e 46min')} 
	if (msg.content === '!45:43'){msg.reply('Sua stamina ficara cheia em 20h e 44min')} 
	if (msg.content === '!45:44'){msg.reply('Sua stamina ficara cheia em 20h e 42min')} 
	if (msg.content === '!45:45'){msg.reply('Sua stamina ficara cheia em 20h e 40min')} 
	if (msg.content === '!45:46'){msg.reply('Sua stamina ficara cheia em 20h e 38min')} 
	if (msg.content === '!45:47'){msg.reply('Sua stamina ficara cheia em 20h e 36min')} 
	if (msg.content === '!45:48'){msg.reply('Sua stamina ficara cheia em 20h e 34min')} 
	if (msg.content === '!45:49'){msg.reply('Sua stamina ficara cheia em 20h e 32min')} 
	if (msg.content === '!45:50'){msg.reply('Sua stamina ficara cheia em 20h e 30min')} 
	if (msg.content === '!45:51'){msg.reply('Sua stamina ficara cheia em 20h e 28min')} 
	if (msg.content === '!45:52'){msg.reply('Sua stamina ficara cheia em 20h e 26min')} 
	if (msg.content === '!45:53'){msg.reply('Sua stamina ficara cheia em 20h e 24min')} 
	if (msg.content === '!45:54'){msg.reply('Sua stamina ficara cheia em 20h e 22min')} 
	if (msg.content === '!45:55'){msg.reply('Sua stamina ficara cheia em 20h e 20min')} 
	if (msg.content === '!45:56'){msg.reply('Sua stamina ficara cheia em 20h e 18min')} 
	if (msg.content === '!45:57'){msg.reply('Sua stamina ficara cheia em 20h e 16min')} 
	if (msg.content === '!45:58'){msg.reply('Sua stamina ficara cheia em 20h e 14min')} 
	if (msg.content === '!45:59'){msg.reply('Sua stamina ficara cheia em 20h e 12min')} 
	if (msg.content === '!46:00'){msg.reply('Sua stamina ficara cheia em 20h e 10min')} 
	if (msg.content === '!46:01'){msg.reply('Sua stamina ficara cheia em 20h e 8min')} 
	if (msg.content === '!46:02'){msg.reply('Sua stamina ficara cheia em 20h e 6min')} 
	if (msg.content === '!46:03'){msg.reply('Sua stamina ficara cheia em 20h e 4min')} 
	if (msg.content === '!46:04'){msg.reply('Sua stamina ficara cheia em 20h e 2min')} 
	if (msg.content === '!46:05'){msg.reply('Sua stamina ficara cheia em 20h e 0min')} 
	if (msg.content === '!46:06'){msg.reply('Sua stamina ficara cheia em 19h e 58min')} 
	if (msg.content === '!46:07'){msg.reply('Sua stamina ficara cheia em 19h e 56min')} 
	if (msg.content === '!46:08'){msg.reply('Sua stamina ficara cheia em 19h e 54min')} 
	if (msg.content === '!46:09'){msg.reply('Sua stamina ficara cheia em 19h e 52min')} 
	if (msg.content === '!46:10'){msg.reply('Sua stamina ficara cheia em 19h e 50min')} 
	if (msg.content === '!46:11'){msg.reply('Sua stamina ficara cheia em 19h e 48min')} 
	if (msg.content === '!46:12'){msg.reply('Sua stamina ficara cheia em 19h e 46min')} 
	if (msg.content === '!46:13'){msg.reply('Sua stamina ficara cheia em 19h e 44min')} 
	if (msg.content === '!46:14'){msg.reply('Sua stamina ficara cheia em 19h e 42min')} 
	if (msg.content === '!46:15'){msg.reply('Sua stamina ficara cheia em 19h e 40min')} 
	if (msg.content === '!46:16'){msg.reply('Sua stamina ficara cheia em 19h e 38min')} 
	if (msg.content === '!46:17'){msg.reply('Sua stamina ficara cheia em 19h e 36min')} 
	if (msg.content === '!46:18'){msg.reply('Sua stamina ficara cheia em 19h e 34min')} 
	if (msg.content === '!46:19'){msg.reply('Sua stamina ficara cheia em 19h e 32min')} 
	if (msg.content === '!46:20'){msg.reply('Sua stamina ficara cheia em 19h e 30min')} 
	if (msg.content === '!46:21'){msg.reply('Sua stamina ficara cheia em 19h e 28min')} 
	if (msg.content === '!46:22'){msg.reply('Sua stamina ficara cheia em 19h e 26min')} 
	if (msg.content === '!46:23'){msg.reply('Sua stamina ficara cheia em 19h e 24min')} 
	if (msg.content === '!46:24'){msg.reply('Sua stamina ficara cheia em 19h e 22min')} 
	if (msg.content === '!46:25'){msg.reply('Sua stamina ficara cheia em 19h e 20min')} 
	if (msg.content === '!46:26'){msg.reply('Sua stamina ficara cheia em 19h e 18min')} 
	if (msg.content === '!46:27'){msg.reply('Sua stamina ficara cheia em 19h e 16min')} 
	if (msg.content === '!46:28'){msg.reply('Sua stamina ficara cheia em 19h e 14min')} 
	if (msg.content === '!46:29'){msg.reply('Sua stamina ficara cheia em 19h e 12min')} 
	if (msg.content === '!46:30'){msg.reply('Sua stamina ficara cheia em 19h e 10min')} 
	if (msg.content === '!46:31'){msg.reply('Sua stamina ficara cheia em 19h e 8min')} 
	if (msg.content === '!46:32'){msg.reply('Sua stamina ficara cheia em 19h e 6min')} 
	if (msg.content === '!46:33'){msg.reply('Sua stamina ficara cheia em 19h e 4min')} 
	if (msg.content === '!46:34'){msg.reply('Sua stamina ficara cheia em 19h e 2min')} 
	if (msg.content === '!46:35'){msg.reply('Sua stamina ficara cheia em 19h e 0min')} 
	if (msg.content === '!46:36'){msg.reply('Sua stamina ficara cheia em 18h e 58min')} 
	if (msg.content === '!46:37'){msg.reply('Sua stamina ficara cheia em 18h e 56min')} 
	if (msg.content === '!46:38'){msg.reply('Sua stamina ficara cheia em 18h e 54min')} 
	if (msg.content === '!46:39'){msg.reply('Sua stamina ficara cheia em 18h e 52min')} 
	if (msg.content === '!46:40'){msg.reply('Sua stamina ficara cheia em 18h e 50min')} 
	if (msg.content === '!46:41'){msg.reply('Sua stamina ficara cheia em 18h e 48min')} 
	if (msg.content === '!46:42'){msg.reply('Sua stamina ficara cheia em 18h e 46min')} 
	if (msg.content === '!46:43'){msg.reply('Sua stamina ficara cheia em 18h e 44min')} 
	if (msg.content === '!46:44'){msg.reply('Sua stamina ficara cheia em 18h e 42min')} 
	if (msg.content === '!46:45'){msg.reply('Sua stamina ficara cheia em 18h e 40min')} 
	if (msg.content === '!46:46'){msg.reply('Sua stamina ficara cheia em 18h e 38min')} 
	if (msg.content === '!46:47'){msg.reply('Sua stamina ficara cheia em 18h e 36min')} 
	if (msg.content === '!46:48'){msg.reply('Sua stamina ficara cheia em 18h e 34min')} 
	if (msg.content === '!46:49'){msg.reply('Sua stamina ficara cheia em 18h e 32min')} 
	if (msg.content === '!46:50'){msg.reply('Sua stamina ficara cheia em 18h e 30min')} 
	if (msg.content === '!46:51'){msg.reply('Sua stamina ficara cheia em 18h e 28min')} 
	if (msg.content === '!46:52'){msg.reply('Sua stamina ficara cheia em 18h e 26min')} 
	if (msg.content === '!46:53'){msg.reply('Sua stamina ficara cheia em 18h e 24min')} 
	if (msg.content === '!46:54'){msg.reply('Sua stamina ficara cheia em 18h e 22min')} 
	if (msg.content === '!46:55'){msg.reply('Sua stamina ficara cheia em 18h e 20min')} 
	if (msg.content === '!46:56'){msg.reply('Sua stamina ficara cheia em 18h e 18min')} 
	if (msg.content === '!46:57'){msg.reply('Sua stamina ficara cheia em 18h e 16min')} 
	if (msg.content === '!46:58'){msg.reply('Sua stamina ficara cheia em 18h e 14min')} 
	if (msg.content === '!47:59'){msg.reply('Sua stamina ficara cheia em 18h e 12min')} 
	if (msg.content === '!47:00'){msg.reply('Sua stamina ficara cheia em 18h e 10min')} 
	if (msg.content === '!47:01'){msg.reply('Sua stamina ficara cheia em 18h e 8min')} 
	if (msg.content === '!47:02'){msg.reply('Sua stamina ficara cheia em 18h e 6min')} 
	if (msg.content === '!47:03'){msg.reply('Sua stamina ficara cheia em 18h e 4min')} 
	if (msg.content === '!47:04'){msg.reply('Sua stamina ficara cheia em 18h e 2min')} 
	if (msg.content === '!47:05'){msg.reply('Sua stamina ficara cheia em 18h e 0min')} 
	if (msg.content === '!47:06'){msg.reply('Sua stamina ficara cheia em 17h e 58min')} 
	if (msg.content === '!47:07'){msg.reply('Sua stamina ficara cheia em 17h e 56min')} 
	if (msg.content === '!47:08'){msg.reply('Sua stamina ficara cheia em 17h e 54min')} 
	if (msg.content === '!47:09'){msg.reply('Sua stamina ficara cheia em 17h e 52min')} 
	if (msg.content === '!47:10'){msg.reply('Sua stamina ficara cheia em 17h e 50min')} 
	if (msg.content === '!47:11'){msg.reply('Sua stamina ficara cheia em 17h e 48min')} 
	if (msg.content === '!47:12'){msg.reply('Sua stamina ficara cheia em 17h e 46min')} 
	if (msg.content === '!47:13'){msg.reply('Sua stamina ficara cheia em 17h e 44min')} 
	if (msg.content === '!47:14'){msg.reply('Sua stamina ficara cheia em 17h e 42min')} 
	if (msg.content === '!47:15'){msg.reply('Sua stamina ficara cheia em 17h e 40min')} 
	if (msg.content === '!47:16'){msg.reply('Sua stamina ficara cheia em 17h e 38min')} 
	if (msg.content === '!47:17'){msg.reply('Sua stamina ficara cheia em 17h e 36min')} 
	if (msg.content === '!47:18'){msg.reply('Sua stamina ficara cheia em 17h e 34min')} 
	if (msg.content === '!47:19'){msg.reply('Sua stamina ficara cheia em 17h e 32min')} 
	if (msg.content === '!47:20'){msg.reply('Sua stamina ficara cheia em 17h e 30min')} 
	if (msg.content === '!47:21'){msg.reply('Sua stamina ficara cheia em 17h e 28min')} 
	if (msg.content === '!47:22'){msg.reply('Sua stamina ficara cheia em 17h e 26min')} 
	if (msg.content === '!47:23'){msg.reply('Sua stamina ficara cheia em 17h e 24min')} 
	if (msg.content === '!47:24'){msg.reply('Sua stamina ficara cheia em 17h e 22min')} 
	if (msg.content === '!47:25'){msg.reply('Sua stamina ficara cheia em 17h e 20min')} 
	if (msg.content === '!47:26'){msg.reply('Sua stamina ficara cheia em 17h e 18min')} 
	if (msg.content === '!47:27'){msg.reply('Sua stamina ficara cheia em 17h e 16min')} 
	if (msg.content === '!47:28'){msg.reply('Sua stamina ficara cheia em 17h e 14min')} 
	if (msg.content === '!47:29'){msg.reply('Sua stamina ficara cheia em 17h e 12min')} 
	if (msg.content === '!47:30'){msg.reply('Sua stamina ficara cheia em 17h e 10min')} 
	if (msg.content === '!47:31'){msg.reply('Sua stamina ficara cheia em 17h e 8min')} 
	if (msg.content === '!47:32'){msg.reply('Sua stamina ficara cheia em 17h e 6min')} 
	if (msg.content === '!47:33'){msg.reply('Sua stamina ficara cheia em 17h e 4min')} 
	if (msg.content === '!47:34'){msg.reply('Sua stamina ficara cheia em 17h e 2min')} 
	if (msg.content === '!47:35'){msg.reply('Sua stamina ficara cheia em 17h e 0min')} 
	if (msg.content === '!47:36'){msg.reply('Sua stamina ficara cheia em 16h e 58min')} 
	if (msg.content === '!47:37'){msg.reply('Sua stamina ficara cheia em 16h e 56min')} 
	if (msg.content === '!47:38'){msg.reply('Sua stamina ficara cheia em 16h e 54min')} 
	if (msg.content === '!47:39'){msg.reply('Sua stamina ficara cheia em 16h e 52min')} 
	if (msg.content === '!47:40'){msg.reply('Sua stamina ficara cheia em 16h e 50min')} 
	if (msg.content === '!47:41'){msg.reply('Sua stamina ficara cheia em 16h e 48min')} 
	if (msg.content === '!47:42'){msg.reply('Sua stamina ficara cheia em 16h e 46min')} 
	if (msg.content === '!47:43'){msg.reply('Sua stamina ficara cheia em 16h e 44min')} 
	if (msg.content === '!47:44'){msg.reply('Sua stamina ficara cheia em 16h e 42min')} 
	if (msg.content === '!47:45'){msg.reply('Sua stamina ficara cheia em 16h e 40min')} 
	if (msg.content === '!47:46'){msg.reply('Sua stamina ficara cheia em 16h e 38min')} 
	if (msg.content === '!47:47'){msg.reply('Sua stamina ficara cheia em 16h e 36min')} 
	if (msg.content === '!47:48'){msg.reply('Sua stamina ficara cheia em 16h e 34min')} 
	if (msg.content === '!47:49'){msg.reply('Sua stamina ficara cheia em 16h e 32min')} 
	if (msg.content === '!47:50'){msg.reply('Sua stamina ficara cheia em 16h e 30min')} 
	if (msg.content === '!47:51'){msg.reply('Sua stamina ficara cheia em 16h e 28min')} 
	if (msg.content === '!47:52'){msg.reply('Sua stamina ficara cheia em 16h e 26min')} 
	if (msg.content === '!47:53'){msg.reply('Sua stamina ficara cheia em 16h e 24min')} 
	if (msg.content === '!47:54'){msg.reply('Sua stamina ficara cheia em 16h e 22min')} 
	if (msg.content === '!47:55'){msg.reply('Sua stamina ficara cheia em 16h e 20min')} 
	if (msg.content === '!47:56'){msg.reply('Sua stamina ficara cheia em 16h e 18min')} 
	if (msg.content === '!47:57'){msg.reply('Sua stamina ficara cheia em 16h e 16min')} 
	if (msg.content === '!47:58'){msg.reply('Sua stamina ficara cheia em 16h e 14min')} 
	if (msg.content === '!47:59'){msg.reply('Sua stamina ficara cheia em 16h e 12min')} 
	if (msg.content === '!48:00'){msg.reply('Sua stamina ficara cheia em 16h e 10min')} 
	if (msg.content === '!48:01'){msg.reply('Sua stamina ficara cheia em 16h e 8min')} 
	if (msg.content === '!48:02'){msg.reply('Sua stamina ficara cheia em 16h e 6min')} 
	if (msg.content === '!48:03'){msg.reply('Sua stamina ficara cheia em 16h e 4min')} 
	if (msg.content === '!48:04'){msg.reply('Sua stamina ficara cheia em 16h e 2min')} 
	if (msg.content === '!48:05'){msg.reply('Sua stamina ficara cheia em 16h e 0min')} 
	if (msg.content === '!48:06'){msg.reply('Sua stamina ficara cheia em 15h e 58min')} 
	if (msg.content === '!48:07'){msg.reply('Sua stamina ficara cheia em 15h e 56min')} 
	if (msg.content === '!48:08'){msg.reply('Sua stamina ficara cheia em 15h e 54min')} 
	if (msg.content === '!48:09'){msg.reply('Sua stamina ficara cheia em 15h e 52min')} 
	if (msg.content === '!48:10'){msg.reply('Sua stamina ficara cheia em 15h e 50min')} 
	if (msg.content === '!48:11'){msg.reply('Sua stamina ficara cheia em 15h e 48min')} 
	if (msg.content === '!48:12'){msg.reply('Sua stamina ficara cheia em 15h e 46min')} 
	if (msg.content === '!48:13'){msg.reply('Sua stamina ficara cheia em 15h e 44min')} 
	if (msg.content === '!48:14'){msg.reply('Sua stamina ficara cheia em 15h e 42min')} 
	if (msg.content === '!48:15'){msg.reply('Sua stamina ficara cheia em 15h e 40min')} 
	if (msg.content === '!48:16'){msg.reply('Sua stamina ficara cheia em 15h e 38min')} 
	if (msg.content === '!48:17'){msg.reply('Sua stamina ficara cheia em 15h e 36min')} 
	if (msg.content === '!48:18'){msg.reply('Sua stamina ficara cheia em 15h e 34min')} 
	if (msg.content === '!48:19'){msg.reply('Sua stamina ficara cheia em 15h e 32min')} 
	if (msg.content === '!48:20'){msg.reply('Sua stamina ficara cheia em 15h e 30min')} 
	if (msg.content === '!48:21'){msg.reply('Sua stamina ficara cheia em 15h e 28min')} 
	if (msg.content === '!48:22'){msg.reply('Sua stamina ficara cheia em 15h e 26min')} 
	if (msg.content === '!48:23'){msg.reply('Sua stamina ficara cheia em 15h e 24min')} 
	if (msg.content === '!48:24'){msg.reply('Sua stamina ficara cheia em 15h e 22min')} 
	if (msg.content === '!48:25'){msg.reply('Sua stamina ficara cheia em 15h e 20min')} 
	if (msg.content === '!48:26'){msg.reply('Sua stamina ficara cheia em 15h e 18min')} 
	if (msg.content === '!48:27'){msg.reply('Sua stamina ficara cheia em 15h e 16min')} 
	if (msg.content === '!48:28'){msg.reply('Sua stamina ficara cheia em 15h e 14min')} 
	if (msg.content === '!48:29'){msg.reply('Sua stamina ficara cheia em 15h e 12min')} 
	if (msg.content === '!48:30'){msg.reply('Sua stamina ficara cheia em 15h e 10min')} 
	if (msg.content === '!48:31'){msg.reply('Sua stamina ficara cheia em 15h e 8min')} 
	if (msg.content === '!48:32'){msg.reply('Sua stamina ficara cheia em 15h e 6min')} 
	if (msg.content === '!48:33'){msg.reply('Sua stamina ficara cheia em 15h e 4min')} 
	if (msg.content === '!48:34'){msg.reply('Sua stamina ficara cheia em 15h e 2min')} 
	if (msg.content === '!48:35'){msg.reply('Sua stamina ficara cheia em 15h e 0min')} 
	if (msg.content === '!48:36'){msg.reply('Sua stamina ficara cheia em 14h e 58min')} 
	if (msg.content === '!48:37'){msg.reply('Sua stamina ficara cheia em 14h e 56min')} 
	if (msg.content === '!48:38'){msg.reply('Sua stamina ficara cheia em 14h e 54min')} 
	if (msg.content === '!48:39'){msg.reply('Sua stamina ficara cheia em 14h e 52min')} 
	if (msg.content === '!48:40'){msg.reply('Sua stamina ficara cheia em 14h e 50min')} 
	if (msg.content === '!48:41'){msg.reply('Sua stamina ficara cheia em 14h e 48min')} 
	if (msg.content === '!48:42'){msg.reply('Sua stamina ficara cheia em 14h e 46min')} 
	if (msg.content === '!48:43'){msg.reply('Sua stamina ficara cheia em 14h e 44min')} 
	if (msg.content === '!48:44'){msg.reply('Sua stamina ficara cheia em 14h e 42min')} 
	if (msg.content === '!48:45'){msg.reply('Sua stamina ficara cheia em 14h e 40min')} 
	if (msg.content === '!48:46'){msg.reply('Sua stamina ficara cheia em 14h e 38min')} 
	if (msg.content === '!48:47'){msg.reply('Sua stamina ficara cheia em 14h e 36min')} 
	if (msg.content === '!48:48'){msg.reply('Sua stamina ficara cheia em 14h e 34min')} 
	if (msg.content === '!48:49'){msg.reply('Sua stamina ficara cheia em 14h e 32min')} 
	if (msg.content === '!48:50'){msg.reply('Sua stamina ficara cheia em 14h e 30min')} 
	if (msg.content === '!48:51'){msg.reply('Sua stamina ficara cheia em 14h e 28min')} 
	if (msg.content === '!48:52'){msg.reply('Sua stamina ficara cheia em 14h e 26min')} 
	if (msg.content === '!48:53'){msg.reply('Sua stamina ficara cheia em 14h e 24min')} 
	if (msg.content === '!48:54'){msg.reply('Sua stamina ficara cheia em 14h e 22min')} 
	if (msg.content === '!48:55'){msg.reply('Sua stamina ficara cheia em 14h e 20min')} 
	if (msg.content === '!48:56'){msg.reply('Sua stamina ficara cheia em 14h e 18min')} 
	if (msg.content === '!48:57'){msg.reply('Sua stamina ficara cheia em 14h e 16min')} 
	if (msg.content === '!48:58'){msg.reply('Sua stamina ficara cheia em 14h e 14min')} 
	if (msg.content === '!48:59'){msg.reply('Sua stamina ficara cheia em 14h e 12min')} 
	if (msg.content === '!49:00'){msg.reply('Sua stamina ficara cheia em 14h e 10min')} 
	if (msg.content === '!49:01'){msg.reply('Sua stamina ficara cheia em 14h e 8min')} 
	if (msg.content === '!49:02'){msg.reply('Sua stamina ficara cheia em 14h e 6min')} 
	if (msg.content === '!49:03'){msg.reply('Sua stamina ficara cheia em 14h e 4min')} 
	if (msg.content === '!49:04'){msg.reply('Sua stamina ficara cheia em 14h e 2min')} 
	if (msg.content === '!49:05'){msg.reply('Sua stamina ficara cheia em 14h e 0min')} 
	if (msg.content === '!49:06'){msg.reply('Sua stamina ficara cheia em 13h e 58min')} 
	if (msg.content === '!49:07'){msg.reply('Sua stamina ficara cheia em 13h e 56min')} 
	if (msg.content === '!49:08'){msg.reply('Sua stamina ficara cheia em 13h e 54min')} 
	if (msg.content === '!49:09'){msg.reply('Sua stamina ficara cheia em 13h e 52min')} 
	if (msg.content === '!49:10'){msg.reply('Sua stamina ficara cheia em 13h e 50min')} 
	if (msg.content === '!49:11'){msg.reply('Sua stamina ficara cheia em 13h e 48min')} 
	if (msg.content === '!49:12'){msg.reply('Sua stamina ficara cheia em 13h e 46min')} 
	if (msg.content === '!49:13'){msg.reply('Sua stamina ficara cheia em 13h e 44min')} 
	if (msg.content === '!49:14'){msg.reply('Sua stamina ficara cheia em 13h e 42min')} 
	if (msg.content === '!49:15'){msg.reply('Sua stamina ficara cheia em 13h e 40min')} 
	if (msg.content === '!49:16'){msg.reply('Sua stamina ficara cheia em 13h e 38min')} 
	if (msg.content === '!49:17'){msg.reply('Sua stamina ficara cheia em 13h e 36min')} 
	if (msg.content === '!49:18'){msg.reply('Sua stamina ficara cheia em 13h e 34min')} 
	if (msg.content === '!49:19'){msg.reply('Sua stamina ficara cheia em 13h e 32min')} 
	if (msg.content === '!49:20'){msg.reply('Sua stamina ficara cheia em 13h e 30min')} 
	if (msg.content === '!49:21'){msg.reply('Sua stamina ficara cheia em 13h e 28min')} 
	if (msg.content === '!49:22'){msg.reply('Sua stamina ficara cheia em 13h e 26min')} 
	if (msg.content === '!49:23'){msg.reply('Sua stamina ficara cheia em 13h e 24min')} 
	if (msg.content === '!49:24'){msg.reply('Sua stamina ficara cheia em 13h e 22min')} 
	if (msg.content === '!49:25'){msg.reply('Sua stamina ficara cheia em 13h e 20min')} 
	if (msg.content === '!49:26'){msg.reply('Sua stamina ficara cheia em 13h e 18min')} 
	if (msg.content === '!49:27'){msg.reply('Sua stamina ficara cheia em 13h e 16min')} 
	if (msg.content === '!49:28'){msg.reply('Sua stamina ficara cheia em 13h e 14min')} 
	if (msg.content === '!49:29'){msg.reply('Sua stamina ficara cheia em 13h e 12min')} 
	if (msg.content === '!49:30'){msg.reply('Sua stamina ficara cheia em 13h e 10min')} 
	if (msg.content === '!49:31'){msg.reply('Sua stamina ficara cheia em 13h e 8min')} 
	if (msg.content === '!49:32'){msg.reply('Sua stamina ficara cheia em 13h e 6min')} 
	if (msg.content === '!49:33'){msg.reply('Sua stamina ficara cheia em 13h e 4min')} 
	if (msg.content === '!49:34'){msg.reply('Sua stamina ficara cheia em 13h e 2min')} 
	if (msg.content === '!49:35'){msg.reply('Sua stamina ficara cheia em 13h e 0min')} 
	if (msg.content === '!49:36'){msg.reply('Sua stamina ficara cheia em 12h e 58min')} 
	if (msg.content === '!49:37'){msg.reply('Sua stamina ficara cheia em 12h e 56min')} 
	if (msg.content === '!49:38'){msg.reply('Sua stamina ficara cheia em 12h e 54min')} 
	if (msg.content === '!49:39'){msg.reply('Sua stamina ficara cheia em 12h e 52min')} 
	if (msg.content === '!49:40'){msg.reply('Sua stamina ficara cheia em 12h e 50min')} 
	if (msg.content === '!49:41'){msg.reply('Sua stamina ficara cheia em 12h e 48min')} 
	if (msg.content === '!49:42'){msg.reply('Sua stamina ficara cheia em 12h e 46min')} 
	if (msg.content === '!49:43'){msg.reply('Sua stamina ficara cheia em 12h e 44min')} 
	if (msg.content === '!49:44'){msg.reply('Sua stamina ficara cheia em 12h e 42min')} 
	if (msg.content === '!49:45'){msg.reply('Sua stamina ficara cheia em 12h e 40min')} 
	if (msg.content === '!49:46'){msg.reply('Sua stamina ficara cheia em 12h e 38min')} 
	if (msg.content === '!49:47'){msg.reply('Sua stamina ficara cheia em 12h e 36min')} 
	if (msg.content === '!49:48'){msg.reply('Sua stamina ficara cheia em 12h e 34min')} 
	if (msg.content === '!49:49'){msg.reply('Sua stamina ficara cheia em 12h e 32min')} 
	if (msg.content === '!49:50'){msg.reply('Sua stamina ficara cheia em 12h e 30min')} 
	if (msg.content === '!49:51'){msg.reply('Sua stamina ficara cheia em 12h e 28min')} 
	if (msg.content === '!49:52'){msg.reply('Sua stamina ficara cheia em 12h e 26min')} 
	if (msg.content === '!49:53'){msg.reply('Sua stamina ficara cheia em 12h e 24min')} 
	if (msg.content === '!49:54'){msg.reply('Sua stamina ficara cheia em 12h e 22min')} 
	if (msg.content === '!49:55'){msg.reply('Sua stamina ficara cheia em 12h e 20min')} 
	if (msg.content === '!49:56'){msg.reply('Sua stamina ficara cheia em 12h e 18min')} 
	if (msg.content === '!49:57'){msg.reply('Sua stamina ficara cheia em 12h e 16min')} 
	if (msg.content === '!49:58'){msg.reply('Sua stamina ficara cheia em 12h e 14min')} 
	if (msg.content === '!49:59'){msg.reply('Sua stamina ficara cheia em 12h e 12min')} 
	if (msg.content === '!50:00'){msg.reply('Sua stamina ficara cheia em 12h e 10min')} 
	if (msg.content === '!50:01'){msg.reply('Sua stamina ficara cheia em 12h e 8min')} 
	if (msg.content === '!50:02'){msg.reply('Sua stamina ficara cheia em 12h e 6min')} 
	if (msg.content === '!50:03'){msg.reply('Sua stamina ficara cheia em 12h e 4min')} 
	if (msg.content === '!50:04'){msg.reply('Sua stamina ficara cheia em 12h e 2min')} 
	if (msg.content === '!50:05'){msg.reply('Sua stamina ficara cheia em 12h e 0min')} 
	if (msg.content === '!50:06'){msg.reply('Sua stamina ficara cheia em 11h e 58min')} 
	if (msg.content === '!50:07'){msg.reply('Sua stamina ficara cheia em 11h e 56min')} 
	if (msg.content === '!50:08'){msg.reply('Sua stamina ficara cheia em 11h e 54min')} 
	if (msg.content === '!50:09'){msg.reply('Sua stamina ficara cheia em 11h e 52min')} 
	if (msg.content === '!50:10'){msg.reply('Sua stamina ficara cheia em 11h e 50min')} 
	if (msg.content === '!50:11'){msg.reply('Sua stamina ficara cheia em 11h e 48min')} 
	if (msg.content === '!50:12'){msg.reply('Sua stamina ficara cheia em 11h e 46min')} 
	if (msg.content === '!50:13'){msg.reply('Sua stamina ficara cheia em 11h e 44min')} 
	if (msg.content === '!50:14'){msg.reply('Sua stamina ficara cheia em 11h e 42min')} 
	if (msg.content === '!50:15'){msg.reply('Sua stamina ficara cheia em 11h e 40min')} 
	if (msg.content === '!50:16'){msg.reply('Sua stamina ficara cheia em 11h e 38min')} 
	if (msg.content === '!50:17'){msg.reply('Sua stamina ficara cheia em 11h e 36min')} 
	if (msg.content === '!50:18'){msg.reply('Sua stamina ficara cheia em 11h e 34min')} 
	if (msg.content === '!50:19'){msg.reply('Sua stamina ficara cheia em 11h e 32min')} 
	if (msg.content === '!50:20'){msg.reply('Sua stamina ficara cheia em 11h e 30min')} 
	if (msg.content === '!50:21'){msg.reply('Sua stamina ficara cheia em 11h e 28min')} 
	if (msg.content === '!50:22'){msg.reply('Sua stamina ficara cheia em 11h e 26min')} 
	if (msg.content === '!50:23'){msg.reply('Sua stamina ficara cheia em 11h e 24min')} 
	if (msg.content === '!50:24'){msg.reply('Sua stamina ficara cheia em 11h e 22min')} 
	if (msg.content === '!50:25'){msg.reply('Sua stamina ficara cheia em 11h e 20min')} 
	if (msg.content === '!50:26'){msg.reply('Sua stamina ficara cheia em 11h e 18min')} 
	if (msg.content === '!50:27'){msg.reply('Sua stamina ficara cheia em 11h e 16min')} 
	if (msg.content === '!50:28'){msg.reply('Sua stamina ficara cheia em 11h e 14min')} 
	if (msg.content === '!50:29'){msg.reply('Sua stamina ficara cheia em 11h e 12min')} 
	if (msg.content === '!50:30'){msg.reply('Sua stamina ficara cheia em 11h e 10min')} 
	if (msg.content === '!50:31'){msg.reply('Sua stamina ficara cheia em 11h e 8min')} 
	if (msg.content === '!50:32'){msg.reply('Sua stamina ficara cheia em 11h e 6min')} 
	if (msg.content === '!50:33'){msg.reply('Sua stamina ficara cheia em 11h e 4min')} 
	if (msg.content === '!50:34'){msg.reply('Sua stamina ficara cheia em 11h e 2min')} 
	if (msg.content === '!50:35'){msg.reply('Sua stamina ficara cheia em 11h e 0min')} 
	if (msg.content === '!50:36'){msg.reply('Sua stamina ficara cheia em 10h e 58min')} 
	if (msg.content === '!50:37'){msg.reply('Sua stamina ficara cheia em 10h e 56min')} 
	if (msg.content === '!50:38'){msg.reply('Sua stamina ficara cheia em 10h e 54min')} 
	if (msg.content === '!50:39'){msg.reply('Sua stamina ficara cheia em 10h e 52min')} 
	if (msg.content === '!50:40'){msg.reply('Sua stamina ficara cheia em 10h e 50min')} 
	if (msg.content === '!50:41'){msg.reply('Sua stamina ficara cheia em 10h e 48min')} 
	if (msg.content === '!50:42'){msg.reply('Sua stamina ficara cheia em 10h e 46min')} 
	if (msg.content === '!50:43'){msg.reply('Sua stamina ficara cheia em 10h e 44min')} 
	if (msg.content === '!50:44'){msg.reply('Sua stamina ficara cheia em 10h e 42min')} 
	if (msg.content === '!50:45'){msg.reply('Sua stamina ficara cheia em 10h e 40min')} 
	if (msg.content === '!50:46'){msg.reply('Sua stamina ficara cheia em 10h e 38min')} 
	if (msg.content === '!50:47'){msg.reply('Sua stamina ficara cheia em 10h e 36min')} 
	if (msg.content === '!50:48'){msg.reply('Sua stamina ficara cheia em 10h e 34min')} 
	if (msg.content === '!50:49'){msg.reply('Sua stamina ficara cheia em 10h e 32min')} 
	if (msg.content === '!50:50'){msg.reply('Sua stamina ficara cheia em 10h e 30min')} 
	if (msg.content === '!50:51'){msg.reply('Sua stamina ficara cheia em 10h e 28min')} 
	if (msg.content === '!50:52'){msg.reply('Sua stamina ficara cheia em 10h e 26min')} 
	if (msg.content === '!50:53'){msg.reply('Sua stamina ficara cheia em 10h e 24min')} 
	if (msg.content === '!50:54'){msg.reply('Sua stamina ficara cheia em 10h e 22min')} 
	if (msg.content === '!50:55'){msg.reply('Sua stamina ficara cheia em 10h e 20min')} 
	if (msg.content === '!50:56'){msg.reply('Sua stamina ficara cheia em 10h e 18min')} 
	if (msg.content === '!50:57'){msg.reply('Sua stamina ficara cheia em 10h e 16min')} 
	if (msg.content === '!50:58'){msg.reply('Sua stamina ficara cheia em 10h e 14min')} 
	if (msg.content === '!50:59'){msg.reply('Sua stamina ficara cheia em 10h e 12min')} 
	if (msg.content === '!51:00'){msg.reply('Sua stamina ficara cheia em 10h e 10min')} 
	if (msg.content === '!51:01'){msg.reply('Sua stamina ficara cheia em 10h e 8min')} 
	if (msg.content === '!51:02'){msg.reply('Sua stamina ficara cheia em 10h e 6min')} 
	if (msg.content === '!51:03'){msg.reply('Sua stamina ficara cheia em 10h e 4min')} 
	if (msg.content === '!51:04'){msg.reply('Sua stamina ficara cheia em 10h e 2min')} 
	if (msg.content === '!51:05'){msg.reply('Sua stamina ficara cheia em 10h e 0min')} 
	if (msg.content === '!51:06'){msg.reply('Sua stamina ficara cheia em 9h e 58min')} 
	if (msg.content === '!51:07'){msg.reply('Sua stamina ficara cheia em 9h e 56min')} 
	if (msg.content === '!51:08'){msg.reply('Sua stamina ficara cheia em 9h e 54min')} 
	if (msg.content === '!51:09'){msg.reply('Sua stamina ficara cheia em 9h e 52min')} 
	if (msg.content === '!51:10'){msg.reply('Sua stamina ficara cheia em 9h e 50min')} 
	if (msg.content === '!51:11'){msg.reply('Sua stamina ficara cheia em 9h e 48min')} 
	if (msg.content === '!51:12'){msg.reply('Sua stamina ficara cheia em 9h e 46min')} 
	if (msg.content === '!51:13'){msg.reply('Sua stamina ficara cheia em 9h e 44min')} 
	if (msg.content === '!51:14'){msg.reply('Sua stamina ficara cheia em 9h e 42min')} 
	if (msg.content === '!51:15'){msg.reply('Sua stamina ficara cheia em 9h e 40min')} 
	if (msg.content === '!51:16'){msg.reply('Sua stamina ficara cheia em 9h e 38min')} 
	if (msg.content === '!51:17'){msg.reply('Sua stamina ficara cheia em 9h e 36min')} 
	if (msg.content === '!51:18'){msg.reply('Sua stamina ficara cheia em 9h e 34min')} 
	if (msg.content === '!51:19'){msg.reply('Sua stamina ficara cheia em 9h e 32min')} 
	if (msg.content === '!51:20'){msg.reply('Sua stamina ficara cheia em 9h e 30min')} 
	if (msg.content === '!51:21'){msg.reply('Sua stamina ficara cheia em 9h e 28min')} 
	if (msg.content === '!51:22'){msg.reply('Sua stamina ficara cheia em 9h e 26min')} 
	if (msg.content === '!51:23'){msg.reply('Sua stamina ficara cheia em 9h e 24min')} 
	if (msg.content === '!51:24'){msg.reply('Sua stamina ficara cheia em 9h e 22min')} 
	if (msg.content === '!51:25'){msg.reply('Sua stamina ficara cheia em 9h e 20min')} 
	if (msg.content === '!51:26'){msg.reply('Sua stamina ficara cheia em 9h e 18min')} 
	if (msg.content === '!51:27'){msg.reply('Sua stamina ficara cheia em 9h e 16min')} 
	if (msg.content === '!51:28'){msg.reply('Sua stamina ficara cheia em 9h e 14min')} 
	if (msg.content === '!51:29'){msg.reply('Sua stamina ficara cheia em 9h e 12min')} 
	if (msg.content === '!51:30'){msg.reply('Sua stamina ficara cheia em 9h e 10min')} 
	if (msg.content === '!51:31'){msg.reply('Sua stamina ficara cheia em 9h e 8min')} 
	if (msg.content === '!51:32'){msg.reply('Sua stamina ficara cheia em 9h e 6min')} 
	if (msg.content === '!51:33'){msg.reply('Sua stamina ficara cheia em 9h e 4min')} 
	if (msg.content === '!51:34'){msg.reply('Sua stamina ficara cheia em 9h e 2min')} 
	if (msg.content === '!51:35'){msg.reply('Sua stamina ficara cheia em 9h e 0min')} 
	if (msg.content === '!51:36'){msg.reply('Sua stamina ficara cheia em 8h e 58min')} 
	if (msg.content === '!51:37'){msg.reply('Sua stamina ficara cheia em 8h e 56min')} 
	if (msg.content === '!51:38'){msg.reply('Sua stamina ficara cheia em 8h e 54min')} 
	if (msg.content === '!51:39'){msg.reply('Sua stamina ficara cheia em 8h e 52min')} 
	if (msg.content === '!51:40'){msg.reply('Sua stamina ficara cheia em 8h e 50min')} 
	if (msg.content === '!51:41'){msg.reply('Sua stamina ficara cheia em 8h e 48min')} 
	if (msg.content === '!51:42'){msg.reply('Sua stamina ficara cheia em 8h e 46min')} 
	if (msg.content === '!51:43'){msg.reply('Sua stamina ficara cheia em 8h e 44min')} 
	if (msg.content === '!51:44'){msg.reply('Sua stamina ficara cheia em 8h e 42min')} 
	if (msg.content === '!51:45'){msg.reply('Sua stamina ficara cheia em 8h e 40min')} 
	if (msg.content === '!51:46'){msg.reply('Sua stamina ficara cheia em 8h e 38min')} 
	if (msg.content === '!51:47'){msg.reply('Sua stamina ficara cheia em 8h e 36min')} 
	if (msg.content === '!51:48'){msg.reply('Sua stamina ficara cheia em 8h e 34min')} 
	if (msg.content === '!51:49'){msg.reply('Sua stamina ficara cheia em 8h e 32min')} 
	if (msg.content === '!51:50'){msg.reply('Sua stamina ficara cheia em 8h e 30min')} 
	if (msg.content === '!51:51'){msg.reply('Sua stamina ficara cheia em 8h e 28min')} 
	if (msg.content === '!51:52'){msg.reply('Sua stamina ficara cheia em 8h e 26min')} 
	if (msg.content === '!51:53'){msg.reply('Sua stamina ficara cheia em 8h e 24min')} 
	if (msg.content === '!51:54'){msg.reply('Sua stamina ficara cheia em 8h e 22min')} 
	if (msg.content === '!51:55'){msg.reply('Sua stamina ficara cheia em 8h e 20min')} 
	if (msg.content === '!51:56'){msg.reply('Sua stamina ficara cheia em 8h e 18min')} 
	if (msg.content === '!51:57'){msg.reply('Sua stamina ficara cheia em 8h e 16min')} 
	if (msg.content === '!51:58'){msg.reply('Sua stamina ficara cheia em 8h e 14min')} 
	if (msg.content === '!51:59'){msg.reply('Sua stamina ficara cheia em 8h e 12min')} 
	if (msg.content === '!52:00'){msg.reply('Sua stamina ficara cheia em 8h e 10min')} 
	if (msg.content === '!52:01'){msg.reply('Sua stamina ficara cheia em 8h e 8min')} 
	if (msg.content === '!52:02'){msg.reply('Sua stamina ficara cheia em 8h e 6min')} 
	if (msg.content === '!52:03'){msg.reply('Sua stamina ficara cheia em 8h e 4min')} 
	if (msg.content === '!52:04'){msg.reply('Sua stamina ficara cheia em 8h e 2min')} 
	if (msg.content === '!52:05'){msg.reply('Sua stamina ficara cheia em 8h e 0min')} 
	if (msg.content === '!52:06'){msg.reply('Sua stamina ficara cheia em 7h e 58min')} 
	if (msg.content === '!52:07'){msg.reply('Sua stamina ficara cheia em 7h e 56min')} 
	if (msg.content === '!52:08'){msg.reply('Sua stamina ficara cheia em 7h e 54min')} 
	if (msg.content === '!52:09'){msg.reply('Sua stamina ficara cheia em 7h e 52min')} 
	if (msg.content === '!52:10'){msg.reply('Sua stamina ficara cheia em 7h e 50min')} 
	if (msg.content === '!52:11'){msg.reply('Sua stamina ficara cheia em 7h e 48min')} 
	if (msg.content === '!52:12'){msg.reply('Sua stamina ficara cheia em 7h e 46min')} 
	if (msg.content === '!52:13'){msg.reply('Sua stamina ficara cheia em 7h e 44min')} 
	if (msg.content === '!52:14'){msg.reply('Sua stamina ficara cheia em 7h e 42min')} 
	if (msg.content === '!52:15'){msg.reply('Sua stamina ficara cheia em 7h e 40min')} 
	if (msg.content === '!52:16'){msg.reply('Sua stamina ficara cheia em 7h e 38min')} 
	if (msg.content === '!52:17'){msg.reply('Sua stamina ficara cheia em 7h e 36min')} 
	if (msg.content === '!52:18'){msg.reply('Sua stamina ficara cheia em 7h e 34min')} 
	if (msg.content === '!52:19'){msg.reply('Sua stamina ficara cheia em 7h e 32min')} 
	if (msg.content === '!52:20'){msg.reply('Sua stamina ficara cheia em 7h e 30min')} 
	if (msg.content === '!52:21'){msg.reply('Sua stamina ficara cheia em 7h e 28min')} 
	if (msg.content === '!52:22'){msg.reply('Sua stamina ficara cheia em 7h e 26min')} 
	if (msg.content === '!52:23'){msg.reply('Sua stamina ficara cheia em 7h e 24min')} 
	if (msg.content === '!52:24'){msg.reply('Sua stamina ficara cheia em 7h e 22min')} 
	if (msg.content === '!52:25'){msg.reply('Sua stamina ficara cheia em 7h e 20min')} 
	if (msg.content === '!52:26'){msg.reply('Sua stamina ficara cheia em 7h e 18min')} 
	if (msg.content === '!52:27'){msg.reply('Sua stamina ficara cheia em 7h e 16min')} 
	if (msg.content === '!52:28'){msg.reply('Sua stamina ficara cheia em 7h e 14min')} 
	if (msg.content === '!52:29'){msg.reply('Sua stamina ficara cheia em 7h e 12min')} 
	if (msg.content === '!52:30'){msg.reply('Sua stamina ficara cheia em 7h e 10min')} 
	if (msg.content === '!52:31'){msg.reply('Sua stamina ficara cheia em 7h e 8min')} 
	if (msg.content === '!52:32'){msg.reply('Sua stamina ficara cheia em 7h e 6min')} 
	if (msg.content === '!52:33'){msg.reply('Sua stamina ficara cheia em 7h e 4min')} 
	if (msg.content === '!52:34'){msg.reply('Sua stamina ficara cheia em 7h e 2min')} 
	if (msg.content === '!52:35'){msg.reply('Sua stamina ficara cheia em 7h e 0min')} 
	if (msg.content === '!52:36'){msg.reply('Sua stamina ficara cheia em 6h e 58min')} 
	if (msg.content === '!52:37'){msg.reply('Sua stamina ficara cheia em 6h e 56min')} 
	if (msg.content === '!52:38'){msg.reply('Sua stamina ficara cheia em 6h e 54min')} 
	if (msg.content === '!52:39'){msg.reply('Sua stamina ficara cheia em 6h e 52min')} 
	if (msg.content === '!52:40'){msg.reply('Sua stamina ficara cheia em 6h e 50min')} 
	if (msg.content === '!52:41'){msg.reply('Sua stamina ficara cheia em 6h e 48min')} 
	if (msg.content === '!52:42'){msg.reply('Sua stamina ficara cheia em 6h e 46min')} 
	if (msg.content === '!52:43'){msg.reply('Sua stamina ficara cheia em 6h e 44min')} 
	if (msg.content === '!52:44'){msg.reply('Sua stamina ficara cheia em 6h e 42min')} 
	if (msg.content === '!52:45'){msg.reply('Sua stamina ficara cheia em 6h e 40min')} 
	if (msg.content === '!52:46'){msg.reply('Sua stamina ficara cheia em 6h e 38min')} 
	if (msg.content === '!52:47'){msg.reply('Sua stamina ficara cheia em 6h e 36min')} 
	if (msg.content === '!52:48'){msg.reply('Sua stamina ficara cheia em 6h e 34min')} 
	if (msg.content === '!52:49'){msg.reply('Sua stamina ficara cheia em 6h e 32min')} 
	if (msg.content === '!52:50'){msg.reply('Sua stamina ficara cheia em 6h e 30min')} 
	if (msg.content === '!52:51'){msg.reply('Sua stamina ficara cheia em 6h e 28min')} 
	if (msg.content === '!52:52'){msg.reply('Sua stamina ficara cheia em 6h e 26min')} 
	if (msg.content === '!52:53'){msg.reply('Sua stamina ficara cheia em 6h e 24min')} 
	if (msg.content === '!52:54'){msg.reply('Sua stamina ficara cheia em 6h e 22min')} 
	if (msg.content === '!52:55'){msg.reply('Sua stamina ficara cheia em 6h e 20min')} 
	if (msg.content === '!52:56'){msg.reply('Sua stamina ficara cheia em 6h e 18min')} 
	if (msg.content === '!52:57'){msg.reply('Sua stamina ficara cheia em 6h e 16min')} 
	if (msg.content === '!52:58'){msg.reply('Sua stamina ficara cheia em 6h e 14min')} 
	if (msg.content === '!52:59'){msg.reply('Sua stamina ficara cheia em 6h e 12min')} 
	if (msg.content === '!53:00'){msg.reply('Sua stamina ficara cheia em 6h e 10min')} 
	if (msg.content === '!53:01'){msg.reply('Sua stamina ficara cheia em 6h e 8min')} 
	if (msg.content === '!53:02'){msg.reply('Sua stamina ficara cheia em 6h e 6min')} 
	if (msg.content === '!53:03'){msg.reply('Sua stamina ficara cheia em 6h e 4min')} 
	if (msg.content === '!53:04'){msg.reply('Sua stamina ficara cheia em 6h e 2min')} 
	if (msg.content === '!53:05'){msg.reply('Sua stamina ficara cheia em 6h e 0min')} 
	if (msg.content === '!53:06'){msg.reply('Sua stamina ficara cheia em 5h e 58min')} 
	if (msg.content === '!53:07'){msg.reply('Sua stamina ficara cheia em 5h e 56min')} 
	if (msg.content === '!53:08'){msg.reply('Sua stamina ficara cheia em 5h e 54min')} 
	if (msg.content === '!53:09'){msg.reply('Sua stamina ficara cheia em 5h e 52min')} 
	if (msg.content === '!53:10'){msg.reply('Sua stamina ficara cheia em 5h e 50min')} 
	if (msg.content === '!53:11'){msg.reply('Sua stamina ficara cheia em 5h e 48min')} 
	if (msg.content === '!53:12'){msg.reply('Sua stamina ficara cheia em 5h e 46min')} 
	if (msg.content === '!53:13'){msg.reply('Sua stamina ficara cheia em 5h e 44min')} 
	if (msg.content === '!53:14'){msg.reply('Sua stamina ficara cheia em 5h e 42min')} 
	if (msg.content === '!53:15'){msg.reply('Sua stamina ficara cheia em 5h e 40min')} 
	if (msg.content === '!53:16'){msg.reply('Sua stamina ficara cheia em 5h e 38min')} 
	if (msg.content === '!53:17'){msg.reply('Sua stamina ficara cheia em 5h e 36min')} 
	if (msg.content === '!53:18'){msg.reply('Sua stamina ficara cheia em 5h e 34min')} 
	if (msg.content === '!53:19'){msg.reply('Sua stamina ficara cheia em 5h e 32min')} 
	if (msg.content === '!53:20'){msg.reply('Sua stamina ficara cheia em 5h e 30min')} 
	if (msg.content === '!53:21'){msg.reply('Sua stamina ficara cheia em 5h e 28min')} 
	if (msg.content === '!53:22'){msg.reply('Sua stamina ficara cheia em 5h e 26min')} 
	if (msg.content === '!53:23'){msg.reply('Sua stamina ficara cheia em 5h e 24min')} 
	if (msg.content === '!53:24'){msg.reply('Sua stamina ficara cheia em 5h e 22min')} 
	if (msg.content === '!53:25'){msg.reply('Sua stamina ficara cheia em 5h e 20min')} 
	if (msg.content === '!53:26'){msg.reply('Sua stamina ficara cheia em 5h e 18min')} 
	if (msg.content === '!53:27'){msg.reply('Sua stamina ficara cheia em 5h e 16min')} 
	if (msg.content === '!53:28'){msg.reply('Sua stamina ficara cheia em 5h e 14min')} 
	if (msg.content === '!53:29'){msg.reply('Sua stamina ficara cheia em 5h e 12min')} 
	if (msg.content === '!53:30'){msg.reply('Sua stamina ficara cheia em 5h e 10min')} 
	if (msg.content === '!53:31'){msg.reply('Sua stamina ficara cheia em 5h e 8min')} 
	if (msg.content === '!53:32'){msg.reply('Sua stamina ficara cheia em 5h e 6min')} 
	if (msg.content === '!53:33'){msg.reply('Sua stamina ficara cheia em 5h e 4min')} 
	if (msg.content === '!53:34'){msg.reply('Sua stamina ficara cheia em 5h e 2min')} 
	if (msg.content === '!53:35'){msg.reply('Sua stamina ficara cheia em 5h e 0min')} 
	if (msg.content === '!53:36'){msg.reply('Sua stamina ficara cheia em 4h e 58min')} 
	if (msg.content === '!53:37'){msg.reply('Sua stamina ficara cheia em 4h e 56min')} 
	if (msg.content === '!53:38'){msg.reply('Sua stamina ficara cheia em 4h e 54min')} 
	if (msg.content === '!53:39'){msg.reply('Sua stamina ficara cheia em 4h e 52min')} 
	if (msg.content === '!53:40'){msg.reply('Sua stamina ficara cheia em 4h e 50min')} 
	if (msg.content === '!53:41'){msg.reply('Sua stamina ficara cheia em 4h e 48min')} 
	if (msg.content === '!53:42'){msg.reply('Sua stamina ficara cheia em 4h e 46min')} 
	if (msg.content === '!53:43'){msg.reply('Sua stamina ficara cheia em 4h e 44min')} 
	if (msg.content === '!53:44'){msg.reply('Sua stamina ficara cheia em 4h e 42min')} 
	if (msg.content === '!53:45'){msg.reply('Sua stamina ficara cheia em 4h e 40min')} 
	if (msg.content === '!53:46'){msg.reply('Sua stamina ficara cheia em 4h e 38min')} 
	if (msg.content === '!53:47'){msg.reply('Sua stamina ficara cheia em 4h e 36min')} 
	if (msg.content === '!53:48'){msg.reply('Sua stamina ficara cheia em 4h e 34min')} 
	if (msg.content === '!53:49'){msg.reply('Sua stamina ficara cheia em 4h e 32min')} 
	if (msg.content === '!53:50'){msg.reply('Sua stamina ficara cheia em 4h e 30min')} 
	if (msg.content === '!53:51'){msg.reply('Sua stamina ficara cheia em 4h e 28min')} 
	if (msg.content === '!53:52'){msg.reply('Sua stamina ficara cheia em 4h e 26min')} 
	if (msg.content === '!53:53'){msg.reply('Sua stamina ficara cheia em 4h e 24min')} 
	if (msg.content === '!53:54'){msg.reply('Sua stamina ficara cheia em 4h e 22min')} 
	if (msg.content === '!53:55'){msg.reply('Sua stamina ficara cheia em 4h e 20min')} 
	if (msg.content === '!53:56'){msg.reply('Sua stamina ficara cheia em 4h e 18min')} 
	if (msg.content === '!53:57'){msg.reply('Sua stamina ficara cheia em 4h e 16min')} 
	if (msg.content === '!53:58'){msg.reply('Sua stamina ficara cheia em 4h e 14min')} 
	if (msg.content === '!53:59'){msg.reply('Sua stamina ficara cheia em 4h e 12min')} 
	if (msg.content === '!54:00'){msg.reply('Sua stamina ficara cheia em 4h e 10min')} 
	if (msg.content === '!54:01'){msg.reply('Sua stamina ficara cheia em 4h e 8min')} 
	if (msg.content === '!54:02'){msg.reply('Sua stamina ficara cheia em 4h e 6min')} 
	if (msg.content === '!54:03'){msg.reply('Sua stamina ficara cheia em 4h e 4min')} 
	if (msg.content === '!54:04'){msg.reply('Sua stamina ficara cheia em 4h e 2min')} 
	if (msg.content === '!54:05'){msg.reply('Sua stamina ficara cheia em 4h e 0min')} 
	if (msg.content === '!54:06'){msg.reply('Sua stamina ficara cheia em 3h e 58min')} 
	if (msg.content === '!54:07'){msg.reply('Sua stamina ficara cheia em 3h e 56min')} 
	if (msg.content === '!54:08'){msg.reply('Sua stamina ficara cheia em 3h e 54min')} 
	if (msg.content === '!54:09'){msg.reply('Sua stamina ficara cheia em 3h e 52min')} 
	if (msg.content === '!54:10'){msg.reply('Sua stamina ficara cheia em 3h e 50min')} 
	if (msg.content === '!54:11'){msg.reply('Sua stamina ficara cheia em 3h e 48min')} 
	if (msg.content === '!54:12'){msg.reply('Sua stamina ficara cheia em 3h e 46min')} 
	if (msg.content === '!54:13'){msg.reply('Sua stamina ficara cheia em 3h e 44min')} 
	if (msg.content === '!54:14'){msg.reply('Sua stamina ficara cheia em 3h e 42min')} 
	if (msg.content === '!54:15'){msg.reply('Sua stamina ficara cheia em 3h e 40min')} 
	if (msg.content === '!54:16'){msg.reply('Sua stamina ficara cheia em 3h e 38min')} 
	if (msg.content === '!54:17'){msg.reply('Sua stamina ficara cheia em 3h e 36min')} 
	if (msg.content === '!54:18'){msg.reply('Sua stamina ficara cheia em 3h e 34min')} 
	if (msg.content === '!54:19'){msg.reply('Sua stamina ficara cheia em 3h e 32min')} 
	if (msg.content === '!54:20'){msg.reply('Sua stamina ficara cheia em 3h e 30min')} 
	if (msg.content === '!54:21'){msg.reply('Sua stamina ficara cheia em 3h e 28min')} 
	if (msg.content === '!54:22'){msg.reply('Sua stamina ficara cheia em 3h e 26min')} 
	if (msg.content === '!54:23'){msg.reply('Sua stamina ficara cheia em 3h e 24min')} 
	if (msg.content === '!54:24'){msg.reply('Sua stamina ficara cheia em 3h e 22min')} 
	if (msg.content === '!54:25'){msg.reply('Sua stamina ficara cheia em 3h e 20min')} 
	if (msg.content === '!54:26'){msg.reply('Sua stamina ficara cheia em 3h e 18min')} 
	if (msg.content === '!54:27'){msg.reply('Sua stamina ficara cheia em 3h e 16min')} 
	if (msg.content === '!54:28'){msg.reply('Sua stamina ficara cheia em 3h e 14min')} 
	if (msg.content === '!54:29'){msg.reply('Sua stamina ficara cheia em 3h e 12min')} 
	if (msg.content === '!54:30'){msg.reply('Sua stamina ficara cheia em 3h e 10min')} 
	if (msg.content === '!54:31'){msg.reply('Sua stamina ficara cheia em 3h e 8min')} 
	if (msg.content === '!54:32'){msg.reply('Sua stamina ficara cheia em 3h e 6min')} 
	if (msg.content === '!54:33'){msg.reply('Sua stamina ficara cheia em 3h e 4min')} 
	if (msg.content === '!54:34'){msg.reply('Sua stamina ficara cheia em 3h e 2min')} 
	if (msg.content === '!54:35'){msg.reply('Sua stamina ficara cheia em 3h e 0min')} 
	if (msg.content === '!54:36'){msg.reply('Sua stamina ficara cheia em 2h e 58min')} 
	if (msg.content === '!54:37'){msg.reply('Sua stamina ficara cheia em 2h e 56min')} 
	if (msg.content === '!54:38'){msg.reply('Sua stamina ficara cheia em 2h e 54min')} 
	if (msg.content === '!54:39'){msg.reply('Sua stamina ficara cheia em 2h e 52min')} 
	if (msg.content === '!54:40'){msg.reply('Sua stamina ficara cheia em 2h e 50min')} 
	if (msg.content === '!54:41'){msg.reply('Sua stamina ficara cheia em 2h e 48min')} 
	if (msg.content === '!54:42'){msg.reply('Sua stamina ficara cheia em 2h e 46min')} 
	if (msg.content === '!54:43'){msg.reply('Sua stamina ficara cheia em 2h e 44min')} 
	if (msg.content === '!54:44'){msg.reply('Sua stamina ficara cheia em 2h e 42min')} 
	if (msg.content === '!54:45'){msg.reply('Sua stamina ficara cheia em 2h e 40min')} 
	if (msg.content === '!54:46'){msg.reply('Sua stamina ficara cheia em 2h e 38min')} 
	if (msg.content === '!54:47'){msg.reply('Sua stamina ficara cheia em 2h e 36min')} 
	if (msg.content === '!54:48'){msg.reply('Sua stamina ficara cheia em 2h e 34min')} 
	if (msg.content === '!54:49'){msg.reply('Sua stamina ficara cheia em 2h e 32min')} 
	if (msg.content === '!54:50'){msg.reply('Sua stamina ficara cheia em 2h e 30min')} 
	if (msg.content === '!54:51'){msg.reply('Sua stamina ficara cheia em 2h e 28min')} 
	if (msg.content === '!54:52'){msg.reply('Sua stamina ficara cheia em 2h e 26min')} 
	if (msg.content === '!54:53'){msg.reply('Sua stamina ficara cheia em 2h e 24min')} 
	if (msg.content === '!54:54'){msg.reply('Sua stamina ficara cheia em 2h e 22min')} 
	if (msg.content === '!54:55'){msg.reply('Sua stamina ficara cheia em 2h e 20min')} 
	if (msg.content === '!54:56'){msg.reply('Sua stamina ficara cheia em 2h e 18min')} 
	if (msg.content === '!54:57'){msg.reply('Sua stamina ficara cheia em 2h e 16min')} 
	if (msg.content === '!54:58'){msg.reply('Sua stamina ficara cheia em 2h e 14min')} 
	if (msg.content === '!54:59'){msg.reply('Sua stamina ficara cheia em 2h e 12min')} 
	if (msg.content === '!55:00'){msg.reply('Sua stamina ficara cheia em 2h e 10min')} 
	if (msg.content === '!55:01'){msg.reply('Sua stamina ficara cheia em 2h e 8min')} 
	if (msg.content === '!55:02'){msg.reply('Sua stamina ficara cheia em 2h e 6min')} 
	if (msg.content === '!55:03'){msg.reply('Sua stamina ficara cheia em 2h e 4min')} 
	if (msg.content === '!55:04'){msg.reply('Sua stamina ficara cheia em 2h e 2min')} 
	if (msg.content === '!55:05'){msg.reply('Sua stamina ficara cheia em 2h e 0min')} 
	if (msg.content === '!55:06'){msg.reply('Sua stamina ficara cheia em 1h e 58min')} 
	if (msg.content === '!55:07'){msg.reply('Sua stamina ficara cheia em 1h e 56min')} 
	if (msg.content === '!55:08'){msg.reply('Sua stamina ficara cheia em 1h e 54min')} 
	if (msg.content === '!55:09'){msg.reply('Sua stamina ficara cheia em 1h e 52min')} 
	if (msg.content === '!55:10'){msg.reply('Sua stamina ficara cheia em 1h e 50min')} 
	if (msg.content === '!55:11'){msg.reply('Sua stamina ficara cheia em 1h e 48min')} 
	if (msg.content === '!55:12'){msg.reply('Sua stamina ficara cheia em 1h e 46min')} 
	if (msg.content === '!55:13'){msg.reply('Sua stamina ficara cheia em 1h e 44min')} 
	if (msg.content === '!55:14'){msg.reply('Sua stamina ficara cheia em 1h e 42min')} 
	if (msg.content === '!55:15'){msg.reply('Sua stamina ficara cheia em 1h e 40min')} 
	if (msg.content === '!55:16'){msg.reply('Sua stamina ficara cheia em 1h e 38min')} 
	if (msg.content === '!55:17'){msg.reply('Sua stamina ficara cheia em 1h e 36min')} 
	if (msg.content === '!55:18'){msg.reply('Sua stamina ficara cheia em 1h e 34min')} 
	if (msg.content === '!55:19'){msg.reply('Sua stamina ficara cheia em 1h e 32min')} 
	if (msg.content === '!55:20'){msg.reply('Sua stamina ficara cheia em 1h e 30min')} 
	if (msg.content === '!55:21'){msg.reply('Sua stamina ficara cheia em 1h e 28min')} 
	if (msg.content === '!55:22'){msg.reply('Sua stamina ficara cheia em 1h e 26min')} 
	if (msg.content === '!55:23'){msg.reply('Sua stamina ficara cheia em 1h e 24min')} 
	if (msg.content === '!55:24'){msg.reply('Sua stamina ficara cheia em 1h e 22min')} 
	if (msg.content === '!55:25'){msg.reply('Sua stamina ficara cheia em 1h e 20min')} 
	if (msg.content === '!55:26'){msg.reply('Sua stamina ficara cheia em 1h e 18min')} 
	if (msg.content === '!55:27'){msg.reply('Sua stamina ficara cheia em 1h e 16min')} 
	if (msg.content === '!55:28'){msg.reply('Sua stamina ficara cheia em 1h e 14min')} 
	if (msg.content === '!55:29'){msg.reply('Sua stamina ficara cheia em 1h e 12min')} 
	if (msg.content === '!55:30'){msg.reply('Sua stamina ficara cheia em 1h e 10min')} 
	if (msg.content === '!55:31'){msg.reply('Sua stamina ficara cheia em 1h e 8min')} 
	if (msg.content === '!55:32'){msg.reply('Sua stamina ficara cheia em 1h e 6min')} 
	if (msg.content === '!55:33'){msg.reply('Sua stamina ficara cheia em 1h e 4min')} 
	if (msg.content === '!55:34'){msg.reply('Sua stamina ficara cheia em 1h e 2min')} 
	if (msg.content === '!55:35'){msg.reply('Sua stamina ficara cheia em 1h e 0min')} 
	if (msg.content === '!55:36'){msg.reply('Sua stamina ficara cheia em 58min')} 
	if (msg.content === '!55:37'){msg.reply('Sua stamina ficara cheia em 56min')} 
	if (msg.content === '!55:38'){msg.reply('Sua stamina ficara cheia em 54min')} 
	if (msg.content === '!55:39'){msg.reply('Sua stamina ficara cheia em 52min')} 
	if (msg.content === '!55:40'){msg.reply('Sua stamina ficara cheia em 50min')} 
	if (msg.content === '!55:41'){msg.reply('Sua stamina ficara cheia em 48min')} 
	if (msg.content === '!55:42'){msg.reply('Sua stamina ficara cheia em 46min')} 
	if (msg.content === '!55:43'){msg.reply('Sua stamina ficara cheia em 44min')} 
	if (msg.content === '!55:44'){msg.reply('Sua stamina ficara cheia em 42min')} 
	if (msg.content === '!55:45'){msg.reply('Sua stamina ficara cheia em 40min')} 
	if (msg.content === '!55:46'){msg.reply('Sua stamina ficara cheia em 38min')} 
	if (msg.content === '!55:47'){msg.reply('Sua stamina ficara cheia em 36min')} 
	if (msg.content === '!55:48'){msg.reply('Sua stamina ficara cheia em 34min')} 
	if (msg.content === '!55:49'){msg.reply('Sua stamina ficara cheia em 32min')} 
	if (msg.content === '!55:50'){msg.reply('Sua stamina ficara cheia em 30min')} 
	if (msg.content === '!55:51'){msg.reply('Sua stamina ficara cheia em 28min')} 
	if (msg.content === '!55:52'){msg.reply('Sua stamina ficara cheia em 26min')} 
	if (msg.content === '!55:53'){msg.reply('Sua stamina ficara cheia em 24min')} 
	if (msg.content === '!55:54'){msg.reply('Sua stamina ficara cheia em 22min')} 
	if (msg.content === '!55:55'){msg.reply('Sua stamina ficara cheia em 20min')} 
	if (msg.content === '!55:56'){msg.reply('Sua stamina ficara cheia em 18min')} 
	if (msg.content === '!55:57'){msg.reply('Sua stamina ficara cheia em 16min')} 
	if (msg.content === '!55:58'){msg.reply('Sua stamina ficara cheia em 14min')} 
	if (msg.content === '!55:59'){msg.reply('Sua stamina ficara cheia em 12min')} 
	if (msg.content === '!56:00'){msg.reply('Sua stamina ficara cheia em 10min')} 
	


})
	
	bot.on('message', msg => {		if (msg.content === '!WIZWPN'){        msg.reply('!VODOODOLL')    }})

bot.on('message', message=> {     let args = message.content.substring(prefix.length).split(" ");
    switch(args[0])
    {
		case 'youtube' : message.channel.send('https://www.youtube.com/user/RIXESTER' + '\n' + 'https://www.youtube.com/channel/UCjrpriXfbqFlroQgeZ3kWPg') 
		break;
		case 'VODOODOLL' : message.channel.send('https://media.discordapp.net/attachments/650685141097775116/701187725466009761/unknown.png') 
		break;
        
		
    }
    
})


bot.login(process.env.token);