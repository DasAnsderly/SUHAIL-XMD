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
global.disablegroup = process.env.DISABLE_GROUPS || "false", // pdisable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_20_11_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDQxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDkwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDksXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0OSxcbiAgICAgICAgODEsXG4gICAgICAgIDUzLFxuICAgICAgICA0LFxuICAgICAgICA4NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODksXG4gICAgICAgIDk0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0LFxuICAgICAgICA5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjksXG4gICAgICAgIDM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMixcbiAgICAgICAgNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNixcbiAgICAgICAgNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxODksXG4gICAgICAgIDE1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDczLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6L3U3eHZsNWJCY0RJTjBpbUd5L1JnaUVldFg3RERhd2V0dDRINGo5ZElrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjUwOTM4OTkxNDk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTYzOUZBMzgxQkFBMDdDM0M3OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzEzNjcyMzRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiblpJa1hTV2tUSHFxS2NHdzctckFoZ1wiLFxuICBcInBob25lSWRcIjogXCIwOTdlMWJjNy0yNGViLTQ2NjQtYTUzMS1hYzFhZWM0N2M4MzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgMTU4LFxuICAgICAgMTI1LFxuICAgICAgMjAyLFxuICAgICAgNjMsXG4gICAgICAyNTMsXG4gICAgICAzLFxuICAgICAgMTMxLFxuICAgICAgMTY5LFxuICAgICAgMzEsXG4gICAgICAyMjYsXG4gICAgICA3NSxcbiAgICAgIDU5LFxuICAgICAgMTIwLFxuICAgICAgMTAxLFxuICAgICAgNzksXG4gICAgICAxODcsXG4gICAgICAyMzQsXG4gICAgICA0NCxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTMsXG4gICAgICA5NixcbiAgICAgIDE2MSxcbiAgICAgIDE0MyxcbiAgICAgIDEzMixcbiAgICAgIDEzMyxcbiAgICAgIDIyLFxuICAgICAgODAsXG4gICAgICAxMjAsXG4gICAgICAxNzYsXG4gICAgICA0NixcbiAgICAgIDE4NyxcbiAgICAgIDExOSxcbiAgICAgIDE4NCxcbiAgICAgIDIxNSxcbiAgICAgIDE1NCxcbiAgICAgIDc1LFxuICAgICAgMjE3LFxuICAgICAgMTksXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkhLNUZMTjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTM4OTkxNDk4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZq48J2aqvCdmrDwnZq08J2QgvCdmrVcIixcbiAgICBcImxpZFwiOiBcIjE3MTQwNDA5MTc3NzEzNjoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lEMXBhTURFTGVpeXJrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUlVuUmUvMXkyR3FXUkVGSGZTaWtMR2JWSlp2QytZL05PM29pbzZrRUgyWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJLzVWMERjaU1rYmRTRTYyOWdZOGJvQ2M0Q3Z2SUYvd2c2Nk1LY01TVHZFRzVjMFowTFkzaVdtVzdOV04wSEY4R1JNZk1jMEhMbW9sVnAvT201S3ZBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIam5iNnZEUmQ3TVRXclJoNUNrZFB6dm12S0FHZkxKYUdZWXdORmZnTHhMN2EweVd4T2FEeitrZTAxZGxjZjVMWVVlWTFTdjMvVENZYytnTUpESm5Cdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDkzODk5MTQ5ODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJpXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEzNjcyMjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMTHVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxMdS5qc29uIjogIntcImtleURhdGFcIjpcInliQ1owZytLUUtBaXkraDBmNllNeFIvaHdpdW9jTWRLUDdMcUNSa2Y1dm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODc5MzI3ODcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEzNjcyMjg2NTNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "+50938991498 ",


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
