const Axios = require("axios");
var express = require("express");
const playlist = require("./playlist");
const t20 = require("./t20");
const { zee_sony } = require("./zee_sony");
const { zeesony } = require("./zeesony");
const new20 = require("./newt20");

const fs = require("fs");
const path = require("path");
const m3uContent = require("./downloadedFile");
const { SonyZee } = require("./SonuZee");
const { denPlay } = require("./denPlay");
var app = express();

const converter = (playls) => {
  let modify = playls.replaceAll('"Entertainment"', '"🎭 Entertainment"');
  modify = modify.replaceAll(
    `#EXTINF:-1 tvg-id="" group-title="𝗝𝗢𝗜𝗡 𝗢𝗨𝗥 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠"`,
    ""
  );
  modify = modify.replaceAll(
    `tvg-logo="https://i.ibb.co/RYsYthb/Screenshot-2024-01-08-172016.png" ,t.me/allinonereborn`,
    ""
  );
  modify = modify.replaceAll(`https://t.me/allinonereborn`, "");
  modify = modify.replaceAll('"T20 World Cup"', '"🏏 T20 World Cup"');
  modify = modify.replaceAll('" Entertainment"', '"🎭 Entertainment"');
  modify = modify.replaceAll('"SonyLiv"', '"🎁 Sony Liv"');
  modify = modify.replaceAll('"Sony_Liv"', '"🎁 Sony_Liv"');
  modify = modify.replaceAll('"Sony Liv"', '"🌟 Hindi"');
  modify = modify.replaceAll('"Voot | Entertainment"', '"🎭 Entertainment"');
  modify = modify.replaceAll('" Voot | Entertainment"', '"🎭 Entertainment"');
  modify = modify.replaceAll('"Spiritual"', '"🙏 Spiritual"');
  modify = modify.replaceAll('" Spiritual"', '"🙏 Spiritual"');
  modify = modify.replaceAll('"Devotional"', '"🙏 Spiritual"');
  modify = modify.replaceAll('"Jio Darshan"', '"🙏 Spiritual"');
  modify = modify.replaceAll('"Music"', '"🎵 Music"');
  modify = modify.replaceAll('"Food"', '"🍱 Food"');
  modify = modify.replaceAll('"Voot | Music"', '"🎵 Music"');
  modify = modify.replaceAll('" Music"', '"🎵 Music"');
  modify = modify.replaceAll('"Music & Audio"', '"🎵 Music"');
  modify = modify.replaceAll('"Regional Hindi"', '"🌟 Hindi"');
  modify = modify.replaceAll('"zee"', '"🌟 Hindi"');
  modify = modify.replaceAll('"Cricket"', '"🌟 Hindi"');

  modify = modify.replaceAll('"DangalPlay"', '"🌟 Hindi"');
  modify = modify.replaceAll('"EpiCon"', '"🌟 Hindi"');
  modify = modify.replaceAll('"ETV Win"', '"🌟 Hindi"');
  modify = modify.replaceAll('"Zee"', '"😈 Zee"');

  modify = modify.replaceAll('" Hindi"', '"🌟 Hindi"');
  modify = modify.replaceAll('"Hindi"', '"🌟 Hindi"');

  modify = modify.replaceAll('"Regional Hindi"', '"🌟 Hindi"');
  modify = modify.replaceAll('"Regional Others"', '"📂 Others"');
  modify = modify.replaceAll('"Regional"', '"📂 Others"');
  modify = modify.replaceAll('"null"', '"📂 Others"');
  modify = modify.replaceAll('"Action"', '"📂 Others"');
  modify = modify.replaceAll('"Drama"', '"📂 Others"');
  modify = modify.replaceAll('"Sci - Fi"', '"🧑‍💻Sci-Fi"');

  modify = modify.replaceAll('"Others"', '"📂 Others"');
  modify = modify.replaceAll('" Others"', '"📂 Others"');

  modify = modify.replaceAll('"Tamil"', '"📂 Others"');

  modify = modify.replaceAll('" Malayalam"', '"📂 Others"');
  modify = modify.replaceAll('"Malayalam"', '"📂 Others"');
  modify = modify.replaceAll('"Regional Malayalam"', '"📂 Others"');

  modify = modify.replaceAll('"Regional"', '"📂 Others"');
  modify = modify.replaceAll('"Knowledge"', '"🧠 Knowledge"');
  modify = modify.replaceAll('"Educational"', '"🧠 Knowledge"');
  modify = modify.replaceAll('"Nature"', '"🧠 Knowledge"');
  modify = modify.replaceAll('"Documentary"', '"🧠 Knowledge"');
  modify = modify.replaceAll('"Infotainment"', '"🧠 Knowledge"');
  modify = modify.replaceAll('"Education"', '"🧠 Knowledge"');
  modify = modify.replaceAll('" Knowledge"', '"🧠 Knowledge"');
  modify = modify.replaceAll('"Voot | Kids"', '"🧒 Kids"');
  modify = modify.replaceAll('"Kids"', '"🧒 Kids"');
  modify = modify.replaceAll('" Kids"', '"🧒 Kids"');
  modify = modify.replaceAll('"Animation"', '"🧒 Kids"');
  modify = modify.replaceAll('"24X7 KIDS"', '"🧒 Kids"');
  modify = modify.replaceAll('"Lifestyle"', '"💼 Lifestyle"');
  modify = modify.replaceAll('" Lifestyle"', '"💼 Lifestyle"');
  modify = modify.replaceAll('"Movies"', '"🎬 Movies"');
  modify = modify.replaceAll('"Voot | Movies"', '"🎬 Movies"');
  modify = modify.replaceAll('" Movies"', '"🎬 Movies"');
  modify = modify.replaceAll('"Sports"', '"⚽ Sports"');
  modify = modify.replaceAll('"Voot | Sports"', '"⚽ Sports"');
  modify = modify.replaceAll('" Sports"', '"⚽ Sports"');
  modify = modify.replaceAll('"News"', '"📰 News"');
  modify = modify.replaceAll('"Voot | News"', '"📰 News"');
  modify = modify.replaceAll('"HD"', '"📰 News"');
  modify = modify.replaceAll('" News"', '"📰 News"');
  modify = modify.replaceAll('" English News"', '"📰 News"');
  modify = modify.replaceAll('"English News"', '"📰 News"');
  modify = modify.replaceAll('"Business News"', '"📰 News"');
  modify = modify.replaceAll('"Business"', '"📰 News"');
  modify = modify.replaceAll('"International News"', '"📰 News"');

  modify = modify.replaceAll('" Kannada"', '"📂 Others"');
  modify = modify.replaceAll('"Kannada"', '"📂 Others"');
  modify = modify.replaceAll('" Regional Kannada"', '"📂 Others"');
  modify = modify.replaceAll('"Regional Kannada"', '"📂 Others"');

  modify = modify.replaceAll('"Regional Marathi"', '"📂 Others"');
  modify = modify.replaceAll('" Marathi"', '"📂 Others"');
  modify = modify.replaceAll('"Marathi"', '"📂 Others"');

  modify = modify.replaceAll('" Bengali"', '"📂 Others"');
  modify = modify.replaceAll('"Bengali"', '"📂 Others"');
  modify = modify.replaceAll('"Regional Bengali"', '"📂 Others"');
  modify = modify.replaceAll('" Regional Bengali"', '"📂 Others"');

  modify = modify.replaceAll('"Shopping"', '"📂 Others"');
  modify = modify.replaceAll('"Regional Telugu"', '"📂 Others"');
  modify = modify.replaceAll('" Telugu"', '"📂 Others"');
  modify = modify.replaceAll('"Telugu"', '"📂 Others"');

  modify = modify.replaceAll('"Tamil"', '"📂 Others"');
  modify = modify.replaceAll('" Tamil"', '"📂 Others"');
  modify = modify.replaceAll('"Regional Tamil"', '"📂 Others"');

  modify = modify.replaceAll('"Gujarati"', '"📂 Others"');
  modify = modify.replaceAll('" Gujarati"', '"📂 Others"');
  modify = modify.replaceAll('"Regional Gujarati"', '"📂 Others"');

  modify = modify.replaceAll('"Regional Odia"', '"📂 Others"');
  modify = modify.replaceAll('" Odia"', '"📂 Others"');
  modify = modify.replaceAll('"Odia"', '"📂 Others"');

  modify = modify.replaceAll('"Regional Punjabi"', '"📂 Others"');
  modify = modify.replaceAll('"Punjabi"', '"📂 Others"');
  modify = modify.replaceAll('" Punjabi"', '"📂 Others"');

  modify = modify.replaceAll('" Alternative"', '"📂 Others"');
  modify = modify.replaceAll('"Alternative"', '"📂 Others"');
  modify = modify.replaceAll('"Thriller"', '"📂 Others"');
  modify = modify.replaceAll('"Voot | Business"', '"📂 Others"');
  return modify;
};

