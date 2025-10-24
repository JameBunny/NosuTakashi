import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ถ้าดีพลอยเป็น <username>.github.io/<repo> ให้เปิดบรรทัดนี้และใส่ชื่อ repo
  // base: '/<repo>/',
})
