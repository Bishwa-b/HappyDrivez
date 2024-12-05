export interface Car {
  id: string;
  name: string;
  description: string;
  image: string;
  logo: string;
  price: string;
  price7Days: string;
  price15Days: string;
  price30Days: string;
  extraKm: string;
  extraHour: string;
  rating: string;
  phoneNumber: string;
  features: {
    seats: string;
    transmission: string;
    fuelType: string;
    color: string;
  };
}