app.use("/gen", async (req, res) => {

  let modify = converter(SonyZee + denPlay);
  return res.send(modify);
});

app.use("/tp", async (req, res) => {
  const response = await Axios.get(
    "https://tataplay.firecaptain94.workers.dev"
  );
  let modify = converter(response.data + t20 + new20 + SonyZee);
  modify +
    `
    #KODIPROP:inputstream.adaptive.license_type=clearkey
    #KODIPROP:inputstream.adaptive.license_key=https://rftv.wtf/tp/tplay.php?contentID=80&key
    #EXTINF:-1 tvg-id="" tvg-logo="https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_250,w_250/https://ltsk-cdn.s3.eu-west-1.amazonaws.com/jumpstart/Temp_Live/cdn/HLS/Channel/imageContent-243-j5fyl2f4-v3/imageContent-243-j5fyl2f4-m4.png" group-title="🎬 Movies",Sony Max HD
    https://dai.google.com/ssai/event/Qyqz40bSQriqSuAC7R8_Fw/master.m3u8?type=ST
    
    `;

  return res.send(modify);
});

app.use("/play", async (req, res) => {
  return res.send(converter(SonyZee + playlist));
});

app.get("/down", async (req, res) => {
  return res.send(converter(zee_sony + m3uContent));
});

