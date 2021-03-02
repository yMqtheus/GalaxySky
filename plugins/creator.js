let handler = function (m) {
  this.sendContact(m.chat, '553493354233', 'yMqtheus', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
