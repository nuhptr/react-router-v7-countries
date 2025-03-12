interface CountriesType {
    name: Name
    tld: string[]
    cca2: string
    ccn3: string
    cca3: string
    independent: boolean
    status: string
    unMember: boolean
    currencies: Currencies
    idd: Idd
    capital: string[]
    altSpellings: string[]
    region: string
    languages: Languages
    translations: { [key: string]: Translation }
    latlng: number[]
    landlocked: boolean
    area: number
    demonyms: Demonyms
    flag: string
    maps: Maps
    population: number
    car: Car
    timezones: string[]
    continents: string[]
    flags: Flags
    coatOfArms: CoatOfArms
    startOfWeek: string
    capitalInfo: CapitalInfo
}

interface Name {
    common: string
    official: string
    nativeName: NativeName
}

interface CapitalInfo {
    latlng: number[]
}

interface Car {
    signs: string[]
    side: string
}

interface CoatOfArms {}

interface Currencies {
    SHP: Shp
}

interface Shp {
    name: string
    symbol: string
}

interface Demonyms {
    eng: Eng
}

interface Eng {
    f: string
    m: string
}

interface Flags {
    png: string
    svg: string
}

interface Idd {
    root: string
    suffixes: string[]
}

interface Languages {
    eng: string
}

interface Maps {
    googleMaps: string
    openStreetMaps: string
}

interface NativeName {
    eng: Translation
}

interface Translation {
    official: string
    common: string
}
