import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The standalone gallery serves its assets from public/.
export default defineConfig({ plugins: [react()] });
