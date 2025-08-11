import fs from "node:fs";
import path from "node:path";
import express from "express";

const isProd = process.env.NODE_ENV === "production";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const resolve = (p) => path.resolve(__dirname, p);

async function createServer() {
	const app = express();

	let vite;
	if (!isProd) {
		const viteModule = await import("vite");
		vite = await viteModule.createServer({
			server: { middlewareMode: true },
			appType: "custom",
		});
		app.use(vite.middlewares);
	} else {
		app.use("/assets", express.static(resolve("dist/client/assets")));
	}

	app.use("*", async (req, res) => {
		try {
			const url = req.originalUrl;

			let template, render;
			if (!isProd) {
				template = fs.readFileSync(resolve("index.html"), "utf-8");
				template = await vite.transformIndexHtml(url, template);
				render = (await vite.ssrLoadModule("/src/entry-server.js")).render;
			} else {
				template = fs.readFileSync(resolve("dist/client/index.html"), "utf-8");
				render = (await import("./dist/server/entry-server.js")).render;
			}

			const { appHtml } = await render(url);
			const html = template.replace(`<!--app-html-->`, appHtml);
			res.status(200).set({ "Content-Type": "text/html" }).end(html);
		} catch (e) {
			if (!isProd && vite) vite.ssrFixStacktrace(e);
			console.error(e);
			res.status(500).end(e.stack);
		}
	});

	const port = process.env.PORT || 3000;
	app.listen(port, () => {
		console.log(`Server listening at http://localhost:${port}`);
	});
}

createServer();
