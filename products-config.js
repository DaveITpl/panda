// Konfiguracja produktów dla generatora etykiet
const productsData = {
    "Panda": {
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjkwIiBmaWxsPSIjMDAwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIvPgogIDx0ZXh0IHg9IjEwMCIgeT0iMTEwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QQU5EQTwvdGV4dD4KPC9zdmc+",
        products: {
            "Panda Mix Owocowy": {
                type: "S",
                barcode: "5905616103020",
                flavor1: "ZIELONY BANAN",
                flavor2: "WINOGRONO"
            },
            "Panda Longfill Mięta": {
                type: "L",
                barcode: "5905616103021",
                flavor1: "MIĘTA",
                flavor2: "LODOWA"
            },
            "Panda Sól Truskawka": {
                type: "S",
                barcode: "5905616103022",
                flavor1: "TRUSKAWKA",
                flavor2: "ŚMIETANKA"
            },
            "Panda Longfill Wanilia": {
                type: "L",
                barcode: "5905616103023",
                flavor1: "WANILIA",
                flavor2: "KARMEL"
            }
        }
    },
    "Siciliana": {
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2ZmNjk0MyIgcng9IjIwIi8+CiAgPHRleHQgeD0iMTAwIiB5PSI4NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjIyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U0lDSUxJQU5BPC90ZXh0PgogIDx0ZXh0IHg9IjEwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkl0YWxpYW4gU3R5bGU8L3RleHQ+Cjwvc3ZnPg==",
        products: {
            "Siciliana Limoncello": {
                type: "L",
                barcode: "5905616103030",
                flavor1: "LIMONCELLO",
                flavor2: "CYTRYNA"
            },
            "Siciliana Sól Cytryna": {
                type: "S",
                barcode: "5905616103031",
                flavor1: "CYTRYNA",
                flavor2: "BAZYLIA"
            },
            "Siciliana Tiramisu": {
                type: "L",
                barcode: "5905616103032",
                flavor1: "TIRAMISU",
                flavor2: "KAWA"
            },
            "Siciliana Sól Bazylia": {
                type: "S",
                barcode: "5905616103033",
                flavor1: "BAZYLIA",
                flavor2: "POMIDOR"
            }
        }
    },
    "Grygusiowa": {
        logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjkwIiBmaWxsPSIjMjhhNzQ1IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIvPgogIDx0ZXh0IHg9IjEwMCIgeT0iOTAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdSWUdVU0lPV0E8L3RleHQ+CiAgPHRleHQgeD0iMTAwIiB5PSIxMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TmF0dXJhbDwvdGV4dD4KPC9zdmc+",
        products: {
            "Grygusiowa Jabłko": {
                type: "L",
                barcode: "5905616103040",
                flavor1: "JABŁKO",
                flavor2: "CYNAMON"
            },
            "Grygusiowa Sól Gruszka": {
                type: "S",
                barcode: "5905616103041",
                flavor1: "GRUSZKA",
                flavor2: "WANILIA"
            },
            "Grygusiowa Malina": {
                type: "L",
                barcode: "5905616103042",
                flavor1: "MALINA",
                flavor2: "JEŻYNA"
            },
            "Grygusiowa Sól Wiśnia": {
                type: "S",
                barcode: "5905616103043",
                flavor1: "WIŚNIA",
                flavor2: "MIGDAŁ"
            },
            "Grygusiowa Sól Jagoda": {
                type: "S",
                barcode: "5905616103043",
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