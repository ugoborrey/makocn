import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button, buttonVariants } from '@/components/ui/button'
import { CreditCard, AlertTriangle, CheckCircle } from 'lucide-react'

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/AlertDialog',
  component: AlertDialog,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A modal dialog that interrupts the user with important content and expects a response. Built on top of Radix UI Alert Dialog.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const Destructive: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove all of your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className={buttonVariants({ variant: "destructive" })}>
            Delete Account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithoutDescription: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Confirm Action</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm your action</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const LongContent: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Long Content</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Terms and Conditions</AlertDialogTitle>
          <AlertDialogDescription>
            By continuing, you agree to our Terms of Service and Privacy Policy.
            This includes sharing your data with our partners for analytics and
            marketing purposes. We may also use your information to improve our
            services and provide personalized recommendations. You can opt out
            of these features at any time in your account settings. Please read
            our full terms and privacy policy for more details about how we
            handle your data and what rights you have regarding your personal
            information.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction>Accept Terms</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const CustomButtonText: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Save Changes</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Save your changes?</AlertDialogTitle>
          <AlertDialogDescription>
            You have unsaved changes. Do you want to save them before leaving?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Don&apos;t Save</AlertDialogCancel>
          <AlertDialogAction>Save Changes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const LogoutConfirmation: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">Logout</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Logout</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to logout? You will need to sign in again to
            access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Stay Logged In</AlertDialogCancel>
          <AlertDialogAction>Logout</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const FileDeleteConfirmation: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm">
          Delete File
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete file &quot;document.pdf&quot;?</AlertDialogTitle>
          <AlertDialogDescription>
            This file will be moved to trash. You can restore it from trash
            within 30 days.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep File</AlertDialogCancel>
          <AlertDialogAction className={buttonVariants({ variant: "destructive" })}>
            Move to Trash
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Update Card</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader icon={<CreditCard className="h-6 w-6 text-muted-foreground" />}>
          <AlertDialogTitle>Update your card</AlertDialogTitle>
          <AlertDialogDescription>
            Your new card will replace your current card.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Update card</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithWarningIcon: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Warning</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader icon={<AlertTriangle className="h-6 w-6 text-amber-500" />}>
          <AlertDialogTitle>Warning</AlertDialogTitle>
          <AlertDialogDescription>
            This action may have unintended consequences. Please proceed with caution.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Proceed Anyway</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithSuccessIcon: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Success</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader icon={<CheckCircle className="h-6 w-6 text-green-500" />}>
          <AlertDialogTitle>Success!</AlertDialogTitle>
          <AlertDialogDescription>
            Your changes have been saved successfully.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const ScrollableContent: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Long Content Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[80vh]">
        <AlertDialogHeader>
          <AlertDialogTitle>Privacy Policy & Terms of Service</AlertDialogTitle>
          <AlertDialogDescription>
            Please review our complete privacy policy and terms of service below.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="overflow-y-auto max-h-[50vh] pr-2">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold text-base mb-2">1. Information We Collect</h3>
              <p className="mb-3">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, subscribe to our newsletter, participate in surveys, or contact us 
                for support. This may include your name, email address, phone number, payment information, 
                and any other information you choose to provide.
              </p>
              <p className="mb-3">
                We automatically collect certain information about your device and how you interact 
                with our services. This includes your IP address, browser type, operating system, 
                referring URLs, device identifiers, and information about your usage of our services.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">2. How We Use Your Information</h3>
              <p className="mb-3">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, communicate with you, and personalize your experience. We may 
                also use your information to send you marketing communications, conduct research and 
                analytics, and ensure the security of our services.
              </p>
              <p className="mb-3">
                We may use your information to comply with legal obligations, resolve disputes, 
                enforce our agreements, and protect the rights, property, and safety of our users 
                and others.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">3. Information Sharing</h3>
              <p className="mb-3">
                We do not sell, trade, or otherwise transfer your personal information to third 
                parties without your consent, except as described in this policy. We may share 
                your information with service providers who assist us in operating our services, 
                conducting business, or serving you.
              </p>
              <p className="mb-3">
                We may also share your information when we believe it is necessary to comply with 
                the law, enforce our policies, or protect our rights, property, and safety or that 
                of others.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">4. Data Security</h3>
              <p className="mb-3">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the internet or electronic 
                storage is 100% secure.
              </p>
              <p className="mb-3">
                We regularly review our security practices and update them as necessary to maintain 
                the security of your information.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">5. Your Rights</h3>
              <p className="mb-3">
                You have certain rights regarding your personal information, including the right 
                to access, update, or delete your information. You may also have the right to 
                object to or restrict certain processing of your information.
              </p>
              <p className="mb-3">
                To exercise these rights, please contact us using the information provided at the 
                end of this policy. We will respond to your request within a reasonable timeframe.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">6. Cookies and Tracking</h3>
              <p className="mb-3">
                We use cookies and similar tracking technologies to collect information about your 
                browsing activities and to provide you with a personalized experience. You can 
                control cookies through your browser settings, but disabling cookies may affect 
                the functionality of our services.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">7. Changes to This Policy</h3>
              <p className="mb-3">
                We may update this privacy policy from time to time. We will notify you of any 
                material changes by posting the updated policy on our website and updating the 
                effective date. Your continued use of our services after such changes constitutes 
                your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-base mb-2">8. Contact Information</h3>
              <p className="mb-3">
                If you have any questions about this privacy policy or our data practices, please 
                contact us at privacy@example.com or write to us at our mailing address listed 
                on our website.
              </p>
            </section>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction>Accept All Terms</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const WithCloseIcon: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Dialog with Close Icon</Button>
      </AlertDialogTrigger>
      <AlertDialogContent showCloseIcon>
        <AlertDialogHeader>
          <AlertDialogTitle>Notice</AlertDialogTitle>
          <AlertDialogDescription>
            This dialog has a close icon (X) in the top-right corner. You can click it to close the dialog.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Got it</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const ScrollableWithCloseIcon: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Scrollable with Close Icon</Button>
      </AlertDialogTrigger>
      <AlertDialogContent showCloseIcon className="max-h-[80vh]">
        <AlertDialogHeader>
          <AlertDialogTitle>User Agreement</AlertDialogTitle>
          <AlertDialogDescription>
            Please review the following terms. You can use the close icon to exit anytime.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="overflow-y-auto max-h-[40vh] pr-2">
          <div className="space-y-3 text-sm">
            <p>
              <strong>1. Acceptance of Terms:</strong> By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p>
              <strong>2. User Responsibilities:</strong> You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
            </p>
            <p>
              <strong>3. Privacy Policy:</strong> We respect your privacy and are committed to protecting your personal data. Our privacy policy explains how we collect, use, and protect your information.
            </p>
            <p>
              <strong>4. Prohibited Uses:</strong> You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts.
            </p>
            <p>
              <strong>5. Intellectual Property:</strong> The service and its original content, features, and functionality are and will remain the exclusive property of the company.
            </p>
            <p>
              <strong>6. Termination:</strong> We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever.
            </p>
            <p>
              <strong>7. Changes to Terms:</strong> We reserve the right, at our sole discretion, to modify or replace these terms at any time.
            </p>
            <p>
              <strong>8. Contact Information:</strong> If you have any questions about these terms, please contact us at legal@example.com.
            </p>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Decline</AlertDialogCancel>
          <AlertDialogAction>Accept Terms</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const ResponsiveBottomSheet: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Responsive Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent showCloseIcon>
        <AlertDialogHeader>
          <AlertDialogTitle>Responsive Alert Dialog</AlertDialogTitle>
          <AlertDialogDescription>
            This dialog automatically adapts its layout based on screen size. On mobile devices, 
            it appears as a bottom sheet. On desktop, it shows as a centered modal.
            Try resizing your browser window to see the effect!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the responsive behavior: bottom sheet on mobile (<640px) and centered modal on desktop (≥640px).'
      }
    }
  }
}

export const MultipleDialogs: Story = {
  render: () => (
    <div className="flex gap-4">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Dialog 1</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>First Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This is the first alert dialog.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Dialog 2</Button>
        </AlertDialogTrigger>
        <AlertDialogContent showCloseIcon>
          <AlertDialogHeader>
            <AlertDialogTitle>Second Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This dialog has a close icon for easier dismissal.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  ),
} 