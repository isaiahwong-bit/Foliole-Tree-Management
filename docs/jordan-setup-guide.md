# LumberJord: Go-Live Checklist

**Updated July 2026. Owner labels on every part: (Jordan) or (Isaiah).**

The new website is built and deployed. This is the master list of what remains, who owns it, and how each piece gets done. Jordan's parts are the only ones that need the business owner; Isaiah handles the technical rollout.

Total cost to Jordan: about AU$10/month (Google Workspace). Everything else is free.

---

## Part 1 (Isaiah): Point lumberjord.com.au at the new website

**Why:** The domain currently serves an old GoDaddy Website Builder placeholder. Until it points at the new site, Google indexes the wrong thing and none of the SEO work counts.

Steps (Isaiah):
1. Attach `lumberjord.com.au` and `www` to the Vercel project (`foliole-tree-management`).
2. In GoDaddy: disconnect the Website Builder product from the domain, then set DNS:

   | Type  | Name | Value                  |
   |-------|------|------------------------|
   | A     | @    | `76.76.21.21`          |
   | CNAME | www  | `cname.vercel-dns.com` |

3. Leave all other records alone (especially MX/TXT once Workspace is set up).
4. Verify lumberjord.com.au serves the new site; check www redirect and SSL.

---

## Part 2 (Jordan): Work email, admin@lumberjord.com.au (Google Workspace)

**Why:** A real business address on the domain, in the Gmail he already uses. Also becomes the login for the Business Profile.

1. Go to **workspace.google.com**, Get Started.
2. Business name `LumberJord`, just you, Australia.
3. "Does your business have a domain?" → **Yes, I have one I can use** → `lumberjord.com.au`.
4. Create user **admin@lumberjord.com.au**, strong password.
5. **Business Starter** plan (about AU$10/month).
6. Domain verification: choose **Sign in with GoDaddy** if offered (automatic). If manual records are shown instead, screenshot them to Isaiah.
7. Sign in at gmail.com as the new address and email Isaiah from it to confirm it's live.
8. Phone: Gmail app → Settings → Add account → Google.

---

## Part 3 (Isaiah, with two inputs from Jordan): Google Business Profile

**Why:** The map results for "arborist near me" come from Business Profiles, not websites. Biggest single lead source for a local trade.

Setup (Isaiah):
- Create at business.google.com. Name `LumberJord`, primary category **Tree service**, secondary **Arborist service**.
- Service-area business, address hidden. Areas: Brighton, Hampton, Sandringham, Brighton East, Elwood, Toorak, Malvern, Armadale, Kew, Canterbury, Camberwell, Hawthorn, Glen Iris, Balwyn.
- Phone 0413 268 827, website https://lumberjord.com.au.
- Description written to match the site; services list: Tree Pruning, Tree Removal, Tree Health Assessments, Structural Support, Stump Grinding.

Inputs from Jordan when asked:
- A short **verification video** (gear, vehicle, proof it's a real business) if Google requires it, which it usually does for service-area businesses.
- **10 to 15 real job photos** to launch the profile, then 2 or 3 fresh ones monthly.

---

## Part 4 (Jordan): Reviews, once the profile is live

**Why:** Reviews are the main ranking factor in the map results. 10+ changes everything for a new profile.

1. Isaiah sends Jordan the profile's review link.
2. Jordan texts every past happy customer, and every new customer at job completion:

   > Hi [name], Jordan from LumberJord here. Really enjoyed sorting out the trees at your place. If you were happy with the work, a quick Google review would mean a lot to a one-man operation: [link]

3. Reply to every review, even two sentences.

**Target: 10+ reviews in the first month or two.**

---

## Part 5 (Isaiah): Google Search Console

- Add domain property `lumberjord.com.au`, verify via DNS at GoDaddy.
- Submit `https://lumberjord.com.au/sitemap.xml`.
- Monitor indexing, queries and anything Google flags.

---

## Part 6 (Jordan): Confirm the service area

The site tells customers he services: **Brighton, Hampton, Sandringham, Toorak, Malvern, Armadale, Kew, Canterbury, Camberwell and Hawthorn**, plus surrounds.

Jordan confirms by reply:
- Any suburb he wouldn't take a job in?
- Any area to add? (Mornington Peninsula floated as a future option.)

---

## Ongoing (Jordan): the 10-minutes-a-week habit

- Reply to new Google reviews.
- Add 2 or 3 fresh job photos to the Business Profile each month.
- Answer questions posted on the profile.
- Ask every happy customer for a review. One text, one link.

## Ongoing (Isaiah)

- Search Console monitoring, sitemap and technical SEO.
- Site content: suburb pages, service pages, tree guide expansion (Tier 2 suburbs: Glen Iris, Balwyn, Beaumaris, Black Rock, Brighton East, Elwood).

---

## Quick reference

| Item | Owner | Where | Cost |
|------|-------|-------|------|
| Domain DNS switch | Isaiah | godaddy.com + Vercel | already owned |
| Work email | Jordan | workspace.google.com | ~AU$10/month |
| Business Profile | Isaiah (inputs from Jordan) | business.google.com | free |
| Reviews | Jordan | text messages | free |
| Search Console | Isaiah | search.google.com/search-console | free |
| Website + hosting | Isaiah | Vercel | handled |
