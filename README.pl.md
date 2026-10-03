# Agent Scanner

**Zwiększaj efektywność, kontroluj koszty i wspieraj bezpieczeństwo pracy z agentami AI na podstawie danych z rzeczywistych sesji.**

[Otwórz demo w przeglądarce](https://mknieszner.github.io/agent-scanner/) · [English](README.md) · **Polski**

## Podsumowanie zarządcze

Agent Scanner pomaga zespołom programistycznym rozwijać adopcję AI w sposób, który można sprawdzać i doskonalić. Wspiera pięć decyzji: **gdzie zwiększyć efektywność, co optymalizować, które dane i działania wymagają bliższego przeglądu, jak konfiguracja repozytorium odpowiada standardom zespołu oraz które możliwości agentów są faktycznie wykorzystywane.**

Łączy dwa źródła informacji: **zapisane sesje GitHub Copilot** i **konfigurację AI repozytorium**. Analiza sesji pokazuje przechwycony przebieg pracy, a przegląd konfiguracji dokumentuje przygotowane do niej instrukcje, skills, agentów i narzędzia. Razem dają programistom, liderom technicznym i osobom odpowiedzialnym za adopcję AI konkretną podstawę do wyboru usprawnień.

| Cel | Rezultat, który wspiera Agent Scanner | Dane do podjęcia decyzji |
|---|---|---|
| **Zwiększanie efektywności** | Znajdowanie powtarzanej pracy i wąskich gardeł wartych sprawdzenia; wybór zmian w instrukcjach zadania, narzędziach lub delegowaniu. | Rundy modelu, czasy wywołań, powtórzone użycia narzędzi, aktywność subagentów i kompaktowanie. |
| **Optymalizacja zużycia i kosztów** | Zrozumienie, gdzie zużywane są tokeny i Copilot AI credits, oraz ustalenie priorytetów prób optymalizacyjnych. | Bilans głównego agenta, subagentów i kompaktowania; input, output, pomiary cache i jawnie oznaczone estymacje. |
| **Wsparcie bezpieczeństwa** | Przegląd informacji i operacji udostępnianych agentom oraz wskazanie miejsc wymagających ograniczenia zakresu danych lub narzędzi. | Przechwycone requesty modelu, argumenty i wyniki narzędzi oraz deklaracje instrukcji i MCP w repozytorium. |
| **Przegląd standardu pracy** | Rozpoznanie luk konfiguracji i przygotowanie wspólnej podstawy pracy z agentami. | Inwentaryzacja instrukcji, skills, agentów, MCP, promptów i obsługiwanych ustawień IDE, z podglądem źródeł i raportem PDF. |
| **Badanie adopcji AI** | Rozróżnienie skonfigurowanych możliwości od zaobserwowanego użycia; wskazanie obszarów wymagających lepszej konfiguracji, wskazówek lub szkoleń. | Dowody z sesji: mechanizmy dostępne, przekazane w requestach modelu i użyte, z jawnymi brakami przechwycenia. |

Scanner dostarcza danych do decyzji człowieka. Poprawa efektywności i zużycia zależy od wdrożonych zmian oraz ocenianych zadań; obszar bezpieczeństwa wspiera przegląd przechwyconej aktywności, bez certyfikowania zgodności ani audytu podatności.

### Od obserwacji do usprawnienia

Przejrzyj reprezentatywną sesję, wskaż konkretny problem i zmień jeden element sposobu pracy: instrukcję, opis skilla, dobór narzędzi lub sposób delegowania. Następnie zarejestruj porównywalne zadanie i sprawdź jego wyniki, zużycie oraz przebieg. Scanner udostępnia materiał do takiego porównania; jakość rezultatu zadania i wartość kompromisów nadal wymagają Twojej oceny.

## Sprawdź dane stojące za decyzjami

Agent Scanner zamienia **pliki sesji OpenTelemetry z GitHub Copilot** w interaktywne widoki pracy agenta i inwentaryzuje wybrane pliki konfiguracji AI repozytoriów.

Publiczne demo przetwarza wczytane pliki w przeglądarce. Nie wymaga uruchomienia backendu ani klucza API do AI. Interfejs aplikacji jest obecnie po polsku.

<!-- SCREENSHOT 01: screenshots/session-workflow.png
Główny screen: Mapa pracy z rundami głównego agenta i powiązanym subagentem.
Użyj syntetycznej telemetrii. Pokaż czytelną interakcję z warstwą Kontekst lub Tokeny.
Po przygotowaniu dodaj obraz w tym miejscu; nie publikuj niedziałającego linku.
-->

## Analizuj sesje agenta

### Prześledź pracę agenta

**Mapa pracy** łączy rundy modelu, działania narzędzi, powiązanych subagentów i kompaktowanie kontekstu. Przełączaj warstwy kontekstu, tokenów i credits, wybierz interakcję i otwórz dane stojące za konkretną rundą.

Widok **Koszt i przebieg** zestawia bilans sesji z osią czasu. Wywołania głównego agenta, powiązani subagenci i kompaktowanie są rozliczane osobno, bez podwójnego sumowania zagnieżdżonych wywołań. Czas wywołań modeli pozostaje oddzielony od czasu trwania całej sesji.

<!-- SCREENSHOT 02: screenshots/session-cost-timeline.png
Koszt i przebieg: rozwinięty bilans i kilka rund. Pokaż głównego agenta,
subagenta lub kompaktowanie oraz kolumny tokenów, cache i credits.
-->

### Sprawdź kontekst i narzędzia

Otwórz rundę, aby obejrzeć przechwycone instrukcje, wiadomości, requesty i odpowiedzi modelu oraz argumenty i wyniki narzędzi. Przy kompaktowaniu sprawdzisz request i podsumowanie; porównanie kontekstu przed i po pojawia się tylko wtedy, gdy późniejsza telemetria potwierdza odbiór podsumowania.

Zestawienie narzędzi oddziela dostępne definicje od zaobserwowanego użycia. Możesz obejrzeć wersje definicji, znaleźć powtórzone wywołania z tymi samymi kanonicznymi argumentami i zobaczyć, w których rundach wystąpiły. Pomaga to badać obciążenie kontekstu i powtarzaną pracę bez uznawania każdego powtórzenia za błąd.

<!-- SCREENSHOT 03: screenshots/session-round-details.png
Szczegóły rundy: czytelny request lub wynik narzędzia obok osi czasu.
Alternatywnie zestawienie narzędzi ze szczegółami powtórzonych wywołań.
-->

### Zobacz, które mechanizmy zostały użyte

**Podsumowanie** pokazuje dowody obecności instrukcji repozytorium, skills, custom agentów, narzędzi MCP, subagentów i kompaktowania. Rozróżnia mechanizmy znalezione w przechwyconym kontekście, definicje przekazane w requestach modelu oraz zaobserwowane użycie. Niepełne przechwycenie danych pozostaje widoczne i nie jest traktowane jako dowód braku mechanizmu.

<!-- SCREENSHOT 04: screenshots/session-capabilities.png
Podsumowanie: karty mechanizmów i rozwinięte wiersze Dostępne a użyte,
na tej samej syntetycznej sesji.
-->

Do dokładniejszego sprawdzenia służą **Dane techniczne**: przeszukiwalna lista spanów, zapisane atrybuty i surowa telemetria. Oryginalny materiał pozostaje dostępny obok widoków analitycznych.

## Przejrzyj konfigurację repozytorium

Wybierz lokalny folder repozytorium albo uruchom **AI Agent Scanner Capture** na stronie repozytorium w GitLabie. Bookmarklet odczytuje wybrane pliki konfiguracji przez REST API tej instancji GitLaba, korzystając z Twojej sesji w przeglądarce, i przekazuje je do Scannera.

- Przeglądaj instrukcje, skills, custom agentów, definicje MCP, prompty oraz obsługiwane ustawienia AI w VS Code i JetBrains.
- Otwieraj podgląd zapisanych konfiguracji i linki do źródeł, gdy dostępne są metadane repozytorium.
- Zachowuj migawki lokalnie i wracaj do nich później.
- Generuj PDF z metadanymi repozytorium, nawigacją po kategoriach, szczegółami konfiguracji, fragmentami źródeł i odnośnikami.

Pliki jedynie podlinkowane z konfiguracji są prezentowane jako odnośniki; Scanner nie pobiera rekurencyjnie ich treści. Raport obejmuje wybraną konfigurację AI, nie audyt całego kodu. Polityki przeglądarkowe GitLaba mogą ograniczyć działanie bookmarkleta.

<!-- SCREENSHOT 05: screenshots/repository-report.png
Raport repozytorium: instrukcje, skills i MCP, z jedną rozwiniętą konfiguracją.
Użyj syntetycznego playgrounda. Opcjonalnie screenshots/repository-pdf.png:
okładka PDF i strona szczegółów zestawione w jednym obrazie.
-->

## Wypróbuj na sesji Copilota

1. [Otwórz Agent Scanner](https://mknieszner.github.io/agent-scanner/).
2. Skopiuj konfigurację eksportu do pliku ze strony startowej do **VS Code User Settings (JSON)**. Ustaw własną ścieżkę w `github.copilot.chat.otel.outfile`, przeładuj VS Code i popracuj z Copilotem.
3. Wybierz **Wczytaj plik Copilot OTel JSONL** lub ikonę importu przy nagłówku **Sesje**. Wskaż wygenerowany plik `.jsonl` albo `.ndjson`, do **64 MiB**.
4. Sprawdź podgląd, zaznacz jedną lub więcej głównych rozmów i zatwierdź. Scanner dołączy ich jednoznacznie powiązanych subagentów i wywołania pomocnicze.
5. Otwórz **Podsumowanie**, **Koszt i przebieg**, **Mapę pracy** i **Dane techniczne**.

Szczegółowe widoki treści zależą od tego, co przechwycił eksporter. Przechwytywanie treści może obejmować kod, prompty i wyniki narzędzi; włącz je dla materiału, który zamierzasz rejestrować.

Importer sesji obsługuje **Copilot OTel JSONL**, nie dowolne pliki OTLP. Eksport sesji ma własny format JSON Scannera do inspekcji i udostępniania; nie można go obecnie wczytać importerem Copilot JSONL. Zachowaj oryginalny JSONL, jeśli chcesz ponownie zaimportować sesję.

## Demo w przeglądarce a pełna aplikacja

| Funkcja | Publiczne demo w przeglądarce | Pełna aplikacja |
|---|---|---|
| Import plików sesji, oś czasu, mapa pracy, narzędzia i surowe dane | Dostępne lokalnie | Dostępne |
| Inwentaryzacja repozytorium, folder lokalny / GitLab i PDF | Dostępne lokalnie | Dostępne |
| Przechowywanie danych | IndexedDB tej przeglądarki | Lokalna baza backendu |
| Odbieranie telemetrii przez OTLP/HTTP | Niedostępne | Dostępne po skonfigurowaniu backendu |
| AI Hub: klasyfikacja działań, rozmowa o sesji i doradztwo optymalizacyjne | Niedostępne | Jawnie uruchamiane przez skonfigurowaną integrację Copilot |
| Ocena AI konfiguracji repozytorium | Niedostępna | Jawnie uruchamiana po wyborze wejścia i modelu |

Publiczne demo działa bez inferencji modelu. Akcje AI pełnej aplikacji są oddzielone od deterministycznych widoków sesji i mogą przekazywać wybrany materiał do Copilota. To repozytorium publikuje dystrybucję demo; nie zawiera źródeł ani pakietu instalacyjnego pełnej aplikacji.

## Jak czytać wyniki

- **Pomiary, wyliczenia i estymacje są rozróżniane.** `≈` oznacza estymację; brak pomiaru nie jest zerem.
- **Credits to GitHub Copilot AI credits.** Nie są walutą ani rachunkiem rozliczeniowym.
- **Zakres wniosków wyznaczają zapisane dane.** Scanner nie odtwarza brakujących wiadomości ani ukrytego reasoning i nie jest dokładnym tokenizerem.
- **Telemetria nie oznacza żywego połączenia z IDE.** Sesja opisuje przechwycone i zaimportowane dane; dostępność narzędzia nie dowodzi jego wykonania, a samo żądanie użycia nie dowodzi sukcesu.

## Dane i prywatność

W demo parsowanie i analiza sesji odbywają się lokalnie, z pracą delegowaną do Workera przeglądarki i zapisem w IndexedDB. Wczytane sesje i pliki repozytorium nie są wysyłane do backendu Scannera ani usługi AI. Pobranie aplikacji wymaga połączenia z GitHub Pages, a import z GitLaba wykonuje uwierzytelnione żądania do przeglądanej instancji GitLaba.

Zapisane dane należą do tego adresu strony i profilu przeglądarki. Usunięcie danych witryny, czyszczenie magazynu przez przeglądarkę albo zmiana profilu może spowodować utratę dostępu do nich. Sesje i migawki repozytoriów można usuwać w aplikacji.

Telemetria i eksporty mogą zawierać kod, prompty, ścieżki plików, argumenty i wyniki. Rozpoznane sekrety w konfiguracji repozytorium są maskowane, ale nie gwarantuje to anonimizacji. Przed udostępnieniem sprawdź zawartość JSON-a, PDF-a lub screena.

## O tym repozytorium

To **publiczne repozytorium dystrybucji** Agent Scanner. Gałąź `gh-pages` zawiera statyczne demo, tę dokumentację oraz — po dodaniu — screeny ilustrujące funkcje. Kod źródłowy aplikacji jest utrzymywany osobno w prywatnym repozytorium.

[Uruchom Agent Scanner](https://mknieszner.github.io/agent-scanner/)
