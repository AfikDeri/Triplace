export default {
    fbAsyncInit: function(){
        FB.init({
             appId: '1483322828345076',
             status: true,
             cookie: true,
             xfbml: true
         });
    },

    fbLogin: function(){

        this.fbAsyncInit();

        return new Promise((resolve, reject) => {
            let fbUserData;

            FB.login((response) => {
                console.log
                 if (response.status != "unknown") {
                     FB.api('/me?fields=name,picture,email,first_name,last_name,hometown', (response) => {
                         fbUserData = response;
                         fbUserData["token"] = FB.getAccessToken();
                         fbUserData["image"] = "http://graph.facebook.com/" + response.id + "/picture?type=normal";
                         fbUserData["imageName"] = response.id + ".png";

                         resolve(fbUserData);
                     });
                 }
                 else {
                     reject();
                 }
            },{scope: 'email,user_location,user_hometown'});
        });
    }
}
