# Deployment Guide (Hostinger + GitHub Actions)

Ye site **Next.js static export** hai. Build karne par `out/` folder banta hai jo
Hostinger ke `public_html/` par upload hota hai. Deploy **automatic** hai GitHub Actions se.

## Kaise kaam karta hai
1. Aap code change karke `master` branch par push karte ho.
2. GitHub Actions khud `npm ci` + `npm run build` chalata hai.
3. Build se bana `out/` folder FTP se Hostinger ke `public_html/` par upload ho jaata hai.

Workflow file: `.github/workflows/deploy-hostinger.yml`

## One-time setup (sirf ek baar karna hai)

### 1. Hostinger se FTP details lo
Hostinger hPanel -> Files -> **FTP Accounts** se ye 4 cheezein note karo:
- FTP host (jaise `ftp.yourdomain.com` ya ek IP)
- FTP username
- FTP password
- Remote directory (aam taur par `/public_html/`)

### 2. GitHub Secrets add karo
GitHub repo -> **Settings** -> **Secrets and variables** -> **Actions** -> **New repository secret**.
Ye 4 secrets banao (names bilkul yahi rakho):

| Secret name       | Value (example)        |
|-------------------|------------------------|
| `FTP_SERVER`      | `ftp.yourdomain.com`   |
| `FTP_USERNAME`    | aapka FTP user         |
| `FTP_PASSWORD`    | aapka FTP password     |
| `FTP_REMOTE_DIR`  | `/public_html/`        |

> FTP details **kabhi code/chat me mat daalo** — sirf GitHub Secrets me.

### 3. smtp-config.php server par rakho
`public/smtp-config.php` git me **nahi** hai (secret hai). Ye file manually **ek baar**
Hostinger ke `public_html/` me upload karo, aur ismein apni **nayi** Resend/SMTP key daalo.
Workflow isse delete nahi karega (`exclude` me daala hua hai).

## Deploy kaise karein (setup ke baad)
Bas code push karo:
```
git add -A
git commit -m "your message"
git push
```
GitHub -> **Actions** tab me deploy chalta dikhega. Green tick = live.

## Local par test (optional)
```
npm run dev     # http://localhost:3000 par preview
npm run build   # out/ folder banata hai (production jaisa)
```

## ⚠️ Security reminders
- `smtp-config.php` aur asli API keys kabhi git me commit mat karo.
- Agar koi key galti se leak ho jaaye, Resend dashboard se use turant revoke karke nayi banao.
