const { 
    SlashCommandBuilder, 
    EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Avatar de un usuario")
    .addUserOption(option =>
        option.setName("usuario")
            .setDescription("Usuario que quieres el avatar")
            .setRequired(false)
    ),

    execute(interaction) {
        const { options } = interaction;
        let usuario = interaction.options.getUser("usuario") || interaction.user;
        let icon = usuario.displayAvatarURL({ dynamic: true, size: 512 });
        let tag = usuario.tag;

        const embed = new EmbedBuilder()
            .setAuthor({ name: `${tag}`, iconURL: `${icon}`})
            .setTitle(`Avatar`)
            .setImage(icon)
            .setFooter({ text: `Solicitado por: ${interaction.user.tag}`})
            .setColor(0x5fb041)
        interaction.reply({embeds: [embed]});

        
    }
    
}