interface PhoneNumberDictionary {
    [phone: string]: {                  // phone, office, home ... different types
      num: number;
    };
  }
  
  interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;      // interface within interface
  }
  
  /*  declare enum for findContactByPhone function */
  enum PhoneType {      
    Home = 'home',
    Office = 'office',
    Studio = 'studio'
  }

export { Contact, PhoneType, PhoneNumberDictionary };