app.use("/play.m3u", async (req, res) => {
  return res.send(converter(zee_sony + playlist + new20));
});

app.use("tp-new", async (req, res) => {
  console.log(">> req.params.link", req.query);
  const response = await Axios.get(
    `https://amitb3669.github.io/${req.query.link}.m3u`
  );
  return res.send(converter(response.data));
});

app.use("/cap", async (req, res) => {
  const jtv = await Axios.get(
    "https://denverisalive.vercel.app/Playlist/Jtv2.m3u"
  );

  const response = await Axios.get(
    `https://denverisalive.vercel.app/Playlist/TP_Dev4.m3u`
  );
  return res.send(converter(zee_sony + response.data + jtv.data));
});

app.use("/tp-drm", async (req, res) => {
  const config = {
    ...req,
  };

  const response = await Axios.get(
    "https://la.drmlive.au/tp/playlist.php",
    config
  );
  console.log(">> response", response);
  return res.send(converter(response.data));
});

app.get("/download-m3u", async (req, res) => {
  try {
    // URL of the .m3u file you want to download
    const m3uUrl = "https://denverisalive.vercel.app/Playlist/TP_Dev3.m3u";

    // Fetch the content using axios
    const response = await Axios.get(m3uUrl);

    // Save the content as a .js file
    const jsFilePath = path.join(__dirname, "downloadedFile.js");
    const m3uContent = response.data;

    // Optional: You can process the .m3u content here before saving it as .js
    const jsContent = `
      // M3U content saved as a JavaScript file
      const m3uContent = \`${m3uContent}\`;
      module.exports = m3uContent;
    `;

    // Write the content to a .js file
    fs.writeFileSync(jsFilePath, jsContent, "utf8");

    // Respond with success message
    res.send(`File saved successfully as ${jsFilePath}`);
  } catch (error) {
    console.error("Error downloading or saving the file:", error);
    res.status(500).send("Error downloading or saving the file");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
