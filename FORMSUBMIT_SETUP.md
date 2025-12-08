# FormSubmit Setup Guide

This guide explains how FormSubmit works with your contact forms.

## What is FormSubmit?

FormSubmit is a **completely free** form backend service that:
- ✅ **Unlimited submissions** - No monthly limits
- ✅ **No signup required** - Just use your email
- ✅ **Simple setup** - Takes 1 minute
- ✅ **No API keys** - No configuration needed
- ✅ **Works immediately** - No verification required

## How It Works

Your forms are already configured! Here's what's set up:

### Form Configuration

Both forms (`contact.html` and `index.html`) have:
- **Action URL:** `https://formsubmit.co/ajrbuildingsolution@gmail.com`
- **Subject:** "New Contact Form Submission from AJR Building Solutions"
- **Template:** Table format (organized email layout)
- **Captcha:** Disabled (for better UX)

### Email Format

You'll receive emails with all form data in a clean table format:

```
Subject: New Contact Form Submission from [User's Name]

Name: [User's Name]
Email: [User's Email]
Phone: [User's Phone]
Category: [Selected Category]
Sub-Category: [Selected Sub-Category]
Message: [User's Message]
```

## Testing

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox (`ajrbuildingsolution@gmail.com`)
4. You should receive the form submission within seconds

## Customization Options

### Change Email Address

To send emails to a different address, update the form action in both files:

**In `contact.html` and `index.html`:**
```html
<form action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">
```

Replace `YOUR_EMAIL@example.com` with your desired email.

### Change Email Subject

Update the hidden input:
```html
<input type="hidden" name="_subject" value="Your Custom Subject">
```

### Add Thank You Page Redirect

After form submission, redirect users to a thank you page:
```html
<input type="hidden" name="_next" value="https://yourwebsite.com/thank-you.html">
```

### Enable Captcha (Spam Protection)

Change the captcha setting:
```html
<input type="hidden" name="_captcha" value="true">
```

### Change Email Template

Available templates:
- `table` - Organized table format (current)
- `box` - Box format
- `plain` - Plain text

Change it by updating:
```html
<input type="hidden" name="_template" value="table">
```

### Add Auto-Reply to User

Send an automatic reply to the user:
```html
<input type="hidden" name="_autoresponse" value="Thank you for contacting us! We'll get back to you soon.">
```

## Troubleshooting

### Email not received?
- Check your spam/junk folder
- Verify the email address in the form action is correct
- Wait a few minutes (sometimes there's a slight delay)
- Check browser console (F12) for any errors

### Form shows error?
- Open browser console (F12) to see detailed errors
- Ensure all required fields are filled
- Check internet connection
- Verify form action URL is correct

### Spam emails?
- Enable captcha by setting `_captcha` to `true`
- Add honeypot field (see advanced options below)

## Advanced Options

### Add Honeypot (Spam Protection)

Add this field to your forms (hidden from users):
```html
<input type="text" name="_honey" style="display:none">
```

Bots will fill it, and FormSubmit will reject those submissions.

### Add Custom Headers

You can add custom headers:
```html
<input type="hidden" name="_cc" value="another@email.com">
<input type="hidden" name="_bcc" value="copy@email.com">
```

### Format Phone Numbers

The JavaScript automatically formats Indian phone numbers to include `+91` prefix for better readability in emails.

## How FormSubmit Works

1. User fills out form
2. Form data is validated by JavaScript
3. Data is sent to FormSubmit API
4. FormSubmit formats the data
5. Email is sent to your inbox
6. User sees success message
7. Form resets automatically

## Security

- ✅ FormSubmit uses HTTPS (secure)
- ✅ No sensitive data stored
- ✅ Emails sent directly to your inbox
- ✅ Optional captcha protection available

## Limits

- **Free Tier:** Unlimited submissions
- **No rate limits** (within reasonable use)
- **No expiration**

## Alternative: Direct Form Submission

If you want even simpler setup (without JavaScript), you can remove the JavaScript validation and let the form submit directly:

```html
<form action="https://formsubmit.co/ajrbuildingsolution@gmail.com" method="POST">
    <!-- Your form fields -->
    <button type="submit">Send Message</button>
</form>
```

However, the current JavaScript implementation provides:
- Better user experience
- Form validation
- Loading states
- Error handling
- Success messages

## Support

If you need help:
- Visit [FormSubmit Documentation](https://formsubmit.co/documentation)
- Check [FormSubmit FAQ](https://formsubmit.co/faq)

---

**That's it!** Your forms are ready to use. Just test them and you're all set! 🎉

