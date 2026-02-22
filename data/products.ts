
export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    images: string[];
    category: string;
    isNew: boolean;
    colors: string[];
    sizes: number[];
    description: string;
    details: string[];
};

export const products: Product[] = [
    {
        id: 1,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-1.png",
        images: [
            "/images/shoe-1.png",
            "/images/shoe-details-2.png",
            "/images/shoe-details-3.png",
            "/images/shoe-details-4.png",
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
            "/images/shoe-details-2.png",
            "/images/shoe-details-3.png",
            "/images/shoe-details-4.png",
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
            "/images/shoe-details-2.png",
            "/images/shoe-details-3.png",
            "/images/shoe-details-4.png",
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
            "/images/shoe-details-2.png",
            "/images/shoe-details-3.png",
            "/images/shoe-details-4.png",
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


export function getProductById(id: number): Product | undefined {
    return products.find((product) => product.id === id);
}


export function getRelatedProducts(
    currentProductId: number,
    category: string
): Product[] {
    return products.filter(
        (product) =>
            product.category === category && product.id !== currentProductId
    );
}

export const carouselProducts = [
    {
        id: 1,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-1.png",
        isNew: true,
    },
    {
        id: 2,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-2.png",
        isNew: true,
    },
    {
        id: 3,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-3.png",
        isNew: true,
    },
    {
        id: 4,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-4.png",
        isNew: true,
    },
    {
        id: 5,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-1.png",
        isNew: true,
    },
    {
        id: 6,
        name: "Adidas 4DFWD X Parley Running Shoes",
        price: 125,
        image: "/images/shoe-2.png",
        isNew: true,
    },
];
