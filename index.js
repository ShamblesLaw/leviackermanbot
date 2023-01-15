const {
    Client,
    GatewayIntentBits,
    Partials,
    Collection,
    EmbedBuilder,
  } = require("discord.js");
  const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
  const { User, Message, GuildMember, ThreadMember } = Partials;
  
  const client = new Client({
    intents: 3276799,
    partials: [User, Message, GuildMember, ThreadMember],
  });
  
  const { loadEvents } = require("./Handlers/eventHandler");
  
  client.config = require("./config.json");
  client.events = new Collection();
  client.commands = new Collection();
  
  loadEvents(client);
  
  client.login(client.config.token);

  const prefix = `v!`;

  client.on("messageCreate", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const messageArray = message.content.split(" ");
    const argument = messageArray.slice(1);
    const cmd = messageArray[0];

    let texto = args.join(" ");

    //todos los comandos de prefix

    if (command === `test`) {
      message.channel.send("El bot esta funcionando.");
    } else

    if (command === `ping`) {
      let ping = Math.floor(message.client.ping);

      message.reply(":ping_pong: Pong!")
      .then(m => {

        m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\``);

      });

    } else

    if (command === `say` || command === `decir`) {
      if(!texto) return message.channel.send(`Escriba un contenido para decir.`);

      if(texto === `soy gay`) {
        texto = `Jaja <@${message.author.id}> es gay\nNo voy a repetir eso, a casa pete :money_mouth:`;
      }

      message.channel.send(texto);
      
    } else 

    if(command === `8ball`){
      var rspts = ["Sí", "No", "¿Por qué?", "Por favor","Tal vez", 
                  "No sé", "Definitivamente?", " ¡Claro! "," Sí ",
                  " No "," Por supuesto! "," Por supuesto que no "];

      if (!texto) return message.reply(`Escriba una pregunta.`);
      message.reply(rspts[Math.floor(Math.random() * rspts.length)]);
      
    } 

});
