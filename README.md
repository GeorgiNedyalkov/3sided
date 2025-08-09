# 4 Sided Ecommerce site

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

Learn about context
Figure out how to use context?

Backend:

- Learn all about the backend
- Webhooks ( Synchronization )

Bonus Idea: Save my designs
Bonus Idea: Share on social media

## Bugs

- Font is looking crazy
- The cart add item function doesn't work

## TODO

Qnina:
- Text Content

Devi and Qni
- Video this weekend

Cart:
- Adding a product
- Shopping cart items

Navbar:
- Remove components
- Open links when hovering



## Cart

Adding an item to the cart.

When the user enters the website we create a cart and set the cookies of the cart.

When the user adds an item to the cart we do what?











































TODO:
- [] BUILD THE PROJECT!!! 
- [X] Add internationalization
- [X] Translate charm bar
- [x] Add language switcher
- Fix Navbar bug
- Fix Newsletter subscribtion


Charmbar:
- [x] Add Necklace Product
- Send a picture of the created design
- Fix Filters pick bug
- Make the neckalace follow the scrolldown
- Add Charmbar Context
- Add Reset button



This morning do these!

Charmbar review:

1. Selected chain

-[x] Now the chain is hardcoded. We need to pass the image of the selected chain to the
charmbar.

We need to define the settings for each category.

Plan:
- Add all the products for each category
- Define the settings for charms placements on the chain
- Add size and material variants.

2. Filter Charms by collection

We add a tag to the charm of the collection id. 
We have a client component collection selector that updates the url
Then in the charm bar [category][chain] page we add it to a query for get products


Design Desitions:

- All charms in charms selector will be the same size. They will be smaller on the chain

Ideas:

- Featured collection section


## TODO:

- Fix Falling charms and make them robust
- Fix Collections slider
- Mobile responsive design, tablet responsive desing

- Fix Cart component errors
Cart:
- Remove Item
- Update Quantity
- Figure out Cashing Cookies etc.
- Figure out how to add sizes to chains
- Add upload image when items are added to the cart

- Add testing to most crucial components: (Charm-bar, Cart, Payments, Upload Image)
- Improve contact us page, write tests
- Make sure newsletter works


- Translate everything
- Add basic SEO to pages
- Add and check terms and conditions, privacy policy and others

Additional features:
- Search
- Profiles for users

Optmise!
- Figure out how to track performance, record and improve it.
- Images and Videos
- Loading links

Add Analytics
