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

  ```html
  <img src="https://example.com/image.jpg" alt="Image">

- **404 Not Found**

    If no image is found for the given query, the server responds with a 404 status and a message indicating that the image was not found.
    
      Image not found
## Error Handling

If an error occurs while fetching images from Pixabay, the following will happen:

- The error will be logged to the server console for debugging purposes.
- The user will receive a 404 status with the message `'Image not found'` if no image is returned or if there is an issue with the API request.

### Example Error Response

In case of an error or when no image is found, the server responds with:

```plaintext
Image not found
