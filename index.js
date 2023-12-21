require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

(async() => {
  const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

  const count = await bot.getChatMemberCount(process.env.CHAT_ID);
  console.log('现有用户总数: ', count);

  bot.on('message', msg => {
    if (msg.new_chat_members) {
      console.log('新加入的用户: ', msg.new_chat_members);
    }
  });
})();
