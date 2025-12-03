const { Telegraf } = require("telegraf");

// 🔥 Demo placeholder — replace with your token locally
const bot = new Telegraf("YOUR_TOKEN_HERE"); 

// Load commands
const startCommand = require("./commands/start");
startCommand(bot);

// Basic launch
bot.launch();
console.log("Demo bot is running...");

// Graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
