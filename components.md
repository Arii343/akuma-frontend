# Anime App

## Data layer

### Data

- Collection of Animes
  - Anime:
    - id: number
    - englishTitle: string
    - japaneseTitle: string
    - releaseYear: number
    - rating: string
    - demographics: array["Shounen","Seinen"]
    - genres: array["Action","Drama"]
    - image: string
    - score: number
    - rank: number
    - popularity: number
    - type: string
    - source: string
    - episodes: number
    - status: string
    - duration: string
    - synopsis: string

### Modifications

- createAnime()
- removeAnime()
- updateAnime()
- loadAnimes()

## Components

### Store

#### State

- Collection of Animes

#### AnimesReducer

- createAnime(anime)
- removeAnime(id)
- updateAnime(anime)
- loadAnimes()
- loadAnime(id)

### App

- Receives an external collection of Animes
- Receives a collection of Animes
- Receives dispatch()
- Shows the header with a logo
- Shows the navbar
- Renders a loginForm
- Renders a createAnimeForm
- Renders a editAnimeForm
- Renders a AnimeList component
- Renders a animesDetail component
- Renders a notFound page

### AnimeForm

- State:
  - Anime
- handleSubmit()
- Receives dispatch()
- Receives an optional Anime to update
- Shows an input text for each property of the Anime
- Renders a Button component
  - text: "create" / "save"
  - actionOnClick: handleSubmit

### AnimeList

- Receives a collection of Animes
- Renders as many AnimeCard as Animes are in the collection

### AnimeCard

- Receives a Anime
- Receives dispatch()
- handleClick()
- Shows the Anime's name inside a heading
- Shows the Anime's image
- If role Admin:
  -Renders a Button with:
  - icon: "edit"
  - actionOnClick: handleClick

### Button

- Receives a text
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked

### Feedback

- Renders the model with positive or negative feedback

### Pages

## LoginPage

-Renders LoginForm
-Receives a dispatch

## AnimesPage

- Receives dispatch
- call getAnimes() from useAnimes custom hook and dispatch loadRoutesActionCreator()
- Receives a collection of animes
- Render animeList

## DetailsPage

- Show edit button and delete button
- Call getAnimeById from useAnimes custoom hook
- Shows English title, Japanese title, release year, rating, demographics, genres, image, score, rank, popularity, type, source, episodes, status, duration, synopsis

## CreateFormPage

- Renders AnimeForm component
- Receives dispatch

## EditFormPage

- Renders AnimeForm component
- Receives dispatch
