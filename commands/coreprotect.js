module.exports = {
    "name": "coreprotect",
    "description": "Plugin zabezpieczający teren",
    "aliases": [],
    run: (bot, args, message) => {
        const embed = bot.embed
            .setTitle("CoreProtect")
            .setDescription('Najlepszym zamiennikiem LogBlock jest plugin o nazwie CoreProtect\nAby go pobrać kliknij w [link](https://www.spigotmc.org/resources/coreprotect.8631/)\nJeśli nadal wolisz logblock znajdziesz go pod komendą **!logblock**')

        return message.channel.send(embed)
    }
}