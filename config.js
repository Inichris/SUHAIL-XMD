uconst fs = require('fs-extra')
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/TqtqWTB/Ephoto360-com-166de104a10faf.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/82336d4b04ac81b77e18e.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_34_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICA5MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDUzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjksXG4gICAgICAgIDc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODksXG4gICAgICAgIDQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MixcbiAgICAgICAgMjMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMixcbiAgICAgICAgMjE2LFxuICAgICAgICA5OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0SEdZNVlZWGl3bHhRRTl5bWttamlBcXFtay83bXdNUHlidWFOZU1xN2FnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjE4MDkyODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcyODE0OEMxQjFEMjczMEEzRDFDQUU0NTJGOTFEN0FFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNjEzNzI0MlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJxaWJ4bGdzbFRRYXZiNjEyLVNiR0lBXCIsXG4gIFwicGhvbmVJZFwiOiBcImY2MzgzMzY4LTcyZGItNGM5OC1iZjViLWZjMjI2Zjg5MTFhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MSxcbiAgICAgIDI0MCxcbiAgICAgIDM3LFxuICAgICAgODMsXG4gICAgICAyMixcbiAgICAgIDEwOSxcbiAgICAgIDE4MSxcbiAgICAgIDI1NSxcbiAgICAgIDI0NSxcbiAgICAgIDM1LFxuICAgICAgMjMzLFxuICAgICAgMTU0LFxuICAgICAgNjUsXG4gICAgICAxMjAsXG4gICAgICAyMjEsXG4gICAgICAxMjAsXG4gICAgICAxNDYsXG4gICAgICAxNzEsXG4gICAgICAxNzgsXG4gICAgICA3NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjAsXG4gICAgICAxMDQsXG4gICAgICAyMTMsXG4gICAgICAxMjUsXG4gICAgICAxNzgsXG4gICAgICAyNDIsXG4gICAgICAxMDYsXG4gICAgICAxNjIsXG4gICAgICAyNTUsXG4gICAgICAxOTQsXG4gICAgICAxNzYsXG4gICAgICA4MyxcbiAgICAgIDYyLFxuICAgICAgMTE3LFxuICAgICAgMjI2LFxuICAgICAgMTMyLFxuICAgICAgNzQsXG4gICAgICAyMjksXG4gICAgICA1LFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdOWTMyUjROXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDYxODA5MjgyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVGhlc3VwcmVtZXZpYmV6XCIsXG4gICAgXCJsaWRcIjogXCIxNDQ3NjIyNDE4NDc0MzI6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWE5eVNNUWtvZUx0d1lZQlNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ4cVgrTHFLVW9vbThTbW5IcVlmWjhXS3JzTjg1bEhEMFpHL3EwRDJrSEdJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBPKzJ2M2FHQTBjbTJOQTNLZ0tVRFE2enY0SWV5eEF5YTV1Yklraks0V1dmQmVsazVOZGhGalYxcVNMdGlMc3M4OTVlTjMxQ0JWT2RFU3R2UExEZkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkFwa1hmTjdsUThib0RudUw0VHlzenBsRXZrQjV1dHVWVUt1RnpBUGs1aUhnYVJUTmdHQ2RMSUdmSWlGTFpkTXNFS3I1TVBEWUtueWt1ZzdYL2lIUGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjE4MDkyODI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2MTgwOTI4MjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2MTM3MjM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVU5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFVTkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyM25xcjFoRlYwWmx2WnhMVXVMNEV3dHl5NDQ1Q0x0TFJTQTU3TzZEeE5rPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc0NjA0MjMwLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjYxMzY5OTk4NDVcIn0iCn0="  // PUT your SESSION_ID 


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
