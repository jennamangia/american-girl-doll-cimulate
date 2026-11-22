const images = "/images/american-girl";

export const americanGirl = {
  queries: [
    {
      id: "beauty",
      query: "Beauty and the Beast",
      observation:
        "Beauty and makeup products appear prominently. Recognizing the Disney story would bring Belle dolls, dresses, and themed accessories into focus.",
      intent: [
        "Disney's Beauty and the Beast",
        "Belle dolls and outfits",
        "Story-themed gifts and accessories",
      ],
      annotation: "Recognizes the story behind the words.",
      resultSummary:
        "Cimulate’s commerce-specific language model understands that “Beauty and the Beast” refers to the Disney story and its characters. Computer vision enriches that understanding by extracting visual product attributes directly from catalog imagery, helping connect shoppers to relevant Belle dolls, outfits, and themed accessories.",
      resultsAlt: "Belle dolls, Disney Princess dresses, and Beauty and the Beast accessories.",
    },
    {
      id: "black-dress",
      query: "Black dress",
      observation:
        "Pink and colorful dresses appear prominently despite the shopper specifically searching for black. Understanding both the product type and color would prioritize more relevant results.",
      intent: ["Product type: Dress", "Color: Black", "Doll and coordinated looks"],
      annotation: "Understands the product — and sees its attributes.",
      resultSummary:
        "Cimulate understands that the shopper is looking for a black dress. Computer vision technology extracts visual attributes such as color and style from product imagery, enriching catalog data so relevant dresses and coordinated looks can be discovered even when written product descriptions are incomplete.",
      resultsAlt: "Six American Girl × J.Crew black dresses and coordinated outfits.",
    },
    {
      id: "first-doll",
      query: "Doll for my 8 year old",
      observation:
        "Journals appear in the results. Recognizing the gift, the recipient, and the child’s age would help shoppers discover dolls.",
      intent: ["Gift for an eight-year-old", "Age-appropriate doll"],
      annotation: "Understands who the gift is for.",
      resultSummary:
        "Cimulate’s commerce-specific language model recognizes a gifting mission, the intended recipient, and the age context, bringing age-appropriate dolls into focus.",
      resultsAlt: "Felicity, Samantha, Molly, Addy, Josefina, Kaya, Kirsten, and Kit dolls.",
    },
    {
      id: "puppy",
      query: "Puppy for my doll",
      observation:
        "While puppy-related products appear, the results also include dolls and outfits. The shopper is looking for a puppy companion for their doll — not a new doll.",
      intent: [
        "Product: Puppy or pet companion",
        "Intended for: An American Girl doll",
        "Related accessories: Pet beds, leashes, and playsets",
      ],
      annotation: "Understands relationships between products.",
      resultSummary:
        "Cimulate’s commerce-specific language model understands that the shopper wants a puppy companion for their doll — not another doll. By recognizing the relationship between the products and the shopper’s intent, Cimulate prioritizes relevant doll-sized pets, with complementary accessories available for further discovery.",
      resultsAlt: "Doll-sized puppies and companion pet play accessories.",
    },
  ].map((query) => ({
    ...query,
    screenshot: `${images}/${query.id}-current.png`,
    proposed: `${images}/${query.id}-illustrative.png`,
  })),
  customerExamples: [
    {
      name: "West Marine",
      query: "Cleaning supplies for the head",
      screenshot: "/images/customers/west-marine-v2.png",
      explanation:
        "In boating, the head is the bathroom aboard a vessel. The results surface marine head cleaners and holding-tank treatments.",
      takeaway: "Understands industry-specific terminology.",
    },
    {
      name: "PacSun",
      query: "Women's comfortable but not too baggy jeans",
      screenshot: "/images/customers/pacsun-v3.png",
      explanation:
        "The shopper describes a balance of comfort and shape. The results show relaxed and straight-leg women’s denim.",
      takeaway: "Understands nuanced fit preferences.",
    },
    {
      name: "Ann Taylor",
      query: "Statement earrings for dinner party",
      screenshot: "/images/customers/ann-taylor.png",
      explanation:
        "The occasion and personal style connect the shopper to expressive statement earrings.",
      takeaway: "Understands occasions and personal style.",
    },
  ],
  outcomes: [
    { value: "+10%", label: "Site search conversion rate" },
    { value: "+13%", label: "Average order value" },
    { value: "−96%", label: "Null search results" },
    { value: "−85%", label: "Merchandising rule reduction" },
    { value: "+33%", label: "Clicks per user" },
    { value: "+12%", label: "Revenue per user" },
  ],
};
