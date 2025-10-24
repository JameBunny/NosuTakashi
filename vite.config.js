import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ถ้า repo เป็น <username>.github.io/<repo> ให้เปิดบรรทัดนี้
  // base: '/<repo>/',
  build: { outDir: 'docs' } // ← ให้ build ลงโฟลเดอร์ docs
})
