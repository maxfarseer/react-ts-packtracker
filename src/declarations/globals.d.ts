declare module '*.jpg' {
  const content: unknown;
  export default content;
}

declare module '*.jpeg' {
  const content: unknown;
  export default content;
}

declare module '*.png' {
  const content: unknown;
  export default content;
}

declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;
  const content: string;

  export { ReactComponent };
  export default content;
}

declare module '*.json' {
  const content: unknown;
  export default content;
}

declare module '*.scss' {
  const content: unknown;
  export default content;
}
