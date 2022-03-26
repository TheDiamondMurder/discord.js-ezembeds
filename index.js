const {MessageEmbed} = require("discord.js")

function textEmbed (interaction, message, color, footer, ephemeral){
    const theEmbed = new MessageEmbed()
    .setDescription(`${message}`)
    .setColor(color)
    .setFooter(footer)
    .setTimestamp()
    interaction.reply({embeds: [theEmbed], ephemeral: ephemeral})
}

module.exports = textEmbed