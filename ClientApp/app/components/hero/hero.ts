
export interface Power { 
  name: string;
}

export interface Address { 
  street: string; 
  city: string; 
}

export interface Hero {
  name: string;
  address: Address; 
  powers: Power[];
}