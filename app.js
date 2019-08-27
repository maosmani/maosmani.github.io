const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let whatsapp = document.createElement('span');
    let country = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    whatsapp.textContent = doc.data().whatsapp;
    country.textContent = doc.data().country;

    li.appendChild(name);
    li.appendChild(whatsapp);
    li.appendChild(country);

    cafeList.appendChild(li);
}

// getting data
db.collection('cafes').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });

});

// saving data
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add a new document in collection "cities"
   
    db.collection('cafes').add({
        name: form.name.value,
        city: form.whatsapp.value,
        city: form.country.value
        
    });

    form.name.value = '';
    form.whatsapp.value = '';
    form.country.value = '';
});
