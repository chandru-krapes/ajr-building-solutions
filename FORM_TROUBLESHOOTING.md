# Form Submission Troubleshooting Guide

## Issue: Not Receiving Emails

If you're not receiving emails from FormSubmit, follow these steps:

## Step 1: Check Email Verification

**FormSubmit requires email verification on first use!**

1. Submit a test form
2. Check your email inbox (`chandrujb3@gmail.com`)
3. Look for an email from FormSubmit asking you to verify
4. Click the verification link in that email
5. After verification, future submissions will work automatically

**Important:** You MUST verify your email before FormSubmit will send you form submissions!

## Step 2: Check Spam/Junk Folder

- Check your spam/junk folder
- Add `noreply@formsubmit.co` to your contacts/whitelist
- Mark FormSubmit emails as "Not Spam"

## Step 3: Test Direct Form Submission

The forms are configured to work with AJAX, but if that fails, they will fall back to direct submission.

To test direct submission:

1. Open browser console (F12)
2. Submit the form
3. Check console for any errors
4. If you see errors, the form will automatically try direct submission

## Step 4: Verify Form Configuration

Make sure both forms have:

```html
<form action="https://formsubmit.co/chandrujb3@gmail.com" method="POST">
```

## Step 5: Check Browser Console

1. Open browser console (F12)
2. Submit the form
3. Look for:
   - `FormSubmit Response: 200` = Success
   - Any error messages = Problem

## Step 6: Test with Simple Form

Create a simple test form to verify FormSubmit is working:

```html
<form action="https://formsubmit.co/chandrujb3@gmail.com" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Message" required></textarea>
    <button type="submit">Send</button>
</form>
```

If this works, the issue is with the JavaScript. If it doesn't, the issue is with FormSubmit or email verification.

## Common Issues

### Issue: "Form submitted but no email"

**Solution:** Check spam folder and verify your email with FormSubmit

### Issue: "CORS error in console"

**Solution:** This is normal - FormSubmit will fall back to direct submission

### Issue: "Form keeps loading"

**Solution:** Check console for errors. The form should fall back to direct submission automatically.

### Issue: "Email verification required"

**Solution:** 
1. Check your email inbox
2. Look for FormSubmit verification email
3. Click the verification link
4. Try submitting again

## Alternative: Use Direct Form Submission

If AJAX continues to fail, you can modify the forms to submit directly without JavaScript:

**In script.js, comment out the preventDefault:**

```javascript
// e.preventDefault(); // Comment this out
```

This will allow the form to submit directly to FormSubmit without AJAX.

## Testing Checklist

- [ ] Email verified with FormSubmit
- [ ] Checked spam folder
- [ ] Tested form submission
- [ ] Checked browser console for errors
- [ ] Verified email address is correct (`chandrujb3@gmail.com`)
- [ ] Tried simple test form

## Still Not Working?

1. **Try a different email service:**
   - Use Web3Forms (requires access key)
   - Use Formspree (50/month free)
   - Use Getform (50/month free)

2. **Check FormSubmit status:**
   - Visit [FormSubmit.co](https://formsubmit.co)
   - Check if service is operational

3. **Contact support:**
   - FormSubmit support: Check their documentation
   - Check if your email provider is blocking FormSubmit

## Quick Fix: Enable Direct Submission

If you want to bypass AJAX completely, update script.js:

Find this line:
```javascript
e.preventDefault();
```

Change to:
```javascript
// e.preventDefault(); // Allow direct form submission
```

This will make forms submit directly without JavaScript, which is more reliable but less smooth UX.

