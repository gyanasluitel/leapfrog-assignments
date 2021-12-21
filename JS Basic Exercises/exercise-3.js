/* 
1. Define an object containing information about yourself. The 
object needs to include 'name', 'address', 'emails', 'interests'
and 'education'. The 'education' key needs to be an array of 
objects containing keys 'name' and 'enrolledDate'.

2. Using the object defined previously iterate over the 
'education' key and print a list of output in the console
as follows:
Name: ABC School of Schoolery, Date: 2000
Name: BCD School of Trickery, Date: 2006

*/

const myInformation = {
    name: "Gyanas Luitel",
    address: "Balkot-2, Bhaktapur",
    emails: ["gyanasluitel@gmail.com", "gluitel1@gmail.com"],
    interests: ["Football", "Anime", "Series", "Movies", "Fiction Novels"],
    education: [
        {
            name: "Kathmandu University",
            enrolledDate: 2017
        },

        {
            name: "St.Xavier's College, Maitighar",
            enrolledDate: 2014
        },
        {
            name: "N.K. Singh Memorial English Preparatory School (E.P.S)",
            enrolledDate: 2009
        }
    ]
};


for (let i = 0; i < myInformation['education'].length; i++) {
    let educationInstituteName = myInformation['education'][i]['name'];
    let enrolledDate = myInformation['education'][i]['enrolledDate'];

    console.log("Name: " + educationInstituteName + ", Date: " + enrolledDate);
}


// Using forEach function
// myInformation['education'].forEach(education => {
//     let educationInstituteName = education['name'];
//     let enrolledDate = education['enrolledDate'];

//     console.log("Name: " + educationInstituteName + ", Date: " + enrolledDate);
// })
