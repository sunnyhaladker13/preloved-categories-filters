const categoriesData = {
  "Apparel & Accessories": {
    "subcategories": [
      "Clothing",
      "Clothing Accessories",
      "Costumes & Accessories",
      "Handbags, Wallets & Cases",
      "Jewelry",
      "Shoes",
      "Shoe Accessories"
    ],
    "genderFilters": ["Men", "Women", "Unisex", "Kids (Boys)", "Kids (Girls)", "Baby"],
    "filters": [
      "Size",
      "Brand",
      "Condition (Like New, Very Good, Good, Acceptable)",
      "Price Range",
      "Material",
      "Color",
      "Pattern",
      "Season",
      "Style",
      "Occasion",
      "Sustainable (Yes/No)",
      "Age of Item"
    ]
  },
  "Baby & Toddler": {
    "subcategories": [
      "Baby Bathing",
      "Baby Health",
      "Baby Safety",
      "Baby Toys & Activity Equipment",
      "Baby Transport",
      "Baby Transport Accessories",
      "Diapering",
      "Nursing & Feeding",
      "Potty Training"
    ],
    "genderFilters": ["Boys", "Girls", "Unisex"],
    "filters": [
      "Age Range",
      "Brand",
      "Condition",
      "Price Range",
      "Material",
      "Color",
      "Safety Rating",
      "Sustainable (Yes/No)",
      "Approved Safety Standards (Yes/No)"
    ]
  },
  "Electronics": {
    "subcategories": [
      "Audio",
      "Communications",
      "Computers",
      "Computer Accessories",
      "Computer Components",
      "Camera & Optics",
      "Print, Copy, Scan & Fax",
      "Video"
    ],
    "genderFilters": [],
    "filters": [
      "Brand",
      "Condition",
      "Age/Year of Release",
      "Price Range",
      "Model",
      "Storage Capacity",
      "Color",
      "Technical Specifications",
      "Included Accessories",
      "Approved/Certified (Yes/No)"
    ]
  },
  "Home & Garden": {
    "subcategories": [
      "Furniture",
      "Kitchen & Dining",
      "Bedding & Bath",
      "Home Decor",
      "Lighting",
      "Appliances",
      "Outdoor & Garden",
      "Tools & Home Improvement"
    ],
    "genderFilters": [],
    "filters": [
      "Brand",
      "Condition",
      "Price Range",
      "Material",
      "Color",
      "Dimensions/Size",
      "Style",
      "Sustainable (Yes/No)"
    ]
  },
  "Media": {
    "subcategories": [
      "Books",
      "Music CDs & Vinyl",
      "Movies & TV Shows",
      "Video Games",
      "Musical Instruments"
    ],
    "genderFilters": [],
    "filters": [
      "Genre",
      "Condition",
      "Format",
      "Language",
      "Release Year",
      "Author/Artist/Developer",
      "Price Range",
      "Approved Rating (e.g., ESRB, MPAA)"
    ]
  },
  "Sports & Outdoors": {
    "subcategories": [
      "Exercise & Fitness Equipment",
      "Outdoor Recreation",
      "Team Sports",
      "Cycling",
      "Camping & Hiking",
      "Water Sports",
      "Winter Sports",
      "Sporting Goods"
    ],
    "genderFilters": ["Men", "Women", "Unisex", "Kids"],
    "filters": [
      "Activity Type",
      "Brand",
      "Condition",
      "Size",
      "Price Range",
      "Color",
      "Material",
      "Age Group",
      "Approved Safety Standards (Yes/No)"
    ]
  },
  "Toys & Games": {
    "subcategories": [
      "Action Figures & Collectibles",
      "Dolls & Accessories",
      "Building Toys",
      "Games & Puzzles",
      "Educational Toys",
      "Outdoor Play Equipment",
      "Remote Control Toys"
    ],
    "genderFilters": ["Boys", "Girls", "Unisex"],
    "filters": [
      "Age Range",
      "Brand",
      "Condition",
      "Price Range",
      "Material",
      "Color",
      "Educational Value",
      "Sustainable (Yes/No)",
      "Approved Safety Standards (Yes/No)"
    ]
  },
  "Health & Beauty": {
    "subcategories": [
      "Makeup",
      "Skincare",
      "Haircare",
      "Fragrance",
      "Personal Care",
      "Health Care",
      "Beauty Tools & Accessories"
    ],
    "genderFilters": ["Men", "Women", "Unisex"],
    "filters": [
      "Type",
      "Brand",
      "Condition (New/Unused, Lightly Used)",
      "Price Range",
      "Skin/Hair Type",
      "Concerns",
      "Approved/Certified (Yes/No)",
      "Sustainable/Eco-friendly (Yes/No)"
    ]
  },
  "Arts & Entertainment": {
    "subcategories": [
      "Hobbies & Creative Arts",
      "Collectibles",
      "Musical Instruments",
      "Party & Celebration"
    ],
    "genderFilters": [],
    "filters": [
      "Era/Period",
      "Condition",
      "Rarity",
      "Price Range",
      "Origin/Country",
      "Material",
      "Authentication Status",
      "Style",
      "Color"
    ]
  },
  "Food & Beverages": {
    "subcategories": [
      "Beverages",
      "Food Items",
      "Specialty Food Services"
    ],
    "genderFilters": [],
    "filters": [
      "Type",
      "Condition",
      "Expiration Date",
      "Price Range",
      "Dietary Restrictions",
      "Organic",
      "Approved/Certified (Yes/No)",
      "Sustainable (Yes/No)"
    ]
  },
  "Office Supplies": {
    "subcategories": [
      "Office Equipment",
      "Office Supplies",
      "Office Furniture"
    ],
    "genderFilters": [],
    "filters": [
      "Type",
      "Brand",
      "Condition",
      "Price Range",
      "Material",
      "Color",
      "Sustainable/Eco-friendly (Yes/No)"
    ]
  },
  "Animals & Pet Supplies": {
    "subcategories": [
      "Pet Supplies",
      "Bird Supplies",
      "Cat Supplies",
      "Dog Supplies",
      "Fish Supplies",
      "Reptile & Amphibian Supplies"
    ],
    "genderFilters": [],
    "filters": [
      "Pet Type",
      "Brand",
      "Condition",
      "Price Range",
      "Material",
      "Color",
      "Approved/Certified (Yes/No)"
    ]
  }
};

const globalFilters = [
  "Verification Status (Verified Seller, Top Seller)",
  "Distance/Location",
  "Shipping Options",
  "Listed Date (Recently Added)",
  "Sustainability Score",
  "Discount Percentage",
  "Bundle Offers"
];