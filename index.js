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
  modify = modify.replaceAll(`<script type="text/javascript">
        alert("Use in IPTV Player Only!")
      window.location = "https://t.me/HarmanIPTV"
    </script>`, '');
  // modify = modify.replaceAll(/^Live_Tv \| /, '');;
  modify = modify.replaceAll(`#EXTINF:-1 tvg-id="tsdevil" tvg-logo="https://i.ibb.co/bFmhfCt/Screenshot-20241008-023209-2.png" group-logo="https://i.ibb.co/bFmhfCt/Screenshot-20241008-023209-2.png" group-title="TG @HarmanIPTV",Join_the_channel!
https://play.tsdevil.fun/Devil/intro/intro.m3u8
`, '');
  modify = modify.replaceAll("Live_Tv | ", '');
  modify = modify.replaceAll('JIO_TV | ', '');
  modify = modify.replaceAll('🅰️irtel | ', '');
  modify = modify.replaceAll(`https://t.me/allinonereborn`, "");
  modify = modify.replaceAll('"T20 World Cup"', '"🏏 T20 World Cup"');
  modify = modify.replaceAll('" Entertainment"', '"🎭 Entertainment"');
  modify = modify.replaceAll('"Entertainment"', '"🎭 Entertainment"');
  modify = modify.replaceAll('"📺 Entertainment"', '"🎭 Entertainment"');
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
  modify = modify.replaceAll('"Regional News"', '"📂 Others"');
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
  modify = modify.replaceAll('"24X7"', '"🧒 Kids"');
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
  modify = modify.replaceAll('"Hindi News"', '"📰 News"');
  modify = modify.replaceAll('"Other Channels"', '"📰 News"');
  modify = modify.replaceAll('"Business News"', '"📰 News"');
  modify = modify.replaceAll('"Business"', '"📰 News"');
  modify = modify.replaceAll('"International News"', '"📰 News"');

  modify = modify.replaceAll('" Kannada"', '"📂 Others"');
  modify = modify.replaceAll('"Kannada"', '"📂 Others"');
  modify = modify.replaceAll('"Travel"', '"📂 Others"');
  modify = modify.replaceAll('"Technology"', '"📂 Others"');
  modify = modify.replaceAll('"Fun & Games"', '"📂 Others"');
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
  modify = modify.replaceAll('"Finance"', '"📂 Others"');

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
  const { data } = require("./harman");
  let modify = converter(SonyZee + data);
  return res.send(modify);
});

app.use("/yuv", async (req, res) => {
  const { data } = require("./yuv");

  let modify = converter(SonyZee + data);
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

app.use("/tp-harman", async (req, res) => {
  try {
    // Replace with the URL of the external API
    const response = await Axios.get(
      `https://play.tsdevil.fun/benX/${req.query.name}.php`,
      {
        headers: {
          'User-Agent': 'OTT Navigator/1.7.1.4 (Linux; Android 14; en; pfat4k)'
        }
      }
    );
    // Define the file path and name
    const filePath = path.join(__dirname, 'harman.js');

    // Check if the file already exists
    if (fs.existsSync(filePath)) {
      // Delete the file if it exists
      fs.unlinkSync(filePath);
    }
    const fileContent = `const data = \`${response.data}\`;\n\nmodule.exports = { data };`;

    // Write content to file (will create a new file)
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).json({ error: 'Failed to create file' });
      }
      // console.log(">> response", response);
      res.json({ message: 'File created successfully', filePath });
      // return res.send(converter(response.data));
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }
});

app.get("/den-m3u", async (req, res) => {
  try {
    const { data } = require('./den')
    return res.send(converter(SonyZee + data));

  } catch (error) {
    console.error("Error downloading or saving the file:", error);
    res.status(500).send("Error downloading or saving the file");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.use("/tp-file", async (req, res) => {
  try {
    // Replace with the URL of the external API
    const response = await Axios.get(
      `${req.query.link}`,
      {
        headers: {
          'User-Agent': 'OTT Navigator/1.7.1.4 (Linux; Android 14; en; pfat4k)'
        }
      }
    );
    // Define the file path and name
    const filePath = path.join(__dirname, `${req.query.filename}.js`);

    // Check if the file already exists
    if (fs.existsSync(filePath)) {
      // Delete the file if it exists
      fs.unlinkSync(filePath);
    }
    const fileContent = `const data = \`${response.data}\`;\n\nmodule.exports = { data };`;

    // Write content to file (will create a new file)
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).json({ error: 'Failed to create file' });
      }
      // console.log(">> response", response);
      res.json({ message: 'File created successfully', filePath });
      // return res.send(converter(response.data));
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }
});

