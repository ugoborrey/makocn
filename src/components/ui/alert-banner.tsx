import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { 
  X, 
  CheckCircle, 
  AlertTriangle, 
  AlertCircle, 
  Info,
} from 'lucide-react';

// Type definitions
type AlertVariant = 'default' | 'success' | 'warning' | 'error' | 'info';

interface AlertBannerProps {
  variant?: AlertVariant;
  icon?: React.ReactNode;
  title?: string;
  description: string;
  closable?: boolean;
  onClose?: () => void;
  action?: {
    label: string;
    onClick: () => void;
    variant?: 'default' | 'outline' | 'secondary';
  };
  className?: string;
}

// Variant configurations
const variantConfig = {
  default: {
    className: 'border-gray-200 bg-gray-50 text-gray-900',
    icon: <Info className="h-5 w-5 text-gray-600" />,
  },
  success: {
    className: 'border-green-200 bg-green-50 text-green-900',
    icon: <CheckCircle className="h-5 w-5 text-green-600" />,
  },
  warning: {
    className: 'border-yellow-200 bg-yellow-50 text-yellow-900',
    icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />,
  },
  error: {
    className: 'border-red-200 bg-red-50 text-red-900',
    icon: <AlertCircle className="h-5 w-5 text-red-600" />,
  },
  info: {
    className: 'border-blue-200 bg-blue-50 text-blue-900',
    icon: <Info className="h-5 w-5 text-blue-600" />,
  },
};

// Main Alert Banner Component
const AlertBanner: React.FC<AlertBannerProps> = ({
  variant = 'default',
  icon,
  title,
  description,
  closable = false,
  onClose,
  action,
  className = '',
}) => {
  const config = variantConfig[variant];
  const displayIcon = icon || config.icon;

  return (
    <Alert className={`relative ${config.className} ${className}`}>
      <div className="flex items-start gap-3">
        {/* Left Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {displayIcon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <div className="font-semibold text-sm mb-1">
              {title}
            </div>
          )}
          <AlertDescription className="text-sm leading-relaxed">
            {description}
          </AlertDescription>
        </div>

        {/* Action Button */}
        {action && (
          <div className="flex-shrink-0 ml-3">
            <Button
              size="sm"
              variant={action.variant || 'outline'}
              onClick={action.onClick}
              className="text-xs"
            >
              {action.label}
            </Button>
          </div>
        )}

        {/* Close Button */}
        {closable && (
          <div className="flex-shrink-0 ml-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-6 w-6 p-0 hover:bg-black/5"
              aria-label="Close alert"
              icon={<X className="h-4 w-4" />}
            />
          </div>
        )}
      </div>
    </Alert>
  );
};

export { AlertBanner, type AlertBannerProps }; 