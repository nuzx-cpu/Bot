let bot = require('../bot');
export default async function handler(req, res) {
  const { comando } = req.body;
  if (!comando) return res.status(400).json({ erro: "Comando vazio" });

  // Aqui você pode definir como enviar o comando para o Discord
  if (bot && bot.lastChannel) {
    try {
      await bot.lastChannel.send(comando);
      res.json({ resultado: "Comando enviado!" });
    } catch (e) {
      res.json({ erro: "Erro ao enviar comando" });
    }
  } else {
    res.json({ erro: "Bot não conectado ou canal não definido" });
  }
}