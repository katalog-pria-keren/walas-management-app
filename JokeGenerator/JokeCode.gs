/**
 * RANDOM JOKE GENERATOR
 * Using Official Joke API (https://official-joke-api.appspot.com)
 * Google Apps Script Version
 */

// ============================================
// MAIN ENTRY POINT - LOAD WEB APP
// ============================================

function doGet() {
  const htmlOutput = HtmlService.createHtmlOutputFromFile('JokeUI');
  htmlOutput.setWidth(800).setHeight(600);
  return htmlOutput
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// ============================================
// JOKE API FUNCTIONS
// ============================================

/**
 * Fetch random joke dari Official Joke API
 */
function getRandomJoke() {
  try {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    const responseCode = response.getResponseCode();
    
    if (responseCode !== 200) {
      return { 
        success: false, 
        message: 'Failed to fetch joke. Status: ' + responseCode 
      };
    }
    
    const data = JSON.parse(response.getContentText());
    
    return {
      success: true,
      joke: {
        type: data.type,
        setup: data.setup,
        punchline: data.punchline,
        id: data.id
      }
    };
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return { 
      success: false, 
      message: 'Error fetching joke: ' + error.toString() 
    };
  }
}

/**
 * Fetch joke dari kategori tertentu
 * @param {string} category - Kategori: 'general', 'knock-knock', 'programming'
 */
function getJokeByCategory(category) {
  try {
    const validCategories = ['general', 'knock-knock', 'programming'];
    
    if (!validCategories.includes(category)) {
      return { 
        success: false, 
        message: 'Invalid category. Valid: general, knock-knock, programming' 
      };
    }
    
    const url = `https://official-joke-api.appspot.com/jokes/${category}/random`;
    const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    const responseCode = response.getResponseCode();
    
    if (responseCode !== 200) {
      return { 
        success: false, 
        message: 'Failed to fetch joke from category: ' + category 
      };
    }
    
    const data = JSON.parse(response.getContentText());
    
    // Handle array response (multiple jokes)
    const joke = Array.isArray(data) ? data[0] : data;
    
    return {
      success: true,
      joke: {
        type: joke.type,
        setup: joke.setup,
        punchline: joke.punchline,
        id: joke.id,
        category: category
      }
    };
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return { 
      success: false, 
      message: 'Error fetching joke: ' + error.toString() 
    };
  }
}

/**
 * Get 10 random jokes
 */
function getTenRandomJokes() {
  try {
    const url = 'https://official-joke-api.appspot.com/jokes/ten';
    const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    const responseCode = response.getResponseCode();
    
    if (responseCode !== 200) {
      return { 
        success: false, 
        message: 'Failed to fetch jokes. Status: ' + responseCode 
      };
    }
    
    const data = JSON.parse(response.getContentText());
    const jokes = [];
    
    data.forEach(joke => {
      jokes.push({
        type: joke.type,
        setup: joke.setup,
        punchline: joke.punchline,
        id: joke.id
      });
    });
    
    return {
      success: true,
      jokes: jokes,
      count: jokes.length
    };
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return { 
      success: false, 
      message: 'Error fetching jokes: ' + error.toString() 
    };
  }
}

/**
 * Get joke by ID
 * @param {number} jokeId - ID joke
 */
function getJokeById(jokeId) {
  try {
    const url = `https://official-joke-api.appspot.com/jokes/${jokeId}`;
    const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    const responseCode = response.getResponseCode();
    
    if (responseCode !== 200) {
      return { 
        success: false, 
        message: 'Joke not found. ID: ' + jokeId 
      };
    }
    
    const data = JSON.parse(response.getContentText());
    
    return {
      success: true,
      joke: {
        type: data.type,
        setup: data.setup,
        punchline: data.punchline,
        id: data.id
      }
    };
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return { 
      success: false, 
      message: 'Error fetching joke: ' + error.toString() 
    };
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get available joke categories
 */
function getAvailableCategories() {
  return {
    success: true,
    categories: [
      { value: 'general', label: 'General' },
      { value: 'knock-knock', label: 'Knock Knock' },
      { value: 'programming', label: 'Programming' }
    ]
  };
}

/**
 * Get API info
 */
function getApiInfo() {
  return {
    success: true,
    info: {
      name: 'Official Joke API',
      url: 'https://official-joke-api.appspot.com',
      description: 'Free public API for random jokes',
      rateLimit: 'No rate limit',
      categories: ['general', 'knock-knock', 'programming']
    }
  };
}
