//Using the formData and configurationObject variables helps make our code more readable and flexible, but, of course, we could instead just pass an anonymous object as the second argument to fetch():

/*
fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle",
  }),
});
*/

//Using JSON Server to Mimic a Backend Database------------------>

/*

const formData = {
    dogName: "Goku",
    dogBreed: "Poodle",
  
};

const configurationObject = {
    // method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs",configurationObject)
.then(res => res.json())
.then(object => console.log(object))

.catch(function(error){
    alert("Bad things! Ragnarok!");
    console.log(error.message);
})

*/

const submitData = (name, email) => {
    const userInfo = {
        name: name,
        email: email
    }
    const request = {
     method: "POST",
     headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
     },
     body: JSON.stringify(userInfo),

    }
    
    return fetch("http://localhost:3000/users",request)
    .then(res => res.json())
    .then(data => {
      let h2 = document.createElement('h2');
      h2.innerHTML = data.id;
      document.body.appendChild(h2);
      console.log(data)
    })

    .catch((error)=>{
      let h4 = document.createElement('h4');
      h4.textContent = error.message;
      document.body.appendChild(h4);
      console.log(error.message)
    })
   
 }
submitData()










