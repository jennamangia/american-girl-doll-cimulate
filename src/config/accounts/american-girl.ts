const images = "/images/american-girl";

export const americanGirl = {
  queries: [
    {
      id: "beauty",
      query: "Beauty and the Beast",
      observation:
        "Beauty and makeup products appear prominently. Recognizing the Disney story would bring Belle dolls, dresses, and themed accessories into focus.",
      intent: ["Disney's Beauty and the Beast", "Belle and her yellow dress", "Story-themed gifts"],
      annotation: "Recognizes the story behind the words.",
      resultSummary:
        "The commerce-specific language model connects the phrase to the Disney story and Belle. Computer vision can recognize details such as her signature yellow dress.",
      resultsAlt: "Belle dolls, Disney Princess dresses, and Beauty and the Beast accessories.",
    },
    {
      id: "black-dress",
      query: "Black dress",
      observation:
        "Pink dresses and unrelated products appear prominently. Recognizing both the garment and its color would surface more relevant outfits.",
      intent: ["Garment: dress", "Color: black", "Doll and coordinated looks"],
      annotation: "Sees the details shoppers describe.",
      resultSummary:
        "AI-extracted visual attributes can identify black fabric and gold accents even when feed descriptions omit them, surfacing doll outfits and coordinated girl-and-doll looks.",
      resultsAlt: "Six American Girl × J.Crew black-and-gold dresses and coordinated outfits.",
    },
    {
      id: "first-doll",
      query: "Doll for my 8 year old",
      observation:
        "Journals appear in the results. Recognizing the gift, the recipient, and the child’s age would help shoppers discover dolls.",
      intent: ["Gift for an eight-year-old", "Age-appropriate doll", "A character to connect with"],
      annotation: "Understands who the gift is for.",
      resultSummary:
        "The commerce-specific language model recognizes a gifting mission, the intended recipient, and the age context, bringing age-appropriate dolls into focus.",
      resultsAlt: "Felicity, Samantha, Molly, Addy, Josefina, Kaya, Kirsten, and Kit dolls.",
    },
    {
      id: "puppy",
      query: "Puppy for my doll",
      observation:
        "The results mix unrelated dolls with other products. Understanding who the puppy is for would bring doll-sized pets and accessories forward.",
      intent: ["Companion pet", "Sized for an American Girl doll", "Pet play accessories"],
      annotation: "Understands what goes with a doll.",
      resultSummary:
        "Cimulate recognizes that the doll is the recipient. That relationship helps surface companion puppies and pet play accessories.",
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
