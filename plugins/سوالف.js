import { createHash } from 'crypto';
let handler = async (m, { conn }) => {
const name = conn.getName(m.sender);
let a = './image.jpg';
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let more = String.fromCharCode(8206);
let done = '📯';
  m.react(done);
let teks = `
${pickRandom([`
┏────━━━━⊚📯⊚━━━━────┓
*⧉┆↵ اهـــلا بــك/ي ${name}*
*⧉┆📱: @${who.replace(/@.+/, '')}*
*⧉┆↜أنـا اسـمـــي ❮ ˹غـوكـو˼ ❯*
*⧉┆↜انــا خــادم الـسـیــد عــمــرو*
*✦━☆━ـ❃ ⊰ ⛩ ⊱ ❃ـ━☆━═✦*
*▪︎▪︎❯【✮ ســــوالــــف ✮】❮▪︎▪︎*

📕 | الامــر *⏎* همم  

📕 | الامــر *⏎* غوكو اسمع  

📕 | الامــر *⏎* غوكو انت انسان؟

📕 | الامــر *⏎* غوكو قول مياو

📕 | الامــر *⏎* غوكو منجدك؟

📕 | الامــر *⏎* افا

📕 | الامــر *⏎* عيوني

📕 | الامــر *⏎* غوكو انقلع

📕 | الامــر *⏎* غوكو اشتقت لك

📕 | الامــر *⏎* غوكو ملل

📕 | الامــر *⏎* غوكو منور

📕 | الامــر *⏎* غوكو اخرس

📕 | الامــر *⏎* غوكو صباح الخير

📕 | الامــر *⏎* غوكو مساء الخير

📕 | الامــر *⏎* ههههههه

📕 | الامــر *⏎* غوكو شتسوي

📕 | الامــر *⏎* غوكو كل تبن

📕 | الامــر *⏎* غوكو كيفك

📕 | الامــر *⏎* غوكو تحبني

📕 | الامــر *⏎* غوكو مع السلامة

📕 | الامــر *⏎* بــوو

📕 | الامر *⏎* بــخ

📕 | الامــر *⏎* غوكو صـلـي عـلـى الـنـبـي

📕 | الامــر *⏎*  غوكو ادعـيـة

📕 | الامــر *⏎* غوكو انــمــيــات طــويــلــة

📕 | الامــر *⏎* غوكو انــمــيــات قــصــيــرة

📕 | الامــر *⏎* غوكو تــقــبــل رشــاوي؟

📕 | الامــر *⏎* غوكو تــكــرهــنــي؟

📕 | الامــر *⏎* غوكو تــســت

📕 | الامــر *⏎* انــا رحــت

📕 | الامــر *⏎* غوكو احــبــك

📕 | الامــر *⏎* غوكو نــرتــبــط؟ 

📕 | الامــر *⏎* غوكو كــم عــمــرك؟

📕 | الامــر *⏎* غوكو اكــرهــك

📕 | الامــر *⏎* غوكو تــرانــي طــفــشــان

📕 | الامــر *⏎* غوكو قــول اونــي تــشــان

📕 | الامــر *⏎* غوكو وش اطــلــق انــمــي؟

📕 | الامــر *⏎* غوكو تــصــبــح عــلــى خــيــر

📕 | الامــر *⏎* غوكو اعــطــيــنــي بــوســة

✦═━━☆━ـ❃ ⊰ ⛩ ⊱ ❃ـ━☆━━═✦
*ل إلــغــاء تــنــشــيــط الــبــوت فــي هــذه الــمــجــمــوعــة 🛑*\n*اكــتــب .بــانــد*
          *.¸¸ ❝˼𝗚𝗼𝗸𝘂᯽𝐵𝑂𝑇˼❝ ¸¸.*
*┗────━━━━⊚📯⊚━━━━────┛*`])}
`.trim()
conn.sendFile(m.chat, a, null, teks, m, null, { mentions: [who] })}

handler.help = ['']
handler.command = ['سواليف','سوالف'];

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
