import { defineStore } from 'pinia';

export const useExampleStore = defineStore('useExampleStore', () => {
  const example = 1;

  return { example };
});
