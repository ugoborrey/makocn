import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { 
  BasicFileInput, 
  ImageUploader, 
  DocumentUploader, 
  useFileInput 
} from '@/components/ui/file-input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const meta: Meta<typeof BasicFileInput> = {
  title: 'UI/FileInput',
  component: BasicFileInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxSize: {
      control: { type: 'number' },
      description: 'Maximum file size in MB',
    },
    accept: {
      control: { type: 'text' },
      description: 'File types to accept (e.g., .pdf,.doc,.docx)',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Button text placeholder',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select File',
  },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-1.5">
      <Label htmlFor="file-upload">
        Upload Document
      </Label>
      <BasicFileInput
        {...args}
        className="w-full"
      />
    </div>
  ),
};

export const PDFOnly: Story = {
  args: {
    accept: '.pdf',
    maxSize: 5,
    placeholder: 'Select PDF',
  },
};

export const DocumentTypes: Story = {
  args: {
    accept: '.pdf,.doc,.docx',
    maxSize: 10,
    placeholder: 'Select Document',
  },
};

export const WithSizeLimit: Story = {
  args: {
    maxSize: 2,
    placeholder: 'Select File (Max 2MB)',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Upload Disabled',
  },
};

// Image Uploader Stories
export const ImageUpload: Story = {
  render: () => (
    <div className="space-y-1.5">
      <Label>Profile Picture</Label>
      <ImageUploader maxSize={5} />
    </div>
  ),
};

export const SmallImageUpload: Story = {
  render: () => (
    <div className="space-y-1.5">
      <Label>Avatar (Max 1MB)</Label>
      <ImageUploader maxSize={1} />
    </div>
  ),
};

// Document Uploader Stories
export const DocumentUpload: Story = {
  render: () => (
    <div className="space-y-1.5">
      <Label>Upload Documents</Label>
      <DocumentUploader />
    </div>
  ),
};

export const PDFOnlyUpload: Story = {
  render: () => (
    <div className="space-y-1.5">
      <Label>PDF Upload</Label>
      <DocumentUploader 
        accept=".pdf" 
        maxSize={5}
        placeholder="Drag & drop your PDF here"
      />
    </div>
  ),
};

export const CustomDragDrop: Story = {
  render: () => (
    <div className="space-y-1.5">
      <Label>Custom Upload Area</Label>
      <DocumentUploader 
        accept=".jpg,.jpeg,.png,.pdf"
        maxSize={15}
        placeholder="Drop your files here or click to browse"
      />
    </div>
  ),
};

// Real-world form examples
export const FormExample: Story = {
  render: () => {
    const [files, setFiles] = useState<{
      resume: File | null,
      coverLetter: File | null,
      portfolio: File | null,
    }>({
      resume: null,
      coverLetter: null,
      portfolio: null,
    });

    return (
      <form className="grid w-full max-w-md gap-6 p-6 border rounded-lg">
        <h3 className="text-lg font-semibold">Job Application</h3>
        
        <div className="space-y-1.5">
          <Label>
            Resume/CV *
          </Label>
          <BasicFileInput
            accept=".pdf,.doc,.docx"
            maxSize={5}
            placeholder="Upload Resume"
            onFileChange={(file) => setFiles(prev => ({ ...prev, resume: file }))}
          />
        </div>
        
        <div className="space-y-1.5">
          <Label>
            Cover Letter
          </Label>
          <DocumentUploader
            accept=".pdf,.doc,.docx"
            maxSize={3}
            placeholder="Upload cover letter"
            onFileChange={(file) => setFiles(prev => ({ ...prev, coverLetter: file }))}
          />
        </div>
        
        <div className="space-y-1.5">
          <Label>
            Portfolio Images
          </Label>
          <ImageUploader
            maxSize={10}
            onFileChange={(file) => setFiles(prev => ({ ...prev, portfolio: file }))}
          />
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            Files selected: {Object.values(files).filter(Boolean).length}/3
          </p>
        </div>
      </form>
    )
  },
};

// Hook usage example
export const HookExample: Story = {
  render: () => {
    const fileInput = useFileInput({ 
      accept: ".pdf,.doc,.docx", 
      maxSize: 5 
    });

    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-lg">Custom Hook Usage</CardTitle>
          <CardDescription>
            Using useFileInput hook directly for custom implementation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button 
              onClick={() => fileInput.fileInputRef.current?.click()}
              variant="outline"
              size="sm"
            >
              Browse Files
            </Button>
            {fileInput.fileName && (
              <Button 
                onClick={fileInput.clearFile}
                variant="ghost"
                size="sm"
              >
                Clear
              </Button>
            )}
          </div>

          <input
            type="file"
            className="hidden"
            ref={fileInput.fileInputRef}
            onChange={fileInput.handleFileSelect}
            accept=".pdf,.doc,.docx"
          />

          {fileInput.fileName && (
            <div className="p-3 bg-muted rounded border">
              <p className="text-sm font-medium">{fileInput.fileName}</p>
              <p className="text-xs text-muted-foreground">
                {(fileInput.fileSize / (1024 * 1024)).toFixed(1)} MB
              </p>
            </div>
          )}

          {fileInput.error && (
            <p className="text-sm text-destructive">{fileInput.error}</p>
          )}
        </CardContent>
      </Card>
    )
  },
};

// Validation demo
export const ValidationDemo: Story = {
  render: () => {
    const [results, setResults] = useState<{
      timestamp: string;
      fileName: string;
      fileSize: string;
      status: string;
      error: string;
    }[]>([]);

    const handleFileChange = (file: File | null, fileName: string, fileSize: number, error?: string) => {
      const timestamp = new Date().toLocaleTimeString();
      setResults(prev => [...prev, {
        timestamp,
        fileName: fileName || 'No file',
        fileSize: fileSize ? `${(fileSize / (1024 * 1024)).toFixed(1)} MB` : '0 MB',
        status: error ? 'Error' : file ? 'Valid' : 'Cleared',
        error: error || 'None'
      }].slice(-5)); // Keep last 5 results
    };

    return (
      <div className="w-full max-w-lg space-y-6">
        <div className="space-y-1.5">
          <Label>
            Test Upload (PDF only, max 2MB)
          </Label>
          <BasicFileInput
            accept=".pdf"
            maxSize={2}
            placeholder="Test File Validation"
            onFileChange={handleFileChange}
          />
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Validation Log</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-xs">
              {results.length === 0 ? (
                <p className="text-muted-foreground">No uploads yet</p>
              ) : (
                results.map((result, i) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-muted/30 rounded">
                    <div>
                      <div className="font-medium">{result.fileName}</div>
                      <div className="text-muted-foreground">{result.timestamp}</div>
                    </div>
                    <div className="text-right">
                      <div className={`font-medium ${result.status === 'Error' ? 'text-destructive' : result.status === 'Valid' ? 'text-green-600' : 'text-muted-foreground'}`}>
                        {result.status}
                      </div>
                      <div className="text-muted-foreground">{result.fileSize}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid gap-8 max-w-4xl">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Basic File Input</CardTitle>
          </CardHeader>
          <CardContent>
            <BasicFileInput placeholder="Select any file" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Image Uploader</CardTitle>
          </CardHeader>
          <CardContent>
            <ImageUploader maxSize={5} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Document Drop Zone</CardTitle>
        </CardHeader>
        <CardContent>
          <DocumentUploader 
            accept=".pdf,.doc,.docx"
            maxSize={10}
            placeholder="Drag and drop your documents here"
          />
        </CardContent>
      </Card>
    </div>
  ),
}; 