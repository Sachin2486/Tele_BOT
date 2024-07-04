const { Telegraf } = require('telegraf');
require('dotenv').config();

const botToken = process.env.bot_Token;

if (!botToken) {
    throw new Error('Bot token is not defined. Please check your .env file.');
}

const bot = new Telegraf(botToken);

const binarySearchString = `
const binarySearch = function search(arr,x){
    let low = 0;
    let high = arr.length-1;
    while(low<=high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid] == x)
        return mid;

        else if(arr[mid]<x){
            low  = mid + 1;
        }
        else{
            high = mid  - 1;
        }
    }
    return undefined;
}
`;

bot.start((ctx) => ctx.reply('Welcome giga chad to sachin ds_algo bot'));

bot.command('binarySearch', (ctx) => ctx.reply(binarySearchString));

bot.command('toplinuxcommands',(ctx) => ctx.reply('ls cd pwd rm -lsltrah cat vim grep'))

bot.on('sticker', (ctx) => ctx.reply('Looks Cool'));

bot.on('text', (ctx) => ctx.reply("I don't undestand humans"));

bot.launch().then(() => {
    console.log('Bot is running');
}).catch((err) => {
    console.error('Failed to launch bot:', err);
});
