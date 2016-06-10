function PickContact()
{
    navigator.contacts.pickcontacts(FoundContact(contact),NoContact(err));
    //navigator.contacts.pickContact(function(contact)
    //    {
    //        var contactinfo = ""
    //        if (contact.displayName !== null)
    //        {
    //            contactinfo += contact.displayName + "<br>";
    //        }
    //        else
    //        {
    //            contactinfo += contact.name.givenName + " " + contact.name.familyName + "<br>";
    //        }
    //        var count = 0;
    //        if (contact.phoneNumbers !== null)
    //        {
    //            for (count=0; count < contact.phoneNumbers.length; count++)
    //            {
    //                contactinfo += contact.phoneNumbers[count].type + ": " + contact.phoneNumbers[count].value + "<br>";
    //            }
    //        }
    //        if (contact.emails !== null)
    //        {
    //            for(count=0; count < contact.emails.length; count++)
    //            {
    //                contactinfo += contact.emails[count].type + ": " + contact.emails[count].value + "<br>";
    //            }
    //        }
    //        document.getElementById("contactname").innerHTML = contactinfo;
    //        alert("The following contact has been selected: " + JSON.stringify(contact));
    //    }, function(err)
    //    {
    //        alert("Error: " + err);
    //    }
    //    );
}

function FoundContact(contactitem)
{
    var contactinfo = "";
    if (contactitem.displayName !== null)
    {
        contactinfo += contactitem.displayName + "<br>";
    }
    else
    {
        contactinfo += contactitem.name.givenName + " " + contactitem.name.familyName + "<br>";
    }
    var count = 0;
    if (contactitem.phoneNumbers !== null)
    {
        for (count=0; count < contactitem.phoneNumbers.length; count++)
        {
            contactinfo += contactitem.phoneNumbers[count].type + ": " + contactitem.phoneNumbers[count].value + "<br>";
        }
    }
    if (contactitem.emails !== null)
    {
        for(count=0; count < contactitem.emails.length; count++)
        {
            contactinfo += contactitem.emails[count].type + ": " + contactitem.emails[count].value + "<br>";
        }
    }
    document.getElementById("contactname").innerHTML = contactinfo;
    alert("The following contact has been selected: " + JSON.stringify(contactitem));
}

function NoContact(message)
{
    alert("Error: " + message);
}

function onPhotoURISuccess(imageURI)
{
    var largeImage = document.getElementById("largeImage");
    largeImage.style.display = 'block';
    largeImage.src = imageURI;
}

function CapturePhoto()
{
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 20, destinationtype: destinationtype.FILE_URI, saveToPhotoAlbum: true });
    
}

function onFail(message)
{
    alert("Failed because: " + message);
}