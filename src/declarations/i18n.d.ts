declare module '@shore/i18n/dist/no-bundled-i18next' {
  export function loadNamespace(n: string): void;
  export function useNamespace(
    n: string
  ): {
    t(s: string): string;
  };
}
