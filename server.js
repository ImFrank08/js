const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const request = require("request");
const res = require("node-fetch")("https://corona.lmao.ninja/countries");
const superagent = require("superagent")
const weather = require("weather-js");
var await = require('await')
const _await = require("await");
const ytdl = require('ytdl-core');
const axios = require("axios");
const randomPuppy = require('random-puppy');
const ms = require("ms")
const Twitter = require('twit');
const { queryFull } = require("minecraft-server-util");
const util = require("minecraft-server-util");
const Gamedig = require("gamedig");
const fetch = require("node-fetch");
const mci = require("minecraft-information");

client.on("ready", () => {
	
	var MensageAutomatico = client.channels.cache.find(channel => channel.id === '1011812225893281874');
   console.log("Estoy listo!");
   
   setInterval(() => {
    const embed = new Discord.MessageEmbed()
    .setTitle('<:GalaxyWorld:1052135980703940618> GalaxyWorld - Tienda')
    .setDescription("Adquiere Rangos, Items & más\ndesde nuestra Tienda Web\n\n**» Tienda Web:\nhttp://store.galaxyworld.club/ **")
   	.setTimestamp()
    .setThumbnail('https://media.discordapp.net/attachments/1044074287096680528/1057479116183580755/zyro-image.png')
    .setFooter(`GalaxyWorld Network - Anuncios`)
    .setColor('#bdbe11');
    MensageAutomatico.send(embed);
   }, 360000000);

   setInterval(() => {
   const embed = new Discord.MessageEmbed()
   .setTitle(`**<:GalaxyWorld:1052135980703940618> GalaxyWorld Network**`)
   .setDescription("Unete a nuestro servidor de Minecraft!\nLas IP son:\n<a:verde:1049863198494425129> **Java:** `mc.GalaxyWorld.club` **&** `mc.neocrafters.net`\n<a:Rojo:1047001565086617640> Bedrock: `mc.GalaxyWorld.club` **Puerto »** `25565`")
   .setImage(`https://media.discordapp.net/attachments/987447117134061608/1040496652202561566/standard_4.gif`)
   .setColor("bdbe11")
   .setTimestamp()
   .setFooter(`GalaxyWorld Network - Anuncios`);
   MensageAutomatico.send(embed);
   }, 43200000);

   setInterval(() => {
    const embed = new Discord.MessageEmbed()
    .setTitle('<:GalaxyWorld:1052135980703940618> GalaxyWorld - Redes')
    .setDescription("**Recuerda seguirnos en cada una de nuestras redes sociales**\n**para estar informado, revisa nuestra pagina Web**\n**e infórmate de las cosas que ofrece el servidor junto a nuestra** \n**tienda y por favor vota por el servidor, para poder **\n**crecer juntos como comunidad**\n\n**🗂️ Página web:**\n`PRONTO`\n\n<:Youtube:1057477136346267658>** YouTube:**\nhttp://yt.galaxyworld.club/\n\n🛒 **Tienda:**\nhttp://store.galaxyworld.club/\n\n<:Facebook:1057477474855956511> **Facebook:**\nhttps://www.facebook.com/NeocraftersNT\n\n<:Twitter:1047002722135724052> **Twitter:**\nhttp://twitter.galaxyworld.club/\n\n<:Discord:1047002715433205760> **Discord:**\nhttp://discord.galaxyworld.club/\n\n<:Twitch:1047002720160186429> **Twitch:**\nhttps://www.twitch.tv/imfrank08\n\n<:Tiktok:1052814507430391900> **TikTok:**\nhttp://tiktok.galaxyworld.club/")
   	.setTimestamp()
    .setThumbnail('https://media.discordapp.net/attachments/1044074287096680528/1057479116183580755/zyro-image.png')
    .setFooter(`GalaxyWorld Network - Anuncios`)
    .setColor('#bdbe11');
    MensageAutomatico.send(embed);
   }, 28800000);

   setInterval(function() {    
        var estados = [`${client.guilds.cache.size} servers`,"Dev ImFrank08", "mc.Minexus.us", "prefix !"]
        let estado = estados[Math.floor(estados.length * Math.random())];
        client.user.setPresence({
          status: "idle",
          activity: {
            name: estado,
            type: "WATCHING",
          }
        })
      }, 2000);
    });
var prefix = config.prefix;

