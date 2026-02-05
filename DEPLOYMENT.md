# Deployment Guide

This guide covers deploying the Hive website to Vercel with custom domain and SSL configuration.

## Prerequisites

- Vercel account (create at https://vercel.com)
- Git repository pushed to GitHub
- Domain name (optional, but recommended for production)

## Automatic Deployment

### 1. Connect GitHub to Vercel

1. Go to https://vercel.com/new
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Find and select the `hive-website` repository
5. Click "Import"

### 2. Configure Environment Variables

In the Vercel dashboard for your project:

1. Go to **Settings → Environment Variables**
2. Add the following variables:
   - `NEXT_PUBLIC_ANALYTICS_ID`: Your Google Analytics 4 measurement ID

For local development:
```bash
cp .env.example .env.local
# Edit .env.local and add your analytics ID
```

### 3. Deploy

Once connected, Vercel will:
- Automatically deploy on every `git push` to `main`
- Create preview deployments for pull requests
- Run build checks on each deployment

**Production URL**: `https://your-project.vercel.app` (by default)

## Custom Domain Setup

### 1. Add Custom Domain in Vercel Dashboard

1. In your Vercel project dashboard, go to **Settings → Domains**
2. Click **Add Domain**
3. Enter your custom domain (e.g., `hive.example.com`)
4. Click **Add**

### 2. Configure DNS Records

Vercel will provide DNS records to add to your domain provider. Typical records:

For `hive.example.com`:
- **Type**: CNAME
- **Name**: `hive`
- **Value**: `cname.vercel-dns.com`

Add these records through your domain provider's DNS settings:
- GoDaddy, Namecheap, Route 53, Cloudflare, etc.

### 3. Verify Domain

After adding DNS records (wait 24-48 hours for propagation):
1. Vercel will automatically verify the domain
2. Once verified, SSL certificate is automatically issued
3. Your site will be accessible at `https://hive.example.com`

### Apex Domain (www-less)

For root domain (example.com):
1. Add both `example.com` and `www.example.com` in Vercel settings
2. Vercel will handle the DNS configuration
3. All traffic redirects to your primary domain

## SSL/TLS Certificate

SSL is **automatically configured** by Vercel:
- Issued via Let's Encrypt
- Auto-renewed 30 days before expiration
- Supports both HTTP/2 and HTTP/3
- Modern TLS 1.2+ required

No additional configuration needed!

## Preview Deployments

Preview deployments are automatically created for:
- **Pull Requests**: Every PR gets a unique URL
- **Branch Deployments**: Push to any branch (except `main`)

### Example Preview URL
```
https://feature-story-7-hive.vercel.app
```

Each preview:
- Has unique environment variables (if configured)
- Is accessible via comment in the PR
- Auto-deletes when PR is merged or closed

## Environment-Specific Configuration

### Production (`main` branch)
- Analytics tracking enabled
- SEO indexing enabled
- Full error reporting

### Preview (PR branches)
- Analytics disabled (use `development` ID)
- SEO robots.txt blocks crawlers
- Detailed error pages

Configuration in `vercel.json` and environment variables.

## Monitoring & Logs

### View Deployment Logs
1. Vercel Dashboard → Select Deployment
2. Click **Logs** tab
3. View build and runtime logs

### View Project Analytics
- **Dashboard**: Overall traffic and performance
- **Real-time Analytics**: Live request tracking
- **Web Vitals**: Core Web Vitals metrics

## Performance Optimization

The Vercel configuration includes:
- **Edge Network**: Global CDN for fast content delivery
- **Edge Functions**: Serverless functions at edge locations
- **Image Optimization**: Next.js Image with Vercel optimization
- **Cache Control**: Strategic caching for static assets

## Troubleshooting

### Build Fails
1. Check build logs in Vercel Dashboard
2. Verify environment variables are set
3. Run `npm run build` locally to debug

### Domain Not Working
1. Verify DNS records propagated (check with `nslookup` or online tools)
2. Wait 24-48 hours for DNS propagation
3. Check Vercel dashboard for domain verification status
4. Clear browser cache and try again

### Preview Deployments Not Available
1. Ensure GitHub integration is connected
2. Verify branch is pushed to GitHub
3. Check that PR was created against `main`

## Rollback

To rollback a production deployment:
1. Vercel Dashboard → **Deployments** tab
2. Find the previous successful deployment
3. Click **...** menu → **Promote to Production**

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Custom Domain Setup Guide](https://vercel.com/docs/concepts/projects/domains)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
