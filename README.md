# discord.js-ezembeds

A simple way of creating embeds in discord.js v13

## Installation

Make sure you are running **discord.js v13.6.0** or above.

```bash
npm i discord.js-ezembeds
```

## Usage

```javascript
const ezembed = require("discord.js-ezembeds");

// Examples
ezembed.editEmbed(interaction, "This is an edited embed!", "BLUE", "Footer here") // This will edit the embed
ezembed.replyEmbed(interaction, "This is a replied embed!", "GREEN", "Footer", true) // This will reply to an interaction
ezembed.sendEmbed(interaction, "Completed task!", "GREEN", "Made by TheDiamondMurder") // This will send it as a message
ezembed.titleEdit(interaction, "Done Task!", "This task has been completed!", "GREEN", "Made by TheDiamondMurder") // Edit a message with title embed
ezembed.titleReply(interaction, "Processing", "This is being processed", "BLUE", "Made by TheDiamondMurder", false) // Reply with title embed
```

## Links
Visit our [discord server](https://discord.gg/FugFsmbMuh), or if the guide above wasn't clear, view [the documentation](https://thediamondmurder.gitbook.io/discord.js-ezembeds/)
