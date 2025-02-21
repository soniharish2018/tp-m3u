const fs = require('fs');
const { tp_yuv } = require('./tp_yuv.js');
const { tpnew } = require('./tpnew.js');

// Function to extract channel info from tp_yuv
const extractChannelInfo = (content) => {
    const channels = {};
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('#EXTINF:-1')) {
            // Extract tvg-id and tvg-logo
            const tvgIdMatch = line.match(/tvg-id="([^"]*)"/) || ['', ''];
            const tvgLogoMatch = line.match(/tvg-logo="([^"]*)"/) || ['', ''];
            
            // Extract channel name (after the last comma)
            const nameMatch = line.match(/,([^,\n]+)$/);
            if (nameMatch) {
                const channelName = nameMatch[1].trim();
                channels[channelName] = {
                    id: tvgIdMatch[1],
                    logo: tvgLogoMatch[1]
                };
            }
        }
    }
    return channels;
};

// Function to update logos in tpnew
const updateLogos = (content, channelInfo) => {
    const lines = content.split('\n');
    const updatedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        if (line.includes('#EXTINF:-1')) {
            // Extract channel name
            const nameMatch = line.match(/,([^,\n]+)$/);
            if (nameMatch) {
                const channelName = nameMatch[1].trim();
                // Look for exact or similar match
                const match = findChannelMatch(channelName, channelInfo);
                if (match && channelInfo[match].logo) {
                    // Update tvg-logo
                    line = line.replace(/tvg-logo="[^"]*"/, `tvg-logo="${channelInfo[match].logo}"`);
                }
            }
        }
        updatedLines.push(line);
    }
    
    return updatedLines.join('\n');
};

// Helper function to find best channel match
const findChannelMatch = (channelName, channelInfo) => {
    // First try exact match
    if (channelInfo[channelName]) {
        return channelName;
    }
    
    // Try case-insensitive match
    const lowerChannelName = channelName.toLowerCase();
    for (const [key, value] of Object.entries(channelInfo)) {
        if (key.toLowerCase() === lowerChannelName) {
            return key;
        }
    }
    
    // Try partial match
    for (const [key, value] of Object.entries(channelInfo)) {
        if (key.toLowerCase().includes(lowerChannelName) || 
            lowerChannelName.includes(key.toLowerCase())) {
            return key;
        }
    }
    
    return null;
};

// Main execution
const channelInfo = extractChannelInfo(tp_yuv);
const updatedContent = updateLogos(tpnew, channelInfo);

// Write updated content to new file
const outputContent = `const tpnew = \`${updatedContent}\`\n\nmodule.exports = { tpnew };`;
fs.writeFileSync('tpnew_updated.js', outputContent);

console.log('Logo updates completed. Check tpnew_updated.js for results.'); 