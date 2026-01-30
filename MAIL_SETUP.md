# Contact form email – Gmail setup

The site uses **Gmail SMTP** with an **App Password** so you can send and receive contact form emails from your company Gmail (e.g. whssfottech2026@gmail.com) with no paid service.

---

## 1. Create your `.env` file

In the project root (same folder as `package.json`), create a file named `.env` (no extension).

Full path example:

```
c:\Users\ASUS\Documents\SECOND SEMISTER\agent\whs\whsoftech\.env
```

---

## 2. Turn on 2-Step Verification (required for App Passwords)

1. Open: **https://myaccount.google.com**
2. Sign in with your company Gmail (e.g. whssfottech2026@gmail.com).
3. In the left menu, click **Security**.
4. Under “How you sign in to Google”, click **2-Step Verification**.
5. If it’s off, turn it **On** and complete the steps (phone number, code, etc.).

Direct link: **https://myaccount.google.com/security**

---

## 3. Create a Gmail App Password

1. Go to: **https://myaccount.google.com/apppasswords**  
   (Or: Google Account → **Security** → **2-Step Verification** → at the bottom, **App passwords**.)
2. You may need to sign in again.
3. Under “Select app”, choose **Mail** (or “Other” and type “whsofttech”).
4. Under “Select device”, choose **Other** and type e.g. “whsofttech website”.
5. Click **Generate**.
6. Google shows a **16-character password** (like `abcd efgh ijkl mnop`).  
   Copy it once; it won’t be shown again.

Full path to this screen:

```
Google Account → Security → 2-Step Verification → App passwords → Generate
```

URL: **https://myaccount.google.com/apppasswords**

---

## 4. Add credentials to `.env`

Open `.env` and set (use your real Gmail and the 16-character app password, no spaces):

```env
GMAIL_USER=whssfottech2026@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

- Use the **full Gmail address** for `GMAIL_USER`.
- Use the **16-character App Password** for `GMAIL_APP_PASSWORD`. You can paste it with or without spaces (the app removes spaces automatically).

Optional – where to receive contact form messages (defaults to `GMAIL_USER`):

```env
CONTACT_TO_EMAIL=whssfottech2026@gmail.com
```

**Which mail sends / receives:** You only need `GMAIL_USER` and `GMAIL_APP_PASSWORD`. The same account sends and receives by default. Add `CONTACT_TO_EMAIL` only if you want submissions to go to a different address.

**Debug script:** After setting `.env`, run `npm run email:debug` to verify login and send a test email.

---

## 5. Install dependency and run

```bash
npm install
npm run dev
```

Then submit the contact form on the site; the email should send from your Gmail and arrive at `GMAIL_USER` (or `CONTACT_TO_EMAIL`).

---

## Summary – where to get the values

| What you need | Where to get it                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Gmail address | Your company Gmail (e.g. whssfottech2026@gmail.com).                                                                    |
| App Password  | **https://myaccount.google.com/apppasswords** → create app password for “Mail” or “Other” → copy the 16-character code. |
| `.env` file   | Project root: `whsoftech\.env` (same folder as `package.json`).                                                         |

Never commit `.env` or share your App Password; it’s already in `.gitignore`.
