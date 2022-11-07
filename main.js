//Personal Checklist:
//photo sample is 12 for more appealing look
//HIDE API's for security
//When submitting username clicking search or pressing enter sends same 12 photos again
//FIX HAVING TO REFRESH FOR EACH SEARCH (THIS IS DONE SIMPLY WITH A FRAMEWORK. setting the search cache to an empty array like  "const searchResult = []")
const searchButton = document.querySelector(".search")

class Flickr_Search{
    constructor(){
        this.API_KEY = '32c2cdff2ab364d822df2cc75faba537';
        this.galleryDiv = document.querySelector('.gallery');
        this.searchForm = document.querySelector('.header form');
        this.loadMore = document.querySelector('.load-more');
        this.searchButton = document.querySelector('.search form')
        this.eventHandle();

    }
    eventHandle(){
        document.addEventListener('DOMContentLoaded', ()=>{

        });
    
        this.searchForm.addEventListener('submit', (e)=>{
            this.getSearchedUsername(e)
        });
     
        this.loadMore.addEventListener('click', (e)=>{
            this.loadMore(e)
        })
    }
    
    async fetchResponse(baseURL){
        const response = await fetch(baseURL, {
          });
          const data = await response.json();
          return data;
    }
    generateHTML(photos){
        photos.forEach(photo =>{
            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `
            <a href ='#'>
            <img src='https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg'>
            </a>
            `;
            this.galleryDiv.appendChild(item)
            
        });
    }
 
    async getSearchedUsername(e){
          e.preventDefault();
        
        const searchValue = e.target.querySelector('input').value;
        const baseURL = `https://www.flickr.com/services/rest/?method=flickr.people.findByUsername&api_key=32c2cdff2ab364d822df2cc75faba537&username=${searchValue}&format=json&nojsoncallback=1`
        const data = await this.fetchResponse(baseURL);
        console.log(data.user.id)
      
        const baseURL2 = await `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=32c2cdff2ab364d822df2cc75faba537&user_id=${data.user.id}&per_page=12&format=json&nojsoncallback=1`
        const userData = await this.fetchResponse(baseURL2)
        console.log(userData)
        
        this.generateHTML(userData.photos.photo)

    
    }

    
    }

const gallery = new Flickr_Search;  