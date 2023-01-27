import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/theuniverse.html")
router.add("/explorer", "/pages/explorer.html")
router.add(404, "/pages/404.html")

window.onpopstate = () => router.handle()

window.route = () => router.route()

router.handle()