require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', msg => {
  if (msg.new_chat_members) {
    console.log('新加入的用户: ', msg.new_chat_members);
  }
});
