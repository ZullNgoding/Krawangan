# TODO: Enable Static Export for Next.js App

- [x] Create `frontend/next.config.js` with static export configuration
- [ ] Run `npm run build` to generate static files in `out/` folder
- [ ] Verify `index.html` is created in `out/` folder
- [ ] Deploy the `out/` folder to Vercel as a static site

# TODO: Implement Dynamic Product List with Pagination and Carousel

- [x] Update ProductList.tsx to include 20 products (expand the hardcoded list)
- [x] Add pagination functionality to ProductList.tsx (show 8-12 products per page)
- [x] Create a ProductCarousel component for featured products
- [x] Integrate ProductCarousel into the main page (e.g., in Hero or above ProductList)
- [ ] Test the pagination and carousel on the frontend
- [ ] Ensure responsive design for mobile and desktop

# TODO: Add Cloudflare Configuration

- [x] Create `_headers` file for security headers and caching
- [x] Create `_redirects` file for API routing
- [ ] Configure Cloudflare Pages deployment
- [ ] Set up Cloudflare security features (WAF, Rate Limiting)
