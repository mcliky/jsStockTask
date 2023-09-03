const arr = [
  {
    name: "Sony 4K Smart TV",
    brand: "Sony",
    price: 1699.99,
    weight: "20 kg",
    screenSize: "60 inches",
    cpu: "Quad-Core",
    resolution: "4K Ultra HD",
    color: "Black",
    inStock: true,
    discount: 0,
  },
  {
    name: "Samsung QLED TV",
    brand: "Samsung",
    price: 1799.99,
    weight: "22 kg",
    screenSize: "65 inches",
    cpu: "Octa-Core",
    resolution: "4K Ultra HD",
    color: "Titanium",
    inStock: true,
    discount: 15,
  },
  {
    name: "LG OLED 4K TV",
    brand: "LG",
    price: 1499.99,
    weight: "18 kg",
    screenSize: "55 inches",
    cpu: "Quad-Core",
    resolution: "4K Ultra HD",
    color: "Silver",
    inStock: false,
    discount: 0,
  },
  {
    name: "Panasonic 4K TV",
    brand: "Panasonic",
    price: 1599.99,
    weight: "19 kg",
    screenSize: "58 inches",
    cpu: "Quad-Core",
    resolution: "4K Ultra HD",
    color: "Black",
    inStock: false,
    discount: 10,
  },

  {
    name: "TCL Smart LED TV",
    brand: "TCL",
    price: 899.99,
    weight: "15 kg",
    screenSize: "50 inches",
    cpu: "Dual-Core",
    resolution: "Full HD",
    color: "White",
    inStock: true,
    discount: 8,
  },
  {
    name: "Acer Aspire Laptop",
    brand: "Acer",
    price: 799.99,
    weight: "2.5 kg",
    screenSize: "15.6 inches",
    cpu: "Intel Core i5",
    ram: "8 GB",
    storage: "256 GB SSD",
    color: "Gray",
    inStock: true,
    discount: 10,
  },

  {
    name: "Fitbit Charge 4 Fitness Tracker",
    brand: "Fitbit",
    price: 129.99,
    weight: "0.03 kg",
    displayType: "OLED",
    batteryLife: "Up to 7 days",
    color: "Blue",
    inStock: true,
    discount: 20,
  },

  {
    name: "Samsung Galaxy S21 Smartphone",
    brand: "Samsung",
    price: 999.99,
    weight: "0.2 kg",
    screenSize: "6.2 inches",
    cpu: "Exynos 2100",
    ram: "12 GB",
    storage: "128 GB",
    color: "Black",
    inStock: true,
    discount: 5,
  },

  {
    name: "LG OLED 4K TV",
    brand: "LG",
    price: 1499.99,
    weight: "18 kg",
    screenSize: "55 inches",
    cpu: "Quad-Core",
    resolution: "4K Ultra HD",
    color: "Silver",
    inStock: false,
    discount: 0,
  },

  {
    name: "Nespresso Coffee Maker",
    brand: "Nespresso",
    price: 199.99,
    weight: "5 kg",
    coffeeType: "Nespresso Capsules",
    color: "Red",
    inStock: true,
    discount: 15,
  },

  {
    name: "Acer Aspire Laptop",
    brand: "Acer",
    price: 799.99,
    weight: "2.5 kg",
    screenSize: "15.6 inches",
    cpu: "Intel Core i5",
    ram: "8 GB",
    storage: "256 GB SSD",
    color: "Gray",
    inStock: true,
    discount: 10,
  },

  {
    name: "Fitbit Charge 4 Fitness Tracker",
    brand: "Fitbit",
    price: 129.99,
    weight: "0.03 kg",
    displayType: "OLED",
    batteryLife: "Up to 7 days",
    color: "Blue",
    inStock: true,
    discount: 20,
  },

  {
    name: "Samsung Galaxy S21 Smartphone",
    brand: "Samsung",
    price: 999.99,
    weight: "0.2 kg",
    screenSize: "6.2 inches",
    cpu: "Exynos 2100",
    ram: "12 GB",
    storage: "128 GB",
    color: "Black",
    inStock: true,
    discount: 5,
  },

  {
    name: "LG OLED 4K TV",
    brand: "LG",
    price: 1499.99,
    weight: "18 kg",
    screenSize: "55 inches",
    cpu: "Quad-Core",
    resolution: "4K Ultra HD",
    color: "Silver",
    inStock: false,
    discount: 0,
  },

  {
    name: "Nespresso Coffee Maker",
    brand: "Nespresso",
    price: 199.99,
    weight: "5 kg",
    coffeeType: "Nespresso Capsules",
    color: "Red",
    inStock: true,
    discount: 15,
  },
];

const notInStock = arr.filter((item) => {
  if (item.inStock === false) {
    return item;
  }
});

const sum = (acc, item) => {
  if (notInStock.includes(item)) {
    return acc;
  }
  const totlPrice = acc.totalPrice + item.price;
  const totalDiscount = totlPrice - totlPrice * (item.discount / 100);
  const weight = Number(item.weight.split(" ")[0]);
  const totlWeight = acc.totalWeight + weight;
  acc.totalPrice = totlPrice;
  acc.totalDiscount = totalDiscount;
  if (totalDiscount > 5000) {
    acc.isDeliveryFree = true;
  }
  acc.totalWeight = totlWeight;

  return acc;
};

const allPricesCart = {
  totalPrice: 0,
  totalDiscount: 0,
  totalWeight: 0,
  isDeliveryFree: false,
};

let totalPrice = arr.reduce(sum, allPricesCart);
console.log(arr.length - notInStock.length);

let midDiscount =
  allPricesCart.totalDiscount / (arr.length - notInStock.length);
console.log(Math.round(midDiscount));
console.log(Math.round(allPricesCart.totalWeight));
