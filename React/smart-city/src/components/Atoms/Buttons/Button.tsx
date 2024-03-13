


interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */

  color?: string;
  
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'xs' | 'sm' | 'base' | 'lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'base',
  backgroundColor,
  label,
  color,
  ...props
}: ButtonProps) => {
  
  return (
    <button
      type="button"
      className={['uppercase text-' + size].join(' ')}
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </button>
  );
};
