// Option A: Add the CleverTap JavaScript Library Manually to Your Website
var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({"id": "TEST-Z88-WKZ-956Z"});
clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: true}); //set the flag to true, if the user agrees to share their IP data
(function () {
        var wzrk = document.createElement('script');
        wzrk.type = 'text/javascript';
        wzrk.async = true;
        wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/clevertap.min.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wzrk, s);
})();
function sendClevertapEvent() {
    var clevertapUserLogin = clevertap.onUserLogin.push({
        "Site": {
        "Name": "Jose Luis Duarte",            // String
        "Identity": 573142797659,              // String or number
        "Email": "jidesh+joseduarte@clevertap.com",         // Email address of the user
        "Phone": "+573142797659",           // Phone (with the country code)
        "Gender": "M",                     // Can be either M or F
        "DOB": new Date(),                 // Date of Birth. Date object

    // optional fields. controls whether the user will be sent email, push etc.
        "MSG-email": true,                // Disable email notifications
        "MSG-push": true,                  // Enable push notifications
        "MSG-sms": false,                   // Enable sms notifications
        "MSG-whatsapp": false,              // Enable WhatsApp notifications
        
        }
    });

    if(clevertapUserLogin === 0) {
        // Event Product viewed
        var clevertapEventPush = clevertap.event.push("Product viewed", {
            "Product ID": 1,
            "Product Image": "https://d35fo82fjcw0y8.cloudfront.net/2018/07/26020307/customer-success-clevertap.jpg",
            "Product Name": "CleverTap",
        });

        if(clevertapEventPush === 0) {
            alert("Event sent successfully!!")
        }
        
        // Requesting User Permissions
        const clevertapNotification = clevertap.notifications.push({
            "titleText": 'Would you like to receive Push Notifications?',
            "bodyText": 'We promise to only send you relevant content and give you updates on your transactions',
            "okButtonText": 'Sign me up!',
            "rejectButtonText": 'No thanks :(',
            "okButtonColor": '#F28046',
            "askAgainTimeInSeconds":5
        });

    }
}
