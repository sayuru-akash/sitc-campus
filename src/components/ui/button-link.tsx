import type { ComponentProps } from 'react';
type ButtonLinkProps = ComponentProps<'a'> & { small?: boolean };
export function ButtonLink({small = false, className = '', children, ...props}: ButtonLinkProps) {
  return <a className={`button${small ? ' small' : ''}${className ? ` ${className}` : ''}`} {...props}>{children}</a>;
}
