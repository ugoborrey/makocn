import { useFileInput } from "@/hooks/use-file-input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Upload, X, File, Image } from "lucide-react"

// Basic File Input Component
export interface BasicFileInputProps {
  accept?: string
  maxSize?: number
  onFileChange?: (file: File | null, fileName: string, fileSize: number, error?: string) => void
  className?: string
  disabled?: boolean
  placeholder?: string
}

export function BasicFileInput({ 
  accept, 
  maxSize, 
  onFileChange, 
  className,
  disabled,
  placeholder = "Select File"
}: BasicFileInputProps) {
  const { 
    fileName, 
    error, 
    fileInputRef, 
    handleFileSelect,
    clearFile,
    fileSize 
  } = useFileInput({
    accept,
    maxSize
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e);
    const file = e.target.files?.[0] || null;
    onFileChange?.(file, fileName, fileSize, error);
  };

  const handleClear = () => {
    clearFile();
    onFileChange?.(null, "", 0);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex gap-2 items-center">
        <Button 
          onClick={() => fileInputRef.current?.click()}
          variant="outline"
          disabled={disabled}
          className="relative"
        >
          <Upload className="h-4 w-4 mr-2" />
          {placeholder}
        </Button>
        {fileName && (
          <Button 
            onClick={handleClear}
            variant="ghost"
            size="sm"
            className="h-8"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>
      
      <input
        type="file"
        className="absolute invisible pointer-events-none"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleChange}
        accept={accept}
        disabled={disabled}
      />
      
      {fileName && (
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Selected: {fileName}
          </p>
          <p className="text-sm text-muted-foreground">
            Size: {(fileSize / (1024 * 1024)).toFixed(2)}MB
          </p>
        </div>
      )}
      
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
}

// Image Uploader Component
export interface ImageUploaderProps {
  maxSize?: number
  onFileChange?: (file: File | null, fileName: string, fileSize: number, error?: string) => void
  className?: string
  disabled?: boolean
}

export function ImageUploader({ 
  maxSize = 5, 
  onFileChange, 
  className,
  disabled 
}: ImageUploaderProps) {
  const { 
    fileName, 
    error, 
    fileInputRef, 
    handleFileSelect,
    fileSize,
    clearFile 
  } = useFileInput({
    accept: "image/*",
    maxSize
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e);
    const file = e.target.files?.[0] || null;
    onFileChange?.(file, fileName, fileSize, error);
  };

  const handleClear = () => {
    clearFile();
    onFileChange?.(null, "", 0);
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex gap-3 items-center">
        <Button 
          onClick={() => fileInputRef.current?.click()}
          variant="outline"
          disabled={disabled}
        >
          <Image className="h-4 w-4 mr-2" />
          Select Image
        </Button>
        {fileName && (
          <Button 
            onClick={handleClear}
            variant="ghost"
            size="sm"
            className="h-8"
          >
            <X className="h-4 w-4 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        className="absolute invisible pointer-events-none"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleChange}
        disabled={disabled}
      />
      
      {fileName && (
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Selected: {fileName}
          </p>
          <p className="text-sm text-muted-foreground">
            Size: {(fileSize / (1024 * 1024)).toFixed(2)}MB
          </p>
        </div>
      )}
      
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
}

// Document Uploader with Drag & Drop Area
export interface DocumentUploaderProps {
  accept?: string
  maxSize?: number
  onFileChange?: (file: File | null, fileName: string, fileSize: number, error?: string) => void
  className?: string
  disabled?: boolean
  placeholder?: string
}

export function DocumentUploader({ 
  accept = ".pdf,.doc,.docx",
  maxSize = 10,
  onFileChange,
  className,
  disabled,
  placeholder = "Click to upload or drag and drop"
}: DocumentUploaderProps) {
  const { 
    fileName, 
    error, 
    fileInputRef, 
    handleFileSelect,
    clearFile,
    fileSize 
  } = useFileInput({
    accept,
    maxSize
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e);
    const file = e.target.files?.[0] || null;
    onFileChange?.(file, fileName, fileSize, error);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    clearFile();
    onFileChange?.(null, "", 0);
  };

  const getAcceptDescription = () => {
    if (accept.includes("pdf") && accept.includes("doc")) {
      return `PDF, DOC up to ${maxSize}MB`;
    }
    if (accept.includes("pdf")) {
      return `PDF up to ${maxSize}MB`;
    }
    return `Documents up to ${maxSize}MB`;
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div 
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center transition-colors",
          "hover:border-primary/50 cursor-pointer",
          error && "border-destructive",
          disabled && "opacity-50 cursor-not-allowed",
          !disabled && "hover:bg-muted/30"
        )}
        onClick={() => !disabled && fileInputRef.current?.click()}
      >
        {fileName ? (
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2">
              <File className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm font-medium">{fileName}</p>
            </div>
            <p className="text-xs text-muted-foreground">
              {(fileSize / (1024 * 1024)).toFixed(1)} MB
            </p>
            <Button 
              onClick={handleClear}
              variant="ghost"
              size="sm"
              disabled={disabled}
            >
              <X className="h-4 w-4 mr-1" />
              Remove
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
            <div>
              <p className="text-sm text-muted-foreground">
                {placeholder}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {getAcceptDescription()}
              </p>
            </div>
          </div>
        )}
      </div>

      <input
        type="file"
        accept={accept}
        className="absolute invisible pointer-events-none"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleChange}
        disabled={disabled}
      />
      
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
}

// Export the hook for direct use
export { useFileInput } from "@/hooks/use-file-input"

// Legacy export for backward compatibility (deprecated)
export const FileInput = BasicFileInput 