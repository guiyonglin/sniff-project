interface Mprops {
  t: (text: string, options?: { data?: Record<string, any> = {} }) => string;
}

declare global {
  export interface Window {
    _$m: Mprops;
  }
}

export {};
