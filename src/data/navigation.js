export const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { 
    name: "Services", 
    path: "/services",
    children: [
      { name: "Security Guards", path: "/services/security-guards" },
      { name: "Security Supervisors", path: "/services/security-supervisors" },
      { name: "Corporate Security", path: "/services/corporate-security" },
      { name: "Residential Security", path: "/services/residential-security" },
      { name: "Industrial Security", path: "/services/industrial-security" },
      { name: "Event Security", path: "/services/event-security" },
      { name: "Mall & Commercial Security", path: "/services/mall-commercial-security" },
      { name: "Manpower Services", path: "/services/manpower" },
    ]
  },
  { name: "Industries", path: "/industries" },
  { name: "Training", path: "/training" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];
