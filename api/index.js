const express = require('express')
const consola = require('consola')
const {Nuxt, Builder} = require('nuxt');
// const cookieSession = require('cookie-session')

const app = express()

const config = require('../nuxt.config')
// config.dev = !(process.env.NODE_ENV === 'production')


// const PORT = process.env.PORT || '6969'
// async function start() {
// 	// const nuxt = new Nuxt(config)
// 	// console.log(config)
// 	// const {host, port} = config.options.server
// 	// if(config.dev) {
// 	// 	const builder = new Builder(nuxt)
// 	// 	await builder.build()
// 	// } else {
// 	// 	await nuxt.ready()
// 	// }
// 	// app.use(nuxt.render)
// }

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
	console.log(`API REQUEST @ ${req.url}\n\tRequest:\n`, req.body)
	next()
})
// app.listen(6969, 0)
// app.set("port", PORT);
const mailer = require('./routes/mail.js')
app.use(mailer)

consola.ready({
	message: `Server listening on http://192.168.1.110:6969`,
	badge: true
})

// const mail = require(`./routes/mail`)
// app.use(mail);
console.log(`\n\tRunning\n\n`)
// start();

module.exports = app