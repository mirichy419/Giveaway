//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348142909904";
global.sudo = process.env.SUDO || "2348142909904";
global.owner = process.env.OWNER_NUMBER || "2348142909904";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUxDVzJ6UysxL0c5ZEhoMnhMWEJwVHIxc3FQSi84Y1U4Z2lrUm9OS05XST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmg2ZjEwQllIckpPN3hMVkxRUEt2QWdEbU8wekNrZEE0SHU1Y2lEdzNCZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRzkyb2FuRE1reFJITS8zeDFybXJhUk8rZGFpVmhuRmxBU3dwL0NuLzI0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFK0EyTDBVekYySzVIMEt3bXFzNUJhK2RlNG52UHd0azhsdFZFVnNhbzB3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdCVFhScVdIa1MreVVlVGdHUCt6eTBjNFpxYVlTOHZPMUZlczQxekdwR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtORUNDN1ZMYWN4QVNoZHpPWENxN0QyNU01Z09hMU5BM3oyL204NW5jZ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dzVXc1dWFRWHgxUGs0c3FxUG4rYUZaUTA2bzdQaGF4bHlEU0Z2VVpFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamhZUzhXSFVGS2VodEFqMWJsd0plY05oQ0NFTnVLODFuZnhCNzdvUGJ6bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndydFlDNklpaDl5R3l3T3M5VVg0UGZaSkkyQ2JuNjJpNDU3OHJGZm1hZS9GemVlRzRYdFh0V1dnaDBhbVRHVGtkeGl6SU1QU1lHUkxJMmt0RjV6VEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6IlNpVFJ4UnM2a0RCVFk3eWIxQk1vWDFGMndMR29jdnBERUVTTVBkSjl2dUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEzNTA4MDExM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFMUIyRTk1OEU4OThBNDM3QkNDMjczOUJDRkI0NTAzQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMxNzg0OTE2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MTM1MDgwMTEzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJFRkI2Njc4MkVEODFDOTIwMjkyQ0UwOUUxQUEwNUM4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzE3ODQ5MTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMzUwODAxMTNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjg2M0Q3QURGRkY3RDZDNjlERTJEOENFRTQxOUEyM0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMTc4NDkxOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEzNTA4MDExM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5QkQ4OUJEOEY3NjRBMUQxMDUxQzkzQUZDMDE3QkI2NCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMxNzg0OTE4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6aUJNTTFqTVRtS0t0OFhuVXl1SDl3IiwicGhvbmVJZCI6IjBhMDQ3ZDYwLTQwODktNGM0MS04ZjdiLWRlNzE0MDQxMjQ4ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSjVhVDE2dFp3VlVOdDJtQlhUQjM1NmJJcUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU1tZVpzNjVIbjZuemRma2lub01RSmNTNDBBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk3Q1lUWkM4IiwibWUiOnsiaWQiOiIyMzQ5MTM1MDgwMTEzOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ2hpZWYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01MeTg3QUZFSlhoNDdrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1ubEVIYXdITGl0YlRCZG1GTUlyeXZsT2d3UE1keVJzQmVpc0Rod2V3bUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBJSW50OEFWbFZKTDlEQlFqOXQva3pRY3NaK0h4MVkydnhiZTIrSlBURWlaMFA4NDZFT3J4R3pDUU5DRUJES0hzMXVPankxWWxJUVhYaVh3ejVETkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOM0dwVm9Cd3Rabm54N3QwUW9BcEVQaG1KQ2lURG9kcE95WDlydUdlejFVNndEbGhhMVN3dlJVZWhiTTJQOUk1RUR5NUR5NlBnMlV2VnRnRVYrWmlCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMzUwODAxMTM6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJacDVSQjJzQnk0clcwd1haaFRDSzhyNVRvTUR6SGNrYkFYb3JBNGNIc0ppIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxNzg0OTE0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUIvdiJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
