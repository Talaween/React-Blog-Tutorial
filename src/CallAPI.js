import axios from 'axios';
import config from './config';

//this class will have all the methods that we need to connect to the API
class CallAPI {

    login(data, callback){

        if(data === null){
            callback("no login data were provided");
            return;
        }

        let url = config.logins;
        axios.get(url,{ 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type' : 'application/json', 
                'Authentication' : 'Basic ' + window.btoa(data.username + ':' + data.password)       
            }
        }).then(res => {
            
            console.log(res.data);

            if(res.status === 201){

                callback(null, res.data);
            }

        }).catch( (error) => {
            console.log("the following error has occured:" + error);
            callback(error);
        });

    }
    logout(data){

    }
    addUser(data){

    }
    getUser(data){

    }
    getUsers(data){

    }
    updateUSer(data){

    }
    deleteUser(data){

    }
    getBlogs(pageLength, pageNumber, callback){
        
        let url = config.api_get_blogs;
        axios.get(url,{ 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type' : 'application/json'        
            }
        }).then(res => {
            
            console.log(res.data);
            callback(res.data);

        }).catch( (error) => {
            console.log("the following error has occured:" + error);
        });
    }
    getBlog(id){

    }
    createBlog(data){

    }
    updateBlog(data){

    }
    deleteBlog(data){

    }
    addFavourite(data){

    }
    deleteFavourite(data){

    }
    getFavourites(data){
        
    }
    
}

export default CallAPI;

