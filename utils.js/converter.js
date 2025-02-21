const converter = (playls) => {
    let modify = '"#EXTM3U x-tvg-url="https://raw.githubusercontent.com/mitthu786/tvepg/main/tataplay/epg.xml.gz"'
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

    modify = modify.replaceAll(`#EXTINF:-1 tvg-id="tsdevil" tvg-logo="https://i.ibb.co/bFmhfCt/Screenshot-20241008-023209-2.png" group-logo="https://i.ibb.co/bFmhfCt/Screenshot-20241008-023209-2.png" group-title="TG @HarmanIPTV",Join_the_channel!
        https://play.tsdevil.fun/Devil/intro/intro.m3u8
        `, '');
    modify = modify.replaceAll("Live_Tv | ", '');
    modify = modify.replaceAll('JIO_TV | ', '');
    modify = modify.replaceAll('Airtel | ', '');
    modify = modify.replaceAll('🌞 SunNxt | ', '');
    modify = modify.replaceAll('⚜️ ', '');
    modify = modify.replaceAll('TG @HarmanIPTV ', '"🌟 Hindi"');
    modify = playls.replaceAll('"Entertainment"', '"🎭 Entertainment"');
    modify = modify.replaceAll('🅰️irtel | ', '');
    modify = modify.replaceAll('SUNNXT ◈ ', '');
    modify = modify.replaceAll('Samsung TV | ', '');
    modify = modify.replaceAll('SunGo', '');
    modify = modify.replaceAll('JIOTV+', '🌏 Jio TV');
    modify = modify.replaceAll('Comedy', '🤣 Comedy');
    modify = modify.replaceAll('ZEE 5', '🌃 Zee 5');
    modify = modify.replaceAll(' ✦', '');
    modify = modify.replaceAll(`https://t.me/allinonereborn`, "");
    modify = modify.replaceAll('"T20 World Cup"', '"🏏 T20 World Cup"');
    modify = modify.replaceAll('" Entertainment"', '"🎭 Entertainment"');
    modify = modify.replaceAll('"Entertainment"', '"🎭 Entertainment"');
    modify = modify.replaceAll('"📺 Entertainment"', '"🎭 Entertainment"');
    modify = modify.replaceAll('"SonyLiv"', '"🎁 Sony Liv"');
    modify = modify.replaceAll('"SONYLIV"', '"🎁 Sony Liv"');
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
    modify = modify.replaceAll('"Cricket"', '"🏏 Cricket"');

    modify = modify.replaceAll('"DangalPlay"', '"🌟 Hindi"');
    modify = modify.replaceAll('"Discovery"', '"🏔 Discovery"');
    modify = modify.replaceAll('"EpiCon"', '"🌟 Hindi"');
    modify = modify.replaceAll('"Romance"', '"🌟 Hindi"');
    modify = modify.replaceAll('" English"', '"🌟 Hindi"');
    modify = modify.replaceAll('" Religion"', '"🌟 Hindi"');
    modify = modify.replaceAll('" Bangla"', '"🌟 Hindi"');
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
    modify = modify.replaceAll('"Dish TV"', '"🌆 Dish Tv"');
    modify = modify.replaceAll('"Sci - Fi"', '"🧑‍💻Sci-Fi"');

    modify = modify.replaceAll('"Others"', '"📂 Others"');
    modify = modify.replaceAll('" Others"', '"📂 Others"');

    modify = modify.replaceAll('"Tamil"', '"📂 Others"');
    modify = modify.replaceAll('"Distro"', '"📂 Others"');
    modify = modify.replaceAll('"PTC Play"', '"📂 Others"');

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
    modify = modify.replaceAll('"EXTRA"', '"🎬 Movies"');
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


module.exports = { converter }