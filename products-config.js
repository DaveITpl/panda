// Konfiguracja produktów dla generatora etykiet
const productsData = {
    "Panda": {
        logo: "images/panda-logo.svg",
        products: {
            "Panda Mix Owocowy": {
                type: "S",
                barcode: "5905616103129",
                flavor1: "ZIELONY BANAN",
                flavor2: "WINOGRONO"
            },
            "Panda Longfill Mięta": {
                type: "L",
                barcode: "5905616103129",
                flavor1: "MIĘTA",
                flavor2: "LODOWA"
            },
            "Panda Sól Truskawka": {
                type: "S",
                barcode: "5905616103129",
                flavor1: "TRUSKAWKA",
                flavor2: "ŚMIETANKA"
            },
            "Panda Longfill Wanilia": {
                type: "L",
                barcode: "5905616103129",
                flavor1: "WANILIA",
                flavor2: "KARMEL"
            }
        }
    },
    "Siciliana": {
        logo: "images/siciliana-logo.svg",
        products: {
            "Siciliana Limoncello": {
                type: "L",
                barcode: "5905616103129",
                flavor1: "LIMONCELLO",
                flavor2: "CYTRYNA"
            },
            "Siciliana Sól Cytryna": {
                type: "S",
                barcode: "5905616103129",
                flavor1: "CYTRYNA",
                flavor2: "BAZYLIA"
            },
            "Siciliana Tiramisu": {
                type: "L",
                barcode: "5905616103129",
                flavor1: "TIRAMISU",
                flavor2: "KAWA"
            },
            "Siciliana Sól Bazylia": {
                type: "S",
                barcode: "5905616103129",
                flavor1: "BAZYLIA",
                flavor2: "POMIDOR"
            }
        }
    },
    "Grygusiowa": {
        logo: "images/grygusiowa-logo.svg",
        products: {
            "Grygusiowa Jabłko": {
                type: "L",
                barcode: "5905616103129",
                flavor1: "JABŁKO",
                flavor2: "CYNAMON"
            },
            "Grygusiowa Sól Gruszka": {
                type: "S",
                barcode: "5905616103129",
                flavor1: "GRUSZKA",
                flavor2: "WANILIA"
            },
            "Grygusiowa Malina": {
                type: "L",
                barcode: "5905616103129",
                flavor1: "MALINA",
                flavor2: "JEŻYNA"
            },
            "Grygusiowa Sól Wiśnia": {
                type: "S",
                barcode: "5905616103129",
                flavor1: "WIŚNIA",
                flavor2: "MIGDAŁ"
            },
            "Grygusiowa Sól Jagoda": {
                type: "S",
                barcode: "5905616103129",
                flavor1: "JAGODA",
                flavor2: "MIGDAŁ"
            }
        }
    }
};

// Eksport dla użycia w innych plikach
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
}