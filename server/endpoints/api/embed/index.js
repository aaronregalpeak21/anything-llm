const { EmbedConfig } = require("../../../models/embedConfig");
const { EmbedChats } = require("../../../models/embedChats");
const { validApiKey } = require("../../../utils/middleware/validApiKey");

function apiEmbedEndpoints(app) {
  if (!app) return;

  app.get("/v1/embed", [validApiKey], async (request, response) => {
    try {
      const embeds = await EmbedConfig.whereWithWorkspace();
      const host = request.get("host"); // Dynamically get the current host
      const protocol = request.protocol; // Ensure HTTPS if needed
      const filteredEmbeds = embeds.map((embed) => ({
        id: embed.id,
        uuid: embed.uuid,
        enabled: embed.enabled,
        chat_mode: embed.chat_mode,
        createdAt: embed.createdAt,
        workspace: {
          id: embed.workspace.id,
          name: embed.workspace.name,
        },
        chat_count: embed._count.embed_chats,
        iframe: `${protocol}://${host}/embed/${embed.uuid}`, // Dynamic iframe URL
      }));
      response.status(200).json({ embeds: filteredEmbeds });
    } catch (e) {
      console.error(e.message, e);
      response.sendStatus(500).end();
    }
  });

  app.get("/v1/embed/:embedUuid/chats", [validApiKey], async (request, response) => {
    try {
      const { embedUuid } = request.params;
      const embed = await EmbedConfig.get({ uuid: String(embedUuid) });
      if (!embed) {
        return response.status(404).json({ error: "Embed not found" });
      }

      const chats = await EmbedChats.where({ embed_id: embed.id });
      const formattedChats = chats.map((chat) => ({
        id: chat.id,
        session_id: chat.session_id,
        prompt: chat.prompt,
        response: chat.response,
        createdAt: chat.createdAt,
      }));

      response.status(200).json({ chats: formattedChats });
    } catch (e) {
      console.error(e.message, e);
      response.sendStatus(500).end();
    }
  });

  app.get("/v1/embed/:embedUuid/chats/:sessionUuid", [validApiKey], async (request, response) => {
    try {
      const { embedUuid, sessionUuid } = request.params;
      const embed = await EmbedConfig.get({ uuid: String(embedUuid) });
      if (!embed) {
        return response.status(404).json({ error: "Embed not found" });
      }

      const chats = await EmbedChats.where({
        embed_id: embed.id,
        session_id: String(sessionUuid),
      });

      if (!chats || chats.length === 0) {
        return response.status(404).json({ error: "No chats found for this session" });
      }

      const formattedChats = chats.map((chat) => ({
        id: chat.id,
        prompt: chat.prompt,
        response: chat.response,
        createdAt: chat.createdAt,
      }));

      response.status(200).json({ chats: formattedChats });
    } catch (e) {
      console.error(e.message, e);
      response.sendStatus(500).end();
    }
  });
}

module.exports = { apiEmbedEndpoints };
