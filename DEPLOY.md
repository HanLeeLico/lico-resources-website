# Deploy Guide — Lico Resources

End-to-end path: local code → GitHub → Vercel → live on `www.licoresources.com`.

---

## Option A — One-click script (recommended)

In the parent folder (`Website Design with installed skills`), there's a script called `push-to-github.ps1`. Right-click → Run with PowerShell. It will:

1. Verify git is installed
2. Clean up the broken `node_modules/` left over from earlier
3. Initialise git in `lico-staging/`
4. Configure your name/email if not set
5. Stage and commit everything
6. Prompt you for a GitHub repo URL
7. Push to that repo

Before running, **create an empty GitHub repo first**:

- Go to https://github.com/new
- Name it (e.g. `lico-resources-website`)
- Private or Public, your choice
- **Leave all three checkboxes UNTICKED** (no README, no .gitignore, no license — the repo must be empty)
- Click "Create repository"
- Copy the URL shown (the `https://github.com/...git` one)

Then run the script, paste the URL when asked. Done.

---

## Option B — Manual git push

If you'd rather do it by hand, open PowerShell and run:

```powershell
# Move into the staging folder
cd "$env:USERPROFILE\OneDrive\Documents\Claude\Projects\Website Design with installed skills\lico-staging"

# Clean leftover install
rmdir /s /q node_modules
del package-lock.json
rmdir /s /q .next

# Set your git identity if you haven't before
git config --global user.name "Han Lee"
git config --global user.email "your-email@example.com"

# Initialise + commit
git init -b main
git add .
git commit -m "Initial commit"

# Point at your GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

---

## Deploy to Netlify

Once the repo is on GitHub:

1. Go to https://app.netlify.com/start
2. Click **Import from GitHub**
3. Authorize Netlify to read your repos (Netlify will ask once — it's safe; you can scope it to just this one repo if you prefer)
4. Pick `lico-resources-website` from the list
5. **Build settings** — Netlify reads `netlify.toml` so everything is pre-configured:
   - Build command: `npm run build` (auto)
   - Publish directory: `.next` (auto)
   - Functions/SSR: handled by the `@netlify/plugin-nextjs` plugin (auto-installed)
6. **(Optional) Environment variables** — click "Add variable" under "Environment variables":
   - `RESEND_API_KEY` — sign up at https://resend.com, copy from API Keys
   - `CONTACT_TO_EMAIL` — default `info@licoresources.com`
   - `CONTACT_FROM_EMAIL` — must be a verified Resend sender, e.g. `enquiries@licoresources.com`
7. Click **Deploy site**

About 90 seconds later, you'll have a live URL like `random-name-abc123.netlify.app`. You can rename the subdomain under **Site settings → Site information → Change site name**.

---

## Point licoresources.com at Netlify

After the Netlify deploy works:

1. In the Netlify site dashboard → **Domain management** (or **Site settings → Domain management**)
2. Click **Add a domain**, enter `licoresources.com`
3. Netlify will show the DNS records you need (typically: an A record for `@` pointing to Netlify's load balancer, and a CNAME for `www`)
4. Log into your domain registrar (Namecheap, GoDaddy, Cloudflare, or your old hosting provider)
5. Update the DNS records as Netlify instructs
6. Back in Netlify, click **Verify DNS configuration** once you've saved the changes
7. Netlify will auto-provision an SSL certificate (Let's Encrypt) within a few minutes
8. Wait 10 minutes to a few hours for DNS to fully propagate
9. Done — `www.licoresources.com` now serves the new site

The old site keeps working until DNS flips, so there's no downtime.

---

## Automatic redeploys

Once GitHub is connected to Netlify, every time you push to `main` Netlify redeploys automatically — usually 60-120 seconds. You don't need to touch Netlify again.

To make a change later:

```powershell
cd "...\lico-staging"
# edit some files
git add .
git commit -m "what changed"
git push
```

Vercel sees the push and rebuilds.

---

## Sanity checks before going live

Once live on Vercel (and especially before flipping DNS), check these:

- [ ] Open `your-site.netlify.app/sitemap.xml` — should list all pages
- [ ] Open `your-site.netlify.app/robots.txt` — should reference the sitemap
- [ ] Share the URL on LinkedIn / WhatsApp / Slack — the OG image should preview correctly
- [ ] Submit a test enquiry through `/contact` — should arrive at `info@licoresources.com` (if Resend env vars are set)
- [ ] Click through Home → About → Services → Contractors → Insights → Article → Contact — all links work
- [ ] `your-site.netlify.app/portal/login` loads
- [ ] Open a tab and check the favicon shows the red "L"
- [ ] Run Lighthouse in Chrome DevTools — aim for 90+ on Performance, Accessibility, SEO

---

## Add Google Search Console

Within a week of going live:

1. Go to https://search.google.com/search-console
2. Add property → `https://www.licoresources.com`
3. Choose verification by HTML tag, copy the content value
4. In `app/layout.tsx`, set `verification.google: "the-content-value"` in the metadata
5. Push the change. Vercel redeploys.
6. Back in Search Console, click Verify
7. Submit your sitemap: `https://www.licoresources.com/sitemap.xml`

Google will index the new site over the following days. Watch the **Performance** tab for impressions and clicks.
