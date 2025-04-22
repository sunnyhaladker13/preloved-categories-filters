# Preloved Item Search and Filter System

## Overview

This project provides a comprehensive categorization and filtering system for preloved (second-hand) items. It's designed to help users efficiently search through and filter various types of used products based on relevant attributes.

## Data Structure

The system is built around a hierarchical data structure defined in `js/categories-data.js` that organizes items into:

1. **Main Categories** - Broad product groupings (e.g., "Apparel & Accessories", "Electronics")
2. **Subcategories** - Specific product types within each category
3. **Filters** - Category-specific attributes for refining searches

## Categories Breakdown

The system includes 12 main categories, each with relevant subcategories:

- **Apparel & Accessories**: Clothing, jewelry, shoes, etc.
- **Baby & Toddler**: Baby care products, toys, and equipment
- **Electronics**: Computers, audio devices, cameras, etc.
- **Home & Garden**: Furniture, appliances, decor, etc.
- **Media**: Books, music, movies, video games
- **Sports & Outdoors**: Exercise equipment, outdoor recreation items
- **Toys & Games**: Action figures, dolls, games, puzzles
- **Health & Beauty**: Makeup, skincare, personal care products
- **Arts & Entertainment**: Hobbies, collectibles, instruments
- **Food & Beverages**: Food items and beverages
- **Office Supplies**: Office equipment and furniture
- **Animals & Pet Supplies**: Products for various types of pets

## Filter Types

Each category has three types of filters:

### 1. Subcategories

These divide main categories into smaller, specific product groups. For example, "Electronics" includes subcategories like "Audio", "Computers", and "Camera & Optics".

### 2. Gender Filters

When applicable, these allow filtering by intended gender audience:
- Men/Women/Unisex for adult items
- Boys/Girls/Unisex for children's items
- Not all categories have gender filters (e.g., Electronics, Home & Garden)

### 3. Category-Specific Filters

Each category has tailored filters relevant to those items. Examples include:
- **Apparel**: Size, material, color, pattern, season
- **Electronics**: Storage capacity, model, technical specifications
- **Toys & Games**: Age range, educational value, approved safety standards

## Global Filters

The system also includes global filters that apply across all categories:

- Verification Status (Verified Seller, Top Seller)
- Distance/Location
- Shipping Options
- Listed Date (Recently Added)
- Sustainability Score
- Discount Percentage
- Bundle Offers

## Usage Example

```javascript
// Get all subcategories for Electronics
const electronicSubcategories = categoriesData["Electronics"].subcategories;

// Check if a category has gender filters
const hasGenderFilters = categoriesData["Home & Garden"].genderFilters.length > 0;

// Get specific filters for Baby & Toddler items
const babyFilters = categoriesData["Baby & Toddler"].filters;

// Access global filters that apply to all categories
const allGlobalFilters = globalFilters;
```

## Implementation Notes

- The categories and filters are designed to be comprehensive yet flexible
- The system prioritizes user-relevant search parameters for secondhand items
- Special attention is given to safety, condition, and sustainability information
