export const febricTypes = [
  { name: "Cotton", code: "cotton" },
  { name: "Denim", code: "denim" },
  { name: "Fleece", code: "fleece" },
  { name: "Linen", code: "linen" },
  { name: "Lycra/Spandex", code: "lycra_spandex" },
  { name: "Nylon", code: "nylon" },
  { name: "Polyester", code: "polyester" },
  { name: "Rayon", code: "rayon" },
  { name: "Satin", code: "satin" },
  { name: "Silk", code: "silk" },
  { name: "Velvet", code: "velvet" },
  { name: "Wool", code: "wool" },
];

export const febricSeasons = [
  { name: "Winter", code: "winter" },
  { name: "Spring", code: "spring" },
  { name: "Summer", code: "summer" },
  { name: "Fall", code: "fall" },
];

export const threadTypes = [
  { name: "Cotton", code: "cotton" },
  { name: "Polyester", code: "polyester" },
  { name: "Silk", code: "silk" },
  { name: "Nylon", code: "nylon" },
  { name: "Metallic", code: "metallic" },
  { name: "Embroidery", code: "embroidery" },
  { name: "Quilting", code: "quilting" },
  { name: "Invisible", code: "invisible" },
  { name: "Upholstery", code: "upholstery" },
  { name: "Overlock", code: "overlock" },
];

/*
Reflectance: Reflectance measures the amount of light reflected by 
a fabric at a particular wavelength or range of wavelengths.
It is usually expressed as a percentage, ranging from 0% 
(no light reflected, complete absorption) 
to 100% (all light reflected, no absorption).
*/

/*
Luminance: Luminance refers to the perceived brightness of a 
fabric, taking into account the sensitivity of the human 
eye to different wavelengths of light. 
It is measured in candelas per square meter (cd/m²) or nits.
*/

export const brightness = [
  { name: "Reflectance", code: "reflectance" },
  { name: "Luminance", code: "luminance" },
];

export const superShiny = [
  { name: "", code: "" },
  { name: "Yes", code: true },
  { name: "No", code: false },
];

export const threadCounts = [
  { code: "200-400", name: "Standard Quality" },
  { code: "400-600", name: "Luxury Grade" },
  { code: "600+", name: "Premium Range" },
];

export const opacity = [
  { name: "Transparent (0%)", code: 0 },
  { name: "Semi-Transparent (25%)", code: 25 },
  { name: "Semi-Opaque (50%)", code: 50 },
  { name: "Opaque (75%)", code: 75 },
  { name: "Fully Opaque (100%)", code: 100 },
];

export const waterProof = [
  { name: "Not Waterproof", code: "not_waterproof" },
  { name: "Water-Resistant", code: "water_resistant" },
  { name: "Waterproof", code: "waterproof" },
];

export const characters = [
  {
    name: "New",
    code: "New",
    description: "Indicates newly manufactured fabrics.",
  },
  {
    name: "Eco-Friendly/Sustainable",
    code: "Eco-Friendly/Sustainable",
    description:
      "Denotes fabrics made from environmentally friendly materials or produced using sustainable manufacturing practices.",
  },
  {
    name: "Easy Iron",
    code: "Easy_Iron",
    description:
      "Refers to fabrics that are designed to be easily ironed and require minimal effort to remove wrinkles.",
  },
  {
    name: "Breathable",
    code: "Breathable",
    description:
      "Indicates fabrics that allow air circulation, promoting comfort and reducing moisture buildup.",
  },
  {
    name: "Stretchy/Elastic",
    code: "Stretchy_Elastic",
    description:
      "Refers to fabrics with stretch properties, allowing them to stretch and recover without losing their shape.",
  },
  {
    name: "Wrinkle-Resistant",
    code: "Wrinkle-Resistant",
    description:
      "Indicates that the fabric is less prone to wrinkling, requiring minimal ironing or maintaining a smoother appearance.",
  },
  {
    name: "Lightweight",
    code: "Lightweight",
    description:
      "Describes fabrics that are light in weight, often preferred for warm weather or when a lighter feel is desired.",
  },
  {
    name: "UV-Resistant",
    code: "UV-Resistant",
    description:
      "Refers to fabrics that offer protection against harmful UV rays, reducing the risk of sunburn and skin damage.",
  },
  {
    name: "Quick-Drying",
    code: "Quick-Drying",
    description:
      "Indicates that the fabric has moisture-wicking properties and dries rapidly, making it suitable for activewear or situations where fast drying is desired.",
  },
  {
    name: "Anti-Microbial",
    code: "Anti-Microbial",
    description:
      "Describes fabrics that inhibit the growth of microorganisms, reducing odors and maintaining freshness.",
  },
  {
    name: "Flame-Retardant",
    code: "Flame-Retardant",
    description:
      "Indicates that the fabric has been treated to reduce its flammability or slow down the spread of flames.",
  },
  {
    name: "Stain-Resistant",
    code: "Stain-Resistant",
    description:
      "Refers to fabrics that are resistant to staining, making it easier to clean and maintain their appearance.",
  },
];

export const warmth = [
  {
    name: "",
    code: "",
    description: "",
  },
  {
    name: "Thermal Conductivity",
    code: "Thermal_Conductivity",
    description:
      "This measures the ability of a fabric to conduct heat. A lower thermal conductivity indicates better insulation as it restricts the transfer of heat through the fabric.",
  },
  {
    name: "Thermal Resistance",
    code: "Thermal_Resistance",
    description:
      "Also known as R-value, it represents the fabric's resistance to heat flow. Higher thermal resistance implies better insulation and increased warmth.",
  },
  {
    name: "Clo Value",
    code: "Clo_Value",
    description:
      "The clo value measures the insulation level provided by a specific fabric. One clo is equal to the amount of insulation needed to maintain comfort at rest in a typical indoor setting.",
  },
  {
    name: "TOG Rating",
    code: "TOG_Rating",
    description:
      "Commonly used for bedding and sleepwear, TOG rating measures the thermal resistance of the fabric. The higher the TOG rating, the warmer the fabric.",
  },
];

