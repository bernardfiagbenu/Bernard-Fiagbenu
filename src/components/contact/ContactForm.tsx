'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Defines the schema for the contact form using Zod for validation.
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "A valid email address is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

// Infers the TypeScript type from the Zod schema.
type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  /**
   * Handles form submission by constructing a mailto link,
   * which opens the user's default email client with pre-filled fields.
   * @param data The validated form data.
   */
  const handleMailtoSubmit = (data: ContactFormData) => {
    const recipientEmail = 'bernardfiagbenu1@gmail.com';
    const subject = encodeURIComponent(`Message from ${data.name} via Portfolio`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    
    // Opens the mail client.
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    
    // Resets the form after a short delay to allow the mail client to open.
    setTimeout(() => {
      reset();
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit(handleMailtoSubmit)} className="space-y-6 max-w-xl mx-auto">
      <div>
        <Label htmlFor="name" className="font-headline">Name</Label>
        <Input
          id="name"
          type="text"
          {...register('name')}
          className="mt-1"
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="font-headline">Email</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          className="mt-1"
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="font-headline">Message</Label>
        <Textarea
          id="message"
          {...register('message')}
          rows={5}
          className="mt-1"
          aria-invalid={errors.message ? "true" : "false"}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
        {isSubmitting ? 'Preparing Message...' : 'Send Message via Email Client'}
      </Button>
    </form>
  );
}
