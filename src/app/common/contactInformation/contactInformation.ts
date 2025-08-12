class Address {
    static readonly street = 'Bahnhofstr. 16';
    static readonly postcode = '91257';
    static readonly city = 'Pegnitz';
    static readonly region = 'Bayern';
    static readonly country = 'DE';
}
export class ContactInformation { 

    static readonly telephoneLink = 'tel:092418822';
    static readonly telephoneDisplay = '09241 8822';
    static readonly email = 'info@zahnarztpraxis-dumbach.de';
    static readonly emailLink = `mailto:${ContactInformation.email}`;
    static readonly domain = 'zahnarztpraxis-dumbach.de';
    static readonly website = 'https://zahnarztpraxis-dumbach.de';
    static readonly address = Address

}
