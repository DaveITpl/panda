# panda

## Generator Etykiet 6x4"

Aplikacja do generowania etykiet produktów w formacie 6x4 cale, przystosowana do druku na drukarkach etykiet.

### Funkcjonalności:
- Wybór marki produktu (Panda, Siciliana, Grygusiowa)
- Automatyczne przypisywanie logo, typu produktu i smaków
- Generowanie kodów kreskowych EAN13
- Podgląd etykiety w czasie rzeczywistym
- Pobieranie etykiet jako PNG
- Drukowanie etykiet

### Jak używać:
1. Wybierz markę produktu z pierwszej listy
2. Wybierz konkretny produkt z drugiej listy
3. Wprowadź datę ważności i numer partii
4. Kliknij "Aktualizuj Etykietę"
5. Pobierz lub wydrukuj gotową etykietę

### Deployment:
Aplikacja jest automatycznie wdrażana na GitHub Pages przy każdym push do brancha `main`.

### Struktura produktów:
Każdy produkt zawiera:
- Typ (S - Sól nikotynowa, L - Longfill)
- Kod kreskowy EAN13
- Dwa smaki produktu
- Logo marki