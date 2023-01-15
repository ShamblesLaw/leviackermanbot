const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    EmbedBuilder,
  } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
      .setName("ship")
      .setDescription("Te diré tu vida en un mundo paralelo con otra persona")
      .addUserOption((option) =>
        option
          .setName(`target`)
          .setDescription(`Usuario`)
          .setRequired(true)
      ),
      /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {
        const user = interaction.options.getUser(`target`);
        const { guild } = interaction;
    
        if (user.id === interaction.user.id)
          return interaction.reply({
            content: `No puedes hacer esto contigo mismo`,
          });
        if (user.id === client.user.id)
          return interaction.reply({
              content: `Ale...que no te quiero, no me obligues a buscar una realidad alterna en la que estemos juntos porque simplemente no existe.\nNo existo.`,
          });
    
        const embed = new EmbedBuilder()
          .setAuthor({
            name: `${guild.name}`,
            iconURL: `${
              guild.iconURL({ dynamic: true }) ||
              "https://cdn-icons-png.flaticon.com/512/5968/5968759.png"
            }`,
          })
          .setTitle(`${user.tag} ha sido kickeado del servidor`)
          .setColor(`#FF8B00`)
          .setTimestamp()
          .setThumbnail(`${user.displayAvatarURL({ dynamic: true })}`);
  
        interaction.reply({ embeds: [embed] });
    },

};

// var rspts = [" Son mejores amigos por toda la vida :white_heart: :people_hugging: ",
//                   " Amantes de acá a la luna :heart_on_fire: :lock: ", 
//                   " Simplemente son amigos :blue_heart: :beers: ",
//                   " Prácticamente son familia :champagne_glass: :hugging: ",
//                   " Están felizmente casados :ring: :wedding: ",
//                   " Nunca se conocieron (ni por redes) :mag: :detective: ",
//                   " Se llevan fatal, uno le hace bullying al otro :worried: :anger: ",
//                   " Están comenzando una linda relación :two_hearts: :checkered_flag: ",
//                   " Están a punto de romper por una infidelidad :crying_cat_face: :broken_heart: ",
//                   " En su momento lo dejaron, ahora volvieron con la promesa de ser mejores el uno para el otro :mending_heart: :smiley_cat: ",
//                   " Son pareja pero se engañan mutuamente todo el rato :biohazard: :smiling_imp: ",
//                   " Más que nada son amigos con derechos :rabbit: :fire: "];
      
