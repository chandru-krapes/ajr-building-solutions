# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails when users submit the contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. Log in to your EmailJS dashboard
2. Go to **Email Services** → **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** → **Create New Template**
2. Use this template structure:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Category: {{category}}
Sub-Category: {{subcategory}}

Message:
{{message}}

---
This email was sent from your website contact form.
Reply to: {{reply_to}}
```

3. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

## Step 5: Update Your Website Files

### Update HTML Files (contact.html and index.html)

Replace `YOUR_PUBLIC_KEY` with your actual EmailJS Public Key in both files:

```html
<script type="text/javascript">
    (function() {
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual Public Key
    })();
</script>
```

### Update script.js

Replace the placeholder values in `script.js`:

1. Replace `YOUR_SERVICE_ID` with your EmailJS Service ID
2. Replace `YOUR_TEMPLATE_ID` with your EmailJS Template ID

The code should look like this:

```javascript
await emailjs.send(
    'service_abc123',      // Your Service ID
    'template_xyz789',     // Your Template ID
    templateParams
);
```

## Step 6: Test the Form

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox for the form submission

## Troubleshooting

### Email not received?
- Check your spam/junk folder
- Verify your EmailJS service is connected correctly
- Check the browser console for any error messages
- Ensure all IDs (Service ID, Template ID, Public Key) are correct

### Form shows error?
- Open browser console (F12) to see detailed error messages
- Verify EmailJS SDK is loaded correctly
- Check that all required fields are filled

## EmailJS Limits (Free Tier)

- 200 emails per month
- Up to 2 email services
- Up to 2 email templates

For more emails, consider upgrading to a paid plan.

## Security Note

The Public Key is safe to expose in your HTML files. However, make sure:
- Your EmailJS account has rate limiting enabled
- You're using the Public Key (not Private Key)
- Your email service is properly configured

## Alternative: Using Formspree

If you prefer not to use EmailJS, you can use Formspree:

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form
3. Get your form endpoint URL
4. Update the form action in contact.html:

```html
<form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

This is simpler but has fewer customization options.