export const excellence = [
  { name: 0, code: 0 },
  { name: 1, code: 1 },
  { name: 2, code: 2 },
];

export const threadStyles = [
  {
    code: "plain",
    name: "Plain",
    description:
      "A simple and classic thread style, suitable for various fabric types.",
  },
  {
    code: "twisted",
    name: "Twisted",
    description:
      "Threads are twisted together, creating a durable and textured look.",
  },
  {
    code: "embroidered",
    name: "Embroidered",
    description:
      "Decorative threads are used to create intricate patterns and designs.",
  },
  {
    code: "metallic",
    name: "Metallic",
    description:
      "Threads with metallic finish, adding a touch of shimmer to your fabric.",
  },
  {
    code: "contrastStitch",
    name: "Contrast Stitch",
    description:
      "Threads in contrasting color, enhancing the visibility of stitches.",
  },
];


export const tones = [
  {
    code: "light",
    name: "Light",
    description: "Soft and subtle shades, perfect for creating a delicate look.",
  },
  {
    code: "medium",
    name: "Medium",
    description: "Moderate tones, providing a balanced and versatile appearance.",
  },
  {
    code: "dark",
    name: "Dark",
    description: "Rich and deep tones, adding a touch of elegance to the fabric.",
  },
  {
    code: "vibrant",
    name: "Vibrant",
    description: "Bright and lively tones, ideal for making a bold statement.",
  },
  {
    code: "neutral",
    name: "Neutral",
    description: "Natural and earthy tones, suitable for a classic and timeless look.",
  }
];


export const stretchy = [
  { code: "non-stretchy", name: "Non Stretchy", description: "Fabric does not stretch." },
  { code: "stretchy", name: "Stretchy", description: "Fabric has moderate stretch." },
  { code: "very-stretchy", name: "Very Stretchy", description: "Fabric has high elasticity." }
];

export const type = [{code: 'shirt', name: 'Shirt'}, {code: 'pant', name: 'Pant'}];

// export const productType = [{code: 'shirt', name: 'Shirt'}, {code: 'pant', name: 'Pant'}];

export const getObjectToArray = (data:any) => {
  return data.map((d:any)=> d.code);
}

// New attributes which is added
export const fabricPatterns= [
  { code: 'solid', name: 'Solid', description: 'A fabric with a uniform color throughout, without additional designs or patterns.' },
  { code: 'stripe', name: 'Stripe', description: 'Features straight lines or bands of contrasting colors running parallel to each other on the fabric.' },
  { code: 'checkered', name: 'Checkered/Plaid', description: 'Consists of small, even-sized squares or rectangles arranged in a grid pattern.' },
  { code: 'floral', name: 'Floral', description: 'Incorporates designs inspired by flowers and plants, ranging from small to large blooms.' },
  { code: 'geometric', name: 'Geometric', description: 'Involves shapes such as circles, squares, triangles, or other geometric forms in repetitive patterns.' },
  { code: 'polkaDot', name: 'Polka Dot', description: 'Features small, round dots arranged in a regular or irregular pattern on the fabric.' },
  { code: 'herringbone', name: 'Herringbone', description: 'Consists of rows of V-shaped or zigzagging lines, creating a distinctive and sophisticated look.' },
  { code: 'houndstooth', name: 'Houndstooth', description: 'A two-tone pattern characterized by broken checks or abstract four-pointed shapes.' }
];


export const weaveTypes = [
  { code: 'plain', name: 'Plain Weave', description: 'The most basic and common weave, featuring a simple over-and-under pattern of interlacing threads.' },
  { code: 'twill', name: 'Twill Weave', description: 'Characterized by a diagonal pattern created by the interlacing of threads. It produces a sturdy and durable fabric.' },
  { code: 'satin', name: 'Satin Weave', description: 'Known for its smooth and glossy surface, achieved by floating threads over a number of yarns before interlacing. Often used for luxurious fabrics.' },
  { code: 'basket', name: 'Basket Weave', description: 'Created by grouping threads together and interlacing them in pairs. It results in a checkerboard-like pattern with a textured appearance.' },
  { code: 'herringbone', name: 'Herringbone Weave', description: 'Similar to a twill weave but with a distinctive V-shaped pattern, resembling the bones of a herring fish.' },
  { code: 'jacquard', name: 'Jacquard Weave', description: 'A complex weave that allows for intricate patterns and designs to be woven into the fabric using a Jacquard loom.' },
  { code: 'duck', name: 'Duck Weave', description: 'A strong, plain-weave fabric often used for sturdy, heavy-duty materials like canvas.' },
  { code: 'sateen', name: 'Sateen Weave', description: 'Similar to satin but with a smoother and softer feel. It has a lustrous surface and is commonly used for bedding and apparel.' },
  { code: 'knitted', name: 'Knitted Fabric', description: 'Created by interlocking loops of yarn, resulting in a flexible and stretchable fabric often used in garments like sweaters and T-shirts.' },
  { code: 'sharkskin', name: 'Sharkskin Weave', description: 'Known for its smooth and slightly shiny appearance, sharkskin is a type of twill weave with a fine diagonal pattern.' },
  { code: 'seersucker', name: 'Seersucker Weave', description: 'A puckered cotton fabric with a crinkled surface, usually striped or checkered. It is lightweight and breathable, making it suitable for warm weather.' },
  // Add more weave types with descriptions as needed
];