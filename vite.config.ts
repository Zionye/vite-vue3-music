import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// 以下三项引入是为配置Element-plus自动按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		// 指定dev sever的端口号
		// port: 3000,
		// 自动打开浏览器运行以下页面
		open: '/'
	},
	resolve: {
		// 设置文件./src路径为 ~
		// alias: {
		//   '~': path.resolve(__dirname, 'src'),
		// }
		alias: [
			{
				find: '~',
				replacement: path.resolve(__dirname, './src')
			}
		]
	},
	plugins: [
		vue(),
		// 以下两项是为配置Element-plus自动按需导入
		AutoImport({
			resolvers: [ElementPlusResolver()]
		}),
		Components({
			resolvers: [ElementPlusResolver()]
		})
	]
})
