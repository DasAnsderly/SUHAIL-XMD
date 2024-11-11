const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348155715870";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_23_10_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NixcbiAgICAgICAgNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgODMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTksXG4gICAgICAgIDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExLFxuICAgICAgICA0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDc2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDcyLFxuICAgICAgICA1NixcbiAgICAgICAgMjAyLFxuICAgICAgICA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MixcbiAgICAgICAgODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2LFxuICAgICAgICAyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM5LFxuICAgICAgICA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDksXG4gICAgICAgIDUwLFxuICAgICAgICA3NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDc5LFxuICAgICAgICA2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM2LFxuICAgICAgICA2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc2LFxuICAgICAgICAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2LFxuICAgICAgICA5MixcbiAgICAgICAgNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDksXG4gICAgICAgIDI5LFxuICAgICAgICA0OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIi96am9yLzU0Ykg2SENzanJFbHRMdWFnbkltSE8wc3dGRVFrOGFROFptVEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE1NTcxNTg3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTUzNUM2QUFCOEU2RDVGMzAzMDlGRjdBNjBFRTI2Q0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4OTQwOTg4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJLSmUyOXFEU25xYlhwSkx4azdMTndcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjZjZGFiOTQtZDY3My00NjcyLTgyNmYtNTQ2M2VjMTMzOGU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgNzgsXG4gICAgICA2MixcbiAgICAgIDE4OCxcbiAgICAgIDE1NCxcbiAgICAgIDM5LFxuICAgICAgMTk4LFxuICAgICAgMjA4LFxuICAgICAgNTAsXG4gICAgICAxNDQsXG4gICAgICAxODYsXG4gICAgICAyMTYsXG4gICAgICAyNCxcbiAgICAgIDIyMSxcbiAgICAgIDE2OCxcbiAgICAgIDI1MCxcbiAgICAgIDEzMixcbiAgICAgIDgwLFxuICAgICAgMTQ3LFxuICAgICAgMTkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgODcsXG4gICAgICAxNzgsXG4gICAgICAxOTgsXG4gICAgICA1NixcbiAgICAgIDE5NixcbiAgICAgIDEyMyxcbiAgICAgIDEwNyxcbiAgICAgIDIxOSxcbiAgICAgIDkyLFxuICAgICAgMjQsXG4gICAgICAxMjQsXG4gICAgICAyMTUsXG4gICAgICAxNzAsXG4gICAgICAxODEsXG4gICAgICAxNTIsXG4gICAgICAxOSxcbiAgICAgIDI0OSxcbiAgICAgIDIwOCxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMRTNSVFJFVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1NTcxNTg3MDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1hc3RlciBKb2huXCIsXG4gICAgXCJsaWRcIjogXCI5MDQ4NjY1NjI2MjM4NjoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYkFpcTBGRUxDWHRyZ0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNUUDNBYk1HdWk5Y1NqdWdYbDN0dWhlcWhqV2M2clZmMnJqUU1JdkZJM0E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ2gxL3FIVVdTZk5XRG4zWGo3eWlXYk5aTGlYZ3JwOGVhcDg4clNtWTJ6QlNwS05hVTkxaGQwZ0VPSHB6RndNL1dTNXhodGl0VS8zV0VyanlROVVUQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMm1UaHRlZ2I3UUhBeVpWam16S3pHN0VlZVRaQ0tQdXYwOFpzZzJjaHNiTVVwTFRkZmFBS2ozYjBOU2lGY0pJZDQwWGFEbjZnSDFDRExCVlpwcXRQRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1NTcxNTg3MDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4OTQwOTgxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVp1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBWnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6OVFMaGQ3U08rV1BTRHlSTXNVVXcwUDlZVWtBc1FFMkZwNzNibVZuM2tFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MzY3MjEyMzcsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjg5MTY2MDA3MDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
