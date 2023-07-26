import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type {UserConfig} from 'vite'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

const config: UserConfig = {
  plugins: [react()],
};

export default defineConfig(config);
