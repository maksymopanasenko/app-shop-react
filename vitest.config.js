import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['**/*.test.{js,jsx,ts,tsx}'],
  },
});