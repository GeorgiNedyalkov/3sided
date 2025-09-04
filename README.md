# 3 Sided Ecommerce site

## TODO

- [] Figure out adding to cart
- [] Figure out caching
- [] Figure out context

- things

-----------------------------------------------

Charm Bar:

- Select a chain size and update in context and shopify.
- Charm positions on the chain are now hardcoded. Figure out how to integrate them in the chain and when.
- Upload image when items are added to the cart or at checkout

- Add testing to most crucial components: (Charm-bar, Cart, Payments, Upload Image)
- Add final category for waist chains.


Other:
- [] Show pending status with user adds items to cart
- [] Figure out how to add sizes to chains
- [] Add upload image when items are added to the cart

- [] Add testing to most crucial components: (Charm-bar, Cart, Payments, Upload Image)


- [x] Improve contact us page, write tests
- [] Make sure newsletter works
- [] Translate everything
- [] Add and check terms and conditions, privacy policy and others

Optmise!
- Figure out how to track performance, record and improve it.
- Images and Videos
- Loading links

Additions:
- [] Add basic SEO to pages
- [] Add Analytics
- [] Add Accessibility


Bugs:
- Falling charms
- Intro section styles
- Newsletter
- Charm bar section for mobile is wrong


## Inspirations

- [Charms and Chains](https://www.madebymary.com/collections/charms-and-chains)
- [Charm Bar](https://www.lavenderandgracedesigns.com/products/charm-necklace-1)

## Specification

Pages:

- Homepage:
  - Hero
  - Charms
  - Bracelets
  - Collections
- Product page
  - Charm Bar
  - Personalization
- Search | Catalog page
- About (Story, Blog, TikTok)
- FAQ
- Policies:
  - Sizing guide
  - Terms and conditions
  - Shipping
  - Cookies


## Charm bar

How to work with graphql

1. Load all charms

getProductByType

Create your own

Get the available chains and charms from shopify.

1. Choose your **chain**
2. Choose one of 5 charms
3. Add to cart
4. Pick a category
5. Pick a chain

Focus on the charm bar

Charms Section

- Display more charms
- Filter by size
- Filter by category
- Add ability to remove a charm
- Add to cart
- Make an order
- Setup payment
- Sorting

Backend:

- Learn all about the backend
- Webhooks ( Synchronization )

Bonus Idea: Save my designs
Bonus Idea: Share on social media
