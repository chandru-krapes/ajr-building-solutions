# Web3Forms Setup Guide

This guide will help you set up Web3Forms to send emails when users submit the contact form.

## Why Web3Forms?

- ✅ **Completely FREE** - Unlimited emails
- ✅ **No account required** - Just get an access key
- ✅ **Simple setup** - Takes 2 minutes
- ✅ **No credit card** - No payment required
- ✅ **Reliable** - Used by thousands of websites

## Step 1: Get Your Access Key

1. Go to [Web3Forms.com](https://web3forms.com/)
2. Enter your email address: `ajrbuildingsolution@gmail.com`
3. Click **"Get Your Access Key"**
4. Check your email inbox for the access key
5. **Copy the access key** (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

## Step 2: Update Your Website Files

### Update contact.html and index.html

Find this line in both files (around line 151-152 for contact.html and line 328-329 for index.html):

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```

Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key from Step 1.

**Example:**
```html
<input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7890-abcd-ef1234567890">
```

## Step 3: Test the Form

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox (`ajrbuildingsolution@gmail.com`) for the form submission

## How It Works

When a user submits the form:
1. Form data is validated
2. Data is sent to Web3Forms API
3. Web3Forms sends an email to your inbox
4. User sees a success message
5. Form resets automatically

## Email Format

You'll receive emails with this format:

**Subject:** New Contact Form Submission from [Name]

**Body:**
```
Name: [User's Name]
Email: [User's Email]
Phone: [User's Phone]
Category: [Selected Category]
Sub-Category: [Selected Sub-Category]

Message:
[User's Message]

---
This email was sent from your website contact form.
Reply to: [User's Email]
```

## Troubleshooting

### Email not received?
- Check your spam/junk folder
- Verify the access key is correct
- Check browser console (F12) for error messages
- Make sure all required fields are filled

### Form shows error?
- Open browser console (F12) to see detailed errors
- Verify the access key is correct
- Check that all form fields have proper `name` attributes
- Ensure internet connection is active

### Access key not working?
- Make sure you copied the entire key (it's long)
- Check for any extra spaces before/after the key
- Try getting a new access key from Web3Forms

## Customization Options

### Change Email Subject

In both HTML files, find:
```html
<input type="hidden" name="subject" value="New Contact Form Submission from AJR Building Solutions">
```

Change the value to whatever you want.

### Add Honeypot (Spam Protection)

Add this hidden field to your forms:
```html
<input type="checkbox" name="botcheck" style="display: none;">
```

Web3Forms will automatically filter out spam submissions.

### Redirect After Submission

Add this hidden field:
```html
<input type="hidden" name="redirect" value="https://yourwebsite.com/thank-you">
```

## Advanced: Custom Email Template

You can customize the email format by adding a template parameter:

```html
<input type="hidden" name="template" value="custom">
```

Then create a custom template in Web3Forms dashboard (if you create an account).

## Security Notes

- ✅ The access key is safe to use in HTML (it's public)
- ✅ Web3Forms has built-in spam protection
- ✅ No sensitive data is stored on their servers
- ✅ Emails are sent directly to your inbox

## Limits

- **Free Tier:** Unlimited emails
- **No rate limits** (within reasonable use)
- **No expiration** on access keys

## Support

If you need help:
- Check [Web3Forms Documentation](https://docs.web3forms.com/)
- Visit [Web3Forms Support](https://web3forms.com/support)

## Alternative: Using Form Action Directly

If you prefer even simpler setup, you can use the form action directly without JavaScript:

```html
<form action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
    <!-- Your form fields -->
</form>
```

However, the current JavaScript implementation provides better user experience with validation and loading states.

---

**That's it!** Your contact form is now ready to send emails. Just update the access key and you're good to go! 🎉

