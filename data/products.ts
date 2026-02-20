// ===== SHARED PRODUCT DATA =====
// This file contains all product data used across the website.
// Both the landing page and product detail page use this data.
// In a real app, this would come from a database or API.

// ----- Type Definitions -----
// These types describe the shape of our product data
export type Product = {
    id: number;
    name: string;
    price: number;
    image: string; // Main product image (used in cards)
    images: string[]; // All product images (used in gallery)
    category: string; // e.g. "running", "lifestyle", "basketball"
    isNew: boolean; // Show "New" badge or not
    colors: string[]; // Available color hex codes
    sizes: number[]; // Available shoe sizes
    description: string; // Short product description
    details: string[]; // Bullet point details
};

// ----- All Products -----
// This is our "database" of products
export const products: Product[] = [
    {
        id: 1,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-1.png",
        images: [
            "/images/shoe-1.png",
            "/images/shoe-detail-1.png",
            "/images/shoe-detail-2.png",
            "/images/shoe-detail-3.png",
            "/images/shoe-detail-4.png",
        ],
        category: "running",
        isNew: true,
        colors: ["#232321", "#4A69E2"],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        description: "Shadow Navy / Army Green",
        details: [
            "This product is excluded from all promotional discounts and offers.",
            "Pay over time in interest-free installments with Affirm, Klarna or Afterpay.",
            "Join adiClub to get unlimited free standard shipping, returns, & exchanges.",
        ],
    },
    {
        id: 2,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-2.png",
        images: [
            "/images/shoe-2.png",
            "/images/shoe-detail-1.png",
            "/images/shoe-detail-2.png",
            "/images/shoe-detail-3.png",
            "/images/shoe-detail-4.png",
        ],
        category: "running",
        isNew: true,
        colors: ["#56B280", "#232321"],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        description: "Olive Green / Forest",
        details: [
            "This product is excluded from all promotional discounts and offers.",
            "Pay over time in interest-free installments with Affirm, Klarna or Afterpay.",
            "Join adiClub to get unlimited free standard shipping, returns, & exchanges.",
        ],
    },
    {
        id: 3,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-3.png",
        images: [
            "/images/shoe-3.png",
            "/images/shoe-detail-1.png",
            "/images/shoe-detail-2.png",
            "/images/shoe-detail-3.png",
            "/images/shoe-detail-4.png",
        ],
        category: "running",
        isNew: true,
        colors: ["#FF6B6B", "#FFA52F"],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        description: "Solar Red / Energy Orange",
        details: [
            "This product is excluded from all promotional discounts and offers.",
            "Pay over time in interest-free installments with Affirm, Klarna or Afterpay.",
            "Join adiClub to get unlimited free standard shipping, returns, & exchanges.",
        ],
    },
    {
        id: 4,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-4.png",
        images: [
            "/images/shoe-4.png",
            "/images/shoe-detail-1.png",
            "/images/shoe-detail-2.png",
            "/images/shoe-detail-3.png",
            "/images/shoe-detail-4.png",
        ],
        category: "running",
        isNew: true,
        colors: ["#4A69E2", "#232321"],
        sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
        description: "Navy Blue / Teal Mix",
        details: [
            "This product is excluded from all promotional discounts and offers.",
            "Pay over time in interest-free installments with Affirm, Klarna or Afterpay.",
            "Join adiClub to get unlimited free standard shipping, returns, & exchanges.",
        ],
    },
    {
        id: 5,
        name: "Nike Lifestyle Premium Sneakers",
        price: 150,
        image: "/images/category-lifestyle.png",
        images: [
            "/images/category-lifestyle.png",
            "/images/shoe-detail-1.png",
            "/images/shoe-detail-2.png",
            "/images/shoe-detail-3.png",
            "/images/shoe-detail-4.png",
        ],
        category: "lifestyle",
        isNew: false,
        colors: ["#FFFFFF", "#232321"],
        sizes: [39, 40, 41, 42, 43, 44, 45],
        description: "Classic White / Black",
        details: [
            "Premium leather upper for durability and comfort.",
            "Iconic design perfect for everyday casual wear.",
            "Cushioned sole for all-day comfort.",
        ],
    },
    {
        id: 6,
        name: "Jordan Basketball Pro Shoes",
        price: 180,
        image: "/images/category-basketball.png",
        images: [
            "/images/category-basketball.png",
            "/images/shoe-detail-1.png",
            "/images/shoe-detail-2.png",
            "/images/shoe-detail-3.png",
            "/images/shoe-detail-4.png",
        ],
        category: "basketball",
        isNew: false,
        colors: ["#FF6B6B", "#232321"],
        sizes: [40, 41, 42, 43, 44, 45, 46],
        description: "Gym Red / Black",
        details: [
            "High-top design for ankle support during play.",
            "Air cushioning technology for explosive movements.",
            "Non-marking rubber outsole for court traction.",
        ],
    },
];

// ----- Helper Functions -----

// Get a single product by its ID
// Returns the product if found, or undefined if not
export function getProductById(id: number): Product | undefined {
    return products.find((product) => product.id === id);
}

// Get related products (same category, but NOT the current product)
// This is used for the "You may also like" section
export function getRelatedProducts(
    currentProductId: number,
    category: string
): Product[] {
    return products.filter(
        (product) =>
            product.category === category && product.id !== currentProductId
    );
}
