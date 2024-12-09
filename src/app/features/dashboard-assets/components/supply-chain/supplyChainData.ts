export interface CooperativeModel {
  name: string;
}

interface SupplyChainStep {
  title: string;
  description: string;
  icon: string;
  operated: boolean;
  cooperativeModels: string[];
}

interface SupportService {
  title: string;
  description: string;
  icon: string;
  operated: boolean;
  cooperativeModels: string[];
}

export const supplyChainSteps: SupplyChainStep[] = [
  {
    title: "Raw Materials",
    description: "Source & process base materials",
    icon: "🌿",
    operated: false,
    cooperativeModels: [
      "Farmer Cooperatives",
      "Material Processing Co-ops",
      "Sourcing Collectives"
    ]
  },
  {
    title: "Textile Production",
    description: "Convert materials to textiles",
    icon: "🧶",
    operated: false,
    cooperativeModels: [
      "Mill Worker Co-ops",
      "Equipment Sharing Co-ops",
      "Quality Control Co-ops"
    ]
  },
  {
    title: "Design",
    description: "Create garment patterns",
    icon: "✏️",
    operated: true,
    cooperativeModels: [
      "Designer Collectives",
      "Pattern Making Co-ops",
      "Creative Studios"
    ]
  },
  {
    title: "Cut & Sew",
    description: "Produce finished garments",
    icon: "✂️",
    operated: false,
    cooperativeModels: [
      "Garment Worker Co-ops",
      "Production Facilities",
      "Training Centers"
    ]
  },
  {
    title: "Embellish",
    description: "Add branding & decoration",
    icon: "🎨",
    operated: true,
    cooperativeModels: [
      "Print Shop Co-ops",
      "Artisan Collectives",
      "Finishing Studios"
    ]
  },
  {
    title: "Storage",
    description: "Manage inventory & storage",
    icon: "📦",
    operated: true,
    cooperativeModels: [
      "Storage Cooperatives",
      "Logistics Co-ops",
      "Fulfillment Centers"
    ]
  },
  {
    title: "Distribution",
    description: "Deliver to customers",
    icon: "🚚",
    operated: false,
    cooperativeModels: [
      "Delivery Co-ops",
      "Last-Mile Collectives",
      "Transport Networks"
    ]
  }
];

export const supportingServices: SupportService[] = [
  {
    title: "Marketing",
    description: "Brand & PR strategy",
    icon: "📢",
    operated: true,
    cooperativeModels: [
      "Marketing Co-ops",
      "Media Collectives",
      "Brand Studios"
    ]
  },
  {
    title: "Legal",
    description: "Compliance & contracts",
    icon: "⚖️",
    operated: false,
    cooperativeModels: [
      "Legal Service Co-ops",
      "Policy Collectives",
      "Rights Management"
    ]
  },
  {
    title: "Finance",
    description: "Accounting & reporting",
    icon: "💰",
    operated: true,
    cooperativeModels: [
      "Accounting Co-ops",
      "Financial Services",
      "Audit Collectives"
    ]
  },
  {
    title: "Operations",
    description: "Business support",
    icon: "⚙️",
    operated: true,
    cooperativeModels: [
      "Admin Service Co-ops",
      "Tech Support Co-ops",
      "Training Centers"
    ]
  }
]; 