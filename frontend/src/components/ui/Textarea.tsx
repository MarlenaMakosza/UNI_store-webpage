import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, helperText, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          ref={ref}
          className={cn(
            'flex min-h-[120px] w-full rounded-md border bg-gray-900 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-vertical',
            error
              ? 'border-red-500 focus-visible:ring-red-500'
              : 'border-gray-700 focus-visible:ring-neon-violet',
            className
          )}
          {...props}
        />
        {helperText && (
          <p
            className={cn(
              'mt-1 text-xs',
              error ? 'text-red-500' : 'text-gray-400'
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
