# basic_api
## Overview

This Express.js application provides an endpoint to search for images using the Pixabay API. Users can input a search query to retrieve the URL of the first image found, which is then displayed using EJS templating.

## Base URL

`http://localhost:3000`

## Endpoints

### GET /:query

Fetches an image based on the search query provided in the URL parameter.

#### Parameters

- `query` (string): The search query used to find images. This parameter is extracted from the URL.

#### Responses

- **200 OK**

  If an image is found, the server responds with an HTML page that displays the image.

  **Example:**

  ```html
  <img src="https://example.com/image.jpg" alt="Image">
