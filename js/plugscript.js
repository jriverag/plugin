function PickContact()
{
    navigator.contacts.pickContact(function(contact)
        {
            var contactinfo = ""
            if (contact.displayName !== null)
            {
                contactinfo += contact.displayName + "<br>";
            }
            else
            {
                contactinfo += contact.name.givenName + " " + contact.name.familyName + "<br>";
            }
            var count = 0;
            if (contact.phoneNumbers !== null)
            {
                for (count=0; count < contact.phoneNumbers.length; count++)
                {
                    contactinfo += contact.phoneNumbers[count].type + ": " + contact.phoneNumbers[count].value + "<br>";
                }
            }
            if (contact.emails !== null)
            {
                for(count=0; count < contact.emails.length; count++)
                {
                    contactinfo += contact.emails[count].type + ": " + contact.emails[count].value + "<br>";
                }
            }
            document.getElementById("contactname").innerHTML = contactinfo;
            alert("The following contact has been selected: " + JSON.stringify(contact));
        }, function(err)
        {
            alert("Error: " + err);
        }
        );
}

function onPhotoDataSuccess(imagedata)
{
    var picture = document.getElementById("smallImage");
    //smallImage.style.display = 'block';
    //picture.src = "data:image/jpeg;base64," + imagedata;
    picture.src = imageData;
}

function onPhotoURISuccess(imageURI)
{
    var largeImage = document.getElementById("largeImage");
    //largeImage.style.display = 'block';
    largeImage.src = imageURI;
}

function CapturePhoto()
{
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, destinationtype: destinationtype.FILE_URI });
    
}

function onFail(message)
{
    alert("Failed because: " + message);
}