client.on("message", async (message) => {
    if (!message.content.startsWith(config.prefix)) return;
    if (message.author.bot) return;
    
    if (message.content.startsWith(prefix + "ip")) {
      const IPEmbed = new Discord.MessageEmbed()
      .setTitle(`**<:MINEXUS:1120440450457813116> MINEXUS NETWORK**`)
      .setDescription("Unete a nuestro servidor de Minecraft!\nLas IP son:\n<a:check:1114651316367663144> **Java:** `mc.Minexus.us`\n<a:diamante:1109264159956287548> Bedrock: `mc.Minexus.us` **Puerto »** `19132`")
      .setImage(`https://media.discordapp.net/attachments/1109004377198432296/1120581045461467196/standard.gif`)
      .setColor("e60fb3")
      .setTimestamp()
      .setFooter(`Comando ejecutado por ${message.author.username}#${message.author.discriminator}`);
      
      message.channel.send({ embed: IPEmbed });
    } else
    if (message.content.startsWith(prefix + "ds")) {
      message.channel.send(`Hola, <@${message.author.id}> Aqui tienes la invitación **» https://discord.gg/jbeDjuSQvD **`);
    
    }
    if (message.content.startsWith(prefix + "discord")) {
      message.channel.send(`Hola, <@${message.author.id}> Aqui tienes la invitación **» https://discord.gg/jbeDjuSQvD **`);
    
    }
    if (message.content.startsWith(prefix +"ayuda")){
      message.channel.send({embed: {
        color: "RANDOM",
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
        },
        title: "Lista de Comandos - Minexus Bot",
        url: "http://tienda.minexus.us/",
        description: "¡Hola! Soy Minexus Bot, mi prefix es **!**\n\nAhora te encuentras viendo el apartado de ayuda.\nAquí verás la lista de comandos de Minexus Bot.\nSi necesitas ayuda puedes ir al discord de [Soporte](https://discord.gg/jbeDjuSQvD)",
        fields: [{
          name: "**Comandos:**",
          value: "**Moderación**\n``ban,kick,mute,unmute,unban``\n\n**Herramientas**\n``avatar,ping,minecraft,discord,ip,skin,``\n``rolelist,canales,clima,coronavirus,perfil,clear,icono``\n\n**Administración**\n``server,anuncio,encuesta,infobot``\n\n**Otros**\n``frank,contactos,guia-mc,guia-discord``\n\n**Entretenimiento**\n``decir,8ball,kiss,enviar,buscaminas,``"
        },
      ],
        timestamp: new Date(),
        footer: {
          icon_url: (client.user.avatarURL),
          text: "Developer MrFrank_#2641"
        }
      }
  });
  }
    if (message.content.startsWith(prefix +"server" )){
      var server = message.guild; 
      let guild = message.guild;
      let verifLevels = [
        "Ningúno",
        "Bajo",
        "Medio",
        "Alto",
        "(╯°□°）╯︵ ┻━┻",
      ], 
        region = {
        europe: "Europa :flag_eu:",
        brazil: "Brasil :flag_br: ",
        hongkong: "Hong Kong :flag_hk:",
        japan: "Japón :flag_jp:",
        russia: "Rusia :flag_ru:",
        singapore: "Singapur :flag_sg:",
        southafrica: "Sudáfrica :flag_za:",
        sydney: "Sydney :flag_au:",
        "us-central": "Central US :flag_us:",
        "us-east": "Este US :flag_us:",
        "us-south": "Sur US :flag_us:",
        "us-west": "Oeste US :flag_us:",
        "vip-us-east": "VIP US Este :flag_us:",
        "eu-central": "Europa Central :flag_eu:",
        "eu-west": "Europa Oeste :flag_eu:",
        london: "London :flag_gb:",
        amsterdam: "Amsterdam :flag_nl:",
        india: "India :flag_in:"
      };
        const embedDatos = new Discord.MessageEmbed() 
        .setTitle(message.guild.name)
        .setAuthor(message.author.username)
        .setColor("RANDOM")
        .setDescription("Aquí obtendrás la información del servidor\n")
        .setFooter(`Comando usado por ${message.author.tag}`)
        .setThumbnail(message.guild.iconURL())
        .setTimestamp()
        .addField('Creador del Discord', message.guild.owner, true)
        .addField("ID de Servidor", message.guild.id,  true)
        .addField("Roles", message.guild.roles.cache.size, true)
        .addField("Miembros", message.guild.memberCount, true)
        .addField("Region", region[message.guild.region], true)
        .addField("Canales", ":books: "+ message.guild.channels.cache.size+ " Texto",true)
        .addField("Nivel de Verificación", message.guild.verificationLevel)
        .addField(
          "Fecha de Creación:", `${
            guild.createdAt.toDateString().split(" ")[2]
          }/${guild.createdAt.toDateString().split(" ")[1]}/${
            guild.createdAt.toDateString().split(" ")[3]
          }`
        );
    message.channel.send({ embed: embedDatos });
    }
    if (message.content.startsWith(prefix +"avatar" )){
      let user = message.mentions.users.first() || message.author
      let icono = user.avatarURL({ format: 'png', dynamic: true, size: 1024 })
      const avatar = new Discord.MessageEmbed()
      .setDescription(`**Avatar de ${user.username}**`+`\n\n[CLICK AQUI PARA DESCARGAR](${icono})`)
      .setImage(user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(`Avatar pedido por ${message.author.username}#${message.author.discriminator}`);
      
      message.channel.send({ embed: avatar });
    }
  if (message.content.startsWith(prefix +"mc" )){
    let motd = "http://status.mclive.eu/MinecraftServer/mc.Minexus.us/25565/banner.png"
    let pingURL = "https://api.minetools.eu/ping/mc.Minexus.us"
    const embedDatos = new Discord.MessageEmbed()
    .setTitle("Minexus Network")
    .setColor("RANDOM")
    .setFooter(`Comando usado por ${message.author.tag}`)
    .setThumbnail(message.guild.iconURL())
    .setTimestamp()
    .setImage(motd)
    .addField('IP:', "mc.Minexus.us", true)
    .addField("Config:", "MrFrank_", true)
    
  message.channel.send({ embed: embedDatos });
  }

  if (message.content.startsWith(prefix +"ping" )){
    async function ping() {
    let ping = Math.floor(message.client.ws.ping);
    await message.channel.send(":satellite: Cargando .")
    client.user.lastMessage.delete()
    await message.channel.send(":satellite: Cargando . .")
    client.user.lastMessage.delete({timeout: 500})
    await message.channel.send(":satellite: Cargando . . .")
    client.user.lastMessage.delete({timeout: 1000})
    await message.channel.send(":satellite_orbital: **Tienes "+ ping + "ms**");
    }  
  ping();
  
  }
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  let texto = args.join(" ");
  if(command === 'decir'){
      if(!texto) return message.channel.send(`<@${message.author.id}>, **escriba un contenido para decir.**`);
      message.channel.send(texto);
      message.delete();
      
  }

  if (command === "8ball") {
  if (!texto) return message.channel.send(`<@${message.author.id}>, **Escriba una pregunta.**`);;
  
  var rpts = [
      "Si",
      "Cuenta con eso",
      "No lo sé",
      "Lo mas seguro es que no.",
      "No",
      "No pos miau :v.", 
      "Talvez...",
      "Solo se que nada se..",
      "Eso es informacion privada :3",
    ];

    message.channel.send({embed: {
        color: "RANDOM",
        title: message.author.username + `, A tu pregunta:`,
        fields: [
          {
            name: "Pregunta:",
            value: "```" + args.join(" ") + "```" 
          },
          {
            name: "Mi respuesta es:",
            value: "```" + rpts[Math.floor(Math.random() * rpts.length)] + "```" 
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: (client.user.avatarURL),
          text: `Pregunta realizada por ${message.author.username}#${message.author.discriminator}`
        }
      }
    });
    message.delete();
  }
  if(command === 'kiss'){
    if(!texto) return message.channel.send(`<@${message.author.id}>, **No puedes besar a la nada O.o**`);
    let user = message.mentions.users.first() || message.author
    let gifs = ['https://www.gifs-porno.com/wp-content/uploads/2018/02/Besos-apasionados.gif', 'https://66.media.tumblr.com/2c0afb2bce3dea809f5e9dd283dc459b/tumblr_oh2v64hpfy1tlmyzco1_400.gif', 'https://66.media.tumblr.com/96416a729bae8f401d2b9461879aed3e/tumblr_olfvbvuehd1swsw0mo3_r1_500.gif', 'https://cdn.lowgif.com/full/9cceab95561dd8a1-anime-zodiac-tipo-de-besos-capricornio-wattpad.gif', 'https://marcelinethinks.files.wordpress.com/2016/04/large.gif', 'https://66.media.tumblr.com/16825eef9282d74173114dbb2f4c3f61/tumblr_o1sq970t7b1r87g0to2_r1_640.gif', 'https://pa1.narvii.com/6807/4d8a66e4a1fb3b581a6e89e2d7a9ebb83f5d3052_00.gif']
    let beso = [`**${message.author.username}** le dió un beso con mucho **amor** a **${user.username}**`, `**${user.username}** ha sido besado por **${message.author.username}**`, `**${message.author.username}** le robó un beso a **${user.username}**`]
    let randomIMG = gifs[Math.floor(Math.random() * gifs.length)]
    let besoR = beso[Math.floor(Math.random() * beso.length)]
    const embed = new Discord.MessageEmbed()
    .setDescription(besoR)
    .setImage(randomIMG)
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Beso dado por ${message.author.username}#${message.author.discriminator}`);
  message.channel.send(embed)
  }
  let skin = args.join(' ')
  if(command === 'skin'){
    if(!texto) return message.channel.send('Envie un nombre de usuario Minecraft.');
    let apiURL = `https://api.mojang.com/users/profiles/minecraft/${texto}`;
    request(apiURL, function(err, resp, body) {
      body = JSON.parse(body);
      let id = body.id;
      let skinURL = `https://visage.surgeplay.com/full/512/${id}.png`;
      const embed = new Discord.MessageEmbed()
      .setDescription(`**[Skin de ${texto}](https://visage.surgeplay.com/full/512/${id}.png)**`)
      .setImage(skinURL)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(`Skin pedida por ${message.author.username}#${message.author.discriminator}`);
      message.channel.send(embed);})
    }
  if(command === 'enviar'){
  let canal = message.mentions.channels.first();
    if(!canal) return message.channel.send('Debe escribir un canal.');
    let mensaje = args.slice(1).join(" ");
    if(!mensaje) return message.channel.send('Debes escribir un mensaje.');
    canal.send(mensaje)
    message.channel.send(":white_check_mark: | **Mensaje enviado**")
  }
if(command === 'coronavirus'){
let pais = args[0]
if(!pais) return message.channel.send(`<@${message.author.id}>**, Necesitas colocar un país!**`)

superagent
.get(`https://corona.lmao.ninja/v2/countries/${pais}`)
.end((err,res) => {
  let body = res.body
  
  if(body.message) return message.channel.send(`<@${message.author.id}>**, Necesitas poner un pais válido!**`)
  
  var embed = new Discord.MessageEmbed()
  .setTitle("Coronavirus | Casos de "+pais)
  .setColor("RANDOM")
  .setTimestamp()
  .setDescription(`El brote de **coronavirus** ha sido ampliamente \nreportado en los noticieros del mundo.\nLa Organización Mundial de la Salud (**OMS**),\ndeclaró oficialmente que el covid-19 es una pandemia,\ndesde el pasado 11 de marzo.\n\n[Para más información del COVID-19 da click aquí.](https://es.wikipedia.org/wiki/Pandemia_de_enfermedad_por_coronavirus_de_2019-2020)\n\n**Infectados Totales:**\n${body.cases}\n\n **Infectados Criticos:**\n ${body.critical}\n\n**Aumento de Infectados Hoy:**\n${body.todayCases}\n\n**Total de Muertos:**\n${body.deaths}\n\n**Muertos Hoy:**\n${body.todayDeaths}\n\n**Personas Recuperadas:**\n${body.recovered}`)
  .setFooter(`Comando usado por ${message.author.tag}`)
  message.channel.send(embed)
  
})
}
if(command === 'perfil'){
let estadouser = {


  online:":green_circle: Online", 
  idle:":orange_circle: Ausente",
  dnd:":red_circle: No Molestar",
  invisible:":black_circle: Invisible/Desconectado",
} 
let User = message.mentions.users.first() || client.users.resolve(args[0]) || message.author
const member = message.guild.member(User);
const e = new Discord.MessageEmbed()

.setTitle("**Perfil de: **" + `${User.tag}`)
.addField("**Nombre:**", `<@${User.id}>`, true)
.setColor("RANDOM")
.setThumbnail(User.avatarURL())
.addField("**ID:**", `${User.id}`, true)
.addField("**Apodo:**",`${member.nickname ? member.nickname : "No Tienes Apodo"}`,true)
.addField("**Estado:**","**"+ estadouser[User.presence.status]+"**", true)
.addField("**Jugando a:**",`${User.presence.game ? User.presence.game.name : "Ninguno"}`,true)
.addField("**Servidor Actual**", message.guild.name, true)
.addField("**Cuenta creada el:**", `${User.createdAt.toDateString()}`, true)
.addField("**Entraste al sevidor el:**", `${message.guild.members.resolve(User).joinedAt.toDateString()}`, true)
.addField("**Número de Roles:**", `${message.guild.member(User).roles.cache.size}`, true)
.setTimestamp()
.addField("**Roles:**","`"+member.roles.cache.filter(e => e.id != "628660295832961045").map(roles => `${roles.name}`).join("`, `")+"`",true)     
.setFooter(`Comando usado por ${message.author.username}#${message.author.discriminator}`);


message.channel.send(e).catch(err => {return message.channel.send('Ocurrio un error. \n'+ '`'+err+'`' );
})
};
  if(command === "clear"){
  let cantidad = parseInt(args[0]);
  let permiso = message.member.hasPermission("MANAGE_MESSAGES");
  if(!message.member.hasPermission("MANAGE_MESSAGES") ) return message.reply("\n> Lo siento, tú no tienes permisos para utilizar este comando ❌");
 message.channel.bulkDelete(cantidad);
 message.channel.send("✅ Mensajes correctamente borrados: "+"``"+cantidad+"``");
 message.delete({timeout: 5000})
}
      if(command === 'infobot'){
        let estadouser = {
        
        
          online:":green_circle: Online", 
          idle:":orange_circle: Ausente",
          dnd:":red_circle: No Molestar",
          invisible:":black_circle: Invisible/Desconectado",
        } 
        let User = message.mentions.users.first() || client.users.resolve(args[0]) || message.author
        const member = message.guild.member(User);
        const e = new Discord.MessageEmbed()
        
        .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
        .setDescription("¡Hola! Soy un Bot con el fin de ayudar a la network.\nSi quieres mas información sobre mis comandos\nusa"+"`` !ayuda``")
        .addField("**➥ Mi nombre:**", `🔰 ${client.user.tag} 🔰`, true)
        .addField("➥ Mi Creador es:", `👑 <@653436315831894027> 👑`)
        .setColor("RANDOM")
        .setThumbnail(message.guild.iconURL())
        .addField("**➥ ID:**", `${client.user.id}`, true)
        .addField("**➥ Libreria:**","⚙ Discord.js Versión 12 ⚙")
        .addField("**➥ Servidor Actual**", message.guild.name)
        .addField("**➥ Estoy en:**", "``"+`${client.guilds.cache.size}`+"``"+ "**Servidores**", true)
        .addField("**➥ Espio a:**", "``"+`${client.users.cache.size}`+"``"+ "**Usuarios**", true)
        .addField("**➥ Fui Creado el:**", `Lunes, ‎4 ‎de ‎Julio ‎del ‎2022, ‏‎5:41 Horas`)
        .setTimestamp()
        .setFooter(`Comando usado por ${message.author.username}#${message.author.discriminator}`);
   
        message.channel.send(e);
        };
if(command === "mute"){
  async function mute(){
  let persona = message.mentions.members.first() 
  let razon = args.slice(2).join(" ") || "Sin Razón" 
  let permisos = message.member.hasPermission("KICK_MEMBERS")
  

  if(!permisos){
      const NoPermisos = new Discord.MessageEmbed()
          .setDescription("⛔ Tú no tienes permisos para usar el comando ``MUTE``")
          .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
          .setColor("GOLD")
          .setFooter("Sin Permisos")
          .setTimestamp();
          message.channel.send(NoPermisos)
          return NoPermisos
  }
  if(!persona){ /*Si no mencionó a nadie, enviará este embed*/
    const NoMuteado = new Discord.MessageEmbed()
        .setDescription("⛔ Debes mencionar a un usuario.")
        .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
        .setColor("GOLD")
        .setFooter("Requiere mencionar a un usuario")
        .setTimestamp();
        message.channel.send(NoMuteado)
        return NoMuteado /*Retornamos acá*/
}
  if (persona.id == message.author.id){
    const SiMismo = new Discord.MessageEmbed()
        .setDescription("⛔ No puedes mutearte tu mismo.")
        .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
        .setTimestamp()
        .setFooter("No te puedes mutear tu mismo")
        .setColor("GOLD");
        message.channel.send(SiMismo)
        return SiMismo 

}
  
  if(persona.roles.highest.comparePositionTo(message.member.roles.highest) >= 0){ 
      const MayorRol = new Discord.MessageEmbed()
          .setDescription("⛔ No puedes mutear a este usuario.")
          .setColor("RED")
          .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
          .setFooter("Accion no Permitida")
          .setTimestamp();
          message.channel.send(MayorRol)
          return MayorRol 
  }
  persona.roles.add("906669559237468230").catch(e => message.reply("Ocurrió un **error**")) /*Aquí le añadimos el rol*/
  
  const mutetiempo = new Discord.MessageEmbed()
  .setDescription(
    "⛔ Para mutear debes poner un tiempo\n\n"+"``"+"Formato: (1s (Segundo) | 1h (Hora) / 1d (Dia))"+"``")
  .setColor("RED")
  .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
  .setFooter("Se necesita un tiempo para mutear")
  .setTimestamp();
let mutetime = args[1];
if (!mutetime) return message.channel.send(mutetiempo);

await persona.roles.add("906669559237468230");
  const Exitoso = new Discord.MessageEmbed() /*Inicio del embed que dirá que fue muteado/a la persona.*/
      .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
      .setDescription(`**Staff: ${message.author.username}**\n\n**Usuario:** ${persona} (${persona.id})\n**Accion:** Mute\n**Tiempo:** ${mutetime}\n**Razón:** ${razon}`)
      .setColor("RED")
      .setFooter(`Muteo Exitoso por ${message.author.username}`)
      .setTimestamp();
      message.channel.send(Exitoso) /*Enviamos el mensaje al canal*/

    setTimeout(function() {
    persona.roles.remove("906669559237468230");
    const Desmuteo = new Discord.MessageEmbed() 
      .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
      .setDescription(`**Staff: ${message.author.username}**\n\n**Usuario:** ${persona} (${persona.id})\n**Accion:** Desmuteo\n**Razón:** Desmuteo Automático.`)
      .setColor("GREEN")
      .setFooter(`Desmuteo Automático de ${message.author.username}`)
      .setTimestamp();
    message.channel.send(Desmuteo)
    persona.send(Desmuteo)
   }, ms(mutetime));
   const MD = new Discord.MessageEmbed() /*Inicio del embed que dirá que fue muteado/a la persona.*/
      .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
      .setDescription(`**Servidor:** ${message.guild.name}\n**Staff: ${message.author.username}**\n\n**Usuario:** ${persona} (${persona.id})\n**Accion:** Mute\n**Tiempo:** ${mutetime}\n**Razón:** ${razon}`)
      .setColor("RED")
      .setFooter(`Muteo Exitoso por ${message.author.username}`)
      .setTimestamp();
      persona.send(MD);
   }
mute();
}
if(command === "unmute"){
  async function unmute(){
  let persona = message.mentions.members.first() 
  let Noperm = message.member.hasPermission("KICK_MEMBERS")
    if(!persona){ /*Si no mencionó a nadie, enviará este embed*/
      const NoMuteado = new Discord.MessageEmbed()
          .setDescription("⛔ Debes mencionar a un usuario.")
          .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
          .setColor("GOLD")
          .setFooter("Requiere mencionar a un usuario")
          .setTimestamp();
          message.channel.send(NoMuteado)
          return NoMuteado /*Retornamos acá*/
  }
  let rol = persona.roles.cache.find(r => r.id === "906669559237468230");
  if(!rol){ 
    const sinrol = new Discord.MessageEmbed()
        .setDescription("⛔ Este usuario no está muteado")
        .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
        .setColor("GOLD")
        .setFooter("No está muteado")
        .setTimestamp();
        message.channel.send(sinrol);
        return sinrol
      }
      else{
        if(message.member.roles.cache.has(rol.id)) {
        }}
  if(!Noperm){ /*Si la persona no tiene los permisos de arriba, enviará este embed*/
      const Noperm = new Discord.MessageEmbed()
          .setDescription("⛔ Tú no tienes permisos para usar el comando ``UN-MUTE``")
          .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
          .setColor("GOLD")
          .setFooter("Sin Permisos")
          .setTimestamp();
          message.channel.send(Noperm)
          return Noperm
        }
      persona.roles.remove("906669559237468230");
      
      const NoMute = new Discord.MessageEmbed() 
        .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
        .setDescription(`**Staff: ${message.author.username}**\n\n**Usuario:** ${persona} (${persona.id})\n**Accion:** Desmuteo\n**Razón:** Desmuteado por ${message.author.username}.`)
        .setColor("GREEN")
        .setFooter(`Desmuteo Automático de ${message.author.username}`)
        .setTimestamp();
      message.channel.send(NoMute)
      persona.send(NoMute)
      }
       unmute();
      }
      if (command === "staff") {
        let persona = message.mentions.members.first();
        let accion = args[1];
        const canalIDResultado = "1124097717388460172";
        let permisos = message.member.hasPermission("ADMINISTRATOR");
      
        if (!permisos) {
          const NoPermisos = new Discord.MessageEmbed()
            .setDescription("⛔ No tienes permisos para usar el comando `STAFF`")
            .setAuthor(
              message.author.username + "#" + message.author.discriminator,
              message.author.avatarURL()
            )
            .setColor("GOLD")
            .setFooter("Sin Permisos")
            .setTimestamp();
          message.channel.send(NoPermisos);
          return;
        }
      
        if (!persona) {
          const NoMencionado = new Discord.MessageEmbed()
            .setDescription("⛔ Debes mencionar a un usuario.")
            .setAuthor(
              message.author.username + "#" + message.author.discriminator,
              message.author.avatarURL()
            )
            .setColor("GOLD")
            .setFooter("Requiere mencionar a un usuario")
            .setTimestamp();
          message.channel.send(NoMencionado);
          return;
        }
      
        if (persona.id === message.author.id) {
          const SiMismo = new Discord.MessageEmbed()
            .setDescription("⛔ No puedes aceptar o denegarte a ti mismo.")
            .setAuthor(
              message.author.username + "#" + message.author.discriminator,
              message.author.avatarURL()
            )
            .setTimestamp()
            .setFooter("¡Error!")
            .setColor("GOLD");
          message.channel.send(SiMismo);
          return;
        }
      
        if (
          persona.roles.highest.comparePositionTo(message.member.roles.highest) >=
          0
        ) {
          const MayorRol = new Discord.MessageEmbed()
            .setDescription("⛔ Solo puedes aceptar o denegar a los postulantes.")
            .setColor("RED")
            .setAuthor(
              message.author.username + "#" + message.author.discriminator,
              message.author.avatarURL()
            )
            .setFooter("Acción no permitida")
            .setTimestamp();
          message.channel.send(MayorRol);
          return;
        }
      
        if (!accion || (accion !== "aceptado" && accion !== "denegado")) {
          const aceptarodenegar = new Discord.MessageEmbed()
            .setDescription(
              "⛔ Para aceptar o denegar, debes usar el siguiente formato: !staff (@postulante) (aceptado/denegado)"
            )
            .setColor("RED")
            .setAuthor(
              message.author.username + "#" + message.author.discriminator,
              message.author.avatarURL()
            )
            .setFooter("¡Error!")
            .setTimestamp();
          message.channel.send(aceptarodenegar);
          return;
        }
      
        let mensajeEmbed;
        if (accion === "aceptado") {
          mensajeEmbed = new Discord.MessageEmbed()
            .setDescription(
              `**ADMINISTRACION || MINEXUS NETWORK**\n\n**Postulante:** ${persona} (${persona.id})\n**Estado: Aceptado**\n\nPasaste la primera fase de postulación para formar parte de nuestro equipo de moderación, se te desbloqueará un nuevo canal, donde se te dará las indicaciones para la segunda fase`
            )
            .setColor("GREEN")
            .setThumbnail(message.guild.iconURL())
            .setFooter("Postulante a Staff: Aceptado")
            .setTimestamp();
        } else {
          mensajeEmbed = new Discord.MessageEmbed()
            .setDescription(
              `**ADMINISTRACION || MINEXUS NETWORK**\n\n**Postulante:** ${persona} (${persona.id})\n**Estado: Denegado**\n\nLamentablemente no pasaste la primera fase de la postulación para formar parte del equipo, pero no te desanimes, podrás postularte la siguiente vez que se busquen miembros para el equipo de moderación`
            )
            .setColor("RED")
            .setThumbnail(message.guild.iconURL())
            .setFooter("Postulante a Staff: Rechazado")
            .setTimestamp();
        }
      
        const canalResultado = client.channels.cache.get(canalIDResultado);
    if (canalResultado && canalResultado.isText()) {
      canalResultado.send(mensajeEmbed);
    } else {
      console.log("⛔ No se encontró el canal para enviar el mensaje.");
    }
  }
  
      if(command === "kick"){
        let persona = message.mentions.members.first()  || client.users.resolve(args[0]);
        let reason = args.slice(1).join(" ") || "Sin Razón";
        let permisos = message.member.hasPermission("KICK_MEMBERS")
        if(!permisos){ 
          const Noperm = new Discord.MessageEmbed()
              .setDescription("⛔ Tú no tienes permisos para usar el comando ``KICK``")
              .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
              .setColor("GOLD")
              .setFooter("Sin Permisos")
              .setTimestamp();
              message.channel.send(Noperm)
              return Noperm
            }
        if(!persona){ /*Si no mencionó a nadie, enviará este embed*/
          const NoMuteado = new Discord.MessageEmbed()
              .setDescription("⛔ Debes mencionar a un usuario.")
              .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
              .setColor("GOLD")
              .setFooter("Requiere mencionar a un usuario")
              .setTimestamp();
              message.channel.send(NoMuteado)
              return NoMuteado /*Retornamos acá*/
      }
      if (persona.id == message.author.id){
        const TuMismo = new Discord.MessageEmbed()
          .setDescription("⛔ No puedes kickearte tu mismo.")
          .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
          .setTimestamp()
          .setFooter("No te puedes kickear tu mismo")
          .setColor("GOLD");
          message.channel.send(TuMismo)
          return TuMismo 
  
  }
         const member = message.guild.members.resolve(persona)
         if (member.roles.highest.comparePositionTo(message.member.roles.highest) >= 0){
        const MayorRol = new Discord.MessageEmbed()
            .setDescription("⛔ No puedes kickear a este usuario.")
            .setColor("RED")
            .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
            .setFooter("Accion no Permitida")
            .setTimestamp();
            message.channel.send(MayorRol)
            return MayorRol 
    }
        message.guild.member(persona).kick(reason);
        const Exitoso = new Discord.MessageEmbed() /*Inicio del embed que dirá que fue muteado/a la persona.*/
        .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
        .setDescription(`**Staff: ${message.author.username}**\n\n**Usuario:** ${persona} (${persona.id})\n**Accion:** Expulsar\n**Razón:** ${reason}`)
        .setColor("RED")
        .setFooter(`Kickeo Exitoso por ${message.author.username}`)
        .setTimestamp();
        message.channel.send(Exitoso)
        const MD = new Discord.MessageEmbed() /*Inicio del embed que dirá que fue muteado/a la persona.*/
        .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
        .setDescription(`**Servidor:** ${message.guild.name}\n**Staff: ${message.author.username}**\n\n**Usuario:** ${persona} (${persona.id})\n**Accion:** Expulsar\n**Razón:** ${reason}`)
        .setColor("RED")
        .setFooter(`Kickeo Exitoso por ${message.author.username}`)
        .setTimestamp();

        persona.send(MD);
       }
       if (command === "encuesta") {
        let canal = message.mentions.channels.first();
        let opciones = args.slice(1).join(" ").split("/");
      
        if (!canal) {
          const NoCanal = new Discord.MessageEmbed()
            .setDescription("⛔ Debes mencionar un canal válido para la encuesta.")
            .setAuthor(
              message.author.username + "#" + message.author.discriminator,
              message.author.avatarURL()
            )
            .setColor("GOLD")
            .setFooter("Canal inválido")
            .setTimestamp();
          message.channel.send(NoCanal);
          return;
        }
      
        if (opciones.length < 2 || opciones.length > 6) {
          const OpcionesInvalidas = new Discord.MessageEmbed()
            .setDescription(
              "⛔ Formato: !encuesta [#canal] [pregunta] / [opcion 1] / [opcion 2] / [opcion 3 (opcional)] / [opcion 4 (opcional)] / [opcion 5 (opcional)] / [opcion 6 (opcional)]"
            )
            .setAuthor(
              message.author.username + "#" + message.author.discriminator,
              message.author.avatarURL()
            )
            .setColor("GOLD")
            .setFooter("Opciones inválidas")
            .setTimestamp();
          message.channel.send(OpcionesInvalidas);
          return;
        }
      
        let pregunta = opciones.shift(); // Extraer la pregunta de las opciones
        pregunta = pregunta.trim(); // Eliminar espacios en blanco al inicio y al final
      
        const encuestaEmbed = new Discord.MessageEmbed()
          .setTitle("📊 Nueva Encuesta")
          .setDescription("**Pregunta:** " + pregunta + "\n\nPor favor, vota seleccionando una de las siguientes opciones:")
          .setColor("BLUE")
          .addField("Opciones:", opciones.join("\n"))
          .setFooter(
            "Encuesta creada por: " +
              message.author.username +
              "#" +
              message.author.discriminator,
            message.author.avatarURL()
          )
          .setTimestamp();
      
        canal.send(encuestaEmbed).then((mensaje) => {
          for (let i = 0; i < opciones.length; i++) {
            mensaje.react(getEmoji(i));
          }
        });
      }
      
      // Función auxiliar para obtener emojis de reacción basados en el índice de opción
      function getEmoji(index) {
        const emojis = [
          "\u0031\u20E3", // 1️⃣
          "\u0032\u20E3", // 2️⃣
          "\u0033\u20E3", // 3️⃣
          "\u0034\u20E3", // 4️⃣
          "\u0035\u20E3", // 5️⃣
          "\u0036\u20E3", // 6️⃣
        ];
      
        return emojis[index];
      }     
      if (command === "anuncio") {
        let anuncio = args.slice(1).join(" ").split("^");
        let canal = message.mentions.channels.first();
        var perms = message.member.hasPermission("MANAGE_GUILD"); 
        let autor = `${message.author}` 
        
        if(!perms) return message.channel.send(`${message.author}`+' **no tienes permisos para hacer esto! Permiso faltante:** ``MANAGE_GUILD``'); //si no tienen permisos
        if(!anuncio) return message.channel.send(`${message.author}`+' **debes de escribir un anuncio!**') 
        if(!canal){ 
        const NoCanal = new Discord.MessageEmbed()
            .setDescription("⛔ Debes seleccionar un canal.")
            .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
            .setColor("GOLD")
            .setFooter("Formato de anuncios by MrFrank_")
            .setTimestamp();
            message.channel.send(NoCanal)
            return NoCanal 
    }

        const nomensaje = new Discord.MessageEmbed()
        .setDescription(
          "⛔ Debes usar el siguiente formato:\n\n"+"``"+"!anuncio #(canal) (link img[opcional]) ^ (Titulo) ^ (Mensaje)"+"``")
        .setColor("RED")
        .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
        .setFooter("Formato de anuncios by MrFrank_")
        .setTimestamp();
      let msguno = args[1];
      if (!msguno) return message.channel.send(nomensaje);

        let mensaje = args.slice(1).join(" ");
        const embed = new Discord.MessageEmbed()
          .setTitle('<a:Corona:1109266256961478716>' + anuncio[1])
          .setDescription(anuncio[2])
          .setImage(anuncio[0])
          .setTimestamp()
          .setFooter(`${message.author.username}#${message.author.discriminator} Minexus Network`)
          .setColor('#e60fb3');
        canal.send(embed);
        message.channel.send(`${message.author}`+' **listo, ya di el anuncio!**').then(async(msg) => {
          setTimeout(() => {
            msg.delete();
          }, 5000)
        })
      }
        if(command === 'icono'){
          let icono = message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 })
          const server = new Discord.MessageEmbed()
          .setDescription(`**Avatar del Servidor**`+" **"+`${message.guild.name}`+"**"+`\n\n[CLICK AQUI PARA DESCARGAR](${icono})`)
          .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
          .setColor("RANDOM")
          .setTimestamp()
          .setFooter(`Comando usado por ${message.author.username}#${message.author.discriminator}`);
          
          message.channel.send({ embed: server });
        };
      if (command === "autoroles-paises") {
        let canal = message.mentions.channels.first();
        var perms = message.member.hasPermission("MANAGE_GUILD"); 
        let autor = `${message.author}` 
        
        if(!perms) return message.channel.send(`${message.author}`+' **no tienes permisos para hacer esto! Permiso faltante:** ``MANAGE_GUILD``'); //si no tienen permisos
        if(!canal){ 
        const NoCanal = new Discord.MessageEmbed()
            .setDescription("⛔ Debes seleccionar un canal.")
            .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
            .setColor("GOLD")
            .setFooter("Formato de autoroles by MrFrank_")
            .setTimestamp();
            message.channel.send(NoCanal)
            return NoCanal 
    }
        const embed = new Discord.MessageEmbed()
          .setTitle('<:MINEXUS:1120440450457813116> **__AUTOROLES DE PAISES:__**')
          .setDescription(`<a:alert:1049933673245442118> Reaciona a los emojis para seleccionar tu\npaís dentro del servidor de discord.\n\n🇵🇪 **Perú**ㅤㅤㅤㅤㅤ🇪🇨 **Ecuador**\n\n🇦🇷 **Argentina**ㅤㅤㅤ🇨🇱 **Chile**\n\n🇨🇴 **Colombia**ㅤㅤㅤ🇪🇸 **España**\n\n🇺🇸 **EE.UU**ㅤㅤㅤㅤ🇺🇾 **Uruguay**\n\n🇲🇽 **México**ㅤㅤㅤㅤ🇻🇪 **Venezuela**\n\n🇳🇮 **Nicaragua**ㅤㅤㅤ🇧🇴 **Bolivia**`)
          .setTimestamp()
          .setFooter(`Roles Automaticos by GalaxyBot`)
          .setColor('#bdbe11');
        canal.send(embed);
        message.channel.send(`${message.author}`+' **listo, ya di el anuncio!**').then(async(msg) => {
        })
      }

      if (command === "autoroles-java") {
        let canal = message.mentions.channels.first();
        var perms = message.member.hasPermission("MANAGE_GUILD"); 
        let autor = `${message.author}` 
        
        if(!perms) return message.channel.send(`${message.author}`+' **no tienes permisos para hacer esto! Permiso faltante:** ``MANAGE_GUILD``'); //si no tienen permisos
        if(!canal){ 
        const NoCanal = new Discord.MessageEmbed()
            .setDescription("⛔ Debes seleccionar un canal.")
            .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
            .setColor("GOLD")
            .setFooter("Formato de autoroles by MrFrank_")
            .setTimestamp();
            message.channel.send(NoCanal)
            return NoCanal 
    }
        const embed = new Discord.MessageEmbed()
          .setTitle('<:MINEXUS:1120440450457813116> **__AUTOROLES DE VERSION:__**')
          .setDescription(`<a:alert:1049933673245442118> Reaciona a los emojis para seleccionar tu\npaís dentro del servidor de discord.\n\n<:Minecraft:1052808736902746152> **Minecraft Java**\n\n<:Bedrock:1052808734193238066> **Minecraft Bedrock**`)
          .setTimestamp()
          .setFooter(`Roles Automaticos by Minexus Network`)
          .setColor('#bdbe11');
        canal.send(embed);
        message.channel.send(`${message.author}`+' **listo, ya di el anuncio!**').then(async(msg) => {
        })
      }

      if (command === "tiktok") {
        let anuncio = args.slice(1).join(" ").split("^");
        let canal = message.mentions.channels.first();
        var perms = message.member.hasPermission("MANAGE_GUILD"); 
        let autor = `${message.author}` 
        
        if(!perms) return message.channel.send(`${message.author}`+' **no tienes permisos para hacer esto! Permiso faltante:** ``MANAGE_GUILD``'); //si no tienen permisos
        if(!anuncio) return message.channel.send(`${message.author}`+' **debes de escribir un anuncio!**') 
        if(!canal){ 
        const NoCanal = new Discord.MessageEmbed()
            .setDescription("⛔ Debes seleccionar un canal.")
            .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
            .setColor("GOLD")
            .setFooter("Formato de anuncios by MrFrank_")
            .setTimestamp();
            message.channel.send(NoCanal)
            return NoCanal 
    }

        const nomensaje = new Discord.MessageEmbed()
        .setDescription(
          "⛔ Debes usar el siguiente formato:\n\n"+"``"+"!tiktok #(canal) (link)"+"``")
        .setColor("RED")
        .setAuthor(message.author.username+"#"+message.author.discriminator, message.author.avatarURL())
        .setFooter("Formato de anuncios by MrFrank_")
        .setTimestamp();
      let msguno = args[1];
      if (!msguno) return message.channel.send(nomensaje);

        let mensaje = args.slice(2).join(" ");
        const embed = new Discord.MessageEmbed()
          .setTitle('<:MINEXUS:1120440450457813116> | ¡NUEVO TIKTOK SUBIDO!')
          .setDescription('Apoyanos con un Me Gusta y comentario <:Corazon:1049862738396069968>' + '\n\n<:Tiktok:1052814507430391900> **Enlace:** ' + anuncio[0])
          .setTimestamp()
          .setFooter(`${message.author.username}#${message.author.discriminator} GalaxyWorld Network`)
          .setColor('#bdbe11');
        canal.send(embed);
        message.channel.send(`${message.author}`+' **listo, ya di el anuncio!**').then(async(msg) => {
        })
      }
      if (command === "mantenimiento") {
        if (args.length < 2) {
          message.channel.send("⛔ Debes proporcionar el estado del mantenimiento y un mensaje.");
          return;
        }
    
        const estado = args[0].toLowerCase();
        const mensaje = args.slice(1).join(" ");
    
        let imagenURL;
        if (estado === "on") {
          imagenURL = "https://media.discordapp.net/attachments/1109004377198432296/1131572777397272598/Servidor_Mantenimiento.png";
        } else if (estado === "off") {
          imagenURL = "https://media.discordapp.net/attachments/1109004377198432296/1131572776902348883/Mantenimiento_Finalizado.png";
        } else {
          message.channel.send("⛔ Estado de mantenimiento inválido. Debe ser 'on' o 'off'.");
          return;
        }
    
        const canalID = "1120253995403972638";
    
        const embed = new Discord.MessageEmbed()
          .setTitle("<a:atencion:1128133928729989251> **MINEXUS INCIDENCIAS <a:atencion:1128133928729989251>**")
          .setDescription(mensaje)
          .setImage(imagenURL)
          .setTimestamp()
          .setFooter(`${message.author.username}#${message.author.discriminator} | Minexus Network`)
          .setColor(estado === "on" ? "RED" : "GREEN");
    
        const canal = client.channels.cache.get(canalID);
        
        if (canal) {
          canal.send(embed);
          message.channel.send(`✅ Estado de mantenimiento actualizado a ${estado.toUpperCase()}.`);
        } else {
          message.channel.send("⛔ No se encontró el canal para enviar el mensaje.");
        }
      }

});
  client.login(config.token);