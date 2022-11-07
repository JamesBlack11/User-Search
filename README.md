# User-Search
A single-page application built from Vanilla Javascript. Use LiveServer to view and use the application.

 I implemented the Flickr API to call usernames to get their NSID. From there I inserted that JSON NSID data into another API endpoint to call on the Flickr users photos. They are appended to a galleryDiv that is displayed displayed on a grid of 12 user photos. With the benefit of more time on this project there are a couple things I would have done differently on this project. I now have a better understanding of how frameworks make developers' lives so much easier. 
 My most glaring bugs are: 
 Having to refresh with each search, and the second one being if the user clicks search or presses enter more than once my application will upload the same 12 photos again and again. I believe that the two bugs are related to the generateHTML method I created. The method creates new divs for the user's photos, the method then appends the photos to the newly created divs. I tried to make it so the search cache clears/reloads page on each search click/submit, however, I couldn't get it quite right.
 
 I also need to hide my API keys in the next commit with a .env file.
 
