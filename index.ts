require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');


const bot = new TelegramBot(process.env.TELEGRAM_KEY, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! I am a bot, please talk to me!');
    bot.sendMessage(chatId,JSON.stringify(msg,null,4));
    });



bot.sendMessage(process.env.TELEGRAM_CHAT_ID, 'Hello! I am a bot, please talk to me!